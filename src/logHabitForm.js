import React, { useState, Fragment } from 'react';
import { Form, Button, Col } from 'react-bootstrap';
import { habits } from './data/habits';
import { useNavigate } from "react-router-dom";
import './form.css'
import { updateHabit } from './utils/commitHabitUpdate';


function LogHabitForm() {
    let navigate = useNavigate();
    const handleClick = (event, habit) => {
        updateHabit(habit);

        navigate("/daily-existance-logger/");

    }

    let buttons = habits.map(p => (
        <button onClick={e => { handleClick(e, p) }} key={p}>  {p} </button >
    ));

    return (
        <div>
            <Fragment>{buttons}</Fragment>
        </div>
    );

}
export default LogHabitForm;
