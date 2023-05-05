import React from 'react';
import Header from '../Header/Header';

import 'bootstrap/dist/css/bootstrap.min.css';
import Recipies from '../Recipies/Recipies';
import Chefs from '../Chef/Chefs';
import Tips from '../Tips/Tips';
import useTitle from '../CustomHooks/useTitle';

const Leyout = () => {
    useTitle("Chef's Conclave")
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