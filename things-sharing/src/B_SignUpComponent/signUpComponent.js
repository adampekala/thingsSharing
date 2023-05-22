import React, {useEffect, useState} from "react";
import decoration from '../Z_Images/Decoration.png'
import LoginPanel from "../X_CommonComponents/loginPanel";
import './signUpComponent.scss';
import auth  from "../firebase/firebaseConfig";
import { createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth'
import {ADD_USER} from "../actions/actionsNames";
import {Link} from "react-router-dom";
import Navigation from "../X_CommonComponents/navigation";


const SignUpComponent = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordRepeat, setPasswordRepeat] = useState('')
    const [user, setUser] = useState({})


    // useEffect(() => {
    //     const unsubscribe = onAuthStateChanged(
    //         auth,
    //         (user) => {
    //             setUser(user);
    //         }
    //     );
    //     return () => unsubscribe();
    // }, []);

    // onAuthStateChanged(
    //         auth,
    //         (user) => {
    //             user? setUser(user) : setUser({});
    //         }
    //     );

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const register = async () => {
        try {
            const user = await createUserWithEmailAndPassword(
                auth,
                email,
                password
            );
            console.log(user);

        } catch (error) {
            console.log(error.message);
        }

    }

    return (
        <>
            <LoginPanel />
            <Navigation/>
            <form className="signUpForm" onSubmit={handleSubmit}>
                <h1 className='signUpForm_header'>Załóż konto</h1>
                <img className='signUpForm_decoration' src={decoration} alt='dekoracja'/>
                <div className='signUpForm_form'>
                    <label htmlFor='email'>Email</label>
                    <input id='email' type='email' value={email} onChange={(e) => setEmail(e.target.value)}/>
                    <label htmlFor='password'>Hasło</label>
                    <input id='password' type='password' value={password}
                           onChange={(e) => setPassword(e.target.value)}/>
                    <label htmlFor='passwordRepeat'>Powtórz hasło</label>
                    <input id='passwordRepeat' type='password' value={passwordRepeat}
                           onChange={(e) => setPasswordRepeat(e.target.value)}/>

                </div>
                <div className='signUpForm_buttons' >
                    <Link to='/logIn'>Zaloguj się</Link>
                    <button type='submit' onClick={(event) => { event.preventDefault(); return password === passwordRepeat? register(): console.log('error')}}>Załóż konto</button>
                </div>
            </form>
        </>

    )
}

export default SignUpComponent;