import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter, Routes ,Route } from 'react-router-dom';
import App from "./App";


ReactDom.render(
    <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App/>}/>
            </Routes>
        </BrowserRouter>

    </>
    ,document.getElementById('root'));