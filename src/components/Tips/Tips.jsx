import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import SingleTips from './SingleTips';

const Tips = () => {
    const [tips, setTips] = useState([])
    useEffect(() => {
        fetch('http://localhost:8570/tips')
            .then(res => res.json())
            .then(data => setTips(data))
    }, [])
    return (
        <div className="container">
        <h1 className='text-center mb-5 mt-5' >Some Tips For How to Become Better At Cooking</h1>
            <div className='grid'>
                {
                    tips.map(tip => <SingleTips key={tip.id} tips={tip}></SingleTips>)
                }
            </div >
        </div>
    );
};

export default Tips;