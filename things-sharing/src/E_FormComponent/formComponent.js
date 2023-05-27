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
            <main className='formComponent_container'>
                <div className='formComponent_rightArea'>
                    <LoginPanel />
                    <Navigation/>
                    <header className='formComponent_header'>
                        <h1 className='formComponent_header-main'>Oddaj rzeczy, których już nie chcesz<br/>POTRZEBUJĄCYM</h1>
                        <img src={Decoration} alt='dekoracja'/>
                        <h2 className='formComponent_header-second'>Wystarczą 4 proste kroki:</h2>
                        <div className='formComponent_header-squares'>
                            <div className='formComponent_header-square'>
                                <p>1</p>
                                <p>Wybierz rzeczy</p>
                            </div>
                            <div className='formComponent_header-square'>
                                <p>2</p>
                                <p>Spakuj je w worki</p>
                            </div>
                            <div className='formComponent_header-square'>
                                <p>3</p>
                                <p>Wybierz fundację</p>
                            </div>
                            <div className='formComponent_header-square'>
                                <p>4</p>
                                <p>Zamów kuriera</p>
                            </div>
                        </div>
                    </header>
                </div>
            </main>
            <div className="giveThingsMessage">
                <h1>Ważne!</h1>
                <p>Uzupełnij szczegóły dotyczące Twoich rzeczy. Dzięki temu będziemy wiedzieć komu najlepiej je przekazać.</p>
            </div>
            <GiveThingsForm/>
            <Form />
        </>
    )
}

export default FormComponent;