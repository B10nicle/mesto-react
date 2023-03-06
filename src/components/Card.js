import React from 'react';

function Card(card) {
    function handleCardClick() {
        card.onCardClick(card);
    }

    return (
        <li className="cards__item">
            <button className="cards__delete pointer" type="button"></button>
            <img className="cards__item-image" alt={card.name} src={card.link} onClick={handleCardClick} />
            <div className="cards__item-description">
                <h2 className="cards__item-title">{card.name}</h2>
                <div className="cards__item-likes">
                    <button className="cards__item-like pointer" type="button"></button>
                    <p className="cards__item-number-likes">{card.likes.length}</p>
                </div>
            </div>
        </li>
    )
}

export default Card;