import React from 'react';
import Navigation from '../Navbar/Navbar';
import Header from '../Header/Header';

import 'bootstrap/dist/css/bootstrap.min.css';
import Recipies from '../Recipies/Recipies';
import Chefs from '../Chef/Chefs';

const Leyout = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Header></Header>
            <Recipies></Recipies>
            <Chefs></Chefs>
        </div>
    );
};

export default Leyout;