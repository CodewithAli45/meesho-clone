import React from 'react';
import './Products.css';
import {Link} from 'react-router-dom'
import { Card } from './Card';


export const Products = ({ filteredproducts, filterdatabycategory}) => {

    return (
        <div className='product-grid'>
            {
                filterdatabycategory > 0 ? filteredproducts.map((product) => (
                    <Link to={`/products/${product.id}`} className='anchor-list' key={product.id}>
                        <div  key={product.id}><Card product={product} /> </div>
                    </Link>
                )) : (
                    filteredproducts.map((product) => (
                        <Link to={`/products/${product.id}`} className='anchor-list' key={product.id}>
                            <div  key={product.id}><Card product={product} /> </div>
                        </Link>
                ))
                )
            }
             
        </div>
    );
}

 
