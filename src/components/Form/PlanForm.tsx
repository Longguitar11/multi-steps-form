import { Switch } from "components/ui/switch";
import RadioGroup from "components/RadioGroup";
import { DoubleButton } from "components/Buttons";
import { monthlyOption, yearlyOption } from "constants/plan";

type PlanValue = {
  plan?: number;
  yearlyPayment: boolean;
};

type PlanProps = {
  onClick: () => void;
  goBackFunc: any;
  data: PlanValue;
  onChange: (data: PlanValue) => void;
};

const PlanForm = ({ onClick, data, onChange, goBackFunc }: PlanProps) => {
  const getNextplan = (value?: number) => {
    if (typeof value === "undefined") return;
    if (data.yearlyPayment) return value / 10;
    else return value * 10;
  };

  return (
    <>
      <div className="mb-8 space-y-2">
        <h2 className="text-3xl font-bold">Select your plan</h2>
        <p className="font-light text-gray-400">
          You have the opinion of monthly or yearly billing.
        </p>
      </div>
      <RadioGroup
        value={data.plan}
        options={data.yearlyPayment ? yearlyOption : monthlyOption}
        onChange={(selected) => onChange({ ...data, plan: selected })}
      />

      <div className="mt-7 flex w-full items-center justify-center gap-x-4 rounded-lg bg-gray-100 py-2">
        <p
          className={`text-sm ${
            data.yearlyPayment ? "font-normal" : "font-bold"
          }`}
        >
          Monthly
        </p>
        <Switch
          checked={data.yearlyPayment}
          onCheckedChange={() =>
            onChange({
              plan: getNextplan(data.plan),
              yearlyPayment: !data.yearlyPayment,
            })
          }
        />
        <p
          className={`text-sm ${
            data.yearlyPayment ? "font-bold" : "font-normal"
          }`}
        >
          Yearly
        </p>
      </div>
      <DoubleButton
        isDisable={!data.plan}
        onClickFunc1={goBackFunc}
        onClickFunc2={onClick}
        customClass="mobile:flex hidden"
      />
    </>
  );
};

export { PlanForm };
