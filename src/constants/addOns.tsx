export type AddOns = {
  id: string;
  name: string;
  desc: string;
  monthlyPrice: number;
};

export const monthToYearRatio = 10;

export const addOnArr: AddOns[] = [
  {
    id: "olmo",
    name: "Online service",
    desc: "Access to multiplayers games",
    monthlyPrice: 1,
  },
  {
    id: "lamo",
    name: "Larger storage",
    desc: "Extra 1TB of cloud save",
    monthlyPrice: 2,
  },
  {
    id: "cumo",
    name: "Customizable profile",
    desc: "Custom theme on your profile",
    monthlyPrice: 2,
  },
];
