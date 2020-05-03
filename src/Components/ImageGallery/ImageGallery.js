import React from 'react';
import './ImageGallery.css';

const ImageGallery = (props) => {
    return (
        <ul className="ImageGallery">
            {props.children}
        </ul>
    );
};

export default ImageGallery;