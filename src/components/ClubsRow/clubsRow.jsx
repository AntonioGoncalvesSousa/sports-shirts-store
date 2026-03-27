import React from "react";
import saoPaulo from './../../assets/clubs/saoPaulo.png';
import palmeiras from './../../assets/clubs/palmeiras.png';
import flamengo from './../../assets/clubs/flamengo.png';
import corinthians from './../../assets/clubs/corinthians.png';
import santos from './../../assets/clubs/santos.png';
import vasco from './../../assets/clubs/vasco.png';
import internacional from './../../assets/clubs/internacional.png';


function ClubsRow() {
    return (
        <div className="w-full h-24 flex justify-between items-center">
            <img src={saoPaulo} alt="São Paulo" className="h-16 cursor-pointer"/>
            <img src={palmeiras} alt="Palmeiras" className="h-16 cursor-pointer"/>
            <img src={flamengo} alt="Flamengo" className="h-16 cursor-pointer"/>
            <img src={corinthians} alt="Corinthians" className="h-16 cursor-pointer"/>
            <img src={santos} alt="Santos" className="h-16 cursor-pointer"/>
            <img src={vasco} alt="Vasco" className="h-16 cursor-pointer"/>
            <img src={internacional} alt="Internacional" className="h-16 cursor-pointer"/>
        </div>
    )
}

export default ClubsRow;