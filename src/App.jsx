import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Header } from "./Header";
import { Content } from "./Content";
import { Signup } from "./Signup";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;
