import { Plan } from "constants/plan";

type RadioGroupProps = {
  value: any;
  options: Plan[];
  onChange: (value: any) => void;
};

const RadioGroup = ({ value, options, onChange }: RadioGroupProps) => {
  return (
    <div className="flex flex-col gap-y-3 mobile:flex-row mobile:gap-x-3">
      {options.map((option, index) => (
        <div
          onClick={() => onChange(option.value)}
          key={index}
          className={`flex w-full cursor-pointer gap-x-3 rounded-lg border-[0.5px] p-4 transition-colors duration-200 hover:border-blue-500 mobile:block mobile:w-40 ${
            option.value === value ? "border-blue-500" : " border-gray-300"
          }`}
        >
          <img className="" src={option.icon} alt={option.label} />
          <div className="">
            <p className=" font-bold mobile:mt-16">{option.label}</p>
            <p className="text-sm text-gray-300">{option.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RadioGroup;
