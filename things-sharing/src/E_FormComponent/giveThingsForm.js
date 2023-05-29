import React, {useState} from "react";
import '../App.scss'
import {useDispatch} from "react-redux";
import {sentFormToRedux} from "../actions";
import decoration from '../Z_Images/Decoration.png'

const GiveThingsForm = () => {

    const [page, setPage] = useState(1);
    const [goodThings, setGoodThings] = useState(false);
    const [badThings, setBadThings] = useState(false);
    const [toys, setToys] = useState(false);
    const [books, setBooks] = useState(false);
    const [other, setOther] = useState(false);
    const [thingsArr, setThingsArr] = useState([]);
    const [selectOn, setSelectOn] = useState(false);
    const [bags, setBags] = useState("— wybierz —");
    const [town, setTown] = useState("— wybierz —");
    const [whoHelp, setWhoHelp] = useState([])
    const [organisation, setOrganisation] = useState("...");
    const [timeAndAdressForm, setTimeAndAdressForm] = useState(
        {
            street: "..",
            city: "..",
            postCode: "..",
            phone: "..",
            date: "..",
            hour: "..",
            additionalInformation: ".."}
    )


    const pageIncrease = () => {
        setPage((prev) => prev + 1)
    }
    const pageDecrease = () => {
        setPage((prev)=> prev - 1 )
    }

    const handleOnSubmit = (event) => {
        event.preventDefault();
    }

    const checkboxSelected1 = (event) => {
        setGoodThings((prev) => !prev);
    }
    const checkboxSelected2 = (event) => {
        setBadThings((prev) => !prev);
    }
    const checkboxSelected3 = (event) => {
        setToys((prev) => !prev);
    }
    const checkboxSelected4 = (event) => {
        setBooks((prev) => !prev);
    }
    const checkboxSelected5 = (event) => {
        setOther((prev) => !prev);
    }
//TODO redux
    const handleCreatingThingsArr = () => {

        let arr = [];

        goodThings && arr.push("ubrania");
        badThings && arr.push("ubrania do wyrzucenia");
        toys && arr.push("zabawki");
        books && arr.push("książki");
        other && arr.push("inne");
        console.log(arr);
        setThingsArr(arr);



    }

    const handleDalejBtnClick = (event) => {
        page === 1 && handleCreatingThingsArr();
        pageIncrease()
    }

    const handleSelect = () => {
        setSelectOn(prev =>  !prev )
    }

    const handleSelectBags = (number) => {
        setBags(number);

    }

    const handleSelectTown = (town) => {
        setTown(town);
    }

    const handleChoseWhoHelp = (purpose) => {
        whoHelp.every((el) => el !== purpose)
            ?
        setWhoHelp((prev)=> [...prev, purpose])
            :
        setWhoHelp(prev => prev.filter(el => el !== purpose))

    }

    const handleChangeOrganisationInput = (event) => {
        setOrganisation(event.target.value);
    }

    const handleChangeOtherFormInputs = (event) => {
        const {name, value} = event.target;
        setTimeAndAdressForm((prevState) => ({...prevState, [name]: value}))
    }

    const dispatch = useDispatch();

    const handleConfirmClick = () => {
        dispatch(sentFormToRedux(thingsArr,
            bags,
            town,
            whoHelp,
            organisation,
            timeAndAdressForm));
        console.log('potwierdzenie');
        setPage(6);
    }


    switch (page) {
        case 2:
            return (
                <form onSubmit={handleOnSubmit} className='giveThingsForm'>
                    <p className='giveThingsForm_page'>Krok {page}/4</p>
                    <h1 className='giveThingsForm_Fieldset-Legend'>Podaj liczbę 60l worków, w które spakowałeś/aś rzeczy:</h1>
                    <div className='giveThingsForm_Fieldset-selectContainer'>
                        <span>Liczba 60l worków:</span>
                        <span onClick={handleSelect} className='giveThingsForm_Fieldset-selectButton'>
                            <span className='giveThingsForm_Fieldset-selectButtonText'>
                                {bags}
                                 <ul className={selectOn ? 'giveThingsForm_Fieldset-selectButtonChoiceList'
                                 :
                                     'giveThingsForm_Fieldset-selectButtonChoiceList hidden'
                                 }>
                                     <li onClick={() => handleSelectBags(1)}>1</li>
                                     <li onClick={() => handleSelectBags(2)}>2</li>
                                     <li onClick={() => handleSelectBags(3)}>3</li>
                                     <li onClick={() => handleSelectBags(4)}>4</li>
                                     <li onClick={() => handleSelectBags(5)}>5</li>
                                 </ul>

                            </span>
                             <span className={selectOn ? 'giveThingsForm_Fieldset-selectButtonArrowUp' : 'giveThingsForm_Fieldset-selectButtonArrowDown'}></span>
                        </span>
                    </div>
                    <div className='giveThingsForm_ButtonArea'>
                        <button type='button' onClick={pageDecrease}>Wstecz</button>
                        <button type='button' onClick={pageIncrease}>Dalej</button>
                    </div>

                </form>
            );
        case 3:
            return (
                <form onSubmit={handleOnSubmit} className='giveThingsForm'>
                    <p className='giveThingsForm_page'>Krok {page}/4</p>
                    <h1 className='giveThingsForm_Fieldset-Legend'>Lokalizacja:</h1>
                    <div className='giveThingsForm_Fieldset-selectContainer'>
                        <span onClick={handleSelect} className='giveThingsForm_Fieldset-selectButton'>
                            <span className='giveThingsForm_Fieldset-selectButtonText'>
                                {town}
                                 <ul className={selectOn ? 'giveThingsForm_Fieldset-selectButtonChoiceList'
                                     :
                                     'giveThingsForm_Fieldset-selectButtonChoiceList hidden'
                                 }>
                                     <li onClick={() => handleSelectTown("Poznań")}>Poznań</li>
                                     <li onClick={() => handleSelectTown("Warszawa")}>Warszawa</li>
                                     <li onClick={() => handleSelectTown("Kraków")}>Kraków</li>
                                     <li onClick={() => handleSelectTown("Wrocław")}>Wrocław</li>
                                     <li onClick={() => handleSelectTown("Katowice")}>Katowice</li>
                                 </ul>

                            </span>
                             <span className={selectOn ? 'giveThingsForm_Fieldset-selectButtonArrowUp' : 'giveThingsForm_Fieldset-selectButtonArrowDown'}></span>
                        </span>
                    </div>
                    <p className='giveThingsForm_ButtonGroupWho_question'>Komu chcesz pomóc?</p>
                    <button onClick={() => handleChoseWhoHelp("dzieciom")} className='giveThingsForm_ButtonGroupWho'>dzieciom</button>
                    <button onClick={() => handleChoseWhoHelp("samotnym matkom")} className='giveThingsForm_ButtonGroupWho'>samotnym matkom</button>
                    <button onClick={() => handleChoseWhoHelp("bezdomnym")} className='giveThingsForm_ButtonGroupWho'>bezdomnym</button>
                    <br/>
                    <button onClick={() => handleChoseWhoHelp("niepełnosprawnym")} className='giveThingsForm_ButtonGroupWho'>niepełnosprawnym</button>
                    <button onClick={() => handleChoseWhoHelp("osobom starszym")} className='giveThingsForm_ButtonGroupWho'>osobom starszym</button>
                    <label htmlFor="orgNameInput" >Wpisz nazwę konkretnej organizacji (opcjonalnie)
                    </label>
                    <input className='giveThingsForm_organisationInput' onChange={handleChangeOrganisationInput} id="orgNameInput" type="text" name="organisation" value={organisation}/>
                    <div className='giveThingsForm_ButtonArea'>
                        <button type='button' onClick={pageDecrease}>Wstecz</button>
                        <button type='button' onClick={pageIncrease}>Dalej</button>
                    </div>

                </form>
            );
        case 4:
            return (
                <form onSubmit={handleOnSubmit} className='giveThingsForm'>
                    <p className='giveThingsForm_page'>Krok {page}/4</p>
                    <h1 className='giveThingsForm_Fieldset-Legend'>Podaj adres oraz termin odbioru rzecz przez kuriera</h1>
                    <div className='giveThingsForm_adresAndDate-container'>
                        <div className='giveThingsForm_adresAndDate-Adres'>
                            <p>Adres odbioru:</p>
                            <div className='giveThingsForm_adresAndDate_labelAndInput'>
                                <label>Ulica</label>
                                <input onChange={handleChangeOtherFormInputs} type='text' name='street' value={timeAndAdressForm.street}></input>
                            </div>
                            <div className='giveThingsForm_adresAndDate_labelAndInput'>
                                <label>Miasto</label>
                                <input onChange={handleChangeOtherFormInputs} type='text' name='city' value={timeAndAdressForm.city}></input>
                            </div>
                            <div className='giveThingsForm_adresAndDate_labelAndInput'>
                                <label>Kod <br/> pocztowy</label>
                                <input onChange={handleChangeOtherFormInputs} type='text' name='postCode' value={timeAndAdressForm.postCode}></input>
                            </div>
                            <div className='giveThingsForm_adresAndDate_labelAndInput'>
                                <label>Numer <br/> telefonu</label>
                                <input onChange={handleChangeOtherFormInputs} type='number' name='phone' value={timeAndAdressForm.phone}></input>
                            </div>
                        </div>
                        <div className='giveThingsForm_adresAndDate-Date'>
                            <p>Termin odbioru:</p>
                            <div className='giveThingsForm_adresAndDate_labelAndInput'>
                                <label>Data</label>
                                <input onChange={handleChangeOtherFormInputs} type='date' name='date' value={timeAndAdressForm.date}></input>
                            </div>
                            <div className='giveThingsForm_adresAndDate_labelAndInput'>
                                <label>Godzina</label>
                                <input onChange={handleChangeOtherFormInputs} type='time' name='hour' value={timeAndAdressForm.hour}></input>
                            </div>
                            <div className='giveThingsForm_adresAndDate_labelAndInput'>
                                <label>Uwagi<br/> dla Kuriera</label>
                                <textarea onChange={handleChangeOtherFormInputs} name='additionalInformation' value={timeAndAdressForm.additionalInformation}></textarea>
                            </div>
                        </div>
                    </div>
                    <div className='giveThingsForm_ButtonArea'>
                        <button type='button' onClick={pageDecrease}>Wstecz</button>
                        <button type='button' onClick={pageIncrease}>Dalej</button>
                    </div>
                </form>
            );
        case 5:
            return (
                <div className='giveThingsForm'>
                    <h1>Podsumowanie Twojej darowizny</h1>
                    <p>Oddajesz:</p>
                    <ul>
                        <li>
                            { bags }{" "}
                            {bags === 1 && "worek"}
                            {bags === 2 && "worki"}
                            {bags === 3 && "worki"}
                            {bags === 4 && "worki"}
                            {bags === 5 && "worków"}
                            {bags === 6 && "worków"}
                            <strong>|</strong> {thingsArr.join(", ")}<strong>|</strong> {whoHelp.join(", ")}</li>
                        <li>dla lokalizacji: {town}</li>
                    </ul>
                    <div className='tables'>
                        <table>
                            <thead>
                            <tr><th colSpan={2}>Adres odbioru:</th></tr>
                            </thead>
                            <tbody>
                            <tr><td>Ulica</td><td>{timeAndAdressForm.street}</td></tr>
                            <tr><td>Miasto</td><td>{timeAndAdressForm.city}</td></tr>
                            <tr><td>Kod pocztowy</td><td>{timeAndAdressForm.postCode}</td></tr>
                            <tr><td>Numer telefonu</td><td>{timeAndAdressForm.phone}</td></tr>
                            </tbody>
                        </table>
                        <table>
                            <thead>
                            <tr><th colSpan={2}>Termin odbioru:</th></tr>
                            </thead>
                            <tbody>
                            <tr><td>Data</td><td>{timeAndAdressForm.date}</td></tr>
                            <tr><td>Godzina</td><td>{timeAndAdressForm.hour}</td></tr>
                            <tr><td>Uwagi dla kuriera</td><td>{timeAndAdressForm.additionalInformation}</td></tr>
                            </tbody>
                        </table>
                    </div>
                        <div className='giveThingsForm_ButtonArea'>
                            <button type='button' onClick={pageDecrease}>Wstecz</button>
                            <button type='button' onClick={handleConfirmClick}>Potwierdzam</button>
                        </div>
                    </div>


            );

        case 6:
            return (
            <div className='giveThingsForm'>
                <div className='giveThingsForm_container'>
                    <div className='giveThingsForm_thanks'>
                        <p>Dziękujemy za przesłanie formularza Na maila prześlemy wszelkie informacje o odbiorze.</p>
                        <img src={decoration}/>
                    </div>

                </div>
            </div>
                )

        default:
            return (
                <form onSubmit={handleOnSubmit} className='giveThingsForm'>
                    <p className='giveThingsForm_page'>Krok {page}/4</p>
                    <h1 className='giveThingsForm_Fieldset-Legend'>Zaznacz co chcesz oddać:</h1>
                    <fieldset className='giveThingsForm_Fieldset'>
                        <label className='giveThingsForm_Fieldset-Label'>
                            <input onChange={checkboxSelected1} type='checkbox' name='things' checked={goodThings}/>
                            <span className={goodThings ? 'checkboxSpan checked' : 'checkboxSpan'}></span>
                            <span>ubrania, które nadają się do ponownego użycia</span>
                        </label>
                        <label className='giveThingsForm_Fieldset-Label'>
                            <input onChange={checkboxSelected2} type='checkbox' name='things' checked={badThings}/>
                            <span className={badThings ? 'checkboxSpan checked' : 'checkboxSpan'}></span>
                            <span>ubrania, do wyrzucenia</span>
                        </label>
                        <label className='giveThingsForm_Fieldset-Label'>
                            <input onChange={checkboxSelected3} type='checkbox' name='things' value="thingsInGoodCondition" checked={toys}/>
                            <span className={toys ? 'checkboxSpan checked' : 'checkboxSpan'}></span>
                            <span>zabawki</span>
                        </label>
                        <label className='giveThingsForm_Fieldset-Label'>
                            <input onChange={checkboxSelected4} type='checkbox' name='things' value="thingsInGoodCondition" checked={books}/>
                            <span className={books ? 'checkboxSpan checked' : 'checkboxSpan'}></span>
                            <span>książki</span>
                        </label>
                        <label className='giveThingsForm_Fieldset-Label'>
                            <input onChange={checkboxSelected5} type='checkbox' name='things' value="thingsInGoodCondition" checked={other}/>
                            <span className={other ? 'checkboxSpan checked' : 'checkboxSpan'}></span>
                            <span>inne</span>
                        </label>
                    </fieldset>
                    <div className='giveThingsForm_ButtonArea'>
                        <button type='button' onClick={handleDalejBtnClick}>Dalej</button>
                    </div>
                </form>
            ) ;
    }
}

export default GiveThingsForm;