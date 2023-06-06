import React, {useState} from "react";
import { Link } from "react-scroll";
import { HashLink } from "react-router-hash-link";
import "./navigation.scss"

const NavigationLogSign = () => {
    const [hidden , setHidden] = useState(true)

    const handleShowMenuClick = () => {
        setHidden(prevState => !prevState);
    }

    return (
        <div id='navigationContainer' className="navigationContainer">
            <h1 className='navigationTitle'>THINGS-sharing</h1>
            <div onClick={handleShowMenuClick} className={hidden ? 'navigationBurger' : 'navigationBurger cross'}>
                <div className='navigationBurger_line'></div>
                <div className='navigationBurger_line'></div>
                <div className='navigationBurger_line'></div>
            </div>
            <nav className={hidden ? 'navigation hidden' : 'navigation'}>
                    <HashLink className='hashLink' smooth to='/#start'>Start</HashLink>
                    <HashLink className='hashLink' smooth to='/#information'>O co chodzi?</HashLink>
                    <HashLink className='hashLink' smooth to='/#aboutUs'>O nas</HashLink>
                    <HashLink className='hashLink' smooth to='/#whoWeHelp' >Fundacje i organizacje</HashLink>
                    <HashLink className='hashLink' smooth to='/#contact' >Kontakt</HashLink>
            </nav>
        </div>
    )
}

export default NavigationLogSign;

