import React from "react";
import { useLoaderData } from "react-router-dom";

const ViewApplications = () => {
  const applications = useLoaderData();
  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Github</th>
            <th>LinkedIn</th>
            <th>See Applications</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {applications?.map((application, i) => (
            <tr application={application}>
              <th>{i + 1}</th>
              <td>{application.applicant_email}</td>
              <td>
                <a href={application.github}>Github Profile</a>
              </td>
              <td>
                <a href={application.linkedin}>Linkedin Profile</a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewApplications;
