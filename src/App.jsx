import { BrowserRouter } from "react-router-dom";
import { Header } from "./Header";
import { Content } from "./Content";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Content />
      </BrowserRouter>
    </div>
  );
}

export default App;
