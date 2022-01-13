import {ThemeProvider} from '@material-ui/core/styles'
import React from 'react'
import theme from './theme'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import SignIn from './pages/SignIn';

export default function App(){

    const url = window.location.href;
    return(
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/signin' element={<SignIn/>}/>
                    <Route path='*' element={<h1>Page Not Found - 404</h1>}/>
                </Routes>
            </BrowserRouter>
        </ThemeProvider>

    )
}
