import {createStore, combineReducers, compose, applyMiddleware} from 'redux'
import Cookie from 'js-cookie'
import thunk from 'redux-thunk'
import { productsListReducer, productDetailsReducer } from './reducer/productReducers';
import {cartReducer} from './reducer/cartReducers'
import { userSigninReducer, userRegisterReducer } from './reducer/userReducer';


const cartItems = Cookie.getJSON("cartItems") || [];

const userInfo= Cookie.getJSON("userInfo") || null;


const initialState={cart: {cartItems}, userSignin: {userInfo}};
const reducer= combineReducers({
    productList: productsListReducer,
    productDetails:productDetailsReducer,
    cart: cartReducer,
    userSignin: userSigninReducer,
    userRegister: userRegisterReducer
})


const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)) );

export default store;