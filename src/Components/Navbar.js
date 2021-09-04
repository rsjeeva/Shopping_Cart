import React, { useContext } from 'react';
import classes from '../UI/navbar.module.css';
import CartContext from '../Context/cart-details';
import reactDom from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart} from '@fortawesome/free-solid-svg-icons';


function Navbar(props){
    let cart_ctx = useContext(CartContext);
    let productslength = cart_ctx.items.length;
    // console.log(productslength);
    return(
        <div className={classes.navbar_header}>
            <div className={classes.heading}>Shopping</div> 
            <div className={classes.cart_menus}>
                <div className={classes.cart_image}><FontAwesomeIcon icon={faShoppingCart} className={classes.icons}/></div>
                <button className={classes.cart} onClick={props.enableCartPage}>Cart</button>
                <div className={classes.cart_values}>{productslength}</div>
            </div>
        </div>

    );

}

export default Navbar;