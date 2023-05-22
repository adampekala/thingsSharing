import React from "react";
// import {Link} from "react-router-dom";
import { Link } from "react-scroll";
import "./navigation.scss"

const Navigation = () => {

    return (
        <ul className='navigation'>
            <li>
                <Link activeClass="active" to="start" spy={true} smooth={true} offset={-200} duration={500} delay={500}>Start</Link>
            </li>
            <li>
                <Link activeClass="active" to="information" spy={true} smooth={true} offset={-100} duration={500} delay={500}>O co chodzi?</Link>
            </li>
            <li>
                <Link activeClass="active" to="aboutUs" spy={true} smooth={true} offset={-150} duration={500} delay={500}>O nas
                </Link>
            </li>
            <li><Link activeClass="active" to="whoWeHelp" spy={true} smooth={true} offset={-100} duration={500} delay={500}>Fundacja i organizacje</Link></li>
            <li><Link activeClass="active" to="contact" spy={true} smooth={true} offset={-150} duration={500} delay={500}
            >Kontakt</Link></li>
        </ul>
    )
}

export default Navigation;

