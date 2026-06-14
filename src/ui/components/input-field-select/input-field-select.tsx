"use client";

import { type ReactNode, useState } from "react";
import { type Control, type FieldValues, type Path } from "react-hook-form";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/shadcnui/ui/form";
import { _Options } from "@/types/_options";
import { Typography } from "../typography/typography";
import { Popover, PopoverContent, PopoverTrigger } from "@/shadcnui/ui/popover";
import { Button } from "@/shadcnui/ui/button";
import { cn } from "@/lib/utils";
import { ChevronsUpDown, Check } from "lucide-react";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/shadcnui/ui/command";

interface Props<TFieldValues extends FieldValues = FieldValues> {
  control: Control<TFieldValues>;
  name: Path<TFieldValues>;
  label?: string;
  placeholder: string;
  description?: string;
  options: _Options[];
  children?: ReactNode;
  disabled?: boolean;
}

export const InputFieldSelect = <
  TFieldValues extends FieldValues = FieldValues,
>({
  control,
  name,
  label,
  placeholder,
  description,
  options,
  disabled,
}: Props<TFieldValues>) => {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false); // État pour gérer l'ouverture du popover

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          {label && (
            <FormLabel>
              <Typography>{label}</Typography>
            </FormLabel>
          )}
          <Popover
            open={isPopoverOpen}
            onOpenChange={setIsPopoverOpen} // Synchronisation de l'état avec le Popover
          >
            <PopoverTrigger asChild>
              <FormControl>
                <Button
                  variant="outline"
                  role="combobox"
                  className={cn(
                    "w-full justify-between rounded-lg focus-visible:border-neutral-500 hover:bg-transparent",
                    !field.value && "text-neutral-500",
                  )}
                  onClick={() => setIsPopoverOpen(!isPopoverOpen)} // Basculer l'ouverture
                  aria-label="Button for pick option"
                  disabled={disabled}
                >
                  <Typography
                    className={cn(!field.value && "text-neutral-500")}
                  >
                    {field.value
                      ? (() => {
                          const parent = options.find((option) =>
                            option.children
                              ? option.children.some(
                                  (child) => child.id === field.value,
                                )
                              : option.id === field.value,
                          );

                          if (parent && parent.children) {
                            const child = parent.children.find(
                              (child) => child.id === field.value,
                            );
                            return child ? child.name : parent.name;
                          }

                          return parent ? parent.name : placeholder;
                        })()
                      : placeholder}
                  </Typography>
                  <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
              </FormControl>
            </PopoverTrigger>
            <PopoverContent className="w-full p-0">
              <Command>
                <CommandInput placeholder={placeholder} />
                <CommandList>
                  <CommandEmpty>Aucune option trouvée</CommandEmpty>

                  {options.map(({ id, name, children }) =>
                    children ? (
                      <CommandGroup key={id} heading={name}>
                        {children.map((child) => (
                          <CommandItem
                            key={child.id}
                            onSelect={() => {
                              if (field.value === child.id) {
                                field.onChange(null); // Désélectionner si déjà sélectionné
                              } else {
                                field.onChange(child.id); // Sélectionner une nouvelle valeur
                              }
                              setIsPopoverOpen(false); // Fermer le popover après sélection
                            }}
                          >
                            <Check
                              className={cn(
                                "mr-2 h-4 w-4",
                                child.id === field.value
                                  ? "opacity-100"
                                  : "opacity-0",
                              )}
                            />
                            {child.name}
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    ) : (
                      <CommandItem
                        key={id}
                        onSelect={() => {
                          if (field.value === id) {
                            field.onChange(null); // Désélectionner si déjà sélectionné
                          } else {
                            field.onChange(id); // Sélectionner une nouvelle valeur
                          }
                          setIsPopoverOpen(false); // Fermer le popover après sélection
                        }}
                      >
                        <Check
                          className={cn(
                            "mr-2 h-4 w-4",
                            id === field.value ? "opacity-100" : "opacity-0",
                          )}
                        />
                        {name}
                      </CommandItem>
                    ),
                  )}
                </CommandList>
              </Command>
            </PopoverContent>
          </Popover>

          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
