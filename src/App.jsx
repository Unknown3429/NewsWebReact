import './App.css'

import { Route, Routes } from "react-router-dom"

import Footer from './components/footer/Footer'
import Nav from './components/header/Nav'
import Home from './pages/home/Home'
import Sports from './pages/sports/Sports'
import Tech from './pages/tech/Tech'
import Business from './pages/business/Business'
import Science from './pages/science/Science'
import SinglePage from './pages/singlePage/SinglePage'
import SearchPage from './pages/searchPage/SearchPage'
import Contact from './pages/contact/Contact'



function App() {

  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sports" element={<Sports />} />
        <Route path="/tech" element={<Tech />} />
        <Route path="/business" element={<Business />} />
        <Route path="/science" element={<Science />} />
        <Route path="/singlepage/:data" element={<SinglePage />} />
        <Route path="/searchPage/:query" element={<SearchPage />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
