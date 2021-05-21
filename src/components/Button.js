import React from 'react';




const Button = ({ buttonValue , color, onClick}) => {
    // Input tracker

    return (
        <div>
            <button style={{ color }} onClick={ ()=>  onClick()}> {buttonValue} </button>
        </div>
    );
};

export default Button;