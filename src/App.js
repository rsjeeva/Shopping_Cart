import Navbar from './Components/Navbar';
import Shop from './Components/Shop';
import Items from './Components/Items';
import './App.css';
import { useState} from 'react';
import CartDetails from './Components/CartDetails';
import CartProvider from './Context/CartProvider';
import Footer from './Components/Footer';

let itemsDetails = [
  {
    id:1,
    product_name:'abc',
    rating:3,
    price:150.00,
    toggle_cart:true
},
{
  id:2,
  product_name:'xyz',
  rating:4,
  price:10.00
},
{
  id:3,
  product_name:'jhn',
  rating:2,
  price:50.00
},
{
  id:4,
  product_name:'lbc',
  rating:4,
  price:105.00
},
{
  id:5,
  product_name:'jnm',
  rating:3,
  price:200.00
},
{
  id:6,
  product_name:'uhj',
  rating:1,
  price:160.00
},
{
  id:7,
  product_name:'abc',
  rating:3,
  price:150.00,
  toggle_cart:true
},
{
id:8,
product_name:'xyz',
rating:4,
price:10.00
},
{
id:9,
product_name:'jhn',
rating:2,
price:50.00
},
{
id:10,
product_name:'lbc',
rating:4,
price:105.00
},
{
id:11,
product_name:'jnm',
rating:3,
price:200.00
},
{
id:12,
product_name:'uhj',
rating:1,
price:160.00
},
];

function App() {

  let [toggleCart, settoggleCart]=useState(true);

  function cartPageDetails(){
    settoggleCart(prevstate=>!prevstate);
  }

  return (
    <CartProvider>
        <Navbar enableCartPage={cartPageDetails}/>
        {toggleCart&&<Shop/>}
        {toggleCart &&<div className='itemslist'>
        {        
          itemsDetails.map((i)=>{
            return <li key={i.id}>
              <Items id={i.id} products={i} />
            </li> 
          })
        }
        </div>}
        {!toggleCart&&<CartDetails enableCartPage={cartPageDetails} />}
        {toggleCart&&<Footer/>}
    </CartProvider>
  );
}

export default App;
