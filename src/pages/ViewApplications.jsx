import React from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const ViewApplications = () => {
  const applications = useLoaderData();
  const handleStatusUpdate = (e, id) => {
    console.log(e.target.value, id);
    const data = {
      status: e.target.value,
    };
    fetch(`http://localhost:5000/job-applications/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `Status updated to ${e.target.value}`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
        console.log(data);
      });
  };
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
            <th>Status</th>
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
              <td>
                <select
                  onChange={(e) => {
                    handleStatusUpdate(e, application._id);
                  }}
                  defaultValue={application.status || "Change Status"}
                  className="select select-sm"
                >
                  <option disabled={true}>Change Status</option>
                  <option>Under Review</option>
                  <option>Hired</option>
                  <option>Rejected</option>
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewApplications;
