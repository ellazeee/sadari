import React from "react";

export const CalendarHeader = ({ currentDate, changeMonth, changeYear }) => {
  const renderYearOptions = () => {
    const currentYear = new Date().getFullYear();
    const years = [];
    for (let year = 2024; year <= currentYear; year++) {
      years.push(
        <option key={year} value={year}>
          {year}
        </option>
      );
    }
    return years;
  };

  return (
    <div className="flex justify-between items-center mb-4">
      <select
        value={currentDate.getFullYear()}
        onChange={(e) => changeYear(parseInt(e.target.value))}
        className="bg-white border-none rounded-md px-3 py-1 text-sm focus:outline-none"
      >
        {renderYearOptions()}
      </select>
      
      <div className="flex items-center space-x-2">
        <button 
          onClick={() => changeMonth(-1)}
          className="p-2 rounded-full hover:bg-gray-100 text-gray-800 font-bold"
        >
          &lt;
        </button>
        
        <span className="font-semibold w-20 text-center">
          {currentDate.toLocaleString('default', { month: 'long' })}
        </span>
        
        <button 
          onClick={() => changeMonth(1)}
          className="p-2 rounded-full hover:bg-gray-100 text-gray-800 font-bold"
          disabled={currentDate.getMonth() === new Date().getMonth() && currentDate.getFullYear() === new Date().getFullYear()}
        >
          &gt;
        </button>
      </div>
    </div>
  );
};