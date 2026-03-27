import React, { useState, useEffect, useRef } from 'react';
import logo from "../../assets/logo/mainLogo.png";
import menu from "../../assets/icons/menuIcon.png";
import cart from "../../assets/icons/cartIcon.png";
import lupa from "../../assets/icons/searchIcon.png";
import user from "../../assets/icons/userIcon.png";
import './../../global.css';
import MenuModal from '../../context/MenuModal/menuModal.jsx';


function Navbar() {
    const [visible, setVisible] = useState(true);
    const [openModalSearch, setOpenModalSearch] = useState(false);
    const lastScrollY = useRef(0);


    useEffect(() => {
        const controlNavbar = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
                setVisible(false);
            } else {
                setVisible(true);
            }

            lastScrollY.current = currentScrollY;
        };

        window.addEventListener('scroll', controlNavbar);

        return () => {
            window.removeEventListener('scroll', controlNavbar);
        };
    }, []);

    return (
        <div
            className={`
                back-white 
                shadow-[0_4px_20px_rgba(0,0,0,0.3)] 
                fixed top-0 left-0 right-0 
                z-50
                transition-transform duration-300
                ${visible ? 'translate-y-0' : '-translate-y-full'}
            `}
        >
            <div className="flex justify-between items-center p-2 mx-32">
                <div className="flex justify-center items-center w-1/6 items-center gap-8">
                    <img src={menu} alt="menu" className='w-8 cursor-pointer' />
                </div>
                <div className="flex justify-center items-center w-1/6 items-center gap-8">
                    <img src={logo} alt="logo" className='w-16 cursor-pointer' />
                </div>
                <div className="flex justify-center items-center w-1/6 items-center gap-8">
                    <img src={lupa} onClick={()=> setOpenModalSearch(true) } className='w-7 cursor-pointer' />
                    <img src={user} alt="user" className='w-6 cursor-pointer' />
                    <img src={cart} alt="shopping-cart" className='w-7 cursor-pointer' />
                </div>
            </div>

            {/* <ul className='flex justify-center gap-12 py-4 text-white font-bold'> */}
            {/* <li className='cursor-pointer hover:text-gray-300 transition-colors'>Home</li> */}
            {/* <li className='cursor-pointer hover:text-gray-300 transition-colors'>Produtos</li> */}
            {/* <li className='cursor-pointer hover:text-gray-300 transition-colors'>Sobre</li> */}
            {/* <li className='cursor-pointer hover:text-gray-300 transition-colors'>Contato</li> */}
            {/* </ul> */}

            {/* TALVEZ DEIXAR ALGO COMO RESULTADO DE JOGOS RODANDO */}
            {/* <div className='h-7 back-purple color-white font-bold text-center flex items-center justify-center gap-16'>
                <p className='rotating-text min-w-48 mr-4'>Venha conhecer a loja</p>
                <p className='rotating-text min-w-48 mr-4'>Venha conhecer a loja</p>
                <p className='rotating-text min-w-48 mr-4'>Venha conhecer a loja</p>
                <p className='rotating-text min-w-48 mr-4'>Venha conhecer a loja</p>
                <p className='rotating-text min-w-48 mr-4'>Venha conhecer a loja</p>
                <p className='rotating-text min-w-48 mr-4'>Venha conhecer a loja</p>
                <p className='rotating-text min-w-48 mr-4'>Venha conhecer a loja</p>
                <p className='rotating-text min-w-48 mr-4'>Venha conhecer a loja</p>
                <p className='rotating-text min-w-48 mr-4'>Venha conhecer a loja</p>
                <p className='rotating-text min-w-48 mr-4'>Venha conhecer a loja</p>
                <p className='rotating-text min-w-48 mr-4'>Venha conhecer a loja</p>
                <p className='rotating-text min-w-48 mr-4'>Venha conhecer a loja</p>
                <p className='rotating-text min-w-48 mr-4'>Venha conhecer a loja</p>
                <p className='rotating-text min-w-48 mr-4'>Venha conhecer a loja</p>
                <p className='rotating-text min-w-48 mr-4'>Venha conhecer a loja</p>
                <p className='rotating-text min-w-48 mr-4'>Venha conhecer a loja</p>
                <p className='rotating-text min-w-48 mr-4'>Venha conhecer a loja</p>
                <p className='rotating-text min-w-48 mr-4'>Venha conhecer a loja</p>
                <p className='rotating-text min-w-48 mr-4'>Venha conhecer a loja</p>
                <p className='rotating-text min-w-48 mr-4'>Venha conhecer a loja</p>
            </div> */}
            <MenuModal isOpen={openModalSearch} onClose={() => setOpenModalSearch(false)} />
        </div>
    )
}

export default Navbar;