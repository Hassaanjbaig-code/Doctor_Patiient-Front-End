import React from "react";

const User_info = ({ patient }) => {
  return (
    <div className="flex flex-col border shadow-2xl w-full pt-8">
      <img
        src={patient.image}
        alt={`${patient.firstName} ${patient.lastName}`}
        className="w-full h-48 object-cover"
      />
      <div className="p-4 bg-parimary">
        <h2 className="text-lg font-semibold">
          {patient.firstName} {patient.lastName}
        </h2>
        <p className="text-gray-500">{patient.gender}</p>
        <p className="text-gray-500">{patient.age} years old</p>
        <div className="mt-2">
          <h3 className="text-md font-bold">Medical Information</h3>
          <p>
            <span className="font-inter font-semibold">Height:</span>{" "}
            <span className="font-light font-inter text-gray-600 text-sm">
              {patient.medical.height} cm
            </span>
            {"  "}
            <span className="font-inter font-semibold">Weight:</span>{" "}
            <span className="font-light font-inter text-gray-600 text-sm">
              {patient.medical.weight} kg
            </span>
          </p>
          <p></p>
          <p>
            <span className="font-semibold font-inter">Allergies:</span>{" "}
            <span className="font-light font-inter text-gray-800 text-sm">
              {patient.medical.allergies}
            </span>
          </p>
          <p>
            <span className="font-semibold font-inter">Conditions:</span>{" "}
            <span className="font-light font-inter text-gray-800 text-sm">
              {patient.medical.conditions}
            </span>
          </p>
          <p>
            <span className="font-semibold font-inter">Medications:</span>{" "}
            <span className="font-light font-inter text-gray-800 text-sm">
              {patient.medical.medications}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default User_info;
