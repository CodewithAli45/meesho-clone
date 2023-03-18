import React, { useEffect, useState } from 'react';
import '../Header/Header.css';
import { Input } from 'antd';
import { SearchOutlined, AndroidOutlined, UserOutlined, ShoppingCartOutlined } from '@ant-design/icons'
import Myimg from '../../utils/meesho.png'

export const Header = () => {
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsSticky(window.pageYOffset > 0)
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);


    return (
        <header className={`heading ${isSticky ? "sticky-heading" : ""}`}>
            <div className="main-heading">
                <div className="left-heading">
                    <img src={Myimg} alt="meesho" />
                    <div className="search-box">
                        <Input size='large' placeholder='Try Saree, Kurti or search by product code' prefix={<SearchOutlined />} />
                    </div>
                </div>
                <div className="right-heading">
                    <div className='download'>
                        <AndroidOutlined />
                        <span>Download App</span>
                    </div>
                    <div className='supplier'>Become a Supplier</div>
                    <div className='profile'>
                        <UserOutlined />
                        <span>Profile</span>
                    </div>
                    <div className='cart'>
                        <div className="cart-icon">
                            <ShoppingCartOutlined /> 
                            <div className="cart-count">5</div>
                        </div>
                        <span>Cart</span>
                    </div>
                </div>
            </div>
            <div className="sub-heading">
                <ul className="categories">
                    <li>Women Enthnics</li>
                    <li>Women Western</li>
                    <li>Mens</li>
                    <li>Kids</li>
                    <li>Home & Kitchen</li>
                    <li>Beauty & Health</li>
                    <li>Jwellery & Accesories</li>
                    <li>Boys & Footwear</li>
                    <li>Electronics</li>
                </ul>
            </div>
        </header>
    );
}
