import React, { useState, useEffect } from "react";
import { Mcard, Searchbar } from "../Components";
import { medicine } from "../Constacts";

const Medicines = () => {
  const [filterMedicine, setFilterMedicine] = useState(null);

  const filterMedicines = (search) => {
    if (search === null) {
      setFilterMedicine(null);
      return;
    }
    // console.log(search);
    setFilterMedicine(search);
  }

  return <div>
    <Searchbar medicines={medicine} filterMedicine={filterMedicines} placeholder="Search a medicine" />
    <Mcard medicines={medicine} filterMedicine={filterMedicine} />
  </div>;
};

export default Medicines;
