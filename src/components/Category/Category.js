import React from 'react'
import "./Category.css"

const Category = (props) => {
    return (
        <div className='category-container'>
            <div className='img-container'>
                <img src={props.src} />
            </div>
            <a href='#' className='category-link'>{props.title.toUpperCase()}</a>
            <div className='category-btn-container'>
                <button className='category-btn'>{props.title.toUpperCase()}</button>
            </div>
        </div>
    )
}

export default Category