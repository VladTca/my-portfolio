import React from 'react';

import './App.css';
import {Header} from "./layout/header/Header";
import {Main} from "./layout/sections/main/Main";
import {Footer} from "./layout/footer/Footer";
import {Contact} from "./layout/sections/contacts/Contacts";
import {Achievements} from "./layout/sections/achivments/Achievements";
import {Myworks} from "./layout/sections/myworks/Myworks";
import {Skills} from "./layout/sections/skills/Skills";


function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skills/>
            <Myworks/>
            <Achievements/>
            <Contact/>
            <Footer/>
        </div>
    );
}

export default App;
