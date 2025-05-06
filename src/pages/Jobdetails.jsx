import React from "react";
import { useLoaderData } from "react-router-dom";
import { motion } from "framer-motion";

const Jobdetails = () => {
  const job = useLoaderData();
  return (
    <motion.div
      className="max-w-4xl mx-auto p-6 bg-white rounded-2xl shadow-xl mt-8"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="mb-6"
        initial={{ scale: 0.95 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.2 }}
      >
        <h1 className="text-3xl font-bold text-gray-800">{job.title}</h1>
        <p className="text-gray-600 text-sm">
          {job.company} • {job.location} • {job.jobType}
        </p>
      </motion.div>

      <motion.img
        src={job.company_logo}
        alt={job.company}
        className="w-20 h-20 mb-6 rounded-full border"
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      />

      <motion.div className="space-y-4">
        <p className="text-gray-700">
          <span className="font-semibold">Description:</span> {job.description}
        </p>

        <p className="text-gray-700">
          <span className="font-semibold">Application Deadline:</span>{" "}
          {job.applicationDeadline}
        </p>

        <p className="text-gray-700">
          <span className="font-semibold">Salary:</span> {job.salaryRange.min} -{" "}
          {job.salaryRange.max} {job.salaryRange.currency.toUpperCase()}
        </p>

        <div>
          <h3 className="font-semibold text-gray-800 mb-1">Requirements:</h3>
          <ul className="list-disc list-inside text-gray-600">
            {job.requirements.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-gray-800 mb-1">
            Responsibilities:
          </h3>
          <ul className="list-disc list-inside text-gray-600">
            {job.responsibilities.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      </motion.div>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
      >
        Apply Now
      </motion.button>
    </motion.div>
  );
};

export default Jobdetails;
