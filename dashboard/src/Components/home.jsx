import React, { useEffect, useState } from 'react';
import '../Styles/home.css';
import logo from '../Assets/logo.svg'
import Loading from './loadingScreen';

function Home() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 4000)
    }, [])

    return(
        <>
        {isLoading ? <Loading /> :
        <div className='home-container'>
            <div className='home-header-container'>
                <header className='home-header'>- JESNEAKERS -</header>
            </div>
            <div className='home-image'>
                <img className='home-image-logo' src={logo} alt="logo" />
            </div>
        </div>
        }
        </>
    )
}

export default Home;