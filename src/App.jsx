import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom/client";
import LandingPage from "./Pages/LandingPage";
import Layout from "./Components/Layout";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
function App() {

  return (
    <>
     <BrowserRouter>
     <Header />
      <Routes>
        <Route path="/" element={<LandingPage />}>
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
    </>
  )
}

export default App
