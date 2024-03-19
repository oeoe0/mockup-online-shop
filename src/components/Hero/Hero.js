import React from 'react'
import "./Hero.css"
import clothes from "../../resources/clothes.jpg"
import jeans from "../../resources/jeans.jpg"
import shirts from "../../resources/shirts.jpg"

const Hero = () => {
    return (
        <div className='hero-container'>
            <div className='description-container'>
                <h3 className='title'>Elevate Your Style with Quality Clothing</h3>
                <h4 className='text'>Discover the essence of luxury with our meticulously crafted garments. Embrace comfort and sophistication in every stitch. Elevate your wardrobe today.</h4>
                <button className='browse-btn'>Browse</button>
            </div>
            <div className='products-container'>
                <div className='product-long'><img alt='' src={clothes} /></div>
                <div className='product-normal1'><img alt='' src={jeans} /></div>
                <div className='product-normal2'><img alt='' src={shirts} /></div>
            </div>
        </div>
    )
}

export default Hero