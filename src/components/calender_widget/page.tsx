"use client"

import React, { useState } from 'react';
import { format, startOfToday, parse, eachDayOfInterval, endOfMonth, add } from 'date-fns';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

export default function CalendarWidget() {

    const today = startOfToday();
    const [currMonth, setCurrMonth] = useState(() => format(today, 'MMM-yyyy'));
    const firstDayOfMonth = parse(currMonth, 'MMM-yyyy', new Date());
    const daysInMonth = eachDayOfInterval({
        start: firstDayOfMonth,
        end: endOfMonth(firstDayOfMonth),
    });

    const getPrevMonth = (event: React.MouseEvent<SVGSVGElement>) => {
        event.preventDefault();
        const firstDayOfPrevMonth = add(firstDayOfMonth, { months: -1 });
        setCurrMonth(format(firstDayOfPrevMonth, 'MMM-yyyy'));
    };

    const getNextMonth = (event: React.MouseEvent<SVGSVGElement>) => {
        event.preventDefault();
        const firstDayOfNextMonth = add(firstDayOfMonth, { months: 1 });
        setCurrMonth(format(firstDayOfNextMonth, 'MMM-yyyy'));
    };

    return (
        <div className="p-4 border rounded-lg shadow-md">
        <div className="flex items-center justify-between mb-4">
          <p className="font-semibold text-xl">{format(firstDayOfMonth, 'MMMM yyyy')}</p>
          <div className="flex items-center space-x-4">
            <FaChevronDown
              className="w-6 h-6 cursor-pointer"
              onClick={getPrevMonth}
            />
            <FaChevronUp
              className="w-6 h-6 cursor-pointer"
              onClick={getNextMonth}
            />
          </div>
        </div>
        <div className="grid grid-cols-7 gap-2">
          {daysInMonth.map((day) => (
            <div
              key={day.toISOString()}
              className="text-center p-2 border border-gray-200"
            >
              {format(day, 'd')}
            </div>
          ))}
        </div>
      </div>
    )
}