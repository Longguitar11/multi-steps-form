import { DoubleButton } from "components/Buttons";
import CheckboxGroup from "components/CheckboxGroup";
import { addOnArr } from "constants/addOns";

type AddOnsProps = {
  onSubmit: () => void;
  selectedAddOnIds: string[];
  onChange: (selectedIds: string[]) => void;
  yearlyPayment: boolean;
  goBackFunc: any;
};

const AddOnsForm = ({
  onSubmit,
  selectedAddOnIds,
  onChange,
  yearlyPayment,
  goBackFunc,
}: AddOnsProps) => {
  const handleAddOption = (id: string) => {
    if (checkIsSelected(id)) {
      onChange(selectedAddOnIds.filter((selectedId) => selectedId !== id));
    } else {
      onChange([...selectedAddOnIds, id]);
    }
  };

  const checkIsSelected = (id: string) => {
    return selectedAddOnIds.includes(id);
  };

  return (
    <>
      <div className="mb-8 space-y-2">
        <h2 className="text-3xl font-bold">Pick add-ons</h2>
        <p className="font-light text-gray-400">
          Add-ons help enhance your gaming experience.
        </p>
      </div>
      <CheckboxGroup
        addOns={addOnArr}
        yearlyPayment={yearlyPayment}
        isCheck={checkIsSelected}
        onChange={handleAddOption}
      />
      <DoubleButton
        onClickFunc1={goBackFunc}
        onClickFunc2={onSubmit}
        customClass="mobile:flex hidden"
      />
    </>
  );
};

export { AddOnsForm };
