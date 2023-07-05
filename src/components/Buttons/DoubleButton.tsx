import { Button } from "components/ui/button";

type DoubleButtonProps = {
  customClass?: string;
  onClickFunc1: () => void;
  isDisable?: boolean;
  onClickFunc2: () => void;
  name?: string;
};

const DoubleButton = ({
  customClass,
  onClickFunc1,
  onClickFunc2,
  isDisable,
  name,
}: DoubleButtonProps) => {
  return (
    <div
      className={`mt-0 flex w-full justify-between bg-white p-4 mobile:mt-14 mobile:w-auto mobile:bg-none mobile:p-0 ${customClass}`}
    >
      <Button variant="ghost" onClick={onClickFunc1}>
        Go Back
      </Button>
      <Button
        disabled={isDisable}
        onClick={() => {
          onClickFunc2();
        }}
      >
        {name ? name : "Next Step"}
      </Button>
    </div>
  );
};

export default DoubleButton;
