import React from 'react'
import "./style.css"
import vision from '../../assets/about-vision.png'

const Index = () => {
    return (
        <div className='about__container'>
            <div className="about__vision">
                <h1 className='about__heading'>Our Vision</h1>
                <p>To inspire people everywhere to reveal their real, authentic selves, empowering them to find freedom through sharing their truth.</p>
                <div className="vision__image__container">
                    <img src={vision} alt="" className='vision__image'/>
                </div>
            </div>
            <div className="about__mission">
                <h1 className='about__heading'>Our Mission</h1>

                <p className='about__mission__subheading'>To create and offer a platform that makes room for all people to connect through their real and mutual experiences</p>
                <ul className='about__list'>
                    <li className='about__list__item'> To inspire courage through real vulnerability </li>
                    <li className='about__list__item'> To draw people all over the world toward each other </li>
                    <li className='about__list__item'> To be innovators and leaders that put people and their emotional health first </li> <br />
                    <li className='about__list__item'> To use our success to build and create change for those most vulnerable in the world</li>
                </ul>

            </div>
        </div>
    )
}

export default Index