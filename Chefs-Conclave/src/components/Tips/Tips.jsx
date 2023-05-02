import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import SingleTips from './SingleTips';

const Tips = () => {
    const [tips, setTips] = useState([])
    useEffect(() => {
        fetch('https://server-imtiazimran.vercel.app/tips')
            .then(res => res.json())
            .then(data => setTips(data))
    }, [])
    console.log(tips)
    return (
        <div>
           {
            tips.map(tip => <SingleTips key={tip.id} tips={tip}></SingleTips>)
           }
        </div >
    );
};

export default Tips;