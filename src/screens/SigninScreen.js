import React, { useEffect, useState, } from 'react'
import {useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import jwt from 'js-cookie';
import { signin } from '../actions/userAction';

function SigninScreen(props) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const userSignin = useSelector(state=>state.userSignin);
    const {laoding,userInfo, error}= userSignin;

    const dispatch = useDispatch();


    //useEffect 

    useEffect(() => {
      if(userInfo){
          props.history.push("/")
      }
        return () => {
            // cleanup
        }
    }, [userInfo])

        
    const submitHandler=(e) =>{
        e.preventDefault();
        dispatch(signin(email,password))
    }



    return <div className="form">

        <form onSubmit={submitHandler}>
            <ul className="form-container">
                <li>
             <div className="main">      <h3>Sign-In</h3> </div>  

             <li>
                {laoding && <div>Loading</div>}
                {error && <div> {error}</div>}

                 </li> 
                </li>
                <li>
                    <label htmlfor="email">
                        Email
                    </label>
                    <input type="email" name="email" id="email" onChange={(e)=> setEmail(e.target.value)}>

                    </input>
                </li>
                <li>
                    <label htmlfor="password">
                        Password
                    </label>
                    <input type="password" name="password" id="password" onChange={(e) => setPassword(e.target.value)}>
                    </input>
                </li>
                <li>
                    <button type="submit" className="button primary">
                        Sign-In
                    </button>

                </li>
                <li>
                  New to amazon?  
                </li>
                <li>
                    <Link to="/register" className="button_newaccount full-width"> Create Your Free Account!</Link>
                </li>

            </ul>

        </form>
    </div>
}

export default SigninScreen;