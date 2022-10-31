import {useState} from 'react';

const CalendarDays = ({date, currentMonth, selectDay, selectedDates}) => {
    // const [month, setMonth] = useState(new Date(date).getMonth());
    const month = new Date(date).getMonth();
    const classNameDefiner = () => {
        let className = '';
        const currentDate = new Date(date).toISOString()
        if(month !== currentMonth){
            className += 'shadow-days '
        } else {
            className += 'active-days '
        }
        if(selectedDates[0] === currentDate && !selectedDates[1]){
            className += 'selected '
        } else if(selectedDates[0] && selectedDates[1] && currentDate >= selectedDates[0] && currentDate <= selectedDates[1]){
            className += 'selected '
        }
        console.log(date.toISOString().slice(0, 10), new Date().toISOString().slice(0, 10));
        if(date.toISOString().slice(0, 10) === new Date().toISOString().slice(0, 10)){
            className += 'today '
        }
        return className
    }
    return (
        <div onClick={() => selectDay(date)} className={classNameDefiner()}>{date.getDate()}</div>
    )
}
export default CalendarDays