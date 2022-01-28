import Homepage from "./pages/Homepage";
import { BookingContextProvider } from "./context/BookingContext";

function App() {
  return (
    <BookingContextProvider>
      <div className="App">
        <Homepage />
      </div>
    </BookingContextProvider>
  );
}

export default App;
