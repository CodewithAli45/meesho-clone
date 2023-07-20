import React, { useContext, useState } from 'react';
import { Mycontextdetails } from '../../MyContext';
import { Header } from '../Header/Header';
import './Cart.css';

export const Cart = () => {
    const [showModal, setShowModal] = useState(false);
    const [address, setAddress] = useState("");
    const [paymentType, setPaymentType] = useState("");
    const [orderPlaced, setOrderPlaced] = useState(false);

    const GlobalState = useContext(Mycontextdetails);
    const state = GlobalState.state;

    localStorage.setItem("usercart", JSON.stringify(state));
    const dispatch = GlobalState.dispatch;

    const total = state.reduce((total, item) => {
        return (total + item.price * item.quantity );
    }, 0);

    const resetCart = () => {
        dispatch({ type: "RESET_CART" });
    };
    const handleSubmit = (e) => {
        // console.log('clicked checkout');
        e.preventDefault(e);
        setShowModal(!showModal);
        setOrderPlaced(true);
        resetCart();
    };

    return (
        <div>
            <Header />
            <div className='cart'>
                {state.map((item, index) => {
                    return (
                        <div className="cart-details" key={index}>
                            <div className="cart-img">
                                <img className='cart-images' src={item.image} alt={item.title} />
                            </div>
                            <div className="cart-middle">
                                <div className="cart-product-names">
                                    {item.title}
                                </div>
                                <div className="cart-item-desc">
                                    {item.description}
                                </div>
                                <div className="cart-prices">
                                    &#8377; {item.price}
                                </div>
        
                                <div className="count-item">
                                    <button className='cart-btn' onClick={() => 
                                        {
                                            if (item.quantity > 1) {
                                                dispatch({ type: "DECREASE", payload: item });
                                              } else {
                                                dispatch({ type: "REMOVE", payload: item });
                                              }
                                        }}><span >-</span></button>
                                    <span className='cart-counting'>{item.quantity}</span>
                                    <button className='cart-btn' onClick={() => dispatch({ type: "INCREASE", payload: item })}><span>+</span></button>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className="checking-out">
                <div className="total-amount">&#8377; {total}</div>
                <button className='checkout' onClick={() => setShowModal(true)}>Checkout</button>
            </div>
            

            {showModal && (
                <div className="modal">
                        <form onSubmit={handleSubmit}>
                            <label> Address:
                            <input
                                type="text"
                                value={address} required
                                onChange={(e) => setAddress(e.target.value)}
                            />
                            </label>
                            <label>Payment Type:
                            <select
                                value={paymentType}
                                onChange={(e) => setPaymentType(e.target.value)}>
                                <option value="credit">Credit Card</option>
                                <option value="debit">Debit Card</option>
                                <option value="paypal">PayPal</option>
                            </select>
                            </label>
                            <button type="submit">Complete Payment</button>
                        </form>
                    )
                </div>
            )}
            {
                orderPlaced && (
                    <div className={`ordered ${orderPlaced ? 'fade-in' : ''}`}>
                        <h2>Your order has been booked.</h2>
                        <h2 style={{textAlign:'center'}}>🎉 🎉 🎉</h2>
                    </div>
                ) 
            }
        </div>
    );
}

