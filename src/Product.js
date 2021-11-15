import React from 'react'
import './Product.css'

function Product() {
    return (
        <div className="product">
            <div className="product_info">
                <p className="product_about">About this product bla bla bla</p>
                 <p className="product_price">
                    <small>$</small>
                    <strong>49</strong>
                </p>
                <div className="product_rating">
                    <p>⭐<span>⭐</span></p>
                </div>
                <img className="product_img"
                src="https://www.gomothers.in/wp-content/uploads/2020/08/lays-chips-american-style.jpg" 
                alt=""/>
                <p className="product_seemore">see more</p>
            </div>
            
        </div>
    )
}

export default Product
