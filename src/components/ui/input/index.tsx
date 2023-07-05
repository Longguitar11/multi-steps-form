import * as React from "react";

import { cn } from "lib/utils";
import { Label } from "components/ui/label";
import { cva, VariantProps } from "class-variance-authority";
import { IconType } from "react-icons";
import { FieldValues, Control, Path, Controller } from "react-hook-form";

/**
 * Input
 */
export const inputVariants = cva(
  [
    "flex items-center w-full text-gray-600 rounded-md border border-gray-400 overflow-hidden",
    "dark:text-gray-100 dark:border-gray-700",
    "focus-within:outline-none focus-within:ring-2 ring-opacity-20",
    "placeholder:text-gray-400",
    "disabled:cursor-not-allowed disabled:text-gray-400 disabled:bg-gray-200",
    "[&.is-disabled]:cursor-not-allowed [&.is-disabled]:text-gray-400 [&.is-disabled]:bg-gray-200",
    "invalid:border-red-600",
  ],
  {
    variants: {
      size: {
        default: "h-10",
        sm: "h-8",
        lg: "h-12",
        compact: "h-9",
      },
      error: {
        true: "focus-within:border-red-600 border-red-600 ring-red-600",
        false: "focus-within:border-secondary-700 ring-secondary-700",
      },
    },
    defaultVariants: {
      size: "default",
      error: false,
    },
  }
);

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size">,
    Omit<VariantProps<typeof inputVariants>, "error"> {
  label?: string;
  hintText?: string;
  errorText?: string;
  icon?: IconType;
  inputClassName?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      inputClassName,
      label,
      hintText,
      size,
      errorText,
      maxLength,
      icon: Icon,
      onChange,
      prefix,
      ...props
    },
    ref
  ) => {
    const counterRef = React.useRef<HTMLSpanElement>(null);
    const inputRef = React.useRef<HTMLInputElement>(null);

    React.useImperativeHandle(ref, () => inputRef.current!);

    const updateCounter = React.useCallback(() => {
      if (
        maxLength &&
        maxLength > 0 &&
        counterRef.current &&
        inputRef.current
      ) {
        // manually update counter to avoid render
        counterRef.current.textContent =
          inputRef.current.value.length.toLocaleString();
      }
    }, [maxLength]);

    const handleTextChange = React.useCallback<
      React.ChangeEventHandler<HTMLInputElement>
    >(
      (event) => {
        onChange && onChange(event);

        updateCounter();
      },
      [updateCounter, onChange]
    );

    React.useLayoutEffect(() => {
      updateCounter();
    }, [updateCounter]);

    return (
      <div className={className}>
        <Label>
          {label && (
            <div className="mb-3 font-semibold text-gray-600">
              {label} {props.required ? "*" : null}
            </div>
          )}
          {hintText && <div className="mb-2 text-gray-500">{hintText}</div>}
          <div
            className={cn(
              "group relative bg-white",
              inputVariants({ size, error: !!errorText }),
              {
                "is-error": !!errorText,
                "is-disabled": props.disabled,
              },
              inputClassName
            )}
          >
            {prefix ? (
              <div
                className={cn(
                  "flex items-center self-stretch border-r border-gray-400 bg-gray-200 px-4",
                  "group-[.is-error]:border-red-600",
                  "peer-invalid:border-red-600",
                  {}
                )}
              >
                {prefix}
              </div>
            ) : null}
            <input
              className={cn("w-full flex-1 py-2 outline-none", {
                "px-4": size !== "compact",
                "px-2": size === "compact",
              })}
              ref={inputRef}
              onChange={handleTextChange}
              {...props}
            />
            {Icon ? (
              <Icon
                className={cn("h-4 w-4", {
                  "mr-4": size !== "compact",
                  "mr-2": size === "compact",
                })}
              />
            ) : null}
          </div>
        </Label>

        <div
          className={cn("mt-2 flex items-center justify-between", {
            hidden: !errorText && !maxLength,
          })}
        >
          <div>
            {errorText && (
              <span className="text-red-600 animate-in fade-in-100">
                {errorText}
              </span>
            )}
          </div>
          {maxLength ? (
            <div className="text-xs text-gray-400">
              <span ref={counterRef}>
                {props.value?.toString().length.toLocaleString() || 0}
              </span>
              /{maxLength.toLocaleString()}
            </div>
          ) : null}
        </div>
      </div>
    );
  }
);
Input.displayName = "Input";

export type InputControlProps<T extends FieldValues> = InputProps & {
  control: Control<T>;
  name: Path<T>;
};

const InputControl = <T extends FieldValues>({
  control,
  name,
  ...others
}: InputControlProps<T>) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field, formState: { errors } }) => (
        <Input
          {...others}
          value={field.value}
          ref={field.ref}
          onChange={(value) => field.onChange(value)}
          errorText={errors[field.name]?.message?.toString()}
        />
      )}
    />
  );
};

export { Input, InputControl };
