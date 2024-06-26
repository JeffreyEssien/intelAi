"use client";

import React, { useState } from "react";
import { format, startOfToday, parse, eachDayOfInterval, endOfMonth, add } from "date-fns";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

export default function CalendarWidget() {
  const today = startOfToday();
  const [currMonth, setCurrMonth] = useState(() => format(today, "MMM-yyyy"));
  const firstDayOfMonth = parse(currMonth, "MMM-yyyy", new Date());
  const daysInMonth = eachDayOfInterval({
    start: firstDayOfMonth,
    end: endOfMonth(firstDayOfMonth),
  });

  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [showCalendar, setShowCalendar] = useState(true);

  const getPrevMonth = (event: React.MouseEvent<SVGSVGElement>) => {
    event.preventDefault();
    const firstDayOfPrevMonth = add(firstDayOfMonth, { months: -1 });
    setCurrMonth(format(firstDayOfPrevMonth, "MMM-yyyy"));
  };

  const getNextMonth = (event: React.MouseEvent<SVGSVGElement>) => {
    event.preventDefault();
    const firstDayOfNextMonth = add(firstDayOfMonth, { months: 1 });
    setCurrMonth(format(firstDayOfNextMonth, "MMM-yyyy"));
  };

  const handleDateClick = (day: Date) => {
    setSelectedDate(day);
  };

  const handleCloseCalendar = () => {
    setShowCalendar(false);
  };

  return (
    <>
      {selectedDate && (
        <div className="p-2 text-center font-semibold text-lg">
          {format(selectedDate, "EEEE, MMM d, yyyy")}
        </div>
      )}
      {showCalendar && (
        <div className="p-2 border rounded-lg shadow-md relative mb-4">
          <div className="flex items-center justify-between mb-2">
            <p className="font-semibold text-sm">{format(firstDayOfMonth, "MMMM yyyy")}</p>
            <div className="flex items-center space-x-2">
              <FaChevronDown className="w-5 h-5 cursor-pointer" onClick={getPrevMonth} />
              <FaChevronUp className="w-5 h-5 cursor-pointer" onClick={getNextMonth} />
            </div>
          </div>
          <div className="grid grid-cols-7 gap-1">
            {daysInMonth.map((day) => (
              <div
                key={day.toISOString()}
                className={`text-center rounded hover:bg-[#404040] p-2 bg-[#252525] cursor-pointer ${
                  selectedDate && selectedDate.toISOString() === day.toISOString()
                    ? "bg-[#404040]"
                    : ""
                }`}
                onClick={() => handleDateClick(day)}
              >
                {format(day, "d")}
                {selectedDate && selectedDate.toISOString() === day.toISOString() && (
                  <span className="absolute top-0 right-0 w-2 h-2 bg-green- rounded-full"></span>
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-end space-x-2 mt-2">
            <button
              className="px-3 py-1 bg-white text-black text-sm rounded-[20px]"
              onClick={handleCloseCalendar}
            >
              Save
            </button>
            <button
              className="px-3 py-1 bg-[#292929] text-white text-sm rounded-[20px]"
              onClick={handleCloseCalendar}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </>
  );
}
