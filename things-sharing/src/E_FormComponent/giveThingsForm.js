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


    const pageIncrease = () => {
        setPage((prev) => prev + 1)
    }
    const pageDecrease = () => {
        setPage((prev)=> prev - 1 )
    }

    const checkboxSelected1 = (event) => {
        setGoodThings((prev) => !prev);
        // setThingsObject( prevState => ({...prevState, [event.target.name]: event.target.value}))
        console.log(event.target.checked);
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




    switch (page) {
        case 2:
            return (
                <form>
                    <p>Krok {page}/4</p>
                    <h1>Podaj liczbę 60l worków, w które spakowałeś/aś rzeczy:</h1>
                    <button type='button' onClick={pageDecrease}>Wstecz</button>
                    <button type='button' onClick={pageIncrease}>Dalej</button>
                </form>
            );
        case 3:
            return (
                <form>
                    <p>Krok {page}/4</p>
                    <h1>Lokalizacja</h1>
                    <button type='button' onClick={pageDecrease}>Wstecz</button>
                    <button type='button' onClick={pageIncrease}>Dalej</button>
                </form>
            );
        case 4:
            return (
                <form>
                    <p>Krok {page}/4</p>
                    <h1>Podaj adres oraz termin odbioru rzecz przez kuriera</h1>
                    <button type='button' onClick={pageDecrease}>Wstecz</button>
                    <button type='button' onClick={pageIncrease}>Dalej</button>

                </form>
            );
        case 5:
            return (
                <div>
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
                    <button type='button' onClick={pageDecrease}>Wstecz</button>
                    <button type='button' onClick={() => console.log("potwierdzenie")}>Potwierdzam</button>
                </div>


            );

        default:
            return (
                <form className='GiveThingsForm'>
                    <p>Krok {page}/4</p>
                    <fieldset className='GiveThingsForm_Fieldset'>
                        <legend>Zaznacz co chcesz oddać:</legend>
                        <label>
                            <input onChange={checkboxSelected1} type='checkbox' name='things' checked={goodThings}/>
                            <span className='checkboxSpam'></span>
                            ubrania, które nadają się do ponownego użycia
                        </label>
                        <label>
                            <input onChange={checkboxSelected2} type='checkbox' name='things' checked={badThings}/>
                            <span className='checkboxSpam'></span>
                            ubrania, do wyrzucenia
                        </label>
                        <label>
                            <input onChange={checkboxSelected3} type='checkbox' name='things' value="thingsInGoodCondition" checked={toys}/>
                            <span className='checkboxSpam'></span>
                            zabawki
                        </label>
                        <label>
                            <input onChange={checkboxSelected4} type='checkbox' name='things' value="thingsInGoodCondition" checked={books}/>
                            <span className='checkboxSpam'></span>
                            książki
                        </label>
                        <label>
                            <input onChange={checkboxSelected5} type='checkbox' name='things' value="thingsInGoodCondition" checked={other}/>
                            <span className='checkboxSpam'></span>
                            inne
                        </label>
                    </fieldset>
                    <button type='button' onClick={pageIncrease}>Dalej</button>
                    <button type='button' onClick={sentFirstPageToRedux}>Test</button>


                </form>
            ) ;
    }
}

export default GiveThingsForm;