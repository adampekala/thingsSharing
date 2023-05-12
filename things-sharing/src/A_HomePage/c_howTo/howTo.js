import React from "react";
import './howTo.scss';
import decoration from '../../Z_Images/Decoration.png';
import tshirt from '../c_howTo/howToImages/Icon.png'
import circle from '../c_howTo/howToImages/IconCircle.png'
import lupa from '../c_howTo/howToImages/IconLupa.png'
import torba from '../c_howTo/howToImages/IconTorba.png'

const HowTo = () => {
    return (
        <>
            <div>
                <h1 className='howTo_header'>Wystarczą 4 proste kroki</h1>
                <img src={decoration} alt='dekoracja'/>
            </div>
            <div className='howTo'>
                <article className='howToArticle_left'>
                    <img src={tshirt} alt='t-shirt'/>
                    <h3>Wybierz rzeczy</h3>
                    <hr/>
                    <p>ubrania, zabawki, sprzęt i inne</p>
                </article>
                <article className='howTo_left'>
                    <img src={torba} alt='torba'/>
                    <h3>Spakuj je</h3>
                    <hr/>
                    <p>skorzystaj z worków na śmieci</p>
                </article>
                <article className='howTo_center'>
                    <img src={lupa} alt='lupa'/>
                    <h3>Zdecyduj komu chcesz pomóc</h3>
                    <hr/>
                    <p>wybierz zaufane miejsce</p>
                </article>
                <article className='howTo_right'>
                    <img src={circle} alt='koło'/>
                    <h3>Zamów kuriera</h3>
                    <hr/>
                    <p>kurier przyjedzie w dogodnym terminie</p>
                </article>
            </div>
            <button type='button' className='howToBtn'>ODDAJ RZECZY</button>

        </>
    )
}

export default HowTo;