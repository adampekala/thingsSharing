import React from "react";
import './whoWeHelp.scss';
import decoration from '../../Z_Images/Decoration.png'

const WhoWeHelp = () => {
    return (
            <div className='whoWeHelp'>
                <div>
                    <h1>Komu pomagamy?</h1>
                    <img src={decoration} alt='dekoracja'/>
                    <div className='whoWeHelpBtn'>
                        <button type='button'>Fundacjom</button>
                        <button type='button'>Organizacjom pozarządowym</button>
                        <button type='button'>Lokalnym zbiórkom</button>
                    </div>
                    <p className='whoWeHelpText'>W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.</p>
                    <table className='whoWeHelpTable'>
                        <tbody>
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

                        </tbody>
                    </table>
                </div>
                <div className='whoWeHelpTablePagination'>
                    <button type='button'>1</button>
                    <button type='button'>2</button>
                    <button type='button'>3</button>
                </div>
            </div>
    )
}

export default WhoWeHelp;