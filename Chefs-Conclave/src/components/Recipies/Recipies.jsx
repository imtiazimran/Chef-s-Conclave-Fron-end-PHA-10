import React, { useEffect, useState } from 'react';
import Recipie from './Recipie';
import { Spinner } from 'react-bootstrap';

const Recipies = () => {
    const [recipies, setRecipes] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        fetch('https://server-imtiazimran.vercel.app/recipies')
            .then(res => res.json())
            .then(data => {
                setRecipes(data)
                setIsLoading(false)
            })
    }, [])
    return (
        <div className='container mt-5 mb-5'>
            <h1 className='text-center mt-5 mb-5'>See Out Deliciouse Menu</h1>
            { isLoading &&  <div className='d-block text-center'><Spinner animation="border" variant="primary" /></div>}
            <div className='grid'>
                {
                        recipies.map((recipie, i) => <Recipie key={i} item={recipie} ></Recipie>)
                    
                }
            </div>
        </div>
    );
};

export default Recipies;