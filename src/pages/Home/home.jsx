import React, { useState } from 'react';
import Navbar from '../../context/Navbar/navbar';
import ClubsRow from '../../components/ClubsRow/clubsRow';
import ProductCard from '../../components/ProductCard/productCard';
import camisa from '../../assets/camisas/camisaAmarela.webp';
import camisa2 from '../../assets/camisas/camisaPreta.webp';
import camisa3 from '../../assets/camisas/camisaVermelha.webp';


function Home() {

    const products = [
        {
            id: 1,
            name: "Camisa Corinthians 2012",
            price: 199.90,
            image: camisa
        },
        {
            id: 2,
            name: "Camisa Brasil 2002",
            price: 249.90,
            image: camisa2
        },
        {
            id: 3,
            name: "Camisa Barcelona 2015",
            price: 219.90,
            image: camisa3
        },
        {
            id: 4,
            name: "Camisa Real Madrid 2018",
            price: 229.90,
            image: camisa
        },
        {
            id: 5,
            name: "Camisa Milan 2007",
            price: 189.90,
            image: camisa2
        }
    ];

    return (
        <div className='overflow-x-hidden'>
            <Navbar />
            <div className='h-16'></div>
            <div className='bg-stadium h-[300vh] back-gray flex flex-col items-center gap-1 py-1'>
                <div className='w-full h-[70vh] flex flex-col gap-7 items-center justify-center overflow-hidden mt-10'>
                    <div className='flex justify-center'>
                        <h1 className='color-black font-bold text-3xl'>Destaques</h1>
                    </div>
                    <div className='h-[60vh] w-[100vw] items-center flex'>
                        <div className='carousel overflow-hidden flex items-center relative'>
                            <ul className='cards flex shrink-0'>
                                {products.map((product) => (
                                    <ProductCard key={product.id} product={product} />
                                ))}
                            </ul>
                            <ul aria-hidden className='cards flex'>
                                {products.map((product) => (
                                    <ProductCard key={product.id} product={product} />
                                ))}
                            </ul>
                        </div>
                    </div>
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