import Summary, { ConfirmedData } from "components/Summary";
import { DoubleButton } from "components/Buttons";
import { AddOns, addOnArr, monthToYearRatio } from "constants/addOns";
import { Plan, monthlyOption, yearlyOption } from "constants/plan";

type ConfirmedValues = {
  planPrice?: number;
  yearlyPayment: boolean;
  addOns: string[];
};

type SummaryFormProps = {
  onSubmit: () => void;
  values: ConfirmedValues;
  changeFunc: any;
  goBackFunc: any;
};

const SummaryForm = ({
  onSubmit,
  values,
  changeFunc,
  goBackFunc,
}: SummaryFormProps) => {
  let addOnOptions: AddOns[] = [];
  let planValues: Plan[] = [];
  let total: number = 0;

  // get add-ons values
  if (values.addOns.length > 0) {
    addOnOptions = [...addOnArr].filter((value) =>
      values.addOns.includes(value.id)
    );
  }

  //   get plan values
  if (values.planPrice !== undefined) {
    planValues = [...monthlyOption, ...yearlyOption].filter(
      (v) => values.planPrice === v.value
    );
  }

  //   Calculate total price
  if (values.planPrice) {
    console.log("call calc total");
    let sumOfAddOns: number = 0;
    for (const addOn of addOnOptions) {
      if (values.yearlyPayment)
        sumOfAddOns += addOn["monthlyPrice"] * monthToYearRatio;
      else sumOfAddOns += addOn["monthlyPrice"];
    }

    total = values.planPrice + sumOfAddOns;
  }

  // console.log({
  //   planValues: planValues[0],
  //   addOns: addOnOptions,
  //   totalPrice: `${total}`,
  // });

  return (
    <div>
      <div className="mb-8 space-y-2">
        <h2 className="text-3xl font-bold">Finishing up</h2>
        <p className="font-light text-gray-400">
          Double-check everything looks OK before confirming.
        </p>
      </div>
      {total !== 0 ? (
        <>
          <Summary
            value={{
              planValues: planValues[0],
              addOns: addOnOptions,
              totalPrice: `${total}`,
            }}
            yearlyPayment={values.yearlyPayment}
            changeFunc={changeFunc}
          />
          <DoubleButton
            onClickFunc1={goBackFunc}
            onClickFunc2={onSubmit}
            customClass="mobile:flex hidden"
            name="Confirm"
          />
        </>
      ) : (
        <p className="text-center">Values are empty!</p>
      )}
    </div>
  );
};

export default SummaryForm;
