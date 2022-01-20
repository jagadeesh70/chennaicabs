import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Signin from "./pages/Signin";
import { BookingContextProvider } from "./context/BookingContext";

function App() {
  return (
    <BookingContextProvider>
      <div className="App">
        <Router>
          <Routes>
            <Route exact path="/" element={<Homepage />} />
            <Route exact path="/signin" element={<Signin />} />
          </Routes>
        </Router>
      </div>
    </BookingContextProvider>
  );
}

export default App;
