import React from 'react'
import TrustedImg from '../assets/imgs/trusted-companies.png'
const TrustedCompanies = () => {
    return (
        <section>
            <div className="container">
                <div className="container__img">
                    <img src={TrustedImg} alt="trusted companies"/>
                </div>
                <div className="container__text">
                    <p>Over 1,200 small businesses, agencies, startups & marketing teams have used ManyPixels for their design needs.</p>
                </div>
                
            </div>

        </section>
            
       
    )
}

export default TrustedCompanies
