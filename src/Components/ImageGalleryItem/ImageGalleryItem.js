import React from 'react';
import './ImageGalleryItem.css';

const ImageGalleryItem = ({images, openModal, getModalImage}) => {
    const clickImageForModal = () => {
        getModalImage(images.id);
        openModal();
    }
    return (
        <li className="ImageGalleryItem">
            <img src={images.webformatURL} alt={images.tags} onClick={clickImageForModal} className="ImageGalleryItem-image" />
        </li>
    );
};

export default ImageGalleryItem;