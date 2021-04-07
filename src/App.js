import React from 'react';
import Particles from "react-tsparticles";
import logo from './logo.svg';
import './App.css';
import particlesOptions from "./particles.json";

function App() {
    return (
        <div className="App">
            <Particles options={particlesOptions}/>
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    Lam fucks
                </p>
                <p>
                    .
                </p>
                <a
                    className="App-link"
                    href="https://www.youtube.com/watch?v=xvFZjo5PgG0"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    don't click dis
                </a>
                <a
                    className="App-link"
                    href="https://twitter.com/lamslimenstein"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    don't dm me
                </a>
            </header>
        </div>
    );
}

export default App;
