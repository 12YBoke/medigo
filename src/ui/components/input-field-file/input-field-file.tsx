import { type Control, type FieldValues, type Path } from "react-hook-form";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/shadcnui/ui/form";
import { Typography } from "../typography/typography";

import { Container } from "../container/container";
import Image from "next/image";
import { Input } from "@/shadcnui/ui/input";
import { ChangeEvent, useState, type ReactNode } from "react";
import clsx from "clsx";

interface Props<TFieldValues extends FieldValues = FieldValues> {
  control: Control<TFieldValues>;
  name: Path<TFieldValues>;
  label?: string;
  description?: string;
  type?: "Image" | "Pdf" | "Video" | "Audio";
  previewDefault?: string | null;
  className?: string;
}

export const InputFieldFile = <TFieldValues extends FieldValues = FieldValues>({
  control,
  name,
  label,
  description,
  type = "Image",
  previewDefault,
  className,
}: Props<TFieldValues>) => {
  const [preview, setPreview] = useState<string | null>(previewDefault || null);

  const handleImageChange = (
    event: ChangeEvent<HTMLInputElement>,
    onChange: (value: File | null) => void,
  ) => {
    const file = event.target.files?.[0] || null;
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (reader.result) {
          setPreview(reader.result as string);
        }
      };
      reader.readAsDataURL(file);
      onChange(file); // Mise à jour via le callback de `onChange`
    } else {
      setPreview(null);
      onChange(null); // Réinitialisation si aucun fichier sélectionné
    }
  };

  return (
    <FormField
      control={control}
      name={name}
      render={({ field: { value, onChange, ...fieldProps } }) => (
        <FormItem>
          <Container>
            <FormMessage />
            <Container
              className={clsx(
                "w-full  overflow-hidden flex justify-center items-center",
                className ? className : "h-48 border rounded-md",
              )}
            >
              <FormLabel className="w-full h-full flex justify-center items-center">
                {preview ? (
                  type === "Image" ? (
                    <Image
                      width={100}
                      height={100}
                      src={preview}
                      alt="User profile image"
                      className="h-full w-full object-cover bg-primary-500"
                      onLoad={(event) => {
                        const img = event.currentTarget;
                        if (img.naturalWidth > img.naturalHeight) {
                          img.style.width = "96%";
                          img.style.height = "auto";
                        } else {
                          img.style.width = "auto";
                          img.style.height = "96%";
                        }
                      }}
                    />
                  ) : type === "Video" ? (
                    <video
                      width={100}
                      height={100}
                      src={preview}
                      controls
                      className="h-full w-full object-cover"
                    />
                  ) : type === "Audio" ? (
                    <audio src={preview} controls className="w-full" />
                  ) : type === "Pdf" ? (
                    <embed
                      src={preview}
                      type="application/pdf"
                      width="100%"
                      height="100%"
                      className="h-full w-full object-cover"
                    />
                  ) : null
                ) : (
                  <Container className="flex flex-col justify-center items-center">
                    {label && (
                      <Typography className="text-center">{label}</Typography>
                    )}
                    {description && (
                      <FormDescription className="text-center">
                        {description}
                      </FormDescription>
                    )}
                  </Container>
                )}
              </FormLabel>
            </Container>
          </Container>
          <FormControl>
            <Input
              {...fieldProps}
              type="file"
              accept={
                type === "Image"
                  ? "image/*"
                  : type === "Video"
                    ? "video/*"
                    : type === "Audio"
                      ? "audio/*"
                      : type === "Pdf"
                        ? "application/pdf"
                        : "image/*"
              }
              multiple={false}
              onChange={(event) => handleImageChange(event, onChange)} // Appel de la fonction `handleImageChange`
              className="hidden"
            />
          </FormControl>
        </FormItem>
      )}
    />
  );
};
