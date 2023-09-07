import React, { useState } from "react";
// import { spacing } from "@mui/system";
import AppoitmentForm from "./AppoitmentForm";
// import Button from "@mui/material/Button";

const DCard = (props) => {
  // const { id, name, role, des, imageUrl, Gloction } = props
  const { DrUser, filterMedicine } = props;

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
      open: false
    });
    setDoctorId(false);
  };
  
  const drUser = DrUser.filter((Doctor) => {
    if (filterMedicine === null) {
      return Doctor;
    } else if (
      Doctor.name.toLowerCase().includes(filterMedicine.title.toLowerCase())
    ) {
      return Doctor;
    }
  });

  // console.log(filterMedicine.title);
  return (
    <ul className="Doctor flex flex-1 w-full flex-wrap justify-evenly">
      {drUser.map((item, index) => (
        <li
        key={index}
        id={item.id}
        className="md:w-[23rem] w-[20rem] h-[45rem] shadow-lg border p-3 rounded-md my-5 mx-2 hover:shadow-2xl transition duration-500 ease-linear"
       >
         <div className="flex flex-col h-full">
           <div className="">
             <img
               src={item.imageUrl}
               alt="doctor"
               border="0"
               className="h-[15rem] w-[22rem]  rounded-lg"
             />
           </div>
           <div className="h-auto flex flex-col items-center ">
             <h3 className="font-inter font-bold text-xl my-2">{item.name}</h3>
             <h5 className="my-2">{item.role}</h5>
             <p className="my-2 mb-4">{item.des}</p>
             {/* Gettng working of the map  */}
           </div>
           <div className="h-[17rem] w-full flex flex-col items-center ">
             <div className="md:w-[22rem] w-56 h-56 object-fill border rounded-md shadow-md items-center google-map my-3">
               <iframe
                 src={item.Gloction}
                 loading="lazy"
                 frameBorder="0"
                 height={600}
                 width={450}
                 referrerPolicy="no-referrer-when-downgrade"
               ></iframe>
             </div>
             <button type="button" className="w-40 h-16 p-2 border-none bg-blue-400 rounded-lg text-white hover:bg-blue-500 focus:bg-blue-600 " onClick={() => handleClick(item.id, item.name)} >
               Book Appointment
             </button>
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
      ))}
    </ul>
  );
};

export default DCard;
