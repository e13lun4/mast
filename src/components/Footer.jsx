import React from "react"

const Footer = () => {
  return (
    <footer
      id="contact"
      className="bg-dark py-6 px-6 sm:px-12 md:px-24 lg:px-48 flex flex-col md:flex-row justify-between items-center"
    >
      <div className="text-center md:text-left mb-4 md:mb-0">
        <p>© 2024 GitOps. Все права защищены.</p>
      </div>
      <div className="text-center md:text-right">
        <p>
          Разработали сайт: Белан Сергей, Дудник Максим, Котельников Тимофей,
          Ларин Артем
        </p>
      </div>
    </footer>
  )
}

export default Footer
