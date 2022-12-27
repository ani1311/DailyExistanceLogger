import LogEventForm from "./logEventForm";
import LogHabitForm from "./logHabitForm";
import Home from "./home";
import { BrowserRouter, Routes, Route } from "react-router-dom";



function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/daily-existance-logger/" element={<Home />} />
                <Route exact path="/daily-existance-logger/log-event" element={<LogEventForm />} />
                <Route exact path="/daily-existance-logger/log-habit" element={<LogHabitForm />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
