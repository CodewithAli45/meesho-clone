import React from 'react';
import './Card.css';
import { StarOutlined } from '@ant-design/icons';
import {CiDiscount1} from 'react-icons/ci'


export const Card = ({product}) => {


    return (
        <div className='product-details'>
            <div className="img">
               <img className='images' src={product.image} alt={product.title} />
            </div>
            <div className="product-names">
                {product.title}
            </div>
            <div className="prices">
                &#8377; {product.price} <span>onwards</span>
            </div>
            <div className="discount">
                <div><CiDiscount1 className='discount-star' /></div>
                <span>&#8377;100 discount on first order</span>
            </div>
            <div className="delivery">
                <span>Free Delivery</span>
            </div>
            <div className="rating">
                <span className='rating-text'>
                {product.rating?.rate}
                    <span>
                        <StarOutlined className='star'/>                     
                    </span>
                </span>
                <span className='rating-review'>
                    {product.rating?.count}
                        <span> Reviews</span>
                </span>
            </div>
        </div>
    );
}
