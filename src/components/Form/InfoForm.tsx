import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { InputControl } from "components/ui/input";
import { Button } from "components/ui/button";
import { z } from "zod";

const phoneRegex = new RegExp(/^[-\s.]?[0-9]{3}[-\s.]?[0-9]{7}$/);

const InfoSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  email: z.string().email({ message: "Invalid email format" }),
  phoneNumber: z.string().refine((n) => phoneRegex.test(n), {
    message: "Invalid phone number format",
  }),
});

export type Info = z.infer<typeof InfoSchema>;

export type InfoFormProps = {
  onSubmit: (info: Info) => void;
  mode?: "create" | "edit";
  submitting?: boolean;
  submitText?: string;
  submittingText?: string;
  initialData?: Partial<Info>;
};

export const InfoForm = ({
  onSubmit,
  // submitting = false,
  submitText = "Next Step",
  // submittingText = "Adding...",
  initialData = {},
}: InfoFormProps) => {
  const {
    handleSubmit,
    control,
    formState: { errors, isValid },
  } = useForm<Info>({
    resolver: zodResolver(InfoSchema),
    mode: "onChange",
    defaultValues: initialData,
  });

  return (
    <>
      <div className="mb-8 space-y-2">
        <h2 className="text-3xl font-bold">Personal info</h2>
        <p className="font-light text-gray-400">
          Please provide your name, email address, and phone number
        </p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="">
        <div className="flex flex-col gap-y-7">
          <InputControl
            label="Name"
            control={control}
            name="name"
            errorText={errors.name?.message}
            placeholder="e.g. Jackie Chan"
          />
          <InputControl
            label="Email Address"
            control={control}
            name="email"
            errorText={errors.email?.message}
            placeholder="e.g. bossstrong@lorem.com"
          />
          <InputControl
            label="Phone Number"
            control={control}
            name="phoneNumber"
            errorText={errors.phoneNumber?.message?.toString()}
            placeholder="e.g. 0123456789"
          />

          <div className="fixed bottom-0 left-0 flex w-full justify-end bg-white p-4 mobile:static mobile:w-auto mobile:bg-none mobile:p-0">
            <Button disabled={!isValid} type="submit">
              {submitText}
            </Button>
          </div>
        </div>
      </form>
    </>
  );
};
