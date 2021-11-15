import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
    return (
        <div className="home">
          <div className="home_container">
          <img className="home_img"
           src="https://i.gadgets360cdn.com/large/amazon_great_indian_festival_sale_2021_image_1_1633097531416.jpg"
           alt=""/>

           <div className="home_row">
             <Product/>
             <Product/>
             <Product/>
             <Product/>
           </div>

           <div className="home_row">
           <Product/>
           <Product/>
           <Product/>
           <Product/>
             
           </div>
          </div>
            
        </div>
    )
}

export default Home
