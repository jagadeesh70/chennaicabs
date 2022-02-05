import { lazy, Suspense, useContext } from "react";
import {
  BookingContextProvider,
  BookingContext,
} from "./context/BookingContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Loader from "./components/Loader";
const Homepage = lazy(() => import("./pages/Homepage"));
const AboutUs = lazy(() => import("./pages/AboutUs"));
const ContactUs = lazy(() => import("./pages/ContactUs"));

function App() {
  const { loading } = useContext(BookingContext);

  return (
    <BookingContextProvider>
      {loading ? (
        <Loader />
      ) : (
        <Router>
          <Suspense fallback={<Loader />}>
            <Header />
            <Routes>
              <Route exact path="/" element={<Homepage />} />
              <Route exact path="/aboutus" element={<AboutUs />} />
              <Route exact path="/contactus" element={<ContactUs />} />
            </Routes>
          </Suspense>
        </Router>
      )}
    </BookingContextProvider>
  );
}

export default App;
