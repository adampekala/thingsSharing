import React, {useState} from "react";
// import {Link} from "react-router-dom";
import { Link } from "react-scroll";
import "./navigation.scss"

const Navigation = () => {
    const [hidden , setHidden] = useState(true)

    const handleShowMenuClick = () => {
        setHidden(prevState => !prevState);
    }

    return (
        <div className="navigationContainer">
            <h1 className='navigationTitle'>things-Sharing</h1>
            <div onClick={handleShowMenuClick} className={hidden ? 'navigationBurger' : 'navigationBurger cross'}>
                <div className='navigationBurger_line'></div>
                <div className='navigationBurger_line'></div>
                <div className='navigationBurger_line'></div>
            </div>
        <ul className={hidden ? 'navigation hidden' : 'navigation'}>
            <li>
                <Link activeClass="active" to="start" spy={true} smooth={true} offset={-200} duration={500} delay={500}>Start</Link>
            </li>
            <li>
                <Link activeClass="active" to="information" spy={true} smooth={true} offset={0} duration={500} delay={500}>O co chodzi?</Link>
            </li>
            <li>
                <Link activeClass="active" to="aboutUs" spy={true} smooth={true} offset={-15} duration={500} delay={500}>O nas
                </Link>
            </li>
            <li><Link activeClass="active" to="whoWeHelp" spy={true} smooth={true} offset={-50} duration={500} delay={500}>Fundacja i organizacje</Link></li>
            <li><Link activeClass="active" to="contact" spy={true} smooth={true} offset={0} duration={500} delay={500}
            >Kontakt</Link></li>
        </ul>
        </div>
    )
}

export default Navigation;

