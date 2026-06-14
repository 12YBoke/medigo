"use client";

import { fr } from "date-fns/locale";
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
import { TimePickerDemo } from "@/shadcnui/ui/time-picker";
import { Typography } from "../typography/typography";
import clsx from "clsx";
import { format } from "date-fns";

interface Props<TFieldValues extends FieldValues = FieldValues> {
  control: Control<TFieldValues>;
  name: Path<TFieldValues>;
  label?: string;
  description?: string;
  placeholder?: string;
  time?: boolean;
}

export const InputFieldDateTime = <TFieldValues extends FieldValues = FieldValues>({
  control,
  name,
  label,
  description,
  placeholder,
  time = false,
}: Props<TFieldValues>) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          {label && (
            <FormLabel>
              <Typography variant="heading">{label}</Typography>
            </FormLabel>
          )}
          <Popover>
            <PopoverTrigger asChild>
              <FormControl>
                <Button
                  variant={"outline"}
                  className={cn(
                    "w-full justify-between rounded-lg focus-visible:border-neutral-500 hover:bg-transparent",
                    !field.value && "text-muted-foreground",
                  )}
                  aria-label="Button for pick date"
                >
                  <Typography
                    className={cn(!field.value && "text-muted-foreground")}
                  >
                    {field.value ? (
                      time ? (
                        format(field.value, "dd.MM.yyyy HH:mm", { locale: fr })
                      ) : (
                        format(field.value, "dd.MM.yyyy", { locale: fr })
                      )
                    ) : (
                      <span>{placeholder}</span>
                    )}
                  </Typography>
                  <CalendarIcon className="ml-2 h-4 w-4 shrink-0 text-muted-foreground" />
                </Button>
              </FormControl>
            </PopoverTrigger>
            <PopoverContent
              className="mr-8 w-auto flex lg:flex-col lg:items-end flex-col p-0"
              align="start"
            >
              <div className="flex justify-between p-2">
                <Calendar
                  mode="single"
                  selected={field.value}
                  onSelect={field.onChange}
                  disabled={(date: Date) => date < new Date()}
                  locale={fr}
                  captionLayout="dropdown"
                />
              </div>
              <div
                className={clsx(
                  "p-3 border-t lg:border-t-0",
                  !time && "hidden",
                )}
              >
                <TimePickerDemo setDate={field.onChange} date={field.value} />
              </div>
            </PopoverContent>
          </Popover>
          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
