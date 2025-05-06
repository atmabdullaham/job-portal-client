import Lottie from "lottie-react";
import React from "react";
import applicationAnimation from "../assets/application.json";
import signInAnimation from "../assets/loged.json";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const JobApply = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: {} });

  const onSubmit = (data) => {
    console.log(data.github, data.linkedin, data.youtube);
    // Here you can send the data to your server or perform any other action
  };
  return (
    <div className="hero bg-base-200 min-h-[calc(100vh-280px)]">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="hidden  lg:block text-center lg:text-left">
          <Lottie
            className="h-[500px]"
            animationData={applicationAnimation}
          ></Lottie>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <Lottie
            className="h-30 w-20 mx-auto"
            animationData={signInAnimation}
          ></Lottie>
          <div className="card-body text-black">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4 pt-0"
            >
              <legend className="fieldset-legend text-xl mx-auto font-bold">
                Application
              </legend>

              {/* Github */}
              <label className="label">Github Url</label>
              <input
                {...register("github", {
                  required: true,
                })}
                className="input"
                placeholder="Github Link"
                type="url"
              />
              {errors.github && (
                <p className="text-red-400">This field is required</p>
              )}
              {/* Linked in Url */}
              <label className="label">Linkedin Url</label>
              <input
                {...register("linkedin", {
                  required: "Password is required",
                })}
                type="url"
                className="input"
                placeholder="Linkedin Link"
              />
              {/* Show specific validation messages */}
              {errors.linkedin && (
                <p className="text-red-400">This field is required</p>
              )}
              {/* Youtube */}
              <label className="label">Youtube Url</label>
              <input
                {...register("youtube", {
                  required: true,
                })}
                className="input"
                placeholder="Youtube Link"
                type="url"
              />
              {errors.youtube && (
                <p className="text-red-400">This field is required</p>
              )}
              <input
                className="btn btn-neutral mt-4"
                type="submit"
                value="Submit Application"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobApply;
