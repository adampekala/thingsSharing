import React from "react";
import Decoration from './Decoration.png'

const HeroRightArea = () => {
    return (
        <div>
            <div className='loginPanel'>
                <button type='button' className='loginPanel_logInBtn'>Zaloguj</button>
                <button type='button'className='loginPanel_signInBtn'>Załóż konto</button>
            </div>
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