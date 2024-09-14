import { Routes, Route } from "react-router-dom";
import { Signup } from "./Signup";
import { Login } from "./Login";
import { LogHoursForm } from "./LogHoursForm";
import { AddEventForm } from "./AddEventForm";

export function Content() {
  return (
    <div className="content-wrap">
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/hours" element={<LogHoursForm />} />
        <Route path="/events" element={<AddEventForm />} />
      </Routes>
    </div>
  );
}
