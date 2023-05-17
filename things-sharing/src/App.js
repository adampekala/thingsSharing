import './App.scss';
import HomePage from "./A_HomePage/home";
import {HashRouter, Routes, Route} from "react-router-dom";
import SignUpComponent from "./B_SignUpComponent/signUpComponent";
import LogInComponent from "./B_LogInComponent/logInComponent";

//TODO firebase
import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase/firebaseConfig";
const app = initializeApp(firebaseConfig);

//dotenv implementation

require('dotenv').config();


function App() {
  return (
      <HashRouter>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='register' element={<SignUpComponent/>}/>
          <Route path='logIn' element={<LogInComponent/>}/>
          {/*<Route path='logOut' element={<LogOutComponent/>}/>*/}
          {/*<Route path='form' element={<FormComponent/>}/>*/}
        </Routes>
      </HashRouter>

  );
}

export default App;
