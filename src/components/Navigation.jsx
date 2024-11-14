import React, { useState, useEffect } from "react"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import Header from "./Header"
import Footer from "./Footer"
import AboutPage from "../pages/AboutPage"
import FeaturesPage from "../pages/FeaturesPage"
import MainPage from "../pages/MainPage"
import ErrorPage from "../pages/ErrorPage"
import ChatBotIcon from "./ChatBotIcon"
import ScrollToTop from "./ScrollToTop"

const Navigation = () => {
  return (
    <Router>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="*" element={<ErrorPage />} />
        <Route path="/" element={<MainPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/videos" element={<FeaturesPage />} />
      </Routes>
      {/* <div className="animate-fadeIn2">
        <ChatBotIcon />
      </div> */}
      <Footer />
    </Router>
  )
}

export default Navigation
