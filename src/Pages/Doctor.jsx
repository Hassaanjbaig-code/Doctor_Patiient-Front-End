import React, { useEffect, useState } from "react";
import { DCard, Searchbar } from "../Components";
import { DrUser } from "../Constacts";
import { faker } from "@faker-js/faker";

function Doctor() {
  // const DrUser = []

  const [ filterMedicine, setFilterMedicine ] = useState(null);

  const filterMedicines = (search) => {
    if (search === null) {
      setFilterMedicine(null);
      return;
    }
    // console.log(search);
    setFilterMedicine(search);
  }


  // console.log(filterMedicine)


  return (
    <div className="flex flex-col">
      <Searchbar medicines={DrUser} placeholder="Search a Doctor" filterMedicine={filterMedicines}  />
      {/* <ul className=""> */}
        {/* {DrUser.map((item, index) => { */}
            <DCard
              DrUser={DrUser}
              filterMedicine={filterMedicine}
            />
        {/* })} */}
      {/* </ul> */}
    </div>
  );
}

export default Doctor;
