import './form.scss';
import decoration from '../../Z_Images/Decoration.png'
import Footer from "../h_footer/footer";
import {useState} from "react";
import {addDoc, collection} from "firebase/firestore";
import {db} from "../../firebase/firebaseConfig";


const Form = () => {
    const [contactForm, setContactForm] = useState({name: "", email: "", message: ""});
    const [messageSent, setMessageSent] = useState(false);
    const handleOnChangeForm = (event) => {
        const {name, value} = event.target;
        setContactForm(prevState => ({...prevState, [name]: value}))
    }
    const handleSubmit = (event) => {
        event.preventDefault();
    }

    //TODO message to firebase
    const messageRef = collection(db, "messages");

    const handleConfirmationClick = async (event) => {
        event.preventDefault();
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