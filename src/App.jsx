import Header from "./components/comman/Header"
import './App.css'
import Home from "./pages/Home"
import Footer from "./components/comman/Footer"
import { Route, Routes, useLocation } from "react-router-dom"
import Help from "./components/Home/Help"
import CardComponentPage from "./pages/cardComponentPage"

function App() {
  const location=useLocation();
  const {pathname}=location;

  return (
    <>
      <Header/>
      <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/help-centre" element={<Help/>}></Route>
      <Route path={pathname} element={<CardComponentPage/>}></Route>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
