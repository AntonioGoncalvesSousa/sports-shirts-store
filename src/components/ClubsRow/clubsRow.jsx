import React from "react";
import saoPaulo from './../../assets/clubesNoBack/saoPaulo.png';
import palmeiras from './../../assets/clubesNoBack/palmeiras.png';
import flamengo from './../../assets/clubesNoBack/flamengo.png';
import corinthians from './../../assets/clubesNoBack/corinthians.png';
import santos from './../../assets/clubesNoBack/santos.png';
import vasco from './../../assets/clubesNoBack/vasco.png';
import internacional from './../../assets/clubesNoBack/internacional.png';


function ClubsRow() {
    return (
        <div className="w-full h-24 flex justify-between items-center">
            <img src={saoPaulo} alt="São Paulo" className="h-16"/>
            <img src={palmeiras} alt="Palmeiras" className="h-16"/>
            <img src={flamengo} alt="Flamengo" className="h-16"/>
            <img src={corinthians} alt="Corinthians" className="h-16"/>
            <img src={santos} alt="Santos" className="h-16"/>
            <img src={vasco} alt="Vasco" className="h-16"/>
            <img src={internacional} alt="Internacional" className="h-16"/>
        </div>
    )
}

export default ClubsRow;