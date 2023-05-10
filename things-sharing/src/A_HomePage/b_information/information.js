import React from "react";
import './information.scss';

const Information = () => {
    return (
        <>
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
        <div>
            <h1>Wystarczą 4 proste kroki</h1>
            <img src='../a_hero/Decoration.png'/>
        </div>
        <div className='information'>
                <article className='informationArticle_left'>
                    <h2>Icony</h2>
                    <h3>Wybierz rzeczy</h3>
                    <p>ubrania, zabawki, sprzęt i inne</p>
                </article>
                <article className='informationArticle_left'>
                    <h2>Icony</h2>
                    <h3>Spakuj je</h3>
                    <p>skorzystaj z worków na śmieci</p>
                </article>
                <article className='informationArticle_center'>
                    <h2>5</h2>
                    <h3>Zdecyduj komu chcesz pomóc</h3>
                    <p>wybierz zaufane miejsce</p>
                </article>
                <article className='informationArticle_right'>
                    <h2>7</h2>
                    <h3>Zamów kuriera</h3>
                    <p>kurier przyjedzie w dogodnym terminie</p>
                </article>
        </div>
        <button type='button'>ODDAJ RZECZY</button>
            <div>
                <div>
                    <h1>O nas</h1>
                    <img src='../a_hero/Decoration.png' alt='dekoracja'/>
                    <p>Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip.</p>
                    <img src='../a_hero/Decoration.png' alt='dekoracja'/>
                </div>
                <div>Obrazek</div>
            </div>

            <div>
                <div>
                    <h1>Komu pomagamy?</h1>
                    <img src='../a_hero/Decoration.png' alt='dekoracja'/>
                    <button type='button'>Fundacjom</button>
                    <button type='button'>Organizacjom pozarządowym</button>
                    <button type='button'>Lokalnym zbiórkom</button>
                    <p>W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.</p>
                    <table>
                        <tr>
                            <th>Fundacja “Dbam o Zdrowie” <br/>
                                <small>Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.</small>
                            </th>
                            <td>ubrania, jedzenie, sprzęt AGD, meble, zabawki</td>
                        </tr>
                        <tr>
                            <th> Fundacja “Dla dzieci”<br/>
                                <small>Cel i misja: Pomoc dzieciom z ubogich rodzin.</small>
                            </th>
                            <td>ubrania, meble, zabawki</td>
                        </tr>
                        <tr>
                            <th>Fundacja “Bez domu”<br/>
                                <small>Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania.</small>
                            </th>
                            <td>ubrania, jedzenie, ciepłe koce</td>
                        </tr>

                    </table>
                </div>
                <div>Paginacja</div>
            </div>
        </>
    )
}

export default Information;