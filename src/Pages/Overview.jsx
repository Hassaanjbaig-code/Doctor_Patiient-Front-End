import React from "react";
import { Calender, User_info, BarCharts, Latestmedicine } from "../Components";
import { faker } from "@faker-js/faker";

const Overview = () => {
  const patient = {
    id: faker.datatype.uuid(),
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    gender: faker.person.sexType(),
    age: faker.datatype.number({ min: 18, max: 100 }),
    image: faker.image.avatar(),
    medical: {
      // bloodType: faker.random.arrayElement(["A", "B", "AB", "O"]),
      height: faker.datatype.number({ min: 150, max: 200 }),
      weight: faker.datatype.number({ min: 50, max: 100 }),
      allergies: faker.lorem.words(3),
      conditions: faker.lorem.words(3),
      medications: faker.lorem.words(3),
    },
  };
  return (
    <section>
      <div className="flex max-sm:flex-col container justify-around">
        <div className="md:max-w-xl ">
          <Calender />
        </div>
        <div className="mx-2">
          <User_info patient={patient} />
        </div>
      </div>
      <div className="flex justify-around container">
        <div>
          <BarCharts />
        </div>
        <div className="border shadow-lg p-2">
          <h1 className="font-inter text-md text-parimary">Latestmedicine</h1>
          <Latestmedicine />
        </div>
      </div>
    </section>
  );
};

export default Overview;
