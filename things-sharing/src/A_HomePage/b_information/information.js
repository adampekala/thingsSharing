import React from "react";
import './information.scss';
import decoration from '../../Z_Images/Decoration.png'

const Information = () => {
    return (
        <div className='information'>
            <article className='informationArticle_left'>
                <h2>10</h2>
                <h3>ODDANYCH WORKÓW</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque iusto nisi nulla pariatur qui, veniam.</p>
            </article>
            <article className='informationArticle_center'>
                <h2>5</h2>
                <h3>WSPARTYCH ORGANIZACJI</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab itaque nostrum quam sit tempora voluptatem.</p>
            </article>
            <article className='informationArticle_right'>
                <h2>7</h2>
                <h3>ZORGANIZOWANY ZBIÓREK</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, et exercitationem quasi repudiandae ullam voluptas.</p>
            </article>
        </div>
    )
}

export default Information;