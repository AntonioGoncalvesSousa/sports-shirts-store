import React from "react";
import ButtonBuy from "../ButtonBuy/buttonBuy";

function ProductCard(props) {
    return (
        <div className="h-[50vh] w-[18vw] back-black rounded-lg">
            <div className="back-gray h-[60%] w-full rounded-tl-lg rounded-tr-lg overflow-hidden items-center flex justify-center">
                <img src={props.product.image} className=""/>
            </div>
            <div className="h-[40%] justify-evenly flex flex-col items-center">
                <h2 className="color-white font-bold text-lg mt-2">{props.product.name}</h2>
                <p className="color-white font-bold text-md mt-1">R$ {props.product.price.toFixed(2)}</p>
                <ButtonBuy />
            </div>
        </div>
    )
}

export default ProductCard;