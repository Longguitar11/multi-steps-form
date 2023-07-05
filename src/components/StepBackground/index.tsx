export type Step = {
  id: number;
  name: string;
  detail: string;
};

type StepBackgroundProps = {
  stepArr: Step[];
  isHidden: () => boolean;
  value: number;
  setValue: (id: number) => void;
};

const StepBackground = ({
  stepArr,
  isHidden,
  value,
  setValue,
}: StepBackgroundProps) => {
  return (
    <div
      className={`relative h-40 w-full bg-[url('/img/bg-sidebar-mobile.svg')] bg-cover bg-center mobile:h-auto mobile:w-[250px] mobile:rounded-lg ${
        isHidden() && "hidden"
      }`}
    >
      <div className="absolute left-2/4 top-5 flex -translate-x-2/4 gap-x-3 mobile:left-8 mobile:top-10 mobile:block mobile:-translate-x-0 mobile:space-y-5">
        {stepArr.map((step, index) => (
          <div key={index} className="flex items-center gap-x-3">
            <div
              onClick={() => setValue(step.id)}
              className={`${
                value === step.id ? "bg-white text-gray-600" : "text-white"
              } flex h-9 w-9 rounded-full border-[0.5px] border-white transition-all duration-200 hover:cursor-pointer hover:bg-white hover:text-gray-600`}
            >
              <p className="m-auto">{step.id}</p>
            </div>
            <div className="hidden mobile:block">
              <p className="text-sm font-light text-gray-300">{step.name}</p>
              <p className="text-base font-bold text-white">{step.detail}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StepBackground;
