import React from "react";
import { createPortal } from "react-dom";

function SearchModal({ isOpen, onClose }) {
    if (!isOpen) return null;

    return createPortal(
        <div className="fixed inset-0 z-[100]">
            <div className="absolute inset-0 bg-black/50" onClick={onClose}>
            </div>
            <div className="absolute right-0 top-0 h-[17vh] flex flex-col justify-around rounded-md w-[35vw] back-white shadow-lg gap-1 p-6">
                <div className="w-full h-[1vh] flex justify-end">
                    <button onClick={onClose} className=" hover:text-gray-600 transition-colors font-bold">
                        FECHAR
                    </button>
                </div>
                <div>
                    <h3>Oque você está procurando?</h3>
                </div>
                <div className="flex w-full">
                    <input type="text"
                        placeholder="Procurar"
                        className="back-white border border-gray-500 color-black placeholder:text-black h-[6vh] rounded-l-md px-3 py-2 w-full"
                    />
                    <button className="back-black text-white h-[6vh] px-4 py-2 rounded-r-md hover:bg-gray-800 transition-colors font-bold">
                        Procurar
                    </button>
                </div>
            </div>
        </div>,
        document.body
    )
}

export default SearchModal;