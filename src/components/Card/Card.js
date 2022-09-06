import React from 'react';
import './Card.css';

const Card = ({ id, cardName,
    cardPrice, cardDis,
    cardTime, cardText,
    cardTextTwo, cardcolor,
    cardcolorTwo, cardOffer,
    icons, most, mostText }) => {
    return (
        <div key={id}
            className={`about_card ${cardcolor}`}>
            <div className={`${most}`}>{mostText}</div>
            <div className={`header ${cardcolorTwo}`}><p className='upperText'>{cardName}</p></div>
            <div className='body_card'>
                <div className='price'>
                    <span><small>$</small>{cardPrice}</span>
                    <span className='discount'>{cardDis}</span>
                </div>
                <small>{cardTime}</small>
                <small className='cardText'>{cardText}</small>
                <small className='cardTextTwo'>{cardTextTwo}</small>
                <div className='footer'>
                    <p className='offer'>{cardOffer}  </p>
                    {icons}
                </div>
            </div>

        </div>
    );
};

export default Card;