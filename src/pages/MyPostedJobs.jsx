import React, { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import { Link } from "react-router-dom";

const MyPostedJobs = () => {
  const [jobs, setJobs] = useState();
  const { user } = useAuth();
  useEffect(() => {
    fetch(`http://localhost:5000/jobs?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setJobs(data);
      });
  }, [user.email]);
  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Job</th>
            <th>Application Count</th>
            <th>See Applications</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {jobs?.map((job, i) => (
            <tr job={job}>
              <th>{i + 1}</th>
              <td>{job.title}</td>
              <td>{job.applicationDeadline}</td>
              <td>{job.applicationCount}</td>
              <td>
                <Link className="btn" to={`/viewApplications/${job._id}`}>
                  View Applications
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyPostedJobs;
