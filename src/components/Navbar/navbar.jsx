import React, { useState } from 'react';
import logo from "../../assets/logoPrincipal.png";
import menu from "../../assets/menuIcon.png";
import cart from "../../assets/cartIcon.png";
import lupa from "../../assets/lupaIcon.png";
import user from "../../assets/userIcon.png";
import SearchModal from "../SearchModal/searchModal";
import './../../global.css';

function Navbar() {
    const [showSearch, setShowSearch] = useState(false)

    return (
        <div className="back-blue">
            <div className="flex justify-between items-center p-2 mx-32">
                {/* <img src={menu} alt="menu" className='w-12 cursor-pointer'/> */}
                <img src={lupa} onClick={()=> setShowSearch(true)} alt="lupa" className='w-10 cursor-pointer' />
                <img src={logo} alt="logo" className='w-16 cursor-pointer' />
                <div className="flex items-center gap-8">
                    <img src={user} alt="user" className='w-6 cursor-pointer' />
                    <img src={cart} alt="shopping-cart" className='w-6 cursor-pointer' />
                </div>
            </div>
            <div className='h-1 back-black'></div>
            <div className='back-blue w-screen'>
                <ul className='flex justify-center gap-12 py-4 text-white font-bold'>
                    <li className='cursor-pointer hover:text-gray-300 transition-colors'>Home</li>
                    <li className='cursor-pointer hover:text-gray-300 transition-colors'>Produtos</li>
                    <li className='cursor-pointer hover:text-gray-300 transition-colors'>Sobre</li>
                    <li className='cursor-pointer hover:text-gray-300 transition-colors'>Contato</li>
                </ul>
            </div>
            <SearchModal 
                isOpen={showSearch} 
                onClose={() => setShowSearch(false)}
            />
        </div>
    )
}

export default Navbar;