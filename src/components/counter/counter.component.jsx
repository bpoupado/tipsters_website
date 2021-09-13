import React, { useState, useEffect } from 'react';

import './counter.styles.scss';

export const Counter = ({time}) => {

    const [days, setDays] = useState();
    const [hours, setHours] = useState();
    const [minutes, setMinutes] = useState();
    const [seconds, setSeconds] = useState();
    const [started, setStarted] = useState(true);



    useEffect(() =>{
        const startTimer = () => {
            if(started){
                setInterval(() => {
                    const countDate = new Date(time).getTime();
                    const now = new Date().getTime();
                    const gap = countDate - now;
            
                    if(now <= countDate){
            
                        //Timer conversion
                        const second = 1000;
                        const minute = second * 60;
                        const hour = minute * 60;
                        const day = hour * 24;
            
                        //Time calculations
                        const days_output = Math.floor(gap / day);
                        const hours_output = Math.floor((gap % day) / hour);
                        const minutes_output = Math.floor((gap % hour) / minute);
                        const seconds_output = Math.floor((gap % minute) / second);
            
                        setDays(days_output);
                        setHours(hours_output);
                        setMinutes(minutes_output);
                        setSeconds(seconds_output);
                    }else{
                        setStarted(false);
                    }
                });
            }
        }
        startTimer(started, time);
        return () => {setStarted(false)}
    }, [started, time]);


    if(started){
        return (
            <span className="counter-timer-string">Starts in <b>{ days }</b> days <b>{ hours }</b> hrs <b>{ minutes }</b> mins <b>{ seconds }</b> secs</span>
        );
    }else{
        return(
            <span>Match Started</span>
        )
    }
  


}