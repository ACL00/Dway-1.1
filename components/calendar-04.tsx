"use client";

import * as React from "react";
import { type DateRange } from "react-day-picker";

import { Calendar } from "@/components/ui/calendar";
import { Input } from "./ui/input";

export default function Calendar04() {
  const today = new Date();

  const [dateRange, setDateRange] = React.useState<DateRange | undefined>({
    from: new Date(today.getFullYear(), today.getMonth(), today.getDate() - 2),
    to: new Date(today.getFullYear(), today.getMonth(), today.getDate() + 2),
  });

  return (
    <div className="flex flex-col items-center justify-center gap-8 p-4">
      <CalendarSection dateRange={dateRange} setDateRange={setDateRange} />
      <DateRangeInput dateRange={dateRange} />
    </div>
  );
}

function CalendarSection({
  dateRange,
  setDateRange,
}: {
  dateRange: DateRange | undefined;
  setDateRange: React.Dispatch<React.SetStateAction<DateRange | undefined>>;
}) {
  return (
    <Calendar
      mode="range"
      defaultMonth={dateRange?.from}
      selected={dateRange}
      onSelect={setDateRange}
      className="rounded-lg border shadow-sm w-full max-w-md"
    />
  );
}

function DateRangeInput({ dateRange }: { dateRange: DateRange | undefined }) {
  const fromDate = dateRange?.from?.toLocaleDateString() || "N/A";
  const toDate = dateRange?.to?.toLocaleDateString() || "N/A";

  return (
    <Input
      className="text-center text-black w-full max-w-md"
      type="text"
      value={`${fromDate} - ${toDate}`}
      readOnly
    />
  );
}