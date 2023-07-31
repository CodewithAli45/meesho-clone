import React from 'react';
import './PageCard.css';
import { StarOutlined } from '@ant-design/icons';
import {CiDiscount1} from 'react-icons/ci'


export const PageCard = ({product}) => {

    return (
        <div className='product-details'>
            <div className="img">
               <img className='images' src={product.images} alt={product.title} />
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
                {product.rating}
                    <span>
                        <StarOutlined className='star'/>                     
                    </span>
                </span>
                <span className='rating-review'>
                    <span> {product.reviews}</span>
                </span>
            </div>
        </div>
    );
}
