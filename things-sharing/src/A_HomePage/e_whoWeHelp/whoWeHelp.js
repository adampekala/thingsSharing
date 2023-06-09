import React, {useEffect, useState} from "react";
import './whoWeHelp.scss';
import decoration from '../../Z_Images/Decoration.png'
import {useSelector} from "react-redux";

const WhoWeHelp = () => {
    const organisationListInfo = useSelector(state => state.organisations);
    const [organisationNumber, setOrganisationNumber] = useState(useSelector(state => state.organisations.filter((el) => el.type ==='Fundacja').length));
    const [organisationType, setOrganisationType] = useState('Fundacja');
    const [page, setPage] = useState(1);
    const [pages, setPages] = useState(1);

    // useEffect(() => setPages( Math.ceil(organisationNumber / 3 )), [organisationNumber]);
    // useEffect(() => setPages( Math.ceil(organisationNumber / 3 )), [organisationListInfo]);

    const handleChangePage = (page) => () => {
        setPage(page);
    }

    const createBtns = (btnsNumber) => {
        let btnArr = [];
        for (let i = 1; i <= btnsNumber; i++) {
            btnArr.push(<button className={page === i ? 'paginationButtonClicked' : 'paginationButtonUnclicked'} type='button' key={i} onClick={handleChangePage(i)}>{i}</button>)
        }
        return btnArr;
    }

    const handleOrganisationTypeClick = (organisationType) => () => {
        setOrganisationType(organisationType);
        setOrganisationNumber(organisationListInfo.filter((el) => el.type === organisationType).length);
        setPage(1);
    }

    return (
            <div id='whoWeHelp' className='whoWeHelp'>
                <div>
                    <h1>Komu pomagamy?</h1>
                    <img src={decoration} alt='dekoracja'/>
                    <div className='whoWeHelpBtn'>
                        <button type='button' className={organisationType === "Fundacja" && "selectedOrganisation"} onClick={handleOrganisationTypeClick("Fundacja")}>Fundacjom</button>
                        <button type='button' className={organisationType === "Organizacja pozarządowa" && "selectedOrganisation"} onClick={ handleOrganisationTypeClick("Organizacja pozarządowa")} >Organizacjom pozarządowym</button>
                        <button type='button' className={organisationType === "Lokalna zbiórka" && "selectedOrganisation"} onClick={handleOrganisationTypeClick("Lokalna zbiórka")}>Lokalnym zbiórkom</button>
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
                    {createBtns(useSelector(
                        state => {
                            const num = state.organisations.filter((el) => el.type === organisationType).length;
                            return Math.ceil(num / 3);
                                }
                            )
                        )
                    }
                </div>
            </div>
    )
}

export default WhoWeHelp;