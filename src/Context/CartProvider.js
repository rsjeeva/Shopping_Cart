import React,{useReducer, useState} from 'react';
import CartContext from './cart-details';

const defaultCartState={
    items:[],
    totalAmount:0
}

function reducerFunction(state, action){

    if(action.type==='ADD')
    {      
        let updatedTotalAmount = state.totalAmount+action.item.price*1;   
        const existingItemsPresent= state.items.findIndex(item=> item.id===action.item.id);
        const existingCartItems= state.items[existingItemsPresent];

        let updatedItem;
        let updatedItems;

        if(existingCartItems)
        {
            updatedItem = {
                ...existingCartItems, amount: existingCartItems.amount+1
            };

            updatedItems=[...state.items];
            updatedItems[existingItemsPresent] = updatedItem;
        }

        else{
            updatedItem = {
                ...action.item
            };
            updatedItems =  state.items.concat(updatedItem);
        }

        return{
            items:updatedItems,
            totalAmount: updatedTotalAmount
        }
    } 



    if(action.type==='REMOVE')
    {
        const existingItemsPresent = state.items.findIndex(item=> item.id === action.id);
        const existingCartItems = state.items[existingItemsPresent];
        let updatedItem;
        let updatedItems;
        let updatedTotalAmount = state.totalAmount-existingCartItems.price;
        if(existingCartItems.amount===1)
        {
            updatedItems= state.items.filter(item=>item.id!==action.id)
        }
        else{
            updatedItem = {...existingCartItems, amount:existingCartItems.amount-1};
            updatedItems=[...state.items];
            updatedItems[existingItemsPresent]=updatedItem;
        }
        return{
            items:updatedItems,
            totalAmount:updatedTotalAmount
        }
    }

    return defaultCartState;
}


function CartProvider(props){

   const[cartState, dispatch]= useReducer(reducerFunction, defaultCartState)

    function addItemToCart(item){
        dispatch({type:'ADD', item:item});   
        // alert('items added to cart');    
    }

    function removeItemFromCart(id){
        console.log(id);
        dispatch({type:'REMOVE', id:id});
        // alert('items removed from cart');
    }

    const cartContext={
        items: cartState.items,
        totalAmount:cartState.totalAmount,
        addItem: addItemToCart,
        removeItem: removeItemFromCart
    }

    return <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
}

export default CartProvider;