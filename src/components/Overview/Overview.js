import React, { useEffect } from 'react'
import "./Overview.css"
import Category from '../Category/Category'
import shirts from "../../resources/shirts.jpg"
import jackets from "../../resources/jacket.jpg"
import jeans from "../../resources/jeans.jpg"
import pants from "../../resources/pants.jpg"
import shoes from "../../resources/shoes2.jpg"
import looks from "../../resources/clothes.jpg"
import accesories from "../../resources/bracelet.jpg"
import hats from "../../resources/hat.jpg"

const Overview = () => {
    const items = [
        {
            title: "shirts",
            src: shirts
        },
        {
            title: "jackets",
            src: jackets
        },
        {
            title: "jeans",
            src: jeans
        },
        {
            title: "pants",
            src: pants
        },
        {
            title: "shoes",
            src: shoes
        },
        {
            title: "looks",
            src: looks
        },
        {
            title: "accesories",
            src: accesories
        },
        {
            title: "hats",
            src: hats
        }
    ]


    let categories = []

    for(let n = 0; n < items.length; n++) {
        categories.push(<Category title={items[n].title} src={items[n].src} />)
    }


    return (
        <div className='overview-container'>
            <h4>Categories</h4>
            <div className='categories-container'>
                {categories}
            </div>
        </div>
    )
}

export default Overview