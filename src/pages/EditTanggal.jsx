import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { CalendarHeader } from '../components/calendar/calendar-header';
import { CalendarGrid } from '../components/calendar/calendar-grid';
import { Navbar } from '../components/navbar/navbar';

export const EditTanggal = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [markedDates, setMarkedDates] = useState([]);
  const navigate = useNavigate();

  // Fetch marked dates (opsional jika diintegrasikan ke backend)
  useEffect(() => {
    // Simulasi fetch
    const dummyMarked = [
      new Date(2025, 5, 1),
      new Date(2025, 5, 5),
      new Date(2025, 5, 10)
    ];
    setMarkedDates(dummyMarked);
  }, []);

  const changeMonth = (increment) => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + increment, 1));
  };

  const changeYear = (year) => {
    setCurrentDate(new Date(year, currentDate.getMonth(), 1));
  };

  const handleDateClick = (date) => {
    navigate('/hasilsadari', { state: { date, isFinal: true } });
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
            onDateClick={handleDateClick} // ✅ arahkan ke hasil sadari final
          />
        </div>
      </div>
    </div>
  );
};
