import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom'
import './ProductCataloge.css'
import {SingleProduct} from '../../Home/ProductCataloge/SingleProduct/SingleProduct'

export const ProductCataloge = ({searchQuery}) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://content.newtonschool.co/v1/pr/63b6c911af4f30335b4b3b89/products')
        .then(response => response.json())
        .then(data => {
            setProducts(data);
        });
    }, []);

    const filteredproducts = products.filter((product) => product.title.toLowerCase().includes(searchQuery.toLowerCase()))

    return (
        <div className='product-grid'>
            {
                filteredproducts.map(product => (
                    <Link className='anchor-list' key={product.id} to={`/products/${product.id}`}>
                        <div className="product" key={product.id}><SingleProduct product={product} /> </div>
                    </Link>
                ))
            }
        </div>
    );
}
