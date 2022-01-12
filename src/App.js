import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Signin from "./pages/Signin";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route exact path="/signin" element={<Signin />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
