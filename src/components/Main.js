import React, {useEffect, useState} from 'react';
import api from "../utils/Api"
import Card from './Card';

function Main({onEditProfile, onAddPlace, onEditAvatar, onCardClick}) {
    const [userName, setUserName] = useState('');
    const [userDescription, setUserDescription] = useState('');
    const [userAvatar, setUserAvatar] = useState('');
    const [cards, setCards] = useState([]);

    useEffect(() => {
        api.getUserInfo().then((profileInfo) => {
            setUserName(profileInfo.name)
            setUserDescription(profileInfo.about)
            setUserAvatar(profileInfo.avatar)
        })
            .catch((err) => console.log(err))

        api.getCards().then((cardsData) => {
            setCards(cardsData.map((data) => ({
                cardId: data._id,
                name: data.name,
                link: data.link,
                likes: data.likes
            })))
        })
            .catch((err) => console.log(err))
    }, []);

    return (
        <main className="main">
            <section className="profile">
                <div className="profile__avatar-container">
                    <button
                        className="profile__avatar-edit-button"
                        type="button"
                        onClick={() => {
                            onEditAvatar(true)
                        }}>
                        <img src={userAvatar}
                             className="profile__avatar"
                             alt="аватар пользователя"
                        />
                    </button>
                </div>
                <div className="profile__info">
                    <h1 className="profile__name">{userName}</h1>
                    <button className="profile__edit-button pointer" type="button" onClick={() => {
                        onEditProfile(true)
                    }}/>
                    <p className="profile__job">{userDescription}</p>
                </div>
                <button className="profile__add-button pointer" type="button" onClick={() => {
                    onAddPlace(true)
                }}/>
            </section>
            <section className="cards" aria-label="Фотокарточки различных уголков планеты">
                <ul className="cards__list">
                    {cards.map((card) => (
                        <Card
                            key={card.cardId}
                            name={card.name}
                            link={card.link}
                            likes={card.likes}
                            onCardClick={onCardClick}
                        />
                    ))}
                </ul>
            </section>
        </main>
    );
}

export default Main;
