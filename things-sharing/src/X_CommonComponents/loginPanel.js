import React from "react";
import './loginPanel.scss'

const LoginPanel = () => {

    return (
        <div className='loginPanel'>
            <button type='button' className='loginPanel_logInBtn'>Zaloguj</button>
            <button type='button' className='loginPanel_signInBtn'>Załóż konto</button>
        </div>
    )
}

export default LoginPanel;
