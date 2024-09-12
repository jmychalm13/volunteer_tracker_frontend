import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import { Header } from "./Header";
// import { Content } from "./Content";
import { Signup } from "./Signup";
import { Login } from "./Login";
import { LogHoursForm } from "./LogHoursForm";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/hours" element={<LogHoursForm />} />
      </Routes>
    </Router>
  );
}

export default App;
