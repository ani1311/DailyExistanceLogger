import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import './index.css';

function Home() {
    return (
        <div className="home">
            <h1>Daily Existence Logger</h1>
            <Link to="/daily-existance-logger/log-event">Log Event</Link>
            <br></br>
            <Link to="/daily-existance-logger/log-habit">Log Habit</Link>
        </div>
    );
}

export default Home;
