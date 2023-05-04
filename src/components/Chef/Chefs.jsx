import React, { useEffect, useState } from 'react';
import ChefInfo from './ChefInfo';
import './Chef.css';
import { Spinner } from 'react-bootstrap';

const Chefs = () => {
    const [chefs, setChefs] = useState([]);
    const [isLoading, setIsLoading] = useState(true); // Add isLoading state

    useEffect(() => {
        fetch('https://server-imtiazimran.vercel.app/chef')
            .then(res => res.json())
            .then(data => {
                setChefs(data);
                setIsLoading(false); // Set isLoading to false once data is fetched
            })
            .catch(error => console.error(error));
    }, []);

    return (
        <div className='chefs'>
            <h1 className='text-center mb-5'>Meet With Our Honorable Chef's</h1>
            {isLoading && <div className='d-block text-center'><Spinner animation="border" variant="primary" /></div>}
            <div className='container grid'>
            
                {
                    // Show ChefInfo components once data is fetched
                    chefs.map(chef => <ChefInfo key={chef.id} chef={chef} />)
                }
            </div>
        </div>
    );
};

export default Chefs;
