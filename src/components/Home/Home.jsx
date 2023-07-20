import React, {useState} from 'react';
import { Header } from '../Header/Header';
import { Products } from '../Products/Products';
import './Home.css'
import { Footer } from '../Footer/Footer';


export const Home = ({profile}) => {
    const [searchQuery, setSearchQuery] = useState("");
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
            <h2 className='home-text'>Products for you</h2>
            <Products searchQuery={searchQuery} /> 
            <Footer />
        </div>
    );
}
