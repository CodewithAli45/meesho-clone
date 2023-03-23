import React, { useContext } from 'react';
import '../Header/Header.css';
import { Input } from 'antd';
import {Link} from 'react-router-dom'
import { SearchOutlined, AndroidOutlined, UserOutlined, ShoppingCartOutlined } from '@ant-design/icons'
import Myimg from '../../utils/meesho.png';
import { MyContextdetails } from '../Mycontext/Mycontext';

export const Header = ({searchQuery, setSearchQuery}) => {

    const GlobalState = useContext(MyContextdetails);

    const handleInputSearch = (e) => {
        setSearchQuery(e.target.value);
    }

    return (
        <header className="sticky-heading">
            <div className="main-headings">
                <div className="left-heading">
                    <Link to="/" className='anchor-list'>
                        <img src={Myimg} alt="meesho" />
                    </Link>
                    <div className="search-box">
                        <Input size='large' type='text' value={searchQuery} onChange={handleInputSearch}
                        placeholder='Try Saree, Kurti or search by product code' prefix={<SearchOutlined />} />
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
                        <Link to='/login'className='anchor-list'>
                            <span>Profile</span>
                        </Link>
                    </div>
                    <div className='header-cart'>
                        <div className="cart-icon">
                            <ShoppingCartOutlined /> 
                            <div className="cart-count">{GlobalState.state.length}</div>
                        </div>
                        <Link to={`/cart`} className='anchor-list'>
                            <span>Cart</span>
                        </Link>
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
