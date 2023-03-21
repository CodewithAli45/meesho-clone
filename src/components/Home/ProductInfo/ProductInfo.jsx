import React, {useState, useEffect} from 'react';
import { Header } from '../../Header/Header';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { StarOutlined } from '@ant-design/icons';
import { CiDiscount1 } from 'react-icons/ci'
import './ProductInfo.css';


export function ProductInfo() {
    const { id } = useParams();
    const [product, setProduct] = useState({});
    const [cartText, setCartText] = useState('Add to Cart')
    const [count, setCount] = useState(0);


    useEffect(() => {
        axios
        .get(`https://content.newtonschool.co/v1/pr/63b6c911af4f30335b4b3b89/products/${id}`)
        .then(res => {
            setProduct(res.data);
        })
        .catch(err => console.log(err));
    }, [id]);

    const handleCart = ()=> {
        if(count < 1){
            setCount(count + 1);
        }
        else{
            setCartText('Already in the Cart')
        }
    }


  return (
    <>
        <Header count={count} />
        <div className='product-details2'>
            <div className="left-side">
                <img className='images-small' src={product.image} alt={product.title} />
            </div>
            <div className="middle">
                <img className='images-large' src={product.image} alt={product.title} />
                <button className='product-btn' type='submit' onClick={handleCart}>{cartText}</button>
            </div>
            <div className="right-side">
                <div className="right-side-up">
                    <div className="product-name1">
                        {product.title}
                    </div>
                    <div className="price1">
                        &#8377; {product.price} <span>onwards</span>
                    </div>
                    <div className="discount">
                        <CiDiscount1 className='discount-star' />
                        <span>  &#8377;100 discount on first order</span>
                    </div>
                    <div className="delivery">
                        <span className='delivery-span'>Free Delivery</span>
                    </div>
                    <div className="rating">
                    <span className='rating-text'>
                        <span>
                            {product.rating?.rate}<StarOutlined className='star'/>
                            
                        </span>
                    </span>
                    <span className='rating-review'>
                        <span>
                            {product.rating?.count}
                            <span> Reviews</span>
                        </span>
                    </span>
                </div>
                </div>
                <div className="right-side-middle">
                    <p>Select Size</p>
                    <p>Free Size</p>
                </div>
                <div className="right-side-down">
                    <p>Product Details</p>
                    <p>
                    {product.description}
                    </p>
                </div>
            </div>
        </div>
    </>
  )
}
