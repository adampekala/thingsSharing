import './App.scss';
import HomePage from "./A_HomePage/home";
import { HashRouter, Routes, Route } from "react-router-dom";
import SignUpComponent from "./B_SignUpComponent/signUpComponent";
import LogInComponent from "./C_LogInComponent/logInComponent";
import LogOutComponent from "./D_LogOutComponent/logOutComponent";
import { db } from "./firebase/firebaseConfig";

import {
    collection,
    getDocs
} from 'firebase/firestore';

import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {showOrganisation} from "./actions";



function App() {
    const organisationRef = collection(db, "organisations");
    const dispatch = useDispatch();
    useEffect(() => {
        getDocs(organisationRef)
            .then((organisations) => {
                console.log(organisations);
                const arr = organisations.docs.map((doc)=> ({...doc.data(), id: doc.id}));
                console.log(arr);
                dispatch(showOrganisation(arr))
            })
            .catch(err => console.log("błąd" + err))
    }, [])
  return (
      <HashRouter>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='registration' element={<SignUpComponent/>}/>
          <Route path='logIn' element={<LogInComponent/>}/>
          <Route path='logOut' element={<LogOutComponent/>}/>
          {/*<Route path='form' element={<FormComponent/>}/>*/}
        </Routes>
      </HashRouter>

  );
}

export default App;
