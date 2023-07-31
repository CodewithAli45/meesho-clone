import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Image } from '@chakra-ui/react'
import { Header } from '../../Header/Header';
import { PageCard } from '../PageCard';
import '../Pages.css';

export const Electronics = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async() => {
            const response = await axios.get('https://long-lime-fly-tux.cyclic.app/products?category=smartphones');
            const data = response.data;
            console.log('women is ', data);
            setProducts(data);
        }
        fetchProducts();
    
    }, [])
    return (
        <div>
            <Header />
            <div className='cat-heading'>Women Ethnics Wear</div>
            <div className='pages'>
            {
                products.map((product) => (
                    <div  key={product._id}>
                        <PageCard product={product}/>
                    </div>
                    
                ))
            }
            <Image width={{base:"200px",md:"300px",lg:"500px"}} margin="auto" src="https://i.ibb.co/Y02VKys/work-work-in-progress.gif" alt="" />
            </div>
        </div>
    );
}


