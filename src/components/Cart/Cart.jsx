import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Header } from '../Header/Header';
import './Cart.css'


export function Cart(props) {
    const { id } = useParams();
    const [product, setProduct] = useState({});
    const [quantity, setQuantity] = useState(1);
    const [showModal, setShowModal] = useState(false);
    const [address, setAddress] = useState("");
    const [paymentType, setPaymentType] = useState("");

    useEffect(() => {
        axios.get(`https://content.newtonschool.co/v1/pr/63b6c911af4f30335b4b3b89/products/${id}`)
        .then(res => {
            setProduct(res.data);
        })
        .catch(err => console.log(err));
    }, [id]);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Code to complete payment
        // Show toast to confirm order placed
        setShowModal(false);
    };


    const handleIncrease = () => {
        setQuantity(quantity + 1);
    }

    const handleDecrease = () => {
        if(quantity > 1){
            setQuantity(quantity - 1);
        } 
    }

    return (
        <div>
            <Header />
            <div className='cart'>
                <div className="cart-details">
                    <div className="cart-img">
                        <img className='cart-images' src={product.image} alt={product.title} />
                    </div>
                    <div className="cart-middle">
                        <div className="cart-product-names">
                            {product.title}
                        </div>
                        <div className="cart-item-desc">
                            {product.description}
                        </div>
                        <div className="cart-prices">
                            &#8377; {product.price}
                        </div>

                        <div className="count-item">
                            <button className='cart-btn' onClick={handleDecrease}><span >-</span></button>
                            <span className='cart-counting'>{quantity}</span>
                            <button className='cart-btn' onClick={handleIncrease}><span>+</span></button>
                            <button className='checkout' onClick={() => setShowModal(true)}>Checkout</button>
                        </div>
                    </div>
                    <div className="total-amount">
                        <div className="subtotal-prices">
                            &#8377; subtotalPrice
                        </div>
                        <div className="amount">
                            <p>total</p>
                        </div>
                    </div>
                </div>
            </div>
            {showModal && (
                <div className="modal">
                <form onSubmit={handleSubmit}>
                    <label>
                    Address:
                    <input
                        type="text"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                    />
                    </label>
                    <label>
                    Payment Type:
                    <select
                        value={paymentType}
                        onChange={(e) => setPaymentType(e.target.value)}
                    >
                        <option value="credit">Credit Card</option>
                        <option value="debit">Debit Card</option>
                        <option value="paypal">PayPal</option>
                    </select>
                    </label>
                    <button type="submit">Complete Payment</button>
                </form>
                </div>
            )}
    </div>
    )
}
