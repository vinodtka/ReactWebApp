import React, { useEffect } from 'react'
import { addToCart, removeFromCart } from '../actions/cartAction';
import { useDispatch, useSelector } from 'react-redux';
import {Link} from 'react-router-dom'

function CartScreen(props) {


    const cart=useSelector(state=> state.cart);

    const {cartItems}=cart;

    const productId = props.match.params.id;
    const qty = props.location.search? Number(props.location.search.split("=")[1]):1;


    const removeFromCartHandler = (productId)=>{
        dispatch(removeFromCart(productId))
    }

    const checkOutHandler = ()=>{
        props.history.push("/signin?redirect=shipping")
    }

    const dispatch = useDispatch();
    useEffect(() =>{

        if(productId){
            dispatch(addToCart(productId, qty));
        }
    }, [])

    return  <div className="cart">
        <div className="cart-list"> 

            <ul className="cart-list-container">
                <h3>
                    Shopping Cart
                </h3>

                <div>
                    Price
                </div>
                <li>
                    {
                        cartItems.length ===0 ?
                        <div>
                            Cart is Empty
                        </div>
                        :
                        cartItems.map( item=> 

                            <li> 
                           <div>
                               <div className="cart-image">
                                   <img src={item.image} alt="product" />
                               </div>
                               
                               <div className="cart-name">
                                   <div>
                                       <Link to={"/product/"+ item.product}>

                                           {item.name}
                                       </Link>
                                       
                                   </div>
                                   <div>
                                       Qty;
                                       <select value={item.qty} onChange={(e) => dispatch(addToCart(item.product, e.target.value))} >
                                           <option valu="1">1</option>
                                           <option valu="2">2</option>
                                           <option valu="3">3</option>
                                           <option valu="4">4</option>
                                       </select>

                                       <button  type="button" className="button" onClick={() => removeFromCartHandler(item.product)}>

                                           Delete
                                       </button>
                                   </div>
                               </div>

                               <div className="cart-price">
                                   ${item.price}
                               </div>
                           </div>
                           </li> )
                    }
                </li>
            </ul>
        </div>

        <div  className="cart-action">

            <h3>
                Sub-total ({cartItems.reduce((a, c)=> a +  c.qty , 0)}items)
            
                :
                  $ {cartItems.reduce((a,c)=> a + c.price * c.qty ,0)}
            </h3>
                    <button onClick={checkOutHandler} className="button primary" disabled={cartItems.length ===0}>Proceed to checkout</button>
                


        </div>
        
        
        </div>
    
}


export default CartScreen