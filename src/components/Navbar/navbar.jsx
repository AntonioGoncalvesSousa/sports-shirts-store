import React, { useState } from 'react';
import logo from "../../assets/logoNeonShirts.png";
import menu from "../../assets/menuIcon.png";
import cart from "../../assets/cartIcon.png";
import lupa from "../../assets/lupaIcon.png";
import user from "../../assets/userIcon.png";
import SearchModal from "../SearchModal/SearchModal";

function Navbar() {
    const [showSearch, setShowSearch] = useState(false)

    return (
        <div className="bg-black">import { useState } from "react";

            <div className="flex justify-between items-center p-4 mx-32">
                {/* <img src={menu} alt="menu" className='w-12 cursor-pointer'/> */}
                <img src={lupa} onClick={()=> setShowSearch(true)} alt="lupa" className='w-12 cursor-pointer' />
                <img src={logo} alt="logo" className='w-24 cursor-pointer' />
                <div className="flex items-center gap-8">
                    <img src={user} alt="user" className='w-8 cursor-pointer' />
                    <img src={cart} alt="shopping-cart" className='w-8 cursor-pointer' />
                </div>
            </div>
            <SearchModal 
                isOpen={showSearch} 
                onClose={() => setShowSearch(false)}
                
            />
        </div>
    )
}

export default Navbar;