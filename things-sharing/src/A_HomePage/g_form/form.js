import './form.scss';
import decoration from '../../Z_Images/Decoration.png'
import Footer from "../h_footer/footer";
import {useState} from "react";
import {addDoc, collection} from "firebase/firestore";
import {db} from "../../firebase/firebaseConfig";


const Form = () => {
    const [contactForm, setContactForm] = useState({name: "", email: "", message: ""});
    const [messageSent, setMessageSent] = useState(false);
    const [wrongEmail, setWrongEmail] = useState(false);
    const [wrongName, setWrongName] = useState(false);

    const handleOnChangeForm = (event) => {
        const {name, value} = event.target;
        setContactForm(prevState => ({...prevState, [name]: value}))
    }
    const handleSubmit = (event) => {
        event.preventDefault();
    }

    const regEmail = /^[a-z\d]+[\w\d.-]*@(?:[a-z\d]+[a-z\d-]+\.){1,5}[a-z]{2,6}$/i;
    const regName = /[a-z]/i;

    const messageRef = collection(db, "messages");

    const handleConfirmationClick = async (event) => {
        event.preventDefault();

        if (regEmail.test(contactForm.email) !== true && regName.test(contactForm.name) !== true) {
            setWrongEmail(true);
            setWrongName(true);
            console.log('błędny mail i imię')
        }

        else if (regEmail.test(contactForm.email) === true && regName.test(contactForm.name) !== true) {
            setWrongName(true);
            console.log('błędne imię')
        }

        if (regEmail.test(contactForm.email) !== true && regName.test(contactForm.name) === true) {
            setWrongEmail(true);
            console.log('błędny mail')
        }

        else if (regEmail.test(contactForm.email) && regName.test(contactForm.name)) {
            try {
                await addDoc(messageRef, {
                    date: new Date(),
                    name: contactForm.name,
                    email: contactForm.email,
                    message: contactForm.message,
                })
                console.log('potwierdzenie');
                setMessageSent(true)

            } catch (error) {
                console.log(error);
            }
        }


    }
    const handleChangeWrongEmail = () => {
        setWrongEmail(false)
    }
    const handleChangeWrongName = () => {
        setWrongName(false)
    }


    const  handleNewMessageClick = () => {
        setMessageSent(false);
    }

    if (messageSent === false ) {

        return (
            <div id='contact' className='contactFormContainer'>
                <div className='contactForm'>
                    <h1>Skontaktuj się z nami</h1>
                    <img className='formDecorationImg' src={decoration} alt='dekoracja'/>
                    <form onSubmit={handleSubmit} className='formInputs'>
                        <div className='formInputs_top'>
                            <div>
                                <label id='contactName'>Wpisz swoje imię</label>
                                <br/>
                                <input onFocus={handleChangeWrongName} type='text' htmlFor='contactName' name='name' value={contactForm.name} onChange={handleOnChangeForm}/>
                                {wrongName ? <small>błędne imię</small> : undefined}
                            </div>

                            <div>
                                <label id='contactEmail'>Wpisz swój email</label>
                                <br/>
                                <input onFocus={handleChangeWrongEmail} type='email' htmlFor='contactEmail' name='email' value={contactForm.email} onChange={handleOnChangeForm}/>
                                {wrongEmail ? <small>błędny email</small> : undefined}
                            </div>
                        </div>
                        <div>
                            <label id='contactMessage'>Wpisz swoją wiadomość</label>
                            <br/>
                            <textarea htmlFor='contactEmail' name='message' value={contactForm.message} onChange={handleOnChangeForm}/>
                        </div>

                        <button type='submit' className='contactFormBtnSubmit' onClick={handleConfirmationClick}>Wyślij</button>
                    </form>
                </div>
                <Footer/>
            </div>
        )
    }

    else if (messageSent === true) {
        return (
            <div id='contact' className='contactFormContainer'>
                <div className='contactForm'>
                    <h1>Dziękujemy za wiadomość</h1>
                    <img className='formDecorationImg' src={decoration} alt='dekoracja'/>


                        <button type='button' className='contactFormBtnNewMessage' onClick={handleNewMessageClick}>Nowa wiadomość</button>

                </div>
                <Footer/>
            </div>
        )
    }

    }



export default Form;