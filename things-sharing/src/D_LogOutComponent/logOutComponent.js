import React, {useEffect, useState} from "react";
import decoration from '../Z_Images/Decoration.png'
import LoginPanel from "../X_CommonComponents/loginPanel";
import './logOutComponent.scss';
import {Link, useNavigate} from "react-router-dom";


const LogOutComponent = () => {
    const navigate = useNavigate();
    const handleMainPageLink = () => {
        navigate("/")
    }

    return (
        <>
            <LoginPanel />
            <ul className='navigation'>
                <li>Start</li>
                <li>O co chodzi?</li>
                <li>O nas</li>
                <li>Fundacja i organizacje</li>
                <li>Kontakt</li>
            </ul>
            <div className="logOutInfo">
                <h1 className='logOutInfo_header'>Wylogowanie nastąpiło pomyślnie!</h1>
                <img className='logInForm_decoration' src={decoration} alt='dekoracja'/>
                <button type='submit' onClick={handleMainPageLink}>Strona główna</button>
            </div>
        </>

    )
}

export default LogOutComponent;