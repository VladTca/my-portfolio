import React from 'react';

import './App.css';
import {Header} from "./layout/header/Header";
import {Main} from "./layout/sections/main/Main";
import {Footer} from "./layout/footer/Footer";
import {Contact} from "./layout/sections/contacts/Contacts";
import {Achivments} from "./layout/sections/achivments/Achivments";
import {Myworks} from "./layout/sections/myworks/Myworks";


function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skills/>
            <Myworks/>
            <Achivments/>
            <Contact/>
            <Footer/>
        </div>
    );
}

export default App;
