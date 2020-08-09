import React, { useEffect, useState, } from 'react'
import {useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { register } from '../actions/userAction';

function RegisterScreen(props) {




    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repassword, setRepassword] = useState('');

    const userRegister = useSelector(state=>state.userRegister);
    const {laoding,userInfo, error}= userRegister;

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
        dispatch(register(name, email,password))
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
                    <label htmlfor="name">
                        Name
                    </label>
                    <input type="name" name="name" id="name" onChange={(e)=> setName(e.target.value)}>

                    </input>
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
                    <label htmlfor="repassword">
                        Re-Enter Password
                    </label>
                    <input type="repassword" name="repassword" id="repassword" onChange={(e) => setRepassword(e.target.value)}>
                    </input>
                </li>
                <li>
                    <button type="submit" className="button primary">
                        Register
                    </button>

                </li>
                <li>
                    Already have an account?  
                </li>
                <li>
                    <Link to="/register" className="button_newaccount full-width"> Sign In</Link>
                </li>

            </ul>

        </form>
    </div>
}

export default RegisterScreen;