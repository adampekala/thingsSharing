import React from "react";
import './aboutUs.scss';
import decoration from '../../Z_Images/Decoration.png';
import signature from '../d_aboutUs/aboutUsImages/Signature.png';
import people from '../d_aboutUs/aboutUsImages/People.png'

const AboutUs = () => {
    return (
            <div id='aboutUs' className='aboutUs'>
                <article>
                    <h1>O nas</h1>
                    <img src={decoration} alt='dekoracja'/>
                    <p>Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip.</p>
                    <img src={signature} alt='podpis'/>
                </article>
                <div className='aboutUsImage'></div>

            </div>
    )
}

export default AboutUs;