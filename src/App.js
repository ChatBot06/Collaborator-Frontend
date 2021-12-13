import React from "react";
import Header from "./components/Header/Header";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { Container } from 'react-bootstrap'
import Routes from './routes';
import './App.css';
const App = () => {
        return (
                <div>
                        <Router>
                                <Header />
                                <main className='py-3' style={{ backgroundColor: "lightblue" }}>
                                        <Container>
                                                <div className="auth-wrapper">
                                                        <div className="auth-inner">
                                                                <Routes></Routes>
                                                        </div>
                                                </div>
                                        </Container>
                                </main>
                        </Router>

                </div>
        )
}

export default App;