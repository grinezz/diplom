import React from 'react';
import './App.css';
import Header from '../Components/Header.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import First from '../Components/First.js';
import Napr from '../Components/Napr.js';
import Company from '../Components/Company.js';
import Sadsad from '../Components/Sadsad.js';
import Diagnostic from '../Components/Diagnostic.js';
import Contacts from '../Components/Contacts.js';

function App() {
    return (
        <div id='body'>
            <div>
             <Header />
             <First />
             <Napr />
             <Company />
             <Diagnostic />
             <Sadsad />
             <Contacts />
            </div>
        </div>
    );
}
export default App;
