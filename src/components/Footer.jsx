import React, { useState } from "react"
import { FaTelegramPlane } from "react-icons/fa"

const Footer = () => {
  const [isDropdownVisible, setDropdownVisible] = useState(false)

  const teamMembers = [
    { name: "Белан Сергей", link: "https://t.me/Cepbiu_60" },
    { name: "Дудник Максим", link: "https://t.me/e13lun4" },
    { name: "Котельников Тимофей", link: "https://t.me/azzardd1" },
    { name: "Ларин Артем", link: "https://t.me/temaLar1n" }
  ]

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible)
  }

  return (
    <footer
      id="contact"
      className="bg-dark py-6 px-6 sm:px-12 md:px-24 lg:px-48 flex flex-col md:flex-row justify-between items-center"
    >
      <div className="text-center md:text-left mb-4 md:mb-0 ">
        <p>© 2024 GitOps. Все права защищены.</p>
      </div>
      <div className="text-center md:text-right flex flex-col items-center relative md:items-start md:flex-row">
        <p className="inline-flex items-center mb-2 md:mb-0">
          Разработали сайт: Белан Сергей, Дудник Максим, Котельников Тимофей,
          Ларин Артем
        </p>
        <div className="relative mt-2 md:mt-0 md:ml-2">
          <button
            onClick={toggleDropdown}
            className="text-blue-500 hover:text-blue-700 focus:outline-none"
          >
            <FaTelegramPlane size={24} className="relative z-10" />
          </button>
          {isDropdownVisible && (
            <ul
              className={`absolute z-50 right-0 bottom-full mb-2 bg-slate-800 text-white p-4 rounded shadow-lg transition-transform duration-300 ease-in-out transform origin-bottom ${
                isDropdownVisible
                  ? "scale-100 opacity-100"
                  : "scale-0 opacity-0"
              }`}
              style={{ minWidth: "150px" }}
            >
              {teamMembers.map((member, index) => (
                <li key={index} className="hover:bg-gray-700 p-2 rounded">
                  <a
                    href={member.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                  >
                    {member.name}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </footer>
  )
}

export default Footer
