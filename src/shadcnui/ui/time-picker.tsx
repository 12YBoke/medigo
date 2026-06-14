"use client";

import * as React from "react";

import { cn } from "@/lib/utils";
import { Input } from "@/shadcnui/ui/input";
import { Label } from "@/shadcnui/ui/label";

function formatTime(date: Date) {
  return date.toTimeString().slice(0, 5);
}

function TimePickerDemo({
  date,
  setDate,
}: {
  date?: Date | null;
  setDate: (date: Date) => void;
}) {
  const [time, setTime] = React.useState(() =>
    date ? formatTime(date) : formatTime(new Date()),
  );

  React.useEffect(() => {
    if (date) {
      setTime(formatTime(date));
    }
  }, [date]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const next = event.target.value;
    setTime(next);
    const [hours, minutes] = next.split(":").map(Number);
    const nextDate = date ? new Date(date) : new Date();
    nextDate.setHours(hours, minutes, 0, 0);
    setDate(nextDate);
  };

  return (
    <div className="grid gap-2">
      <Label htmlFor="time-picker" className="text-sm text-muted-foreground">
        Heure
      </Label>
      <Input
        id="time-picker"
        type="time"
        value={time}
        onChange={handleChange}
        className={cn("max-w-[10rem]", "bg-background")}
      />
    </div>
  );
}

export { TimePickerDemo };
