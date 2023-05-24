import React from "react";
import LoginPanel from "../X_CommonComponents/loginPanel";
import Navigation from "../X_CommonComponents/navigation";
import Decoration from "../Z_Images/Decoration.png";
import Footer from "../A_HomePage/h_footer/footer";
import Form from "../A_HomePage/g_form/form";
import './formComponent.scss'
import GiveThingsForm from "./giveThingsForm";

const FormComponent = () => {
    return (
        <>
            <LoginPanel />
            <Navigation/>
            <header id='start' className='header'>
                <h1 className='headerTitle'>Zacznij pomagać! <br/> Oddaj niechciane rzeczy w zaufane ręce</h1>
                <img src={Decoration} alt='dekoracja'/>
                <div className='headerButtons'>
                    <button type='button'>ODDAJ <br/> RZECZY</button>
                    <button type='button'>ZORGANIZUJ <br/> ZBIÓRKĘ</button>
                </div>
            </header>
            <div className="giveThingsMessage">
                <h1>Ważne!</h1>
                <p>Uzupełnij szczegóły dotyczące Twoich rzeczy. Dzięki temu będziemy wiedzieć komu najlepiej je przekazać.</p>
            </div>
            <GiveThingsForm/>

            <Form />
            <Footer/>
        </>
    )
}

export default FormComponent;