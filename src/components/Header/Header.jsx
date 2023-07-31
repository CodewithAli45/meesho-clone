import React, { useState, useContext } from 'react';
import './Header.css';
import { Input } from 'antd';
import {Link} from 'react-router-dom';
import {Mycontextdetails} from '../../MyContext'
import { SearchOutlined, AndroidOutlined, UserOutlined, ShoppingCartOutlined,MenuFoldOutlined } from '@ant-design/icons'


export const Header = ({searchQuery, setSearchQuery, profile}) => {

    const GlobalState = useContext(Mycontextdetails);

    const handleInputSearch = (e) => {
        setSearchQuery(e.target.value);
    }
    const [responsive, setResponsive] = useState(false);

    function handleResponsive(){
        setResponsive(!responsive);
    }

    return (
        <header className="sticky-heading">
            <div className="main-headings">
                <div className="left-heading" >
                    <Link to={'/'} ><img src='meesho.png' alt="meesho" /> </Link>
                    <div className="search-box">
                        <Input size={'large'} value={searchQuery} onChange={handleInputSearch} type='text'className='search-box-input'
                        placeholder='Try Saree, Kurti or search by product code' prefix={<SearchOutlined />} />
                    </div>
                </div>
                <div className="right-heading">
                    <div className='download'>
                        <AndroidOutlined /> 
                        <span><a href="https://play.google.com/store/apps/details?id=com.meesho.supply&hl=en&gl=US" target='none'>Download App</a> </span>
                    </div>
                    <div className='supplier'>Become a Supplier</div>
                    <div className='profile'>
                        <Link to='/login'className='anchor-list'>
                            <UserOutlined /><div><span>{profile}</span></div>
                        </Link>
                    </div>
                    <div className='header-cart'>
                        <div className="cart-icon">
                        <Link to={`/cart`} className='anchor-list'>
                            <ShoppingCartOutlined /> 
                            <div className="cart-count">{GlobalState.state.length}</div></Link>
                        </div>
                        
                    </div>
                </div>
            </div>
            <div className="main-headings-responsive">
                <div className="left-heading-responsive" >
                    <div className='part-one'>
                        <button className='responsive' onClick={handleResponsive}>
                        <MenuFoldOutlined />
                        </button>
                        <Link to="/" className='anchor-list'>
                            <img src='meesho.png' alt="meesho" />   
                        </Link>
                    </div>
                    <div className='part-two'>
                        <div className='header-cart'>
                        <Link to={`/cart`} className='anchor-list'>
                            <div className="cart-icon">
                                <ShoppingCartOutlined /> 
                                <div className="cart-count">{GlobalState.state.length}</div>
                            </div>
                        </Link>
                        </div>
                        <div className='profile'>
                        <Link to='/login'className='anchor-list'>
                            <UserOutlined /><div>{profile} </div>
                        </Link>
                        </div>
                    </div>
                    
                </div>
                <div className="right-heading-responsive">
                    <div className="search-box-responsive">
                        <input value={searchQuery} onChange={handleInputSearch} placeholder='Try Saree, Kurti or search by product code' type="text" name="" id="" />
                    </div>
                </div>
            </div>
            <div className="sub-heading">
                <ul className="categories">
                    <Link to={'/category/womenethnics'} className='anchor-list'><li>Women Ethnics</li></Link>
                    <Link to={'/category/womenewestern'}className='anchor-list'><li>Women Western</li></Link>
                    <Link to={'/category/men'}className='anchor-list'><li>Men</li></Link>
                    <Link to={'/category/kids'}className='anchor-list'><li>Kids</li></Link>
                    <Link to={'/category/homekitchen'}className='anchor-list'><li>Home & Kitchen</li></Link>
                    <Link to={'/category/beautyhealth'}className='anchor-list'><li>Beauty & Health</li></Link>
                    <Link to={'/category/accessories'}className='anchor-list'><li>Jewellery & Accessories</li></Link>
                    <Link to={'/category/bags&footware'}className='anchor-list'><li>Bags & Footware</li></Link>
                    <Link to={'/category/electronics'}className='anchor-list'><li>Electronics</li></Link>
                </ul>
            </div>
            {
                responsive && <div className="sub-heading-responsive">
                <ul >
                    <Link to={'/category/womenethnics'}className='anchor-list'><li>Women Ethnics</li></Link>
                    <Link to={'/category/womenewestern'}className='anchor-list'><li>Women Western</li></Link>
                    <Link to={'/category/men'}className='anchor-list'><li>Men</li></Link>
                    <Link to={'/category/kids'}className='anchor-list'><li>Kids</li></Link>
                    <Link to={'/category/homekitchen'}className='anchor-list'><li>Home & Kitchen</li></Link>
                    <Link to={'/category/beautyhealth'}className='anchor-list'><li>Beauty & Health</li></Link>
                    <Link to={'/category/accessories'}className='anchor-list'><li>Jewellery & Accessories</li></Link>
                    <Link to={'/category/bags&footware'}className='anchor-list'><li>Bags & Footware</li></Link>
                    <Link to={'/category/electronics'}className='anchor-list'><li>Electronics</li></Link>
                </ul>
            </div>
            }
            
        </header>
    );
}
