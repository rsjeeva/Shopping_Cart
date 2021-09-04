import React, { useContext, useState} from 'react';
import CartContext from '../Context/cart-details';
import classes from '../UI/items.module.css';


function Items(props){

   
    let cart_ctx= useContext(CartContext);
    // console.log(cart_ctx);
    // const[tgl_crt, setToggleCart]=useState(cart_ctx.toggleCart)

    function addtoCartHandler(){
        // console.log('Adding cart');
        let products={
            id:props.products.id,
            p_name:props.products.product_name, 
            price:props.products.price, 
            amount:1
        }
        // console.log(products);
        cart_ctx.addItem(products);
        
    }

    return <div className={classes.items_header}>
        <div className={classes.items_image}>
            Image
        </div>
        <div className={classes.product_details}>
            <div>{props.products.product_name}</div>
            <div>{`$${props.products.price}`}</div>
            {true?<div><button onClick={addtoCartHandler}>Add to Cart</button></div>: <div><button>view cart</button></div>}
        </div>
    </div>
}

export default Items;