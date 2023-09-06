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

  useEffect(() => {
    console.log(filterMedicine);
  }, [filterMedicine]);

  return <div>
    <Searchbar medicines={medicine} filterMedicine={filterMedicines} />
    <Mcard medicines={medicine} />
  </div>;
};

export default Medicines;
