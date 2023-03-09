import React from 'react';
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

function App() {
    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
    const [selectedCard, setSelectedCard] = React.useState({});

    function closeAllPopups() {
        setIsEditProfilePopupOpen(false)
        setIsEditAvatarPopupOpen(false)
        setIsAddPlacePopupOpen(false)
        setSelectedCard({});
    }

    return (
        <div className="page">
            <div className="main">
                <Header/>
                <Main
                    onEditProfile={setIsEditProfilePopupOpen}
                    onEditAvatar={setIsEditAvatarPopupOpen}
                    onAddPlace={setIsAddPlacePopupOpen}
                    onCardClick={setSelectedCard}
                />
                <Footer/>
                <ImagePopup card={selectedCard} onClose={closeAllPopups}/>
                <PopupWithForm
                    name="confirm"
                    title="Вы уверены?"
                    buttonText="Да">
                </PopupWithForm>

                <PopupWithForm
                    name="avatar"
                    title="Обновить аватар"
                    buttonText="Сохранить"
                    isOpen={isEditAvatarPopupOpen}
                    onClose={closeAllPopups}>
                    <label className="popup__label">
                        <input
                            name="avatar"
                            className="popup__input popup__input_type_avatar"
                            id="avatar-input"
                            type="url"
                            placeholder="Ссылка на аватар"
                            required
                        />
                        <span className="popup__input-error avatar-input-error"/>
                    </label>
                </PopupWithForm>

                <PopupWithForm
                    name="profile"
                    title="Редактировать профиль"
                    buttonText="Сохранить"
                    isOpen={isEditProfilePopupOpen}
                    onClose={closeAllPopups}>
                    <label className="popup__label">
                        <input
                            className="popup__input popup__input_name"
                            type="text"
                            placeholder="Имя"
                            minLength="2"
                            maxLength="40"
                            name="name"
                            id="profileName-input"
                            required
                        />
                        <span className="popup__input-error profileName-input-error"/>
                    </label>
                    <label className="popup__label">
                        <input
                            className="popup__input popup__input_job"
                            type="text"
                            placeholder="Вид деятельности"
                            minLength="2"
                            maxLength="200"
                            name="about"
                            id="profileJob-input"
                            required
                        />
                        <span className="popup__input-error profileJob-input-error"/>
                    </label>
                </PopupWithForm>

                <PopupWithForm
                    name="photo"
                    title="Новое место"
                    buttonText="Создать"
                    isOpen={isAddPlacePopupOpen}
                    onClose={closeAllPopups}>
                    <label className="popup__label">
                        <input
                            className="popup__input popup__input_image-name"
                            type="text"
                            placeholder="Название"
                            minLength="2"
                            maxLength="30"
                            name="name"
                            id="imageName-input"
                            required
                        />
                        <span className="popup__input-error imageName-input-error"/>
                    </label>
                    <label className="popup__label">
                        <input
                            className="popup__input popup__input_image-link"
                            type="url"
                            placeholder="Ссылка на картинку"
                            name="link"
                            id="imageLink-input"
                            required
                        />
                        <span className="popup__input-error imageLink-input-error"/>
                    </label>
                </PopupWithForm>
            </div>
        </div>
    );
}

export default App;
