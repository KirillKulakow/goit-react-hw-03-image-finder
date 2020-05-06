import React, { useEffect } from 'react';
import './Modal.css';

const Modal = ({closeModal, children}) => {
    
    const closeKey = (e) => {
        if(e.key === 'Escape'){
            closeModal();
        }
    };

    useEffect(() => {
        window.addEventListener('keydown',(e) => closeKey(e))
    },[]);

    useEffect(() => {
        return () => {window.removeEventListener('keydown',(e) => closeKey(e))}
    });

    const close = (e) => {
        if(e.target.className !== 'Overlay'){
            return
        };
        closeModal();
    };

    return (
        <div className="Overlay" onClick={close}>
            <div className="Modal">
                {children}
            </div>
        </div>
    );
};

export default Modal;