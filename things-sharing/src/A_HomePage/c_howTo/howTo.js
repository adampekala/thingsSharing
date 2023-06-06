import React, {useState} from "react";
import './howTo.scss';
import decoration from '../../Z_Images/Decoration.png';
import tshirt from '../c_howTo/howToImages/Icon.png'
import circle from '../c_howTo/howToImages/IconCircle.png'
import lupa from '../c_howTo/howToImages/IconLupa.png'
import torba from '../c_howTo/howToImages/IconTorba.png'
import {useNavigate} from "react-router-dom";
import {HashLink} from "react-router-hash-link";
import {useSelector} from "react-redux";

const HowTo = () => {
    const navigate = useNavigate();
    const [userIsLogged, setuserIsLogged] = useState(useSelector((state) => state.users.user));
    let howToBtnLink;

    if(userIsLogged) {
            howToBtnLink = <HashLink className='howToBtnLink' to='/form#giveThingsMessage'>ODDAJ RZECZY</HashLink>
        }
        else if (userIsLogged !== true) {
            howToBtnLink = <HashLink className='howToBtnLink' to='/logIn#navigationComponent'>ODDAJ RZECZY</HashLink>;
        }

    return (
        <>
            <div className='howTo_header'>
                <h1 className='howTo_header'>Wystarczą 4 proste kroki</h1>
                <img src={decoration} alt='dekoracja'/>
            </div>
            <div className='howTo'>
                <article className='howToArticle_left'>
                    <img src={tshirt} alt='t-shirt'/>
                    <h3>Wybierz rzeczy</h3>
                    <span className='howToArticle_line'></span>
                    <p>ubrania, zabawki, sprzęt i inne</p>
                </article>
                <article className='howTo_left'>
                    <img src={torba} alt='torba'/>
                    <h3>Spakuj je</h3>
                    <span className='howToArticle_line'></span>
                    <p>skorzystaj z worków na śmieci</p>
                </article>
                <article className='howTo_center'>
                    <img src={lupa} alt='lupa'/>
                    <h3>Zdecyduj komu chcesz pomóc</h3>
                    <span className='howToArticle_line'></span>
                    <p>wybierz zaufane miejsce</p>
                </article>
                <article className='howTo_right'>
                    <img src={circle} alt='koło'/>
                    <h3>Zamów kuriera</h3>
                    <span className='howToArticle_line'></span>
                    <p>kurier przyjedzie w dogodnym terminie</p>
                </article>
            </div>
            <div className='howToBtnContainer'>
                {howToBtnLink}
            </div>

        </>
    )
}

export default HowTo;