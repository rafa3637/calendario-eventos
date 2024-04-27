import React, { useState } from 'react';
import './Calendar.css';
import FormEvent from '../FormEvent/FormEvent';

const Calendar = () => {
    const numRows = 5;
    const numCols = 7;
    const [highlightedDay, setHighlightedDay] = useState(null); 
    const [highlightedWeekday, setHighlightedWeekday] = useState(null); 
    const [selectedDate, setSelectedDate] = useState(null); 
    const [currentMonth, setCurrentMonth] = useState(3); 

    // Função para obter o número de dias no mês atual
    const getDaysInMonth = (month, year) => {
        return new Date(year, month + 1, 0).getDate();
    };

    // Função para obter o primeiro dia da semana do mês atual
    const getFirstDayOfMonth = () => {
        return new Date(2024, currentMonth, 1).getDay();
    };

    // Função para lidar com a seleção do dia
    const handleDayClick = (day) => {
        setSelectedDate(`2024-${currentMonth + 1}-${day}`);
    };

    // Função para navegar para o próximo mês
    const handleNextMonth = () => {
        setCurrentMonth((prevMonth) => (prevMonth === 11 ? 0 : prevMonth + 1));
        setSelectedDate(`2024-${currentMonth + 2}-1`);
    };

    // Função para navegar para o mês anterior
    const handlePrevMonth = () => {
        setCurrentMonth((prevMonth) => (prevMonth === 0 ? 11 : prevMonth - 1));
        setSelectedDate(`2024-${currentMonth}-1`);
    };

    // Renderiza os dias do calendário
    const renderCalendar = () => {
        const calendarCells = [];
        const firstDayOfMonth = getFirstDayOfMonth();
        const numDaysInMonth = getDaysInMonth(currentMonth, 2024);

        for (let i = 0; i < numRows; i++) {
            for (let j = 0; j < numCols; j++) {
                const day = i * numCols + j + 1 - firstDayOfMonth;
                calendarCells.push(
                    <td
                        key={`${i}-${j}`}
                        className={highlightedDay === day ? 'highlighted' : ''}
                        onMouseEnter={() => setHighlightedDay(day)}
                        onMouseLeave={() => setHighlightedDay(null)}
                        onClick={() => handleDayClick(day)} // Adiciona o evento de clique ao dia
                    >
                        {day > 0 && day <= numDaysInMonth ? day : ''}
                    </td>
                );
            }
        }

        return calendarCells;
    };

    // Renderiza os dias da semana
    const renderWeekdays = () => {
        const weekdays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];

        return weekdays.map((weekday, index) => (
            <th
                key={index}
                onMouseEnter={() => setHighlightedWeekday(index)}
                onMouseLeave={() => setHighlightedWeekday(null)}
                style={{ backgroundColor: highlightedWeekday === index ? '#642EFE' : '', color: highlightedWeekday === index ? '#ffffff' : '' }}
            >
                {weekday}
            </th>
        ));
    };

    return (
        <div>
            <div className="navigation">
                <button className="button" onClick={handlePrevMonth}><i>Anterior</i></button>
                <h2 className="name"><i>{new Date(2024, currentMonth).toLocaleString('pt-br', { month: 'long' })}</i></h2>
                <button className="button" onClick={handleNextMonth}><i>Próximo</i></button>
            </div>
            <table className="calendar">
                <thead>
                    <tr>
                        {renderWeekdays()}
                    </tr>
                </thead>
                <tbody>
                    {[...Array(numRows)].map((_, rowIndex) => (
                        <tr key={rowIndex}>{renderCalendar().slice(rowIndex * numCols, (rowIndex + 1) * numCols)}</tr>
                    ))}
                </tbody>
            </table>
            {selectedDate && <FormEvent selectedDate={selectedDate} />}
        </div>
    );
};

export default Calendar;
