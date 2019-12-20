import React,{ useState, useEffect } from 'react';
import './countdown.css';

export const Countdown = () => {
    const [sDay, setDay] = useState();
    const [sHour, setHour] = useState();
    const [sMinute, setMinute] = useState();
    const [sSecond, setSecond] = useState();
    
    const second = 1000,
      minute = second * 60,
      hour = minute * 60,
      day = hour * 24;
    
    let countDown = new Date('Mar 30, 2020 00:00:00').getTime();

    useEffect(() => {
    
       let x =  setInterval(function() {
            let now = new Date().getTime();
            let distance = countDown - now;
            setDay(Math.floor(distance / (day)));
            setHour(Math.floor((distance % (day)) / (hour)));
            setMinute(Math.floor((distance % (hour)) / (minute)));
            setSecond(Math.floor((distance % (minute)) / second));

            if (distance < 0) {
                clearInterval(x);
              }
      
          }, second)

    })

    const showZero = (num) => {
        if(num<10){
            return "0"
        }
    }

    return (
    <div className="countdown"> 
        <ul>
            <li><span id="days">{showZero(sDay)}{sDay}</span>Jours </li>
            <li><span id="hours">{showZero(sHour)}{sHour}</span>Heures</li>
            <li><span id="minutes">{showZero(sMinute)}{sMinute}</span>Minutes</li>
            <li><span id="seconds">{showZero(sSecond)}{sSecond}</span>Secondes</li>
        </ul>
    </div>
    )
}