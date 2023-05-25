import React, {useState} from "react";
import '../App.scss'

const GiveThingsForm = () => {
    const [page, setPage] = useState(1);
    const pageIncrease = () => {
        setPage((prev) => prev + 1)
    }
    const pageDecrease = () => {
        setPage((prev)=> prev - 1 )
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
                        <label><input type='checkbox'/>ubrania, które nadają się do ponownego użycia</label>
                        <label><input type='checkbox'/>ubrania, do wyrzucenia</label>
                        <label><input type='checkbox'/>zabawki</label>
                        <label><input type='checkbox'/>książki</label>
                        <label><input type='checkbox'/>inne</label>
                    </fieldset>
                    <button type='button' onClick={pageIncrease}>Dalej</button>

                </form>
            ) ;
    }
}

export default GiveThingsForm;