import React from 'react';
import { Socials } from '../components/socials/Socials';

export const Footer = () => {
    return (
        <footer>
            <div className="socials">
                <Socials />
            </div>
            
            <div className="login">
                <a href="http://www.signatureinc.co/webmail" >Connexion</a>
            </div>
        </footer>
    )
}