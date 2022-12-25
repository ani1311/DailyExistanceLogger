import React from 'react';
import { Form, Button, Col } from 'react-bootstrap';
import './logEventForm.css'
import { commitNewLog } from './utils/commitNewLog';

function LogEventForm() {


    const today = new Date();
    const todayString = today.toISOString();
    const todayDate = todayString.split('T')[0];

    const [formValues, setFormValues] = React.useState({
        date: todayDate,
        startTime: '',
        endTime: '',
        activity: '',
    });


    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormValues({ ...formValues, [name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (formValues.startTime === '' || formValues.endTime === '' || formValues.activity === '') {
            alert('Please fill all the fields');
            return;
        }

        if (formValues.startTime >= formValues.endTime) {
            alert('Start time should be less than end time');
            return;
        }

        if (event.target.elements.activity.matches(':focus')) {
            return; // Do not submit the form
        }

        commitNewLog(formValues);
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group as={Col} controlId="formDate">
                <Form.Label>Date</Form.Label>
                <Form.Control
                    type="date"
                    name="date"
                    value={formValues.date}
                    onChange={handleChange}
                />
            </Form.Group>
            <Form.Group as={Col} controlId="formStartTime">
                <Form.Label>Start Time</Form.Label>
                <Form.Control
                    type="number"
                    name="startTime"
                    value={formValues.startTime}
                    onChange={handleChange}
                    min="0"
                    max="23"
                    step="1"
                />
            </Form.Group>
            <Form.Group as={Col} controlId="formEndTime">
                <Form.Label>End Time</Form.Label>
                <Form.Control
                    type="number"
                    name="endTime"
                    value={formValues.endTime}
                    onChange={handleChange}
                    min="0"
                    max="23"
                    step="1"
                />
            </Form.Group>
            <Form.Group controlId="formActivity">
                <Form.Label>Activity</Form.Label>
                <textarea
                    name="activity"
                    value={formValues.activity}
                    onChange={handleChange}
                    className="activity-field"
                />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    );
};

export default LogEventForm;
