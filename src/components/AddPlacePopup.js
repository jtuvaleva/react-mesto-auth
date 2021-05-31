import React from 'react';
import PopupWithForm from './PopupWithForm'


function AddPlacePopup ({isOpen, onClose, onAddPlace}) {
    const cardLinkRef = React.useRef();
    const cardNameRef = React.useRef();

    function clearInputLink() {
        cardLinkRef.current.value = '';
        cardNameRef.current.value = '';
    }

    function handleSubmit(e) {
        e.preventDefault();
        onAddPlace({
          name: cardNameRef.current.value, 
          link: cardLinkRef.current.value, 
        });
        clearInputLink();
    }

    return (
        <PopupWithForm name='cards' title='Новое место' 
                      isOpen = {isOpen}
                      onClose={onClose}
                      onSubmit={handleSubmit}
                      buttonText='Создать'>

            <input ref={cardNameRef} type="text" placeholder="Название" id="cardName" name="name" 
            className="popup__form-input popup__form-input_field_image-name" 
            required minLength="2" maxLength="30"/>
          <span className="popup__form-error cardName-error"></span>
          <input ref={cardLinkRef} type="url" placeholder="Ссылка на картинку" id="cardLink" name="link" 
            className="popup__form-input popup__form-input_field_image-src" required/>
          <span className="popup__form-error cardLink-error"></span>
        </PopupWithForm>
    );
}

export default AddPlacePopup
