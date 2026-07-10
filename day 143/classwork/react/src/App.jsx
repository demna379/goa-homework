import { Route, Routes } from "react-router-dom"
import About from "./components/About"
import Contact from "./components/Contact"
import MainPage from "./components/MainPage"
import Services from "./components/Services"

function App() {
  return (
    <>
      <Routes>
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/" element={<MainPage />} />
        <Route path="/Services" element={<Services/>} />
      </Routes>
    </>
  )
}

export default App

// შექმენით 4 ფეიჯიანი ვებსაიტი

//   / -> MainPage.jsx
//   / about -> About.jsx
//   / contact -> Contact.jsx
//   / services -> Services.jsx