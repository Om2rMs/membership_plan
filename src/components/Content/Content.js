import React from "react";
import { contentData } from '../../assets/aboutContentData';
import Card from './../Card/Card';
import './Content.css'
import contactVector from './../../assets/contact_anime.png'






const Content = () => {
    return (
        <div className="content-container">
            {contentData.map(({ id, cardName, cardPrice, cardDis, cardTime,
                cardText, cardTextTwo, cardcolor,
                cardcolorTwo, cardOffer, icons,
                most, mostText }) => (
                <Card key={id}
                    cardName={cardName}
                    cardPrice={cardPrice}
                    cardTime={cardTime}
                    cardText={cardText}
                    cardTextTwo={cardTextTwo}
                    cardcolor={cardcolor}
                    cardcolorTwo={cardcolorTwo}
                    cardOffer={cardOffer}
                    icons={icons}
                    cardDis={cardDis}
                    most={most}
                    mostText={mostText}
                />
            ))}

        </div>

    )
}

export default Content;