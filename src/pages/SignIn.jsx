import Lottie from "lottie-react";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import signInAnimation from "../assets/login.json";
import signInAnim from "../assets/loged.json";
import AuthContext from "../context/authContext/AuthContext";

const SignIn = () => {
  const { userLogin } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state || "/";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {},
  });
  const onSubmit = (data) => {
    const { email, password } = data;
    userLogin(email, password)
      .then((userCredential) => {
        console.log(userCredential.user);
        navigate(from);
      })
      .catch((error) => {
        console.log(error.message);
      });

    console.log(data.email, data.password);
  };
  return (
    <div className="hero bg-base-200 min-h-[calc(100vh-280px)]">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="hidden  lg:block text-center lg:text-left">
          <Lottie
            className="h-[500px]"
            animationData={signInAnimation}
          ></Lottie>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <Lottie
            className="h-30 w-20 mx-auto"
            animationData={signInAnim}
          ></Lottie>
          <div className="card-body text-black">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4 pt-0"
            >
              <legend className="fieldset-legend text-xl mx-auto font-bold">
                Register
              </legend>
              {/* email */}
              <label className="label">Email</label>
              <input
                {...register("email", {
                  required: true,
                })}
                className="input"
                placeholder="Email"
                type="email"
              />
              {errors.email && (
                <p className="text-red-400">This field is required</p>
              )}

              {/* Password */}
              <label className="label">Password</label>
              <input
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 8,
                    message: "Password does not match",
                  },
                  maxLength: {
                    value: 10,
                    message: "Password does not match",
                  },
                  pattern: {
                    value: /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/,
                    message: "Password does not match",
                  },
                })}
                type="password"
                className="input"
                placeholder="Password"
              />

              {/* Show specific validation messages */}
              {errors.password && (
                <p className="text-red-400">{errors.password.message}</p>
              )}

              <input className="btn btn-neutral mt-4" type="submit" />
            </form>
            <div className="card-actions justify-center mt-4">
              <h2>
                are you new to the website?{" "}
                <Link className="text-blue-500" to="/register">
                  Register
                </Link>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
