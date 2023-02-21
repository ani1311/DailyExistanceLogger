import React, { useState, Fragment } from 'react';
import { Form, Button, Col } from 'react-bootstrap';
import { habits } from '../data/habits';
import { useNavigate } from "react-router-dom";
import '../form.css'
import './logHabitForm.css'
import { updateHabit } from '../utils/commitHabitUpdate';


function LogHabitForm() {
    let navigate = useNavigate();
    let [note, setNote] = useState("");


    const handleClick = (event, habit) => {
        updateHabit(habit, note);
        navigate("/daily-existance-logger/");

    }
    const handleNoteChange = (event) => {
        if (event !== undefined) {
            setNote(event.target.value);
        }
    }

    setTimeout(handleNoteChange, 1000)

    let buttons = habits.map(p => (
        <button onClick={e => { handleClick(e, p) }} key={p}>  {p} </button >
    ));

    return (
        <div>
            <Fragment>{buttons}</Fragment>
            <input type="text" value={note} onChange={handleNoteChange} />
        </div>
    );

}
export default LogHabitForm;
