import React from 'react';
import './footer.css'
import {BsInstagram, BsFacebook, BsTwitter, BsYoutube, BsLinkedin} from 'react-icons/bs'

export const Footer = () => {
    return (
        <div className='container-footer'>
            <div className="footer-partOne">
                <h2>Shop Non Stop on Meesho</h2>
                <h4 style={{fontSize : "16px"}}>Trusted by more than 1 Crore Indian <br /> Cash on Delivery | Free Delivery</h4>
                <div className="playstore">
                    <img className='playstore-image'  alt="Google Play store" loading="lazy" decoding="async" data-nimg="fill" src="https://images.meesho.com/images/pow/playstore-icon-big_400.webp" ></img>
                    <img className='playstore-image'  alt="Google Play store" loading="lazy" decoding="async" data-nimg="fill" src="https://images.meesho.com/images/pow/appstore-icon-big_400.webp" ></img>
                </div>
                
            </div>
            <div className="footer-partTwo">
                <p>Carrer</p>
                <p>Become a Supplier</p>
                <p>Hall of Fame</p>
            </div>
            <div className="footer-partThree">
                <p>Legal and Policies</p>
                <p>Meesho Tech Blog</p>
                <p>Notices and Returns</p>
            </div>
            <div className="footer-partFour">
                <h3>Reach out to us</h3>
                <div className='footer-logo'>
                    <BsFacebook style={{color:"#0165E1"}}/>
                    <BsInstagram style={{color:"#E1306C"}}/>
                    <BsYoutube style={{color:"#ff0000"}}/>
                    <BsLinkedin style={{color:"#0a66c2"}}/>
                    <BsTwitter style={{color:"#1da1f2"}}/>
                </div>
                
            </div>
            <div className="footer-partFive">
                <h3>Contact Us</h3>
                <p style={{fontSize: '14px', color: "gray"}}>
                Fashnear Technologies Private, <br />
                06-105-B, 06-102, Vaishnavi Signature, <br />
                No. 78/9, Outer Ring Road, <br /> 
                Bengaluru-560103, Karnataka, India <br />
                E-mail address: query@meesho.com <br />
                © 2015-2023 Meesho.com
                </p>
            </div>
            
        </div>
    );
}
