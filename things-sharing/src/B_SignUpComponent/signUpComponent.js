import React, {useEffect, useState} from "react";
import decoration from '../Z_Images/Decoration.png'
import LoginPanel from "../X_CommonComponents/loginPanel";
import './signUpComponent.scss';
import { auth } from "../firebase/firebaseConfig";
import { createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import {Link, useNavigate} from "react-router-dom";
import NavigationLogSign from "../X_CommonComponents/navigationLogSign";


const SignUpComponent = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordRepeat, setPasswordRepeat] = useState('')
    const [user, setUser] = useState({})
    const [wrongLoginOrPassword, setWrongLoginOrPassword ] = useState({login: false, wrongPasswordRepeat: false});
    const navigate = useNavigate();
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
                navigate("/logIn")

            } catch (error) {
                await setWrongLoginOrPassword((prevState) => {return ({...prevState, login: true})});
                console.log(error.message);
            }
    }

    const registerValidation = () => {
        if (password !== passwordRepeat) {
            setWrongLoginOrPassword((prevState) => {return ({...prevState, wrongPasswordRepeat: true})});
        }
        else if (password === passwordRepeat) {
            register();
        }
    }

    const handleFocusIn = () => {
        setWrongLoginOrPassword({login: false, wrongPasswordRepeat: false})
    }

    return (
        <>
            <div className='signUpFormNavigation'>
                <LoginPanel />
                <NavigationLogSign />
            </div>
            <form className="signUpForm" onSubmit={handleSubmit}>
                <h1 className='signUpForm_header'>Załóż konto</h1>
                <img className='signUpForm_decoration' src={decoration} alt='dekoracja'/>
                <div className='signUpForm_form'>
                    <label htmlFor='email'>Email</label>
                    <input id='email' type='email' value={email} onChange={(e) => setEmail(e.target.value)} onFocus={handleFocusIn}/>
                    <label htmlFor='password'>Hasło</label>
                    <input id='password' type='password' value={password}
                           onChange={(e) => setPassword(e.target.value)} onFocus={handleFocusIn}/>
                    <label htmlFor='passwordRepeat'>Powtórz hasło</label>
                    <input id='passwordRepeat' type='password' value={passwordRepeat}
                           onChange={(e) => setPasswordRepeat(e.target.value)} onFocus={handleFocusIn}/>

                    {wrongLoginOrPassword.login ? <small>wybierz inny e-mail lub sprawdź czy hasło ma minimum 6 znaków</small> : undefined}
                    {wrongLoginOrPassword.wrongPasswordRepeat ? <small>niezgodne hasła</small> : undefined}

                </div>
                <div className='signUpForm_buttons' >
                    <Link to='/logIn'>Zaloguj się</Link>
                    <button type='submit' onClick={(event) => { event.preventDefault(); return registerValidation()}}>Załóż konto</button>
                </div>
            </form>
        </>

    )
}

export default SignUpComponent;