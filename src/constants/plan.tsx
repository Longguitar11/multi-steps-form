export type Plan = {
  label: string;
  price: string;
  value: number;
  icon: string;
};

export const monthlyOption: Plan[] = [
  {
    label: "Arcade",
    price: "$9/mo",
    value: 9,
    icon: "/img/icon-arcade.svg",
  },
  {
    label: "Advanced",
    price: "$12/mo",
    value: 12,
    icon: "/img/icon-advanced.svg",
  },
  {
    label: "Pro",
    price: "$15/mo",
    value: 15,
    icon: "/img/icon-pro.svg",
  },
];

export const yearlyOption: Plan[] = [
  {
    label: "Arcade",
    price: "$90/ye",
    value: 90,
    icon: "/img/icon-arcade.svg",
  },
  {
    label: "Advanced",
    price: "$120/ye",
    value: 120,
    icon: "/img/icon-advanced.svg",
  },
  {
    label: "Pro",
    price: "$150/ye",
    value: 150,
    icon: "/img/icon-pro.svg",
  },
];
