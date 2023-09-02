import React from "react";
import { DCard } from "../Components";
import { Dr } from "../Constacts";
import { faker } from "@faker-js/faker";

function Doctor() {
  // const DrUser = []

  return (
    <div className="flex">
      <ul className="Doctor flex flex-1 w-full flex-wrap justify-evenly">
        {faker.helpers.multiple(Dr, { count: 5 }).map((item, index) => {
          return (
            <DCard
              id={index}
              name={item.name}
              role={item.role}
              des={item.des}
              imageUrl={item.imageUrl}
              Gloction={item.Gloction}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default Doctor;
