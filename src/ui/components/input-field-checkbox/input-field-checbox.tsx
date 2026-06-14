"use client";

import { Checkbox } from "@/shadcnui/ui/checkbox";
import { type Control, type FieldValues, type Path } from "react-hook-form";
import type { ReactNode } from "react";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/shadcnui/ui/form";
import clsx from "clsx";

interface Props<TFieldValues extends FieldValues = FieldValues> {
  control: Control<TFieldValues>;
  name: Path<TFieldValues>;
  label: string | ReactNode;
  description?: string | ReactNode;
  items?: {
    id: string;
    name: string;
  }[];
}

export const InputFieldCheckbox = <
  TFieldValues extends FieldValues = FieldValues,
>({
  control,
  name,
  label,
  description,
  items,
}: Props<TFieldValues>) => {
  const BooleanCheckBox = (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="w-full h-full flex flex-col rounded-lg border p-4">
          <div className="w-full h-full flex flex-row items-start space-y-0 gap-2">
            <FormControl>
              <Checkbox
                checked={field.value}
                onCheckedChange={field.onChange}
                className={clsx(
                  field.value ? "bg-primary-Default border-none" : "",
                  "rounded-lg text-white",
                )}
              />
            </FormControl>
            <div className="space-y-1 leading-none">
              <FormLabel>{label}</FormLabel>
              <FormDescription>{description}</FormDescription>
            </div>
          </div>
          <FormMessage />
        </FormItem>
      )}
    />
  );

  const MultipleCheckBox = (
    <FormField
      control={control}
      name={name}
      render={() => (
        <FormItem>
          <div>
            <FormLabel>{label}</FormLabel>
            <FormDescription>{description}</FormDescription>
          </div>
          {items!.map((item) => (
            <FormField
              key={item.id}
              control={control}
              name={"items" as Path<TFieldValues>}
              render={({ field }) => {
                return (
                  <FormItem key={item.id} className="">
                    <FormControl>
                      <Checkbox
                        checked={field.value?.includes(item.id)}
                        onCheckedChange={(checked) => {
                          return checked
                            ? field.onChange([...field.value, item.id])
                            : field.onChange(
                                field.value?.filter(
                                  (value: string) => value !== item.id,
                                ),
                              );
                        }}
                      />
                    </FormControl>
                    <FormLabel>{item.name}</FormLabel>
                  </FormItem>
                );
              }}
            />
          ))}
          <FormMessage />
        </FormItem>
      )}
    />
  );

  return <>{items ? MultipleCheckBox : BooleanCheckBox}</>;
};
