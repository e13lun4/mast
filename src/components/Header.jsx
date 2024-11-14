import React, { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { Link as ScrollLink } from "react-scroll"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const isAboutPage = location.pathname === "/about"

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="sticky top-0 left-0 w-full bg-dark/50 p-4 backdrop-blur-lg z-10 shadow-lg">
      <nav className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-lg">
          <Link to="/">GitOps</Link>
        </div>
        <ul className="hidden sm:flex space-x-8">
          <li>
            <Link
              to="/"
              className="text-orange transition-colors duration-300 hover:text-white active:text-yellow-400"
            >
              Главная
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="text-orange transition-colors duration-300 hover:text-white active:text-yellow-400"
            >
              О GitOps
            </Link>
          </li>
          <li>
            <Link
              to="/videos"
              className="text-orange transition-colors duration-300 hover:text-white active:text-yellow-400"
            >
              Видео
            </Link>
          </li>
        </ul>
        <div className="sm:hidden">
          <button className="text-white" onClick={toggleMenu}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </nav>
      <div
        className={`sm:hidden transition-all duration-500 ease-in-out transform ${
          isMenuOpen ? "opacity-100 translate-y-0 " : "opacity-0 translate-y-8 "
        }`}
        style={{ transitionProperty: "opacity, transform" }}
      >
        <ul
          className={`flex flex-col items-center space-y-4 bg-dark/80 p-4 rounded-2xl ${
            isMenuOpen ? "block" : "hidden"
          }`}
        >
          <li>
            <Link
              to="/"
              className="text-orange transition-colors duration-300 hover:text-white active:text-yellow-400"
              onClick={() => setIsMenuOpen(false)}
            >
              Главная
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="text-orange transition-colors duration-300 hover:text-white active:text-yellow-400"
              onClick={() => setIsMenuOpen(false)}
            >
              О GitOps
            </Link>
          </li>
          <li>
            <Link
              to="/videos"
              className="text-orange transition-colors duration-300 hover:text-white active:text-yellow-400"
              onClick={() => setIsMenuOpen(false)}
            >
              Видео
            </Link>
          </li>
        </ul>
        {isAboutPage && (
          <ul
            className={`flex flex-col items-center space-y-4 bg-dark/80 p-4 mt-4 rounded-2xl ${
              isMenuOpen ? "block" : "hidden"
            }`}
          >
            <li>
              <ScrollLink
                to="section-introduction-ci-cd"
                smooth={true}
                duration={500}
                offset={-350}
                spy={true}
                activeClass="text-white"
                className="text-orange transition-colors duration-300 hover:text-white"
                onClick={() => setIsMenuOpen(false)}
              >
                Введение в CI/CD
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="section-introduction-gitops"
                smooth={true}
                duration={500}
                offset={-350}
                spy={true}
                activeClass="text-white"
                className="text-orange transition-colors duration-300 hover:text-white"
                onClick={() => setIsMenuOpen(false)}
              >
                Философия GitOps
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="section-gitops-kubernetes"
                smooth={true}
                duration={500}
                offset={-350}
                spy={true}
                activeClass="text-white"
                className="text-orange transition-colors duration-300 hover:text-white"
                onClick={() => setIsMenuOpen(false)}
              >
                GitOps на Kubernetes
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="section-popular-instruments"
                smooth={true}
                duration={500}
                offset={-350}
                spy={true}
                activeClass="text-white"
                className="text-orange transition-colors duration-300 hover:text-white"
                onClick={() => setIsMenuOpen(false)}
              >
                Инструменты
              </ScrollLink>
            </li>
          </ul>
        )}
      </div>
    </header>
  )
}

export default Header
