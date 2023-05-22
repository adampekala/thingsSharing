import React, {useState} from "react";
import Decoration from '../../Z_Images/Decoration.png'
import LoginPanel from "../../X_CommonComponents/loginPanel";
// import {onAuthStateChanged} from "firebase/auth";
// import auth from "../../firebase/firebaseConfig";


const HeroRightArea = () => {

    return (
        <div>
            <LoginPanel />
            <ul className='navigation'>
                <li>Start</li>
                <li>O co chodzi?</li>
                <li>O nas</li>
                <li>Fundacja i organizacje</li>
                <li>Kontakt</li>
            </ul>
            <header className='header'>
                <h1 className='headerTitle'>Zacznij pomagać! <br/> Oddaj niechciane rzeczy w zaufane ręce</h1>
                <img src={Decoration} alt='dekoracja'/>
                <div className='headerButtons'>
                    <button type='button'>ODDAJ <br/> RZECZY</button>
                    <button type='button'>ZORGANIZUJ <br/> ZBIÓRKĘ</button>
                </div>
            </header>
        </div>

    )
}

export default HeroRightArea