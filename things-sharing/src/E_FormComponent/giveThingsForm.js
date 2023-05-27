import React, {useState} from "react";
import '../App.scss'

const GiveThingsForm = () => {
    const [page, setPage] = useState(1);
    const [goodThings, setGoodThings] = useState(false);
    const [badThings, setBadThings] = useState(false);
    const [toys, setToys] = useState(false);
    const [books, setBooks] = useState(false);
    const [other, setOther] = useState(false);
    const [thingsArr, setThingsArr] = useState([]);
    const [selectOn, setSelectOn] = useState(false);
    const [bags, setBags] = useState("--wybierz--")


    const pageIncrease = () => {
        setPage((prev) => prev + 1)
    }
    const pageDecrease = () => {
        setPage((prev)=> prev - 1 )
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
    const sentFirstPageToRedux = () => {

        let arr = [];

        goodThings && arr.push("ubrania");
        badThings && arr.push("ubrania do wyrzucenia");
        toys && arr.push("zabawki");
        books && arr.push("książki");
        other && arr.push("inne");
        console.log(arr);
        setThingsArr(arr);

        // const addNeeds = () => {
        //     return { type: ADD_NEEDS,
        //     needs: arr}
        // }

    }

    const handleDalejBtnClick = (event) => {
        page === 1 && sentFirstPageToRedux();
        pageIncrease()
    }

    const handleSelect = () => {
        setSelectOn(prev =>  !prev )
    }

    const handleSelectBags = (number) => {
        setBags(number);

    }


    switch (page) {
        case 2:
            return (
                <form className='giveThingsForm'>
                    <p className='giveThingsForm_page'>Krok {page}/4</p>
                    <h1 className='giveThingsForm_Fieldset-Legend'>Podaj liczbę 60l worków, w które spakowałeś/aś rzeczy:</h1>
                    <div className='giveThingsForm_Fieldset-selectContainer'>
                        <span>Liczba 60l worków:</span>
                        <span onClick={handleSelect} className='giveThingsForm_Fieldset-selectButton'>
                            <span className='giveThingsForm_Fieldset-selectButtonText'>
                                --wybierz--
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
                <form className='giveThingsForm'>
                    <p className='giveThingsForm_page'>Krok {page}/4</p>
                    <h1 className='giveThingsForm_Fieldset-Legend'>Lokalizacja:</h1>
                    <div className='giveThingsForm_Fieldset-selectContainer'>
                        <span onClick={handleSelect} className='giveThingsForm_Fieldset-selectButton'>
                            <span className='giveThingsForm_Fieldset-selectButtonText'>
                                --wybierz--
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
        case 4:
            return (
                <form className='giveThingsForm'>
                    <p className='giveThingsForm_page'>Krok {page}/4</p>
                    <h1>Podaj adres oraz termin odbioru rzecz przez kuriera</h1>
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
                        <li>4 worki, ubrania w dobrym stanie, dzieciom</li>
                        <li>dla lokalizacji: Warszawa</li>
                    </ul>
                    <div className='tables'>
                        <table>
                            <thead>
                            <tr><th colSpan={2}>Adres odbioru:</th></tr>
                            </thead>
                            <tbody>
                            <tr><td>Ulica</td><td>Ulica</td></tr>
                            <tr><td>Ulica</td><td>Ulica</td></tr>
                            <tr><td>Ulica</td><td>Ulica</td></tr>
                            <tr><td>Ulica</td><td>Ulica</td></tr>
                            </tbody>
                        </table>
                        <table>
                            <thead>
                            <tr><th colSpan={2}>Termin odbioru:</th></tr>
                            </thead>
                            <tbody>
                            <tr><td>Ulica</td><td>Ulica</td></tr>
                            <tr><td>Ulica</td><td>Ulica</td></tr>
                            <tr><td>Ulica</td><td>Ulica</td></tr>
                            <tr><td>Ulica</td><td>Ulica</td></tr>
                            </tbody>
                        </table>
                    </div>
                        <div className='giveThingsForm_ButtonArea'>
                            <button type='button' onClick={pageDecrease}>Wstecz</button>
                            <button type='button' onClick={() => console.log("potwierdzenie")}>Potwierdzam</button>
                        </div>
                    </div>


            );

        default:
            return (
                <form className='giveThingsForm'>
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