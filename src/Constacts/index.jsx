import { faker } from "@faker-js/faker";

export const chart = [
  {
    id: 1,
    medicine_eat: 1,
    Total_medicine: 2,
    date: "2023-29-08",
  },
  {
    id: 2,
    medicine_eat: 2,
    Total_medicine: 2,
    date: "2023-30-08",
  },
  {
    id: 3,
    medicine_eat: 2,
    Total_medicine: 3,
    date: "2023-30-08",
  },
  {
    id: 4,
    medicine_eat: 3,
    Total_medicine: 3,
    date: "2023-30-08",
  },
];

export const medicine = [
  {
    id: 1,
    name: "Paracetamol",
    timming: "Morning",
    eatten: true,
  },
  {
    id: 2,
    name: "Kentin",
    timming: "Morning",
    eatten: false,
  },
  {
    id: 3,
    name: "Cutivate",
    timming: "Morning",
    eatten: true,
  },
];

export const Dr = () => {
  return {
    id: faker.datatype.uuid(),
    name: "Dr" + faker.person.fullName(),
    role: faker.person.jobTitle(),
    des: faker.lorem.sentence({ min: 2, max: 3 }),
    imageUrl: faker.image.urlPicsumPhotos(),
    Gloction:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54458.59207125393!2d74.2733373248535!3d31.450970738200272!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190143e0e99feb%3A0xf39379efff4dd86!2sUniversity%20of%20Management%20%26%20Technology!5e0!3m2!1sen!2s!4v1693562105305!5m2!1sen!2s",
  };
};
