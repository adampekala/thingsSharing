import './form.scss';
import decoration from '../../Z_Images/Decoration.png'
import Footer from "../h_footer/footer";


const Form = () => {
    return (
        <div className='formContainer'>
            <div className='form'>
                <h1>Skontaktuj się z nami</h1>
                <img className='formDecorationImg' src={decoration} alt='dekoracja'/>
                <form className='formInputs'>
                    <div className='formInputs_top'>
                        <div>
                            <label id='name'>Wpisz swoje imię</label>
                            <br/>
                            <input htmlFor='name' value={"dane"}/>
                        </div>

                        <div>
                            <label id='name'>Wpisz swój email</label>
                            <br/>
                            <input htmlFor='name' value={"dane"}/>
                        </div>
                    </div>
                    <div>
                        <label id='message'>Wpisz swoją wiadomość</label>
                        <br/>
                        <textarea htmlFor='message'/>
                    </div>

                    <button type='submit' className='formBtnSubmit'>Wyślij</button>
                </form>
            </div>
            <Footer/>
         </div>
    )
}

export default Form;