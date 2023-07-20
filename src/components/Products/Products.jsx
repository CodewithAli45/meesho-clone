import React, { useEffect, useState } from 'react';
import './Products.css';
import {Link} from 'react-router-dom'
import axios from 'axios';
import { Card } from './Card';


export const Products = ({searchQuery}) => {
    const [products, setProducts] = useState([]);

    async function fetchProduct() {
        const response = await axios.get('https://content.newtonschool.co/v1/pr/63b6c911af4f30335b4b3b89/products');
        const data = response.data;
        setProducts(data);
        // console.log('products , ', data);
    }

    useEffect(() => {
        fetchProduct();
    }, []);

    const filteredproducts = products.filter((product) => product.title.toLowerCase().includes(searchQuery.toLowerCase()));


    return (
        <div className='product-grid'>
            {
                filteredproducts.map((product) => (
                    <Link to={`/products/${product.id}`} className='anchor-list' key={product.id}>
                        <div  key={product.id}><Card product={product} /> </div>
                    </Link>
                ))
            }
            
        </div>
    );
}

 
