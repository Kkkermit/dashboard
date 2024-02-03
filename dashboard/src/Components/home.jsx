import React, { useEffect, useState } from 'react';
import '../Styles/home.css';
import logo from '../Assets/Images/js.png';
import Loading from './loadingScreen';
import config from '../config/homeSettings.json';
import Selling from '../Assets/selling.svg';
import Products from '../Assets/products.svg';
import Pricing from '../Assets/pricing.svg';
import Platforms from '../Assets/platforms.svg';
import Shipping from '../Assets/shipping.svg';
import Customer from '../Assets/customer.svg';
import EbayLogo from '../Assets/ebayLogo.svg';

// Header info //
const Header = config.header;
const Para = config.paragraph;
const ReviewHeader = config.reviewHeader
// Selling info //
const Intro = config.selling.intro;
const SellingPara = config.selling.sellingPara;
// Products info //
const PIntro = config.products.intro;
const ProductPara = config.products.productPara;
// Pricing info //
const PrIntro = config.pricing.intro;
const PricingPara = config.pricing.pricingPara;
// Platforms info //
const PlIntro = config.platforms.intro;
const PlatformPara = config.platforms.platformPara;
// Shipping info //
const SIntro = config.shipping.intro
const ShippingPara = config.shipping.shippingPara;
// Customer info //
const CIntro = config.customer.intro;
const CustomerPara = config.customer.customerPara;
// Reviews info //
const RIntro1 = config.ebayReviews.intro1;
const Reviews1 = config.ebayReviews.review1;
const RIntro2 = config.ebayReviews.intro2;
const Reviews2 = config.ebayReviews.review2;
const RIntro3 = config.ebayReviews.intro3;
const Reviews3 = config.ebayReviews.review3;
const RIntro4 = config.ebayReviews.intro4;
const Reviews4 = config.ebayReviews.review4;


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
            <div className='home-blank-container'>
                <div className='home-blank-doc'>
                    <header id='home-blank-doc'></header>
                </div>
            </div>
            <div className='home-para-container'>
                <header id='home-para'>{ReviewHeader}</header>
            </div>
            <ul className='has-scrollbar'>
            <div className='home-reviews-container'>
                <div className='home-reviews'>
                    <article className='home-reviews-article-1'>
                        <div className='home-reviews-img'>
                            <img id='home-reviews-img' src={EbayLogo} alt="Ebay Logo" />
                        </div>
                        <div className='home-reviews-box'>
                            <h1 className='home-art-h1'>{RIntro1}</h1>
                            <h2 className='home-art-h2'>{Reviews1}</h2>
                        </div>
                    </article>
                </div>
                <div className='home-reviews'>
                    <article className='home-reviews-article-2'>
                        <div className='home-reviews-img'>
                            <img id='home-reviews-img' src={EbayLogo} alt="Ebay Logo" />
                        </div>
                        <div className='home-reviews-box'>
                            <h1 className='home-art-h1'>{RIntro2}</h1>
                            <h2 className='home-art-h2'>{Reviews2}</h2>
                        </div>
                    </article>
                </div>
                <div className='home-reviews'>
                    <article className='home-reviews-article-3'>
                        <div className='home-reviews-img'>
                            <img id='home-reviews-img' src={EbayLogo} alt="Ebay Logo" />
                        </div>
                        <div className='home-reviews-box'>
                            <h1 className='home-art-h1'>{RIntro3}</h1>
                            <h2 className='home-art-h2'>{Reviews3}</h2> 
                        </div>
                    </article>
                </div>
                <div className='home-reviews'>
                    <article className='home-reviews-article-4'>
                        <div className='home-reviews-img'>
                            <img id='home-reviews-img' src={EbayLogo} alt="Ebay Logo" />
                        </div>
                        <div className='home-reviews-box'>
                            <h1 className='home-art-h1'>{RIntro4}</h1>
                            <h2 className='home-art-h2'>{Reviews4}</h2>
                        </div>
                    </article>
                </div>
            </div>
            </ul>
        </div>
        }
        </>
    )
}

export default Home;