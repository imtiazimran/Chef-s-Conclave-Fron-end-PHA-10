import React, { useEffect, useState } from 'react';
import Recipie from './Recipie';
import './Recipie.css'

const Recipies = () => {
    const [recipies, setRecipes] = useState([])
    useEffect(() => {
        fetch('https://server-imtiazimran.vercel.app/recipies')
            .then(res => res.json())
            .then(data => setRecipes(data))
    }, [])
    return (
        <div className='container mt-5 mb-5'>
            <h1 className='text-center mt-5 mb-5'>See Out Deliciouse Menu</h1>
            <div className='grid'>
                {
                    recipies.map((recipie, i) => <Recipie key={i} item={recipie} ></Recipie>)
                }
            </div>
        </div>
    );
};

export default Recipies;