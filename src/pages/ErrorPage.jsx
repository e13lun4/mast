import React from "react"

const ErrorPage = () => {
  return (
    <div className="h-screen w-screen bg-gray items-center justify-center flex flex-col">
      <h1 className="text-orange text-xl">Упс</h1>
      <h2 className="text-white text-lg">Такой страницы не существует</h2>
    </div>
  )
}

export default ErrorPage
