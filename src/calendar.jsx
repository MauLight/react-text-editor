import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import 'react-big-calendar/lib/css/react-big-calendar.css'
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css"

const locales = {
    "en-US": require("date-fns/locale/en-US")
}

const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales,
});

const events = [
    {
        title: "Some meeting",
        allDay: true,
        start: new Date(2023, 2, 2),
        end: new Date(2023, 2, 4)
    },
    {
        title: "Another meeting",
        allDay: true,
        start: new Date(2023, 2, 5),
        end: new Date(2023, 2, 7)
    }
]

const MyCalendar = props => {

    const [newEvent, setNewEvent] = useState({
        title: "",
        start: "",
        end: ""
    });

    const [allEvents, setAllEvents] = useState(events);

    const handleAddEvent = () => {
        for (let i = 0; i < allEvents.length; i++) {
            const d1 = new Date(allEvents[i].start);
            const d2 = new Date(newEvent.start);
            const d3 = new Date(allEvents[i].end);
            const d4 = new Date(newEvent.end);

            if (((d1 <= d2) && (d2 <= d3)) || ((d1 <= d4) && (d4 <= d3))) {
                alert("OVERLAPPING DATES");
                break;
            }
        }

        setAllEvents([...allEvents, newEvent]);
    }

    return (

        <div>
            <div className='container'>
                <div className='row'>
                    <h2 className='calendar-title my-3'>ADD NEW EVENT</h2>
                    <div className='col-3'>
                        <input
                            className='form-control rounded-0'
                            type="text"
                            placeholder='Add title'
                            style={{ marginRight: "10px" }}
                            value={newEvent.title}
                            onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
                        />
                    </div>
                    <div className='col-3'>
                        <DatePicker className='form-control rounded-0 dates' placeholderText='Start Date' style={{ marginRight: "10px" }} selected={newEvent.start} onChange={(start) => setNewEvent({ ...newEvent, start })} />
                    </div>
                    <div className='col-3'>
                        <DatePicker className='form-control rounded-0 dates' placeholderText='End Date' style={{ marginRight: "10px" }} selected={newEvent.end} onChange={(end) => setNewEvent({ ...newEvent, end })} />
                    </div>
                    <div className='col-3'>
                        <button className='btn btn-outline-dark rounded-0' onClick={handleAddEvent}>Add Event</button>
                    </div>
                </div>

            </div>
            <Calendar
                localizer={localizer}
                events={allEvents}
                startAccessor='start'
                endAccessor='end'
                style={{ height: 500, margin: "50px" }}
            />
        </div>
    )
}

export default MyCalendar;