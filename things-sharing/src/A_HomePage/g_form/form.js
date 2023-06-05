import './form.scss';
import decoration from '../../Z_Images/Decoration.png'
import Footer from "../h_footer/footer";
import {useState} from "react";


const Form = () => {
    const [contactForm, setContactForm] = useState({name: "111", email: "222", message: "333"});
    const handleOnChangeForm = (event) => {
        const {name, value} = event.target;
        setContactForm(prevState => ({...prevState, [name]: value}))
    }

    return (
        <div id='contact' className='contactFormContainer'>
            <div className='contactForm'>
                <h1>Skontaktuj się z nami</h1>
                <img className='formDecorationImg' src={decoration} alt='dekoracja'/>
                <form className='formInputs'>
                    <div className='formInputs_top'>
                        <div>
                            <label id='contactName'>Wpisz swoje imię</label>
                            <br/>
                            <input type='text' htmlFor='contactName' name='name' value={contactForm.name} onChange={handleOnChangeForm}/>
                        </div>

                        <div>
                            <label id='contactEmail'>Wpisz swój email</label>
                            <br/>
                            <input type='email' htmlFor='contactEmail' name='email' value={contactForm.email} onChange={handleOnChangeForm}/>
                        </div>
                    </div>
                    <div>
                        <label id='contactMessage'>Wpisz swoją wiadomość</label>
                        <br/>
                        <textarea htmlFor='contactEmail' name='message' value={contactForm.message} onChange={handleOnChangeForm}/>
                    </div>

                    <button type='submit' className='contactFormBtnSubmit'>Wyślij</button>
                </form>
            </div>
            <Footer/>
         </div>
    )
}

export default Form;