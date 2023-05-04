import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';
import {App} from './components/app/index';
import { BrowserRouter } from 'react-router-dom';
// import { AppMui } from './components/app-mui';


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BrowserRouter><App/></BrowserRouter>);



