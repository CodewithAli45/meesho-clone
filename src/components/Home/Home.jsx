import React, { useState } from 'react';
import { ProductCataloge } from './ProductCataloge/ProductCataloge';
import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';
export const Home = () => {
    const [searchQuery, setSearchQuery] = useState("");


    return (
        <div>
            <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} /> 
            <ProductCataloge searchQuery={searchQuery} />
            <Footer />
        </div>
    );
}
