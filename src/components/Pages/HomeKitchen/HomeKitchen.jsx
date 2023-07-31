import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Header } from '../../Header/Header';
import { PageCard } from '../PageCard';
import '../Pages.css';

export const HomeKitchen = () => {
    const [products, setProducts] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        const fetchProducts = async() => {
            const response = await axios.get('https://long-lime-fly-tux.cyclic.app/products?category=kitchen');
            const data = response.data;
            console.log('women is ', data);
            setProducts(data);
        }
        fetchProducts();
    
    }, [])
    const filteredproducts = products.filter((product) => product.title.toLowerCase().includes(searchQuery.toLowerCase()));
    return (
        <div>
            <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
            <div className='pages'>
            {
                filteredproducts.map((product) => (
                    <div  key={product._id}>
                        <PageCard product={product}/>
                    </div>
                    
                ))
            }
            </div>
        </div>
    );
}


