import { useState, useEffect } from 'react';
import { CalendarHeader } from '../components/calendar/calendar-header';
import { CalendarGrid } from "../components/calendar/calendar-grid";
import { Navbar } from '../components/navbar/navbar';

export const EditTanggal = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [markedDates, setMarkedDates] = useState([]);

  // fetch data

  const changeMonth = (increment) => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + increment, 1));
  };

  const changeYear = (year) => {
    setCurrentDate(new Date(year, currentDate.getMonth(), 1));
  };

  return (
    <div>
      <Navbar />
      <div className="bg-gray-50 p-6">
        <div className="max-w-xl mx-auto bg-white rounded-xl shadow-md overflow-hidden p-4">
          <h1 className="text-2xl font-bold text-gray-800 mb-4 text-center">Edit Tanggal</h1>
          
          <CalendarHeader 
            currentDate={currentDate}
            changeMonth={changeMonth}
            changeYear={changeYear}
          />
          
          <CalendarGrid 
            currentDate={currentDate}
            markedDates={markedDates}
          />
        </div>
      </div>
    </div>
  );
};