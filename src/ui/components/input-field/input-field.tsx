import { type Control, type FieldValues, type Path } from "react-hook-form";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/shadcnui/ui/form";
import { Textarea } from "@/shadcnui/ui/textarea";
import { Input } from "@/shadcnui/ui/input";
import { Container } from "../container/container";
import clsx from "clsx";
import { Typography } from "../typography/typography";
import type { ReactNode } from "react";

interface Props<TFieldValues extends FieldValues = FieldValues> {
  control: Control<TFieldValues>;
  name: Path<TFieldValues>;
  label?: string | ReactNode;
  placeholder?: string;
  description?: string | ReactNode;
  type?: "text" | "email" | "file" | "password" | "textarea" | "number";
  autocompletion?: boolean;
  children?: ReactNode;
  required?: boolean;
  disabled?: boolean;
  min?: number;
  max?: number;
}

export const InputField = <TFieldValues extends FieldValues = FieldValues>({
  control,
  name,
  label,
  placeholder,
  description,
  type = "text",
  autocompletion = true,
  children,
  required = false,
  disabled = false,
  min,
  max,
}: Props<TFieldValues>) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          {label ? (
            required ? (
              <FormLabel>
                <Typography className="">
                  {label} <span className="text-red-500">*</span>
                </Typography>
              </FormLabel>
            ) : (
              <FormLabel>
                <Typography className="text-left text-black">
                  {label}
                </Typography>
              </FormLabel>
            )
          ) : null}
          <FormControl>
            <Container className="relative flex justify-center items-center">
              {type === "textarea" ? (
                <Textarea
                  placeholder={placeholder}
                  className={clsx(
                    "h-40 resize-none border-0 border-b rounded-none p-0 py-0 pt-2 focus-visible:ring-transparent focus-visible:border-neutral-500 w-full",
                    children ? "px-12" : "",
                  )}
                  {...field}
                />
              ) : (
                <Input
                  autoComplete={autocompletion ? "on" : "off"}
                  disabled={disabled}
                  className={clsx(
                    "focus-visible:ring-transparent rounded-lg focus-visible:border-neutral-500 w-full placeholder:text-base",
                    children ? "px-12" : "",
                  )}
                  placeholder={
                    type === "number" && field.value < 0
                      ? placeholder
                      : placeholder
                  }
                  {...field}
                  type={type}
                  name={name}
                  id={name}
                  value={
                    type === "number" && field.value < 0 ? "" : field.value
                  }
                  min={type === "number" && min !== undefined ? min : undefined}
                  max={type === "number" && max !== undefined ? max : undefined}
                  onChange={(e) => {
                    const value = e.target.value;
                    field.onChange(
                      type === "number" ? parseFloat(value) || 0 : value,
                    );
                  }}
                />
              )}
              {children ? children : null}
            </Container>
          </FormControl>
          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
