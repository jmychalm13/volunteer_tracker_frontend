import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import { Header } from "./Header";
// import { Content } from "./Content";
import { Signup } from "./Signup";
import { Login } from "./Login";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
