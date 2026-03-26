import React from 'react';
import Navbar from '../../components/Navbar/navbar';
import banner from "../../assets/bannerNovaColecao.png";
import ClubsRow from '../../components/ClubsRow/clubsRow';

function Home() {
    return (
        <div className='overflow-x-hidden'>
            <Navbar />
            <div className='h-fit back-gray flex flex-col items-center gap-1 py-1'>
                <div className='w-1/2 rounded-lg overflow-hidden shadow-[0_0_20px_rgba(47,140,208,0.5)]'>
                    <img src={banner} alt="banner frete gratis" className='imageBanner' />
                </div>
                
                <div className='flex flex-col h-10 items-center gap-4 mt-10 w-3/4'>
                    <ClubsRow />
                </div>

                <div className='flex flex-col h-10 items-center gap-4 mt-10 w-3/4'>

                </div>
            </div>
        </div>
    )
}

export default Home;