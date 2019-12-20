import React,{ useState, useEffect } from 'react';
import './socials.scss';

export const Socials = () => {
    const [active, setActive] = useState(true);

    // useEffect(() => {
        
        
    // }, [active])

    const handleClick = () => {
        setActive(!active)
        console.log(active)
        console.log(document.querySelector('.number'))
        active ? document.querySelector('.number').classList.add('number-active') 
            : document.querySelector('.number').classList.remove('number-active') 
    }

    return(
        <ul className="social-ul">
                   {/* <li className="social-link"><button href="#" onTouchStart={() => handleClick()} onClick={() => handleClick()}>WHATSAPP</button></li> */}
                   <li className="social-link"><a href="https://www.facebook.com/agencesignature/">FACEBOOK</a></li> 
                   <li className="social-link"><a href="#">YOUTUBE</a></li>

                   <div className="number">+223 71 01 00 10</div>
        </ul>
    )
}