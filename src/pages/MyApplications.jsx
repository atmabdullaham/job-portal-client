import React, { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import { motion } from "framer-motion";
import axios from "axios";

const MyApplications = () => {
  const { user } = useAuth();
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    // fetch(`http://localhost:5000/job-applications?email=${user?.email}`).then(
    //   (res) => res.json().then((data) => setJobs(data))
    // );

    axios
      .get(`http://localhost:5000/job-applications?email=${user?.email}`, {
        withCredentials: true,
      })
      .then((res) => setJobs(res.data));
  }, [user.email]);

  const deleteApplication = (id) => {
    fetch(`http://localhost:5000/job-applications/${id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          const remaining = jobs.filter((job) => job._id !== id);
          setJobs(remaining);
        }
      });
  };
  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </th>
            <th>Company Name</th>
            <th>Job</th>
            <th>Job Category</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {jobs.map((job) => (
            <tr key={job._id} job={job}>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img src={job.logo} alt="Avatar Tailwind CSS Component" />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{job.company}</div>
                    <div className="text-sm opacity-50">{job.location}</div>
                  </div>
                </div>
              </td>
              <td>
                {job.title}
                <br />
                <span className="badge badge-ghost badge-sm">
                  {job.jobType}
                </span>
              </td>
              <td>{job.category}</td>
              <th>
                <motion.button
                  animate={{
                    color: ["#000", "#fff"],
                    backgroundColor: ["#000", "#ff0000"],
                    duration: 1,
                    ease: "easeInOut",
                    repeat: Infinity,
                  }}
                  transition={{ duration: 0.5 }}
                  whileHover={{ scale: 1.1 }}
                  className="btn btn-ghost btn-xs"
                  onClick={() => deleteApplication(job._id)}
                >
                  delete
                </motion.button>
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyApplications;
