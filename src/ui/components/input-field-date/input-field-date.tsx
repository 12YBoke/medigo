"use client";

import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { type Control, type FieldValues, type Path } from "react-hook-form";
import { cn } from "@/lib/utils";
import { Calendar } from "@/shadcnui/ui/calendar";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/shadcnui/ui/form";
import { Popover, PopoverContent, PopoverTrigger } from "@/shadcnui/ui/popover";
import { Button } from "@/shadcnui/ui/button";

interface Props<TFieldValues extends FieldValues = FieldValues> {
  control: Control<TFieldValues>;
  name: Path<TFieldValues>;
  label: string;
  description?: string;
}

export const InputFieldDate = <TFieldValues extends FieldValues = FieldValues>({
  control,
  name,
  label,
  description,
}: Props<TFieldValues>) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <br />
          <Popover>
            <PopoverTrigger asChild>
              <FormControl>
                <Button
                  variant={"outline"}
                  className={cn(
                    "w-60 pl-3 text-left font-normal rounded-lg focus:ring-primary-Default",
                    !field.value && "text-muted-foreground",
                  )}
                  aria-label="Button for pick date"
                >
                  {field.value ? (
                    format(field.value, "PPP")
                  ) : (
                    <span>Date de naissance</span>
                  )}
                  <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                </Button>
              </FormControl>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={field.value}
                onSelect={field.onChange}
                disabled={(date: Date) =>
                  date > new Date() || date < new Date("1900-01-01")
                }
                captionLayout="dropdown"
              />
            </PopoverContent>
          </Popover>
          <FormDescription>{description}</FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
