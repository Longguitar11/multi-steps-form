import { AddOns, monthToYearRatio } from "constants/addOns";
import { Plan } from "constants/plan";

export type ConfirmedData = {
  planValues: Plan;
  addOns: AddOns[];
  totalPrice: string;
};

type SummaryProps = {
  yearlyPayment: boolean;
  value: ConfirmedData;
  changeFunc: any;
};

const Summary = ({ yearlyPayment, value, changeFunc }: SummaryProps) => {
  console.log("Summary: ", value);
  return (
    <>
      <div className={` rounded-lg bg-slate-100 p-4 `}>
        <div
          className={`flex items-center justify-between ${
            value.addOns.length > 0 && "pb-4"
          }`}
        >
          <div>
            <p className="font-bold">
              {value.planValues.label}{" "}
              {yearlyPayment ? "(Yearly)" : "(Monthly)"}
            </p>
            <a
              onClick={changeFunc}
              className="cursor-pointer text-sm text-blue-500"
            >
              Change
            </a>
          </div>
          <p className="font-bold">{value.planValues.price}</p>
        </div>
        {value.addOns.length > 0 && (
          <div className="border-t-[0.5px] border-gray-300 pt-4">
            {value.addOns?.map((v) => (
              <div key={v.id} className="flex justify-between text-sm ">
                <p className="font-light text-gray-400">{v.name}</p>
                <p>
                  ${v.monthlyPrice * (yearlyPayment ? monthToYearRatio : 1)}/
                  {yearlyPayment ? "ye" : "mo"}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="mt-5 flex items-center justify-between px-4">
        <p className="text-sm">
          Total {yearlyPayment ? "(per year)" : "(per month)"}
        </p>
        <p className="text-lg font-extrabold text-blue-500">
          ${value.totalPrice}/{yearlyPayment ? "ye" : "mo"}
        </p>
      </div>
    </>
  );
};

export default Summary;
