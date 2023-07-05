import { Checkbox } from "components/ui/checkbox";
import { AddOns, monthToYearRatio } from "constants/addOns";

type CheckboxProps = {
  addOns: AddOns[];
  yearlyPayment: boolean;
  onChange: (id: string) => void;
  isCheck: (id: string) => boolean;
};

const CheckboxGroup = ({
  addOns,
  yearlyPayment,
  onChange,
  isCheck,
}: CheckboxProps) => {
  console.log("CheckboxGroup: ", yearlyPayment);
  return (
    <div className="space-y-3">
      {addOns.map((value) => (
        <div
          key={value.id}
          className={`flex items-center justify-between  rounded-lg border-[0.5px] ${
            isCheck(value.id) ? "border-sky-700" : "border-gray-300"
          } p-4`}
        >
          <div className="flex items-center gap-x-3">
            <Checkbox
              checked={isCheck(value.id)}
              onCheckedChange={() => onChange(value.id)}
              id={value.id}
            />
            <div className=" flex flex-col">
              <label className="font-bold" htmlFor={value.id}>
                {value.name}
              </label>
              <label className="text-sm text-gray-400" htmlFor={value.id}>
                {value.desc}
              </label>
            </div>
          </div>
          <p className="text-sm text-blue-500">
            ${value.monthlyPrice * (yearlyPayment ? monthToYearRatio : 1)}/
            {yearlyPayment ? "ye" : "mo"}
          </p>
        </div>
      ))}
    </div>
  );
};

export default CheckboxGroup;
