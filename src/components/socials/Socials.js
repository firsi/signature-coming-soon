import React,{ useState, useEffect } from 'react';
import './socials.scss';

export const Socials = () => {
    const [active, setActive] = useState(false);

    useEffect(() => {
        active ? document.querySelector('.number').classList.add('number-active') 
            : document.querySelector('.number').classList.remove('number-active') 
        
    }, [active])

    return(
        <ul className="social-ul">
                   <li className="social-link"><a href="#" onTouchStart={() => setActive(!active)} onClick={() => setActive(!active)}>WHATSAPP</a></li>
                   <li className="social-link"><a href="https://www.facebook.com/agencesignature/">FACEBOOK</a></li> 
                   <li className="social-link"><a href="#">YOUTUBE</a></li>

                   <div className="number">+223 71 01 00 10</div>
        </ul>
    )
}