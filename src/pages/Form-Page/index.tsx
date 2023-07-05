import { Info, InfoForm, PlanForm, AddOnsForm, Summary } from "components/Form";
import ThankYou from "components/Form/ThankYou";
import { ConfirmedData } from "components/Summary";
import { useEffect, useRef, useState } from "react";
import { steps } from "constants/step";
import StepBackground from "components/StepBackground";
import { DoubleButton } from "components/Buttons";

const FormPage = () => {
  const [isSelected, setIsSelected] = useState(steps[0].id);
  const [isDone, setIsDone] = useState(false);

  // Custom button for mobile platform
  const customClass = "mobile:hidden fixed bottom-0";

  // Info Form
  const [formValue, setFormValue] = useState({
    name: "",
    email: "",
    phoneNumber: "",
  });

  // Plan Form
  const [plan, setPlan] = useState<number>();
  const [yearlyPayment, setYearlyPayment] = useState(false);

  // AddOn Form
  const [selectedAddOnIds, setSelectedAddOnIds] = useState<string[]>([]);

  console.log("selectedAddOnIds", selectedAddOnIds);

  // Check mobile screen
  // const [isMobile, setIsMobile] = useState(false);
  const windowWidth = useRef(window.innerWidth);

  const onStep1Submit = (info: Info) => {
    setFormValue(info);
    setIsSelected(2);
  };

  const onStep2Submit = () => {
    setIsSelected(3);
  };

  const onStep3Submit = () => {
    setIsSelected(4);
    if (isDone) {
      setIsDone(false);
    }
  };

  const onStep4Submit = () => {
    setIsDone(true);
    setFormValue({ email: "", name: "", phoneNumber: "" });
    setPlan(undefined);
    setSelectedAddOnIds([]);
    setYearlyPayment(false);
  };

  const checkMobileRes = () => {
    if (windowWidth.current < 400) return true;
    else return false;
  };

  return (
    <div className="w-full mobile:m-auto mobile:w-8/12">
      <StepBackground
        stepArr={steps}
        value={isSelected}
        isHidden={() => (checkMobileRes() ? false : true)}
        setValue={setIsSelected}
      />

      <div className="z-2 relative m-auto -my-20 w-11/12 mobile:-my-0">
        <div className="gap-x-4 rounded-xl bg-white p-4 shadow-lg mobile:flex">
          <StepBackground
            stepArr={steps}
            value={isSelected}
            isHidden={checkMobileRes}
            setValue={setIsSelected}
          />

          <section className="flex h-auto mobile:h-[500px] mobile:flex-1">
            <div className="m-auto">
              {isSelected === 1 ? (
                (isDone ? setIsDone(false) : null,
                (<InfoForm onSubmit={onStep1Submit} initialData={formValue} />))
              ) : isSelected === 2 ? (
                (isDone ? setIsDone(false) : null,
                (
                  <PlanForm
                    onClick={onStep2Submit}
                    data={{ plan, yearlyPayment }}
                    onChange={(data) => {
                      setPlan(data.plan);
                      setYearlyPayment(data.yearlyPayment);
                    }}
                    goBackFunc={() => setIsSelected(1)}
                  />
                ))
              ) : isSelected === 3 ? (
                (isDone ? setIsDone(false) : null,
                (
                  <AddOnsForm
                    onSubmit={onStep3Submit}
                    selectedAddOnIds={selectedAddOnIds}
                    onChange={setSelectedAddOnIds}
                    yearlyPayment={yearlyPayment}
                    goBackFunc={() => setIsSelected(2)}
                  />
                ))
              ) : !isDone ? (
                <Summary
                  onSubmit={onStep4Submit}
                  values={{
                    planPrice: plan,
                    yearlyPayment,
                    addOns: selectedAddOnIds,
                  }}
                  changeFunc={() => setIsSelected(2)}
                  goBackFunc={() => setIsSelected(3)}
                />
              ) : (
                <ThankYou />
              )}
            </div>
          </section>
        </div>
      </div>
      {isSelected === 1 ? null : isSelected === 2 ? (
        <DoubleButton
          isDisable={!plan}
          onClickFunc1={() => setIsSelected(1)}
          onClickFunc2={onStep2Submit}
          customClass={customClass}
        />
      ) : isSelected === 3 ? (
        <DoubleButton
          onClickFunc1={() => setIsSelected(2)}
          onClickFunc2={onStep3Submit}
          customClass={customClass}
        />
      ) : (
        plan &&
        !isDone && (
          <DoubleButton
            onClickFunc1={() => setIsSelected(3)}
            onClickFunc2={onStep4Submit}
            customClass={customClass}
            name="Confirm"
          />
        )
      )}
    </div>
  );
};

export default FormPage;
