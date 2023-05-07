import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './Components/App';
import {data} from "./data/constants";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App data = {data}/>
);
