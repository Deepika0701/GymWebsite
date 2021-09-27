import React from 'react'
import aboutImage from './aboutImage.jpg'
import './style.css'


const AboutGym = () => {
    return (
        <>
            <div className="aboutImg">
                <img src={aboutImage} alt="About"  />
            </div>
            <div className="aboutus">
        
        
                <h1 className="m-bottom heading">About Us</h1>
                <p>Here at our gym, we have a team of approximately forty awesome superstars and we owe our success to each and every one of them!</p>

                <p>Because we hire for culture first and foremost, we have some pretty awesome people working with us who hustle everyday to give you a positive customer experience.</p>

                <p>At Gym and Fitness, customers are at the centre of what we do and why we do it! We have a team of knowledgeable sales representatives who are ready to assist you with your gym equipment needs.</p>
            </div>
        </>
    )
}

export default AboutGym
