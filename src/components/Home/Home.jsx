import React, { useState } from 'react';
import { ProductCataloge } from './ProductCataloge/ProductCataloge';
import { Header } from '../Header/Header';

export const Home = () => {
    const [searchQuery, setSearchQuery] = useState("");


    return (
        <div>
            <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
            <ProductCataloge searchQuery={searchQuery} />
        </div>
    );
}
