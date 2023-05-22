import React, {useEffect, useState} from "react";
import './loginPanel.scss'

import auth from "../../src/firebase/firebaseConfig";
import {onAuthStateChanged, signOut} from "firebase/auth";
import {Link, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {showLoggedUser} from "../actions";

const LoginPanel = () => {

    const [loggedUser, setLoggedUser] = useState(useSelector((state) => state.users));
    const dispatch = useDispatch();
    const navigate = useNavigate();


    const logOut = async () => {
        try {
            await setLoggedUser('');
            const user = await signOut(auth);
            await dispatch(showLoggedUser(""));
            console.log(user);

            // await setLoggedUser({})

        } catch (error) {
            console.log(error)
        }
    }

    const handleLogInLink = () => {
        navigate('/logIn');
    }

    const handleRegistrationLink = () => {
        navigate('/registration');
    }
    // onAuthStateChanged(
    //         auth,
    //         (user) => {
    //             user? setLoggedUser(user) : setLoggedUser({});
    //         }
    //     );

    // useEffect(() => {
    //     onAuthStateChanged(
    //         auth,
    //         (user) => {
    //             setLoggedUser(user);
    //         }
    //     );
    // } , [])
    //
    //
    // useEffect(()=> {
    //     // setLoggedUser(useSelector(state => state.users.id))
    // }, [])

    return (
        loggedUser ?
            <div className='loginPanel'>
                <p className='loginPanel_userInformation'>Cześć {loggedUser.user.email}</p>
                <button type='button' className='loginPanel_signInBtn'>Oddaj rzeczy</button>
                <button type='button' className='loginPanel_signOutBtn' onClick={logOut}>Wyloguj konto</button>
            </div>
            :
            <div className='loginPanel'>
                <button type='button' className='loginPanel_logInBtn' onClick={handleLogInLink}>Zaloguj</button>
                <button type='button' className='loginPanel_signInBtn' onClick={handleRegistrationLink}>Załóż konto</button>
            </div>


    )


}

export default LoginPanel;
