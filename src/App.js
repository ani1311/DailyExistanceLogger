import LogEventForm from "./logEventForm";
import LogHabitForm from "./habit/logHabitForm";
import Home from "./index/index";
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
