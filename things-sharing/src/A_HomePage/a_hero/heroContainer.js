import React from "react";
import HeroPicture from "./heroPicture";
import HeroRightArea from "./heroRightArea";
import './hero.scss'
const HeroContainer = () => {
    return (
        <header className='hero'>
            <HeroPicture className = 'heroPicture'/>
            <HeroRightArea className = 'heroRightArea'/>
        </header>
    )
}

export default HeroContainer;