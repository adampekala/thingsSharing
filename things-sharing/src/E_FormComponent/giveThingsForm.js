import React, {useState} from "react";
import '../App.scss'

const GiveThingsForm = () => {
    const [page, setPage] = useState(1);

    switch (true) {
        case 2:
            return (
                <form>

                </form>
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
                    <button type='button'>Dalej</button>

                </form>
            ) ;
    }
}

export default GiveThingsForm;