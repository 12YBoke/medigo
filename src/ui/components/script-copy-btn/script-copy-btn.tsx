"use client";

import { cn } from "@/lib/utils";
import { Check, Copy } from "lucide-react";
import { HTMLAttributes, useState } from "react";
import { Button } from "../button/button";
import { Typography } from "../typography/typography";

interface ScriptCopyBtnProps extends HTMLAttributes<HTMLDivElement> {
  text: string;
  className?: string;
  variant?:
    | "title"
    | "subtitle"
    | "heading"
    | "display"
    | "large"
    | "medium"
    | "body"
    | "small";
}

export function ScriptCopyBtn({
  className,
  text,
  variant = "body",
}: ScriptCopyBtnProps) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={cn(className)}>
      <div className="relative flex gap-4 items-center">
        <Typography variant={variant}>{text}</Typography>
        <Button
          className="relative h-auto p-2"
          buttonType="action"
          action={async () => copyToClipboard()}
          ariaLabel={copied ? "Copied" : "Copy to clipboard"}
        >
          <span className="sr-only">{copied ? "Copied" : "Copy"}</span>
          <Copy
            className={`h-4 w-4 transition-all duration-300 ${
              copied ? "scale-0" : "scale-100"
            }`}
          />
          <Check
            className={`absolute inset-0 m-auto h-4 w-4 transition-all duration-300 ${
              copied ? "scale-100" : "scale-0"
            }`}
          />
        </Button>
      </div>
    </div>
  );
}
