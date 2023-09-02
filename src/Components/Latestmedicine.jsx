import React, { useState } from "react";
import { medicine } from "../Constacts";
import CustumButton from "./CustumButton";
import { it } from "date-fns/locale";

const Latestmedicine = () => {
  const [medicineEdit, setMedicineEdit] = useState(null);

  const [medicines, setMedicines] = useState([...medicine]);

  const handleEditSate = (id) => setMedicineEdit(id);

  const handleEditSubmit = (eatten) => {
    const updateMedicine = medicines.map((item) =>
      item.id === eatten.id ? eatten : item
    );
    // console.log(updateMedicine);
    setMedicines(updateMedicine);
    setMedicineEdit(null);
  };

  // const handleState = medicine

  const shouldbeApplyOverSwcroll = medicine.length <= 4;
  return (
    <>
      <table
        className={`table-auto w-full h-80 ${
          shouldbeApplyOverSwcroll && "overflow-y-auto"
        }`}
      >
        <thead>
          <tr>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Timming</th>
            <th className="px-4 py-2">Eatten</th>
            <th className=""></th>
          </tr>
        </thead>
        <tbody>
          {medicines.map((item) => (
            <tr key={item.id}>
              <td className="px-4 py-2">{item.name}</td>
              <td className="px-4 py-2">{item.timming}</td>
              <td className="px-4 py-2">
                {item.eatten == true ? "Done Eating" : "Not Eat"}
              </td>
              <td className="px-4 py-2">
                {medicineEdit == item.id ? (
                  <EditMedicine
                    // medicineEdit={medicineEdit}
                    medicine={item}
                    submit={handleEditSubmit}
                  />
                ) : (
                  <CustumButton
                    Write="Edit"
                    classname="px-1 py-2 border border-blue-600 h-10 w-16 hover:bg-blue-600 hover:text-white rounded-md ml-2 mt-2"
                    type="button"
                    handleClick={() => handleEditSate(item.id)}
                  />
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* {console.log(medicines)} */}
    </>
  );
};

const EditMedicine = ({ submit, medicine }) => {
  const [eatten, setEatten] = useState(medicine.eatten);

  const handleCheck = (e) => {
    setEatten(e.target.checked);
  };

  const handleSubmit = () => {
    submit({ ...medicine, eatten });
  };
  return (
    <span className="z-50 h-full w-full flex">
      <div className="flex">
        <input
          className="h-4 w-4 "
          type="checkbox"
          name="eatten"
          id="eatten"
          checked={eatten}
          onChange={handleCheck}
        />
      </div>
      <CustumButton
        type="button"
        classname="px-2 py-3 border border-blue-600 h-14 w-20 hover:bg-blue-600 hover:text-white rounded-md ml-2 mt-2"
        handleClick={handleSubmit}
        Write="Submit"
      />
    </span>
  );
};

export default Latestmedicine;
