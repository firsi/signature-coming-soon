import React from 'react';
import { Countdown } from '../components/countdown/Countdown';
import { Button } from '../components/button/Button';
import woman from '../assets/woman.png';

export const Main = () => {
    return(<main>
        <div className="left-container">
            <div className="title">
            <h1>AGENCE CONSEIL<br /> EN COMMUNICATION</h1>
            <p>SIGNEZ AVEC VOTRE IMAGE</p>
            </div>
            <Countdown />
            <Button title="Contactez-nous" />
        </div>
        <div className="right-container">
            <img className="woman-img" alt="Woman in glasses" src={woman} />
        </div>
        <span className="coming-soon">-- EN CONSTRUCTION --</span>
    </main>)
}