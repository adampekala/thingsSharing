import React, {useState} from "react";
import Decoration from '../../Z_Images/Decoration.png'
import LoginPanel from "../../X_CommonComponents/loginPanel";
import Navigation from "../../X_CommonComponents/navigation";
import { useNavigate } from "react-router-dom"
// import {onAuthStateChanged} from "firebase/auth";
// import auth from "../../firebase/firebaseConfig";


const HeroRightArea = () => {
    const navigate = useNavigate();
    return (
        <div>
            <LoginPanel />
            <Navigation/>
            <header id='start' className='header'>
                <h1 className='headerTitle'>Zacznij pomagać! <br/> Oddaj niechciane rzeczy w zaufane ręce</h1>
                <img src={Decoration} alt='dekoracja'/>
                <div className='headerButtons'>
                    //TODO to repeat
                    <button type='button' onClick={() => navigate("/form")}>ODDAJ <br/> RZECZY</button>
                    <button type='button'>ZORGANIZUJ <br/> ZBIÓRKĘ</button>
                </div>
            </header>
        </div>

    )
}

export default HeroRightArea