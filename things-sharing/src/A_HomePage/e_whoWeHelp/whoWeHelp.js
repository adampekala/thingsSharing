import React, {useEffect, useState} from "react";
import './whoWeHelp.scss';
import decoration from '../../Z_Images/Decoration.png'
import {useSelector} from "react-redux";

const WhoWeHelp = () => {
    const organisationListInfo = useSelector(state => state.organisations);
    const [organisationNumber, setOrganisationNumber] = useState(useSelector(state => state.organisations.filter((el) => el.type ==='Fundacja').length));
    const [organisationType, setOrganisationType] = useState('Fundacja');
    const [page, setPage] = useState(null);
    const [pages, setPages] = useState(null);

    useEffect(() => setPages( Math.ceil(organisationNumber / 3 )), [organisationNumber])

    const handleChangePage = (page) => () => {
        setPage(page);
    }

    const createBtns = (btnsNumber) => {
        let btnArr = [];
        for (let i = 1; i <= btnsNumber; i++) {
            btnArr.push(<button type='button' key={i} onClick={handleChangePage(i)}>{i}</button>)
        }
        return btnArr;
    }

    const handleOrganisationTypeClick = (organisationType) => () => {
        setOrganisationType(organisationType);
        setOrganisationNumber(organisationListInfo.filter((el) => el.type === organisationType).length)
    }

    return (
            <div className='whoWeHelp'>
                <div>
                    <h1>Komu pomagamy?</h1>
                    <img src={decoration} alt='dekoracja'/>
                    <div className='whoWeHelpBtn'>
                        <button type='button' onClick={handleOrganisationTypeClick("Fundacja")}>Fundacjom</button>
                        <button type='button'onClick={ handleOrganisationTypeClick("Organizacja pozarządowa")} >Organizacjom pozarządowym</button>
                        <button type='button' onClick={handleOrganisationTypeClick("Lokalna zbiórka")}>Lokalnym zbiórkom</button>
                    </div>
                    <p className='whoWeHelpText'>W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.</p>
                    <table className='whoWeHelpTable'>
                        <tbody>
                        {organisationListInfo
                            .filter((el) => el.type === organisationType)
                            .filter((_, i)=> i >= 3 * (page - 1) && i < 3 * (page - 1) + 3 )
                            .map((el, i) => {return (
                            <tr key={i}>
                                <th>{el.name} <br/>
                                    <small>{`Cel i misja: ${el.mission}`}</small>
                                </th>
                                <td>{el.needs.join(",")}</td>
                            </tr>
                        )})}
                        </tbody>
                    </table>
                </div>
                <div className='whoWeHelpTablePagination'>
                    {createBtns(pages)}
                </div>
            </div>
    )
}

export default WhoWeHelp;