import React from 'react';

function PopupWithForm({name, title, children, buttonText, isOpen, onClose}) {
    return (
        <div className={`popup popup_type_${name} ${isOpen ? "popup_opened" : ""}`}>
            <div className="popup__container">
                <button className="popup__close-button pointer" type="button" onClick={onClose}/>
                <form className="popup__form" name={name}>
                    <h2 className="popup__title">{title}</h2>
                    {children}
                    <button className="popup__save-button pointer" type="submit">{buttonText || 'Сохранить'}</button>
                </form>
            </div>
        </div>
    )
}

export default PopupWithForm;
