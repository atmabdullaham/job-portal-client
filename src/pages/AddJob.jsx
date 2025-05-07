import Lottie from "lottie-react";
import React from "react";
import applicationAnimation from "../assets/application.json";
import signInAnimation from "../assets/login.json";
import { Form, useForm } from "react-hook-form";

const AddJob = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({});
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="hero bg-base-200 min-h-[calc(100vh-280px)]">
      <div className="hero-content flex-col ">
        <div className="card bg-base-100 w-full min-w-3xl  shadow-2xl">
          <Lottie
            className="h-30 w-20 mx-auto"
            animationData={applicationAnimation}
          ></Lottie>
          <div className="card-body text-black w-full mx-auto">
            {/* Form */}

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4 pt-0"
            >
              <legend className="fieldset-legend text-xl mx-auto font-bold">
                Add New Job
              </legend>
              {/* ------------------------------------------------------------------- */}
              {/* title */}
              <div>
                <label className="label">Title</label>
                <div className="">
                  <input
                    {...register("title", {
                      required: true,
                    })}
                    className="input w-full"
                    placeholder="Job title here"
                    type="text"
                  />
                  {errors.title && (
                    <p className="text-red-400">This field is required</p>
                  )}
                </div>
              </div>

              {/* ------------------------------------------------------------------- */}
              {/* location */}

              <label className="label">Location</label>
              <input
                {...register("location", {
                  required: true,
                })}
                type="text"
                className="input"
                placeholder="ex: Baridhara, Dhaka"
              />

              {errors.location && (
                <p className="text-red-400">This field is required</p>
              )}

              {/* ------------------------------------------------------------------- */}
              {/* job-type */}

              <label className="label">Select Job Type</label>
              <select
                {...register("jobType", { required: true })}
                className="input appearance-none bg-white border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="" disabled selected hidden>
                  Select Job Type
                </option>
                <option value="female">Full-Time</option>
                <option value="male">Hybrid</option>
                <option value="other">Contractual</option>
                <option value="other">Remote</option>
                <option value="other">Part-Time</option>
                <option value="other">Intern</option>
              </select>

              {errors.jobType && (
                <p className="text-red-400">This field is required</p>
              )}

              {/* ------------------- */}
              {/*Salary */}
              <div className="flex flex-col gap-2">
                <label className="label">Salary Range</label>
                <div className="flex flex-wrap items-center gap-4">
                  {/* Min Salary */}
                  <input
                    type="number"
                    {...register("salaryRange.min", { required: true })}
                    className="input border rounded px-4 py-2 w-full md:w-32"
                    placeholder="Min (e.g. 30000)"
                    defaultValue={30000}
                  />

                  {/* Max Salary */}
                  <input
                    type="number"
                    {...register("salaryRange.max", { required: true })}
                    className="input border rounded px-4 py-2 w-full md:w-32"
                    placeholder="Max (e.g. 50000)"
                    defaultValue={40000}
                  />

                  {/* Currency Dropdown */}
                  <select
                    {...register("salaryRange.currency", { required: true })}
                    className="input border rounded px-4 py-2 w-full md:w-28"
                  >
                    <option value="" disabled selected hidden>
                      Currency
                    </option>
                    <option value="bdt">bdt</option>
                    <option value="usd">usd</option>
                    <option value="eur">eur</option>
                    <option value="inr">inr</option>
                  </select>
                </div>
              </div>

              {/* desciption */}
              <label className="label">Description</label>
              <textarea
                {...register("description", {
                  required: true,
                })}
                placeholder="Job Description"
                className="textarea textarea-lg w-full"
              >
                {" "}
              </textarea>
              {errors.description && (
                <p className="text-red-400">This field is required</p>
              )}

              {/*  */}
              {/* requirements */}
              <label className="label">Job Requirements</label>
              <textarea
                {...register("requirements", {
                  required: true,
                })}
                placeholder="Put Each requirements in a new line."
                className="textarea textarea-lg w-full"
              >
                {" "}
              </textarea>
              {errors.requirements && (
                <p className="text-red-400">This field is required</p>
              )}

              {/*  */}
              {/* responsibilities */}
              <label className="label">Responsibilities</label>
              <textarea
                {...register("responsibilities", {
                  required: true,
                })}
                placeholder="Write Each responsibilities in a new line."
                className="textarea textarea-lg w-full"
              >
                {" "}
              </textarea>
              {errors.responsibilities && (
                <p className="text-red-400">This field is required</p>
              )}

              {/* Application Deadline */}
              <div>
                <label className="font-medium">Application Deadline</label>
                <input
                  type="date"
                  {...register("applicationDeadline", { required: true })}
                  className="input border rounded px-4 py-2 w-full"
                />
              </div>

              {/* Company Name */}
              <div>
                <label className="font-medium">Company Name</label>
                <input
                  type="text"
                  {...register("company", { required: true })}
                  className="input border rounded px-4 py-2 w-full"
                  defaultValue="Google Inc"
                />
              </div>

              {/* Company Logo URL */}
              <div>
                <label className="font-medium">Company Logo URL</label>
                <input
                  type="url"
                  {...register("company_logo", { required: true })}
                  className="input border rounded px-4 py-2 w-full"
                  defaultValue="https://i.ibb.co/TvvzXfq/google.png"
                />
              </div>

              {/* HR Name */}
              <div>
                <label className="font-medium">HR Name</label>
                <input
                  type="text"
                  {...register("hr_name", { required: true })}
                  className="input border rounded px-4 py-2 w-full"
                  defaultValue="HR Name"
                />
              </div>

              {/* HR Email */}
              <div>
                <label className="font-medium">HR Email</label>
                <input
                  type="email"
                  {...register("hr_email", { required: true })}
                  className="input border rounded px-4 py-2 w-full"
                  defaultValue="(e.g. hr@email.com)"
                />
              </div>

              {/* Status */}
              <div>
                <label className="font-medium">Job Status</label>
                <select
                  {...register("status", { required: true })}
                  className="input border rounded px-4 py-2 w-full"
                  defaultValue="active"
                >
                  <option value="" disabled selected hidden>
                    Select Job Type
                  </option>
                  <option value="active">Active</option>
                  <option value="closed">Closed</option>
                  <option value="on-hold">On Hold</option>
                </select>
              </div>

              <input
                className="btn btn-neutral mt-4"
                type="submit"
                value="Post Job"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddJob;
<h2 className="text-3xl"> Post a new Job</h2>;
