import Lottie from "lottie-react";
import React, { useContext } from "react";
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";
import registerAnimation from "../assets/register.json";
import regAnimation from "../assets/reg.json";
import AuthContext from "../context/authContext/AuthContext";
import { Link } from "react-router-dom";

const Register = () => {
  const { createUser } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {},
  });
  const onSubmit = (data) => {
    const { email, password } = data;
    createUser(email, password)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .then((error) => {
        console.log(error.message);
      });
    console.log(data.email, data.password, data.displayName);
  };

  return (
    <div className="hero bg-base-200 min-h-[calc(100vh-280px)]">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="hidden  lg:block text-center lg:text-left">
          <Lottie
            className="h-[500px]"
            animationData={registerAnimation}
          ></Lottie>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <Lottie
            className="h-30 w-20 mx-auto"
            animationData={regAnimation}
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
              {/* display name */}
              <label className="label">Display Name</label>
              <input
                {...register("displayName", {
                  required: true,
                })}
                type="text"
                className="input"
                placeholder="write your name"
                maxLength="30"
                minLength="3"
              />
              {errors.displayName && (
                <p className="text-red-400">This field is required</p>
              )}

              {/* Password */}
              <label className="label">Password</label>
              <input
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 8,
                    message: "Password must be at least 8 characters",
                  },
                  maxLength: {
                    value: 10,
                    message: "Password must be at most 10 characters",
                  },
                  pattern: {
                    value: /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/,
                    message:
                      "Must contain at least one uppercase letter and one number",
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
                You already have an account?{" "}
                <Link className="text-blue-500" to="/signin">
                  Sign In
                </Link>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
