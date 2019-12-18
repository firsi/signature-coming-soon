import React from 'react';
import './button.css';

export const Button = ({title}) => {

    return (
        <button type="button">
            {title}
        </button>
    )
}