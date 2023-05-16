import React, { useState } from "react";
import decoration from '../Z_Images/Decoration.png'

const SignUpComponent = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordRepeat, setPasswordRepeat] = useState('')

    return (
        <>
            <div className='loginPanel'>
                <button type='button' className='loginPanel_logInBtn'>Zaloguj</button>
                <button type='button' className='loginPanel_signInBtn'>Załóż konto</button>
            </div>
            <ul className='navigation'>
                <li>Start</li>
                <li>O co chodzi?</li>
                <li>O nas</li>
                <li>Fundacja i organizacje</li>
                <li>Kontakt</li>
            </ul>
            <form>
                <h1>Załóż konto</h1>
                <img src={decoration} alt='dekoracja'/>
                <div>
                    <label htmlFor='email'>Email</label>
                    <input id='email' type='email' value={email} onChange={(e) => setEmail(e.target.value)}/>
                    <label htmlFor='password'>Hasło</label>
                    <input id='password' type='password' value={password}
                           onChange={(e) => setPassword(e.target.value)}/>
                    <label htmlFor='passwordRepeat'>Powtórz hasło</label>
                    <input id='passwordRepeat' type='password' value={passwordRepeat}
                           onChange={(e) => setPasswordRepeat(e.target.value)}/>

                </div>
                <div>
                    <button>Zaloguj się</button>
                    <button type='submit'>Załóż konto</button>
                </div>
            </form>
        </>

    )
}

export default SignUpComponent;