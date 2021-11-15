import React from 'react'
import './Checkout.css'
import Subtotal from './Subtotal'

function Checkout() {
    return (
        <div className="checkout">
            <div className='checkout_left'>
                <h2>Your Shopping List</h2>
                <div className='checkout_title'>
                    <h2>items in list</h2>
                </div>
            </div>

            <div className='checkout_right'>
                <h2>Subtotal</h2>
                <Subtotal/>
               
            </div>

        </div>
    )
}

export default Checkout
