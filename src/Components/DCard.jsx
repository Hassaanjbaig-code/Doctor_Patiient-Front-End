import React, { useState } from "react";
import { spacing } from "@mui/system";
import AppoitmentForm from "./AppoitmentForm";
import Button from "@mui/material/Button";

const DCard = (props) => {
  const { id, name, role, des, imageUrl, Gloction } = props
  const [DoctorId, setDoctorId] = useState(false);
  const [UseDoctor, setUseDoctor] = useState({
    id: null,
    name: null,
    open: false,
  });

  const handleClick = (id, name) => {
    // setDoctorId(true);
    setUseDoctor({
      id: id,
      name: name,
      open: true,
    });
  };
  const CloseTheForm = () => {
    setUseDoctor({
      id: null,
      name: null,
    });
    setDoctorId(false);
  };
  return (
    <li
      key={`Doct ${id}`}
      id={id}
      className="md:w-[23rem] w-[20rem] h-[45rem] shadow-lg border p-3 rounded-md my-5 mx-2 hover:shadow-2xl transition duration-500 ease-linear"
    >
      <div className="flex flex-col h-full">
        <div className="">
          <img
            src={imageUrl}
            alt="doctor"
            border="0"
            className="h-[15rem] w-[22rem]  rounded-lg"
          />
        </div>
        <div className="h-auto flex flex-col items-center ">
          <h3 className="font-inter font-bold text-xl my-2">{name}</h3>
          <h5 className="my-2">{role}</h5>
          <p className="my-2 mb-4">{des}</p>
          {/* Gettng working of the map  */}
        </div>
        <div className="h-[17rem] w-full flex flex-col items-center ">
          <div className="md:w-[22rem] w-56 h-56 object-fill border rounded-md shadow-md items-center google-map my-3">
            <iframe
              src={Gloction}
              loading="lazy"
              frameBorder="0"
              height={600}
              width={450}
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <Button onClick={() => handleClick(id, name)} variant="contained">
            Book Appointment
          </Button>
        </div>
      </div>
      {UseDoctor.open == true && (
        <AppoitmentForm
          Doctor={UseDoctor}
          CloseTheForm={CloseTheForm}
          sx={{ mt: 4 }}
        />
      )}
    </li>
  );
};

export default DCard;
