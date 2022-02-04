import { lazy, Suspense } from "react";
import { BookingContextProvider } from "./context/BookingContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Loader from "./components/Loader";
const Homepage = lazy(() => import("./pages/Homepage"));
const AboutUs = lazy(() => import("./pages/AboutUs"));
const ContactUs = lazy(() => import("./pages/ContactUs"));

function App() {
  return (
    <BookingContextProvider>
      <Router>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route exact path="/" element={<Homepage />} />
            <Route exact path="/aboutus" element={<AboutUs />} />
            <Route exact path="/contactus" element={<ContactUs />} />
          </Routes>
        </Suspense>
      </Router>
    </BookingContextProvider>
  );
}

export default App;
