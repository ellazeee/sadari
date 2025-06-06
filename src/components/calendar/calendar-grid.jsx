import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const CalendarGrid = ({ currentDate, markedDates }) => {
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState(null);

  const getDaysInMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (year, month) => {
    return new Date(year, month, 1).getDay();
  };

  const handleDateClick = (date) => {
    setSelectedDate(date);
    navigate('/lakukansadari', { state: { date } }); // ke halaman lakukan sadari
  };

  const renderCalendarDays = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const daysInMonth = getDaysInMonth(year, month);
    const firstDayOfMonth = getFirstDayOfMonth(year, month);

    const days = [];
    
    // Empty days at the start of the month
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(<div key={`empty-${i}`} className="h-10 w-10"></div>);
    }

    // Days in the month
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(year, month, day);
      const isMarked = markedDates.some(d => 
        d.getDate() === day && 
        d.getMonth() === month && 
        d.getFullYear() === year
      );
      const isToday = date.toDateString() === new Date().toDateString();
      const isSelected = selectedDate && date.toDateString() === selectedDate.toDateString();

      days.push(
    <div key={`day-wrapper-${day}`} className="w-full flex justify-center">
      <button
        key={`day-${day}`}
        onClick={() => handleDateClick(date)}
        className={`h-10 w-10 flex items-center justify-center border-2 border-pink-600 rounded-full transition-colors
          ${isToday ? 'border-2 border-dashed border-pink-500' : ''}
          ${isSelected ? 'bg-pink-300 text-white' : ''}
          ${isMarked ? 'bg-pink-600 text-white' : 'hover:bg-pink-100 hover:text-gray-800'}
        `}
      >
        {day}
      </button>
    </div>
      );
    }

    return days;
  };

  return (
<div className="mb-2 w-full">
  <div className="grid grid-cols-7 mb-1">
    {['Min', 'Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab'].map((day) => (
      <div 
        key={day} 
        className="w-full flex justify-center"
      >
        <div className="w-10 text-center font-medium text-gray-500 text-sm h-10 flex items-center justify-center">
          {day}
        </div>
      </div>
    ))}
  </div>
  
  <div className="grid grid-cols-7 gap-y-2">
    {renderCalendarDays()}
  </div>
</div>
  );
};