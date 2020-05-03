import React from 'react';
import './Button.css';

const Button = ({addNextPageImages}) => {
    const addNewImg = () => {
        addNextPageImages();
    }
    return (
        <button className='Button' onClick={addNewImg}>
            Load more...
        </button>
    );
};

export default Button;