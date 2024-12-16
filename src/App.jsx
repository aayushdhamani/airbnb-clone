import Header from "./components/comman/Header"
import './App.css'
import Home from "./pages/Home"
import Footer from "./components/comman/Footer"
import UpperFooter from "./components/comman/UpperFooter"
import { Route, Routes } from "react-router-dom"
import Help from "./components/Home/Help"

function App() {

  return (
    <>
      <Header/>
      <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/help-centre" element={<Help/>}></Route>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
