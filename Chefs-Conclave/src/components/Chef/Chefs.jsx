import React, { useEffect, useState } from 'react';
import ChefInfo from './ChefInfo'
import './Chef.css'
const Chefs = () => {
    const [chefs, setChefs] = useState([])
    useEffect(() => {
        fetch('http://localhost:8570/chef')
            .then(res => res.json())
            .then(data => setChefs(data))
    }, [])
    return (
        <div className='chefs'>
        <h1 className='text-center mb-5'>Meet With Our Honorable Chef's</h1>
         <div className='container grid'>
         {
            chefs.map((chef,i)=> <ChefInfo key={i} chef={chef}></ChefInfo>)
         }
         </div>
        </div>
    );
};

export default Chefs;