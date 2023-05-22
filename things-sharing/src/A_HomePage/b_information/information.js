import React from "react";
import './information.scss';
import { useSelector } from "react-redux";

const Information = () => {
    const bags = useSelector(state => state.organisations.reduce((total, numer) => total + numer.bags, 0));
    const organisationNumber = useSelector(state => state.organisations.length);
    const collectionsNumber = useSelector(state => state.organisations.reduce((total, numer) => total + numer.collections, 0));
    return (
        <div id='information' className='information'>
            <article className='informationArticle_left'>
                <h2>{bags}</h2>
                <h3>ODDANYCH WORKÓW</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque iusto nisi nulla pariatur qui, veniam.</p>
            </article>
            <article className='informationArticle_center'>
                <h2>{organisationNumber}</h2>
                <h3>WSPARTYCH ORGANIZACJI</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab itaque nostrum quam sit tempora voluptatem.</p>
            </article>
            <article className='informationArticle_right'>
                <h2>{collectionsNumber}</h2>
                <h3>ZORGANIZOWANY ZBIÓREK</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, et exercitationem quasi repudiandae ullam voluptas.</p>
            </article>
        </div>
    )
}

export default Information;