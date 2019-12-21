import React from 'react';
import { Countdown } from '../components/countdown/Countdown';
import { Button } from '../components/button/Button';


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
        <span className="coming-soon">-- EN CONSTRUCTION --</span>
    </main>)
}