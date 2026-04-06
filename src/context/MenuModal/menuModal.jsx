import React from "react";
import { createPortal } from "react-dom";

function MenuModal({ isOpen, onClose }) {
    if (!isOpen) return null;

    return createPortal(
        <div className="fixed inset-0 z-[100]">

            {/* Overlay escuro */}
            <div
                className="absolute inset-0 bg-black/50"
                onClick={onClose}
            ></div>

            {/* Modal esquerda */}
            <div className="absolute left-0 top-0 h-screen w-[35vw] back-white shadow-lg p-4">
                <div className="m-3">
                    <button onClick={onClose} className=" hover:text-gray-600 transition-colors font-bold">
                        FECHAR
                    </button>
                </div>
                <div className="w-full h-[2px] back-black"></div>
                <div>
                    <ul className="flex flex-col gap-4 mt-4">
                        <li className="cursor-pointer hover:text-gray-500 transition-colors ml-2">Camisas</li>
                        <li className="cursor-pointer hover:text-gray-500 transition-colors ml-2">Shorts</li>
                        <li className="cursor-pointer hover:text-gray-500 transition-colors ml-2">Nacionais</li>
                        <li className="cursor-pointer hover:text-gray-500 transition-colors ml-2">Internacionais</li>
                    </ul>
                </div>
            </div>

        </div>,
        document.body
    );
}

export default MenuModal;