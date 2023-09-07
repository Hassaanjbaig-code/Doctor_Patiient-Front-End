import React, { useState } from "react";
import { DCard, Searchbar } from "../Components";
import { Dr } from "../Constacts";
import { faker } from "@faker-js/faker";

function Doctor() {
  // const DrUser = []

  const [ filterDoctor, setFilterDoctor ] = useState(null);
  const DrUser = faker.helpers.multiple(Dr, { count: 5 });

  const filterDr = (search) => {
    if (search === null) {
      return;
    }
    setFilterDoctor(search);
  }

  if (filterDoctor !== null) {
    DrUser.filter((item) => {
      if (item.name.toLowerCase().includes(filterDoctor.title.toLowerCase())) {
        return item
      }
    })
  }

  return (
    <div className="flex flex-col">
      {/* <Searchbar medicines={DrUser} placeholder="Search a Doctor" filterMedicine={filterDr}  /> */}
      {/* <ul className=""> */}
        {/* {DrUser.map((item, index) => { */}
            <DCard
              DrUser={DrUser}
            />
        {/* })} */}
      {/* </ul> */}
    </div>
  );
}

export default Doctor;
