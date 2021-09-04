import React, { useContext, useState } from 'react';
import classes from '../UI/cartDetails.module.css';
import CartContext from '../Context/cart-details';


function CartDetails(props){

    let cart_ctx = useContext(CartContext);
    // console.log(cart_ctx);


    return <div className={classes.cart_details_style}>
        <button onClick={props.enableCartPage}>Back</button>
        {
            cart_ctx.items.map((i)=>{
                // console.log(i);
               return <li key={i.id} className={classes.cart_header}>
                    <div className={classes.cart_image}>Image</div>
                    <div>{i.p_name}</div>
                    <div>{i.price}</div>
                    <div className={classes.inc_dec_btn}>
                    <button onClick={()=>{cart_ctx.addItem(i)}}>+</button>
                    <div>{i.amount}</div>
                    <button onClick={()=>{cart_ctx.removeItem(i.id)}}>-</button>
                    </div>
                    <div>{`${i.amount}*${i.price} =`}
                    <span>{i.amount*i.price}</span>
                    </div>
                </li>
            })
        }
        <div className={classes.totalAmount}>Total Price: <span className={classes.totalpriceStyle}>Rs. {cart_ctx.totalAmount}</span></div>
    </div>
}

export default CartDetails;