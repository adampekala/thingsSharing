import React, {useState} from "react";
import Decoration from '../../Z_Images/Decoration.png'
import LoginPanel from "../../X_CommonComponents/loginPanel";
import NavigationHome from "../../X_CommonComponents/navigationHome";
import { useNavigate } from "react-router-dom"
import {HashLink} from "react-router-hash-link";
import {useSelector} from "react-redux";
// import {onAuthStateChanged} from "firebase/auth";
// import auth from "../../firebase/firebaseConfig";


const HeroRightArea = () => {
    const navigate = useNavigate();
    const [userIsLogged, setuserIsLogged] = useState(useSelector((state) => state.users.user));
    console.log(userIsLogged);
    const handleOddajRzeczy = () => {
        userIsLogged ? navigate("/form") : navigate("/logIn")
    }
    return (
        <div className = 'heroRightArea'>
            <LoginPanel />
            <NavigationHome/>
            <header id='start' className='header'>
                <h1 className='headerTitle'>Zacznij pomagać! <br/> Oddaj niechciane rzeczy w zaufane ręce</h1>
                <img src={Decoration} alt='dekoracja'/>
                <div className='headerButtons'>
                    <button type='button' onClick={handleOddajRzeczy}>ODDAJ <br/> RZECZY</button>
                    <button className='headerButton_organise' type='button'>ZORGANIZUJ <br/> ZBIÓRKĘ<span className='headerButton_organise-tooltip'>Guzik nieaktywny! Strona demonstracyjna</span></button>
                </div>
            </header>
        </div>

    )
}

export default HeroRightArea