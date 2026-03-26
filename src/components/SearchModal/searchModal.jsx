import React from 'react';

function SearchModal({ isOpen, onClose }) {
    if (!isOpen) return null;

    // making the modal close when pressing esc key
    React.useEffect(() => {
        const handleEsc = (event) => {
            if (event.key === "Escape") {
                onClose();
            }
        };
        window.addEventListener("keydown", handleEsc);
        return () => window.removeEventListener("keydown", handleEsc);
    }, [onClose]);

    return (
        <div 
            className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-start pt-20 z-50"
            onClick={onClose}
        >
            <div 
                className="bg-black p-6 rounded-xl w-1/2 border border-blue-500 shadow-[0_0_20px_rgba(47,140,208,0.5)]"
                onClick={(e) => e.stopPropagation()}
            >
                <input
                    type="text"
                    placeholder="Pesquisar produtos..."
                    className="w-full p-4 rounded-lg outline-none bg-black text-white border border-purple-500 focus:shadow-[0_0_10px_rgba(106,75,195,0.8)]"
                ></input>
            </div>
        </div>
    )
}

export default SearchModal;