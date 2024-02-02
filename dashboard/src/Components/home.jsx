import React, { useEffect, useState } from 'react';
import '../Styles/home.css';
import logo from '../Assets/ebayLogo.svg';
import Loading from './loadingScreen';
import config from '../config/homeSettings.json';
import Selling from '../Assets/selling.svg';
import Products from '../Assets/products.svg';
import Pricing from '../Assets/pricing.svg';
import Platforms from '../Assets/platforms.svg';
import Shipping from '../Assets/shipping.svg'
import Customer from '../Assets/customer.svg'

const Header = config.header;
const Para = config.paragraph;
const Intro = config.selling.intro;
const SellingPara = config.selling.sellingPara;
const PIntro = config.products.intro;
const ProductPara = config.products.productPara;
const PrIntro = config.pricing.intro;
const PricingPara = config.pricing.pricingPara;
const PlIntro = config.platforms.intro;
const PlatformPara = config.platforms.platformPara;
const SIntro = config.shipping.intro
const ShippingPara = config.shipping.shippingPara;
const CIntro = config.customer.intro;
const CustomerPara = config.customer.customerPara;

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
                <header className='home-header'>{Header}</header>
            </div>
            <div className='home-image'>
                <img className='home-image-logo' src={logo} alt="logo" />
            </div>
            <div className='home-para-container'>
                <div className='home-para'>
                    <p id='home-para'>{Para}</p>
                </div>
            </div>
            <div className='home-table-container'>
                <div className='home-row-1'>
                <div className='home-table-1'>
                    <article className='home-article'>
                        <div className='home-art'>
                            <img className='home-table-logo' src={Selling} alt="Selling" />
                        </div>
                        <div className='home-art-selling'>
                            <h1 className='home-art-h1'>{Intro}</h1>
                        </div>
                        <div className='home-art-selling'>
                            <h2 className='home-art-h2'>{SellingPara}</h2>
                        </div>
                    </article>
                </div>
                <div className='home-table-2'>
                    <article className='home-article'>
                        <div className='home-art'>
                            <img className='home-table-logo' src={Products} alt="Products" />
                        </div>
                        <div className='home-art-products'>
                            <h1 className='home-art-h1'>{PIntro}</h1>
                        </div>
                        <div className='home-art-products'>
                            <h2 className='home-art-h2'>{ProductPara}</h2>
                        </div>
                    </article>
                </div>
                <div className='home-table-3'>
                    <article className='home-article'>
                        <div className='home-art'>
                            <img className='home-table-logo' src={Pricing} alt="Pricing" />
                        </div>
                        <div className='home-art-pricing'>
                            <h1 className='home-art-h1'>{PrIntro}</h1>
                        </div>
                        <div className='home-art-pricing'>
                            <h2 className='home-art-h2'>{PricingPara}</h2>
                        </div>
                    </article>
                </div>
            </div>
            <div className='home-row-2'>
                <div className='home-table-4'>
                    <article className='home-article'>
                        <div className='home-art'>
                            <img className='home-table-logo' src={Platforms} alt="Platforms" />
                        </div>
                        <div className='home-art-platforms'>
                            <h1 className='home-art-h1'>{PlIntro}</h1>
                        </div>
                        <div className='home-art-platforms'>
                            <h2 className='home-art-h2'>{PlatformPara}</h2>
                        </div>
                    </article>
                </div>
                <div className='home-table-5'>
                    <article className='home-article'>
                        <div className='home-art'>
                            <img className='home-table-logo' src={Shipping} alt="Shipping" />
                        </div>
                        <div className='home-art-shipping'>
                            <h1 className='home-art-h1'>{SIntro}</h1>
                        </div>
                        <div className='home-art-shipping'>
                            <h2 className='home-art-h2'>{ShippingPara}</h2>
                        </div>
                    </article>
                </div>
                <div className='home-table-6'>
                    <article className='home-article'>
                        <div className='home-art'>
                            <img className='home-table-logo' src={Customer} alt="Customer" />
                        </div>
                        <div className='home-art-customer'>
                            <h1 className='home-art-h1'>{CIntro}</h1>
                        </div>
                        <div className='home-art-customer'>
                            <h2 className='home-art-h2'>{CustomerPara}</h2>
                        </div>
                    </article>
                </div>
            </div>
            </div>
        </div>
        }
        </>
    )
}

export default Home;