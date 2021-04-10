import React from 'react'

import HeroImg from '../assets/illustrations/hero.png'

const Hero = () => {
    return (
        <div className='hero'>

            <div className="hero__left">
                <div>
                    <h1>
                    Get your Web development team<br/> in a few clicks<span>.</span>
                    </h1>
                    <p>Your on-demand web development service.
                        Simple, fast and affordable.
                    </p>
                </div>
                    

                    <div>
                        <a href="/" className="btn btn__primary">Book A Quick Demo</a>
                        <a href="/" className="btn btn__dark">See Pricing</a>
                    </div>

            </div>
            <div className="hero__right">

                 <img className='hero__img' src={HeroImg} alt="illustration"/>
            </div>
           
        </div>
    )
}

export default Hero
