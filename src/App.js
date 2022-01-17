import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Signin from "./pages/Signin";
import { BookingContextProvider } from "./context/BookingContext";
import { MuiThemeProvider, createTheme } from "@material-ui/core/styles";
import purple from "@material-ui/core/colors/purple";

const theme = createTheme({
  palette: {
    background: purple,
    primary: purple,
    // secondary: {
    //   main: "#E33E7F",
    // },
  },
});

function App() {
  return (
    <BookingContextProvider>
      <MuiThemeProvider theme={theme}>
        <div className="App">
          <Router>
            <Routes>
              <Route exact path="/" element={<Homepage />} />
              <Route exact path="/signin" element={<Signin />} />
            </Routes>
          </Router>
        </div>
      </MuiThemeProvider>
    </BookingContextProvider>
  );
}

export default App;
