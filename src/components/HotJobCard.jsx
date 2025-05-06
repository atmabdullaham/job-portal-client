import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const HotJobCard = ({ job }) => {
  const {
    title,
    location,
    jobType,
    category,
    applicationDeadline,
    salaryRange,
    description,
    company,
    requirements,
    responsibilities,
    company_logo,
    hr_name,
    hr_email,
  } = job;
  return (
    <motion.div
      className="max-w-md mx-auto bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-shadow duration-300 border border-gray-200"
      whileHover={{ scale: 1.03 }}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="flex items-center space-x-4 mb-4">
        <img
          src={company_logo}
          alt={company}
          className="w-12 h-12 rounded-full"
        />
        <div>
          <h2 className="text-xl font-semibold">{title}</h2>
          <p className="text-sm text-gray-500">
            {company} • {location}
          </p>
        </div>
      </div>

      <div className="mb-4 text-gray-700">
        <p className="mb-2">{description}</p>
        <p>
          <span className="font-semibold">Type:</span> {jobType}
        </p>
        <p>
          <span className="font-semibold">Category:</span> {category}
        </p>
        <p>
          <span className="font-semibold">Deadline:</span> {applicationDeadline}
        </p>
        <p>
          <span className="font-semibold">Salary:</span> {salaryRange.min} -{" "}
          {salaryRange.max} {salaryRange.currency.toUpperCase()}
        </p>
      </div>

      <div className="mb-4">
        <h4 className="font-medium text-gray-800">Requirements</h4>
        <ul className="list-disc list-inside text-sm text-gray-600">
          {requirements.map((req, idx) => (
            <li key={idx}>{req}</li>
          ))}
        </ul>
      </div>
      <div className="mt-4 text-sm text-gray-600">
        <p>
          <strong>HR Contact:</strong> {hr_name} ({hr_email})
        </p>
      </div>

      <Link to={`/jobs/${job._id}`}>
        <motion.button
          whileTap={{ scale: 0.95 }}
          className="w-full mt-2 py-2 px-4 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors"
        >
          Apply Now
        </motion.button>
      </Link>
    </motion.div>
  );
};

export default HotJobCard;
