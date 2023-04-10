import { Data } from "./Producer";

function sampleProvinceDate(): {
  name: string;
  producers: Data[];
  demand: number;
  price: number;
} {
  return {
    name: "asia",
    producers: [
      {
        name: "bizantium",
        cost: 10,
        production: 9,
      },
      {
        name: "attalia",
        cost: 12,
        production: 10,
      },
      {
        name: "sinope",
        cost: 10,
        production: 6,
      },
    ],
    demand: 30,
    price: 20,
  };
}
