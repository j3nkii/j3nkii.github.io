import React, { useState, useEffect } from 'react';
import CalendarDays from './CalendarDays'
import './Calendar.css';

export const Calendar = (props) => {
    // const store = useSelector((store) => store);
    const trueMonth = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const [dates, setDates] = useState([]);
    const [month, setMonth] = useState(new Date().getMonth());
    const [year, setYear] = useState(new Date().getFullYear());
    const [selectedDates, setSelectedDates] = useState([null, null]);
    useEffect(() => {
        constructMonthDates();
    }, [month]);

    const prev = () =>{
        const prevYear = new Date(year -  1, month, 1).getFullYear();
        const prevMonth = new Date(year, month - 1, 1).getMonth();
        if(month === 11)setYear(prevYear);
        setMonth(prevMonth)
    }
    const next = () => {
        const nextYear = new Date(year +  1, month, 1).getFullYear();
        const nextMonth = new Date(year, month + 1, 1).getMonth();
        if(nextMonth === 0)setYear(nextYear)
        setMonth(nextMonth)
    }
    const selectDay = (e) => {
        const selected = new Date(e).toISOString();
        if((!selectedDates[0] && !selectedDates[1]) || (selectedDates[0] && selectedDates[1])){
            setSelectedDates([selected, null]);
        } else if(selectedDates[0] && !selectedDates[1]){
            setSelectedDates([selectedDates[0], selected])
        }
    }
    const constructMonthDates = () => {
        const firstDayOfCurrMonth = new Date(year, month, 1).getDay();
        const date = new Date(year, month, 1 - firstDayOfCurrMonth);
        const dates = [];
        while (dates.length <= 41) {
            dates.push(new Date(date));
            date.setDate(date.getDate() + 1);
        }
        setDates(dates)
    }
    console.log('###SELECTED DATES');
    console.log(selectedDates);
    return (
        <div className='projectContainer'>
            <div className='calendar-container'>
                <div className='calendar'>
                    <div className='month'>
                        <button className='cal-button' onClick={prev}>prev</button>
                        <h1>{trueMonth[month]} : {year}</h1>
                        {/* <p>{new Date(year, month, day)}</p> */}
                        {/* <p>{year}</p> */}
                        <button className='cal-button' onClick={next}>next</button>
                    </div>
                    <div className="weekdays">
                        <div>Sun</div>
                        <div>Mon</div>
                        <div>Tue</div>
                        <div>Wed</div>
                        <div>Thu</div>
                        <div>Fri</div>
                        <div>Sat</div>
                    </div>
                    <div className="days">
                        {
                            dates.map(date => <CalendarDays date={date} currentMonth={month} selectDay={selectDay} selectedDates={selectedDates} />)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Calendar;
