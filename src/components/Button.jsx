import React from 'react';

const Button = (props) => {
    return (
        <button onClick={props.onclick} color={props.color}>
            {props.text}
        </button>
    );
};

export default Button;