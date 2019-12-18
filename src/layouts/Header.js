import React from 'react';
import { ReactComponent as Logo } from '../assets/logo.svg'
import { Socials } from '../components/socials/Socials';

export const Header = () => {
    return(
        <header>
            <div className="logo">
                <Logo />
            </div>
            <div className="socials">
                <Socials />
            </div> 
        </header>
    )
}