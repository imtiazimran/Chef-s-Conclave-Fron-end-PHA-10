import React from 'react';
import Navigation from '../Navbar/Navbar';
import Header from '../Header/Header';

import 'bootstrap/dist/css/bootstrap.min.css';
import Recipies from '../Recipies/Recipies';
import Chefs from '../Chef/Chefs';
import Footer from '../Footer/Footer';
import Tips from '../Tips/Tips';

const Leyout = () => {
    return (
        <div>
            <Header></Header>
            <Recipies></Recipies>
            <Chefs></Chefs>
            <Tips></Tips>
        </div>
    );
};

export default Leyout;