import React from 'react';
import './button.css';

export const Button = ({title}) => {

    return (
        <a className="contact" href="mailto:sales@signatureinc.co">
            {title}
        </a>
    )
}