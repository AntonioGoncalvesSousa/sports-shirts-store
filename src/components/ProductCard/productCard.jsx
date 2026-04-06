import React from "react";
import ButtonBuy from "../ButtonBuy/buttonBuy";

function ProductCard(props) {
    return (
        <div className="h-[50vh] w-[18vw] rounded-lg shadow-[0_0_10px_rgba(255,255,255,0.5)] ">
            <div className=" h-[60%] w-full rounded-tl-lg rounded-tr-lg overflow-hidden items-center flex justify-center">
                <img src={props.product.image} className=""/>
            </div>
            <div className="h-[40%] bg-[#F5F5F7]/95 justify-evenly flex flex-col items-center rounded-bl-lg rounded-br-lg">
                <h2 className="color-black font-bold text-lg mt-2">{props.product.name}</h2>
                <p className="color-black font-bold text-md mt-1">R$ {props.product.price.toFixed(2)}</p>
                <ButtonBuy />
            </div>
        </div>
    )
}

export default ProductCard;