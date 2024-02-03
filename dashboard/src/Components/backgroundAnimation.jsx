import React, { useEffect, useState } from 'react';
import '../Styles/backgroundAnimation.css';
import LoadingDoc from './loadingScreenDoc';

function Background() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 4000)
    }, [])

    const numberOfDrops = 17;

    const renderRaindrops = () => {
        const raindrops = [];

        for (let i = 0; i < numberOfDrops; i++) {
            raindrops.push(<div key={i} className='raindrop' style={{ left: `${Math.random() * 100}vw`, animationDuration: `${Math.random() * 5 + 3}s`}} />)
        }

        return raindrops;
    };

    return(
        <>
        {isLoading ? <LoadingDoc /> :
        <div className='rain-animation-container'>
            {renderRaindrops()}
        </div>
        }
        </>
    );
};

export default Background;
