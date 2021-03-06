import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Routes,
  } from "react-router-dom";
import { AboutScreen } from './AboutScreen';
import { LoginScreen } from './LoginScreen';
import { HomeScreen } from './HomeScreen';
import { Navbar } from './Navbar';

export const AppRouter = () => {
    return (
        <Router>
            <div>
                <Navbar />
                <Routes>
                    <Route path="/" element={<HomeScreen />} />
                    <Route path="/about" element={<AboutScreen />} />
                    <Route path="/login" element={<LoginScreen />} />                    
                    <Route path="*" element={<HomeScreen />} />
                </Routes>
            </div>
        </Router>
    )
}
