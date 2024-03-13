import React, { useContext, useEffect } from 'react'
import './CartItem.css'
import { ShopContext } from '../../Context/ShopContext'
import remove_icon from '../Assets/cart_cross_icon.png'
export const CartItem = () => {
    const {getTotalCartAmount,all_product,cartItems,removeTocart} = useContext(ShopContext);

  return (
    <div className='cartitem'>
        <div className="cartitem-format-main">
            <p>Product</p>
            <p>Titel</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Remove</p>
        </div>
        <hr />
        {all_product.map((e)=>{
            if(cartItems[e.id]>0){
                return<div>
                <div className="cartitem-format cartitem-format-main ">
                    <img src={e.image} className='carticon-product-icon ' alt="" />
                    <p>{e.name}</p>
                    <p>${e.new_price}</p>
                    <button className='cartitem-quantity'>{cartItems[e.id]}</button>
                    <p>${e.new_price*cartItems[e.id]}</p>
                    <img className='cartitem-remove-icon' src={remove_icon} onClick={()=>{removeTocart(e.id)}} alt="" />
                </div>
                <hr />
            </div>
            }
            return null;
        })}
        <div className="cartitem-down">
            <div className="cartitem-total">
                <h1>cart Total</h1>
                <div>
                    <div className='cartitem-total-item'>
                        <p>Subtatal</p>
                        <p>${getTotalCartAmount()}</p>
                    </div>
                    <hr />
                    <div className="cartitem-total-item">
                        <p>Shipping Fee</p>
                        <p>Free</p>
                    </div>
                    <hr />
                    <div className="cartitem-total-item">
                        <h3>Total</h3>
                        <h3>${getTotalCartAmount()}</h3>
                    </div>
                </div>
                <button>PRACEED TO CHECKOUT</button>
            </div>
            <div className="cartitem-promocode">
                <p>If you have a promo code, Enter it here</p>
                <div className="cartitem-promobox">
                    <input type="text" placeholder='promo-code' />
                    <button>Submit</button>
                </div>
            </div>
        </div>
    </div>
  )
}
