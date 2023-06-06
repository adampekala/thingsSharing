import React, {useEffect, useState} from "react";
import decoration from '../Z_Images/Decoration.png'
import LoginPanel from "../X_CommonComponents/loginPanel";
import './logInComponent.scss';
import { auth } from "../firebase/firebaseConfig";
import {signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged, signOut} from 'firebase/auth'
import {showLoggedUser} from "../actions";
import {useDispatch} from "react-redux";
import {Link, useNavigate} from "react-router-dom";
import NavigationLogSign from "../X_CommonComponents/navigationLogSign";


const LogInComponent = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordRepeat, setPasswordRepeat] = useState('')
    const [user, setUser] = useState({})
    const dispatch = useDispatch();
    const navigate = useNavigate();


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(
            auth,
            (user) => { user ?
                setUser(user) : setUser({});
            }
        );
        return () => unsubscribe();
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const logIn = async () => {
        try {
            const user = await signInWithEmailAndPassword(
                auth,
                email,
                password
            );
            await dispatch(showLoggedUser(user));
            navigate('/');
        } catch (error) {
            console.log(error.message);
        }

    }

    const logOut = async () => {
        try {
            const user = await signOut(auth);
            await dispatch(showLoggedUser(""));
            // await setLoggedUser({})

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <div className='logInFormNavigation'>
                <LoginPanel />
                <NavigationLogSign />
            </div>
            <form className="logInForm" onSubmit={handleSubmit}>
                <h1 className='logInForm_header'>Zaloguj się</h1>
                <img className='logInForm_decoration' src={decoration} alt='dekoracja'/>
                <div className='logInForm_form'>
                    <label htmlFor='email'>Email</label>
                    <input id='email' type='email' value={email} onChange={(e) => setEmail(e.target.value)}/>
                    <label htmlFor='password'>Hasło</label>
                    <input id='password' type='password' value={password}
                           onChange={(e) => setPassword(e.target.value)}/>
                    <label htmlFor='passwordRepeat'>Powtórz hasło</label>
                    <input id='passwordRepeat' type='password' value={passwordRepeat}
                           onChange={(e) => setPasswordRepeat(e.target.value)}/>

                </div>
                <div className='logInForm_buttons' >
                    <Link className='logInFormButtons_registerLink' to='/registration'>Załóż konto</Link>
                    <button type='submit' onClick={(event) => { event.preventDefault(); return password === passwordRepeat? logIn(): console.log('error')}}>Zaloguj się</button>

                </div>
            </form>
        </>

    )
}

export default LogInComponent;