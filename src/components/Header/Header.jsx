import React, { useState, useContext } from 'react';
import './Header.css';
import { Input } from 'antd';
import {Link} from 'react-router-dom';
import {Mycontextdetails} from '../../MyContext'
import { SearchOutlined, AndroidOutlined, UserOutlined, ShoppingCartOutlined,MenuFoldOutlined } from '@ant-design/icons'


export const Header = ({searchQuery, setSearchQuery, profile}) => {
    const [iscategory, setIscategory] = useState(false);

  const categories = [
    {
      title: 'Women Enthnics',
      subCategories: ['Sarees', 'Kurtis', 'Salwar Suits', 'Lehengas'],
    },
    {
      title: 'Women Western',
      subCategories: ['Dresses', 'Tops', 'Jeans', 'Jackets', 'Plazzo', 'Shorts', 'Bra', 'Nightsuits'],
    },
    {
        title: 'Mens',
        subCategories: ['Dresses', 'Shirts', 'Jeans', 'Trousers', 'Jackets', 'Shoes', 'Accessories'],
    },
    {
        title: 'Kids',
        subCategories: ['Dresses', 'Rompers', 'Toys', 'Stationary', 'Baby Care'],
      },
      {
        title: 'Home & Kitchen',
        subCategories: ['Bedsheets', 'Doormats', 'Curtains', 'Clocks', 'Kitchen Storage'],
      },
      {
        title: 'Beauty & Health',
        subCategories: ['Makeup', 'Sanitizers', 'Oral Care', 'Deodrants'],
      },
      {
        title: 'Jwellery & Accessories',
        subCategories: ['Earnings', 'Mangalsutras', 'Studs', 'Bangles', 'Necklace'],
      },
      {
        title: 'Boys & Footware',
        subCategories: ['Handbag', 'Clutches', 'Wallet'],
      },
      {
        title: 'Electronics',
        subCategories: ['Mobile', 'Smartwatches', 'Mobile Holder', 'Cases & Covers', 'Home Appliance'],
      },
  ];

  const handleCategory = (category) => {
    setIscategory(!iscategory);
    console.log(category);
  };
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
                {categories.map((category) => (
                    <li
                    key={category.title}
                    onClick={() => handleCategory(category)}
                    >
                    {category.title}
                        { iscategory && (
                                (category.subCategories.map((subCategory, index) => (
                                    <div className="sub-categories">
                                        <ul key={index}>
                                        <li >{subCategory}</li>
                                    </ul>
                                    </div>
                                    
                                )))
                            )}
                    
                    </li>
                ))}
                </ul>
            </div>
            {
                responsive && <div className="sub-heading-responsive">
                <ul >
                    {categories.map((category) => (
                        <li
                        key={category.title}
                        onClick={() => handleCategory(category)}
                        >
                        {category.title}
                        { iscategory && (
                                (category.subCategories.map((subCategory, index) => (
                                    <div className="sub-categories">
                                        <ul key={index}>
                                        <li >{subCategory}</li>
                                    </ul>
                                    </div>
                                    
                                )))
                            )}
                        </li>
                    ))}
                </ul>
            </div>
            }
            
        </header>
    );
}
