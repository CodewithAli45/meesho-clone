import React, {useState,useEffect} from 'react';
import { Header } from '../Header/Header';
import { Products } from '../Products/Products';
import './Home.css'
import { Footer } from '../Footer/Footer';
import Sidebar from './Sidebar';
import axios from 'axios';


export const Home = ({profile}) => {
    const [searchQuery, setSearchQuery] = useState("");
    const [products, setProducts] = useState([]);
    const [priceFilter, setPriceFilter] = useState([]);

    const [inputValue, setInputValue] = useState('');
    const filterdatabycategory = products.filter((item) => item.category === inputValue)

    async function fetchProduct() {
        const response = await axios.get('https://content.newtonschool.co/v1/pr/63b6c911af4f30335b4b3b89/products');
        const data = response.data;
        setProducts(data);
        // console.log('products , ', data);
    }
 
    useEffect(() => {
        fetchProduct();
    }, []);
    const filteredproducts = products.filter((product) => product.title.toLowerCase().includes(searchQuery.toLowerCase()));

    const handlePriceFilterChange = (value) => {
        setPriceFilter(value);
    };
    const categoryFilterFunc = (e) => {
        setInputValue(e.target.value)
        // setInputValue('');
    }
    const filteredData = filteredproducts.filter((item) => {
        if (priceFilter.length === 0) {
            return true;
        }
        return priceFilter.some((price) => price >= item.price);
    });

    return (
        <div >
            <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} profile={profile}/>
            <div className="home-images">
                <img src="home-one.png" alt="home" width={1200}/>
                <img src="home-two.png" alt="home2" width={1200} />
            </div>
            <div className="home-images-responsive">
                <img src="home3.png" alt="home" />
            </div>
            <div className="homepage-display">
                <h2 className='home-text'>Products for you</h2>
                <div className="bottomside-bar">
                    <div className="sidebar">
                        <Sidebar  onPriceFilterChange={handlePriceFilterChange} categoryFilter={categoryFilterFunc} />
                    </div>
                    <Products filteredproducts={filteredData} filterdatabycategory={filterdatabycategory} /> 
                </div>
                
            </div>
            <Footer />
        </div>
    );
}
