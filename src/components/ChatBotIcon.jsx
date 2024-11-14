import React, { useState } from "react"
import { FaComments } from "react-icons/fa"
import ChatModal from "./ChatModal"

const ChatBotIcon = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleClick = () => {
    setIsModalOpen(true)
  }

  const handleClose = () => {
    setIsModalOpen(false)
  }

  return (
    <div>
      <div
        onClick={handleClick}
        className="fixed bottom-10 right-5 cursor-pointer bg-blue-500 rounded-full p-3 shadow-lg transition-transform duration-300 hover:scale-105"
        title="Открыть чат-бота"
      >
        <FaComments className="text-white text-2xl" />
      </div>
      <ChatModal isOpen={isModalOpen} onClose={handleClose} />
    </div>
  )
}

export default ChatBotIcon
