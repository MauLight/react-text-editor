import React, { useState, useEffect } from 'react';
import './App.css';

export const Timer = () => {

    const [isActive, setIsActive] = useState(false);
    const [seconds, setSeconds] = useState('00');
    const [minutes, setMinutes] = useState(25);

    const toggle = () => {
        setIsActive(!isActive);

    }

    const reset = () => {
        setSeconds('00');
        setMinutes(25);
        setIsActive(false);
    }

    useEffect(() => {
        let interval = null;
        if (isActive) {

            interval = setInterval(() => {
                setSeconds(seconds => seconds - 1);
            }, 1000);
        }
        else if (!isActive && seconds !== 0) {
            clearInterval(interval);
        }

        if (seconds === -1) {
            setMinutes(minutes => minutes - 1);
            setSeconds(59);
        }
        else if (minutes === 0) {
            alert("'Time's up!")
            reset();
        }
        return () => clearInterval(interval);
    }, [isActive, seconds, minutes]);

    return (
        <div className='container mb-4'>
            <div className='row'>
                <h4 className='timer col-12 justify-content-center d-flex mb-0'>{minutes}:{seconds}</h4>
                <div className='col-12 mr-2 justify-content-center d-flex'>
                    <button className={`btn rounded-0 px-4 btn-outline-dark btn-outline-dark${isActive ? 'active' : 'inactive'}`} onClick={toggle} >{isActive ? 'Pause' : 'Start'}</button>
                    <button className='btn btn-outline-dark rounded-0 px-4 ms-2' onClick={reset}>Reset</button>
                </div>
            </div>
        </div>
    )
};

export default Timer;