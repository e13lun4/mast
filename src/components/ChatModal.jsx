import React, { useState } from "react"
import { Webchat, WebchatProvider, Fab, getClient } from "@botpress/webchat"
import { buildTheme } from "@botpress/webchat-generator"

const ChatModal = ({ isOpen, onClose }) => {
  const { theme, style } = buildTheme({
    themeName: "prism",
    themeColor: "#634433"
  })

  const clientId = "ef5c28fd-4c35-421a-a0ba-97b41af67192"

  const client = getClient({ clientId })
  const [isWebchatOpen, setIsWebchatOpen] = useState(false)

  const toggleWebchat = () => {
    setIsWebchatOpen((prevState) => !prevState)
  }

  return (
    <div
      style={{ width: "100vw", height: "100vh" }}
      className="fixed inset-0 flex items-end justify-end p-5"
    >
      <style>{style}</style>
      <WebchatProvider theme={theme} client={client}>
        <Fab onClick={toggleWebchat} />
        <div
          style={{
            display: isWebchatOpen ? "block" : "none"
          }}
        >
          <Webchat />
        </div>
      </WebchatProvider>
    </div>
  )

  // useEffect(() => {
  //   const script = document.createElement("script")
  //   script.src = "https://cdn.botpress.cloud/webchat/v2.2/inject.js"
  //   script.async = true
  //   document.body.appendChild(script)

  //   script.onload = () => {
  //     window.botpressWebChat.init({
  //       botId: "20241111050942-F8FVIGOV",
  //       hostUrl: "http://localhost:5173",
  //       messagingUrl: "https://messaging.botpress.cloud",
  //       clientId: "ef5c28fd-4c35-421a-a0ba-97b41af67192"
  //     })
  //   }
  // }, [])

  // return <div id="webchat" />

  // if (!isOpen) return null

  // return (
  //   <div className="fixed inset-0 flex items-end justify-end p-5">
  //     <div className="bg-white rounded-lg p-5 w-80 h-[520px] shadow-black flex flex-col justify-between">
  //       <h2 className="text-lg font-bold mb-3 text-black">Чат с ботом</h2>
  //       <div className="flex flex-col justify-end">
  //         <input
  //           type="text"
  //           placeholder="Ваше сообщение..."
  //           className="border border-gray-300 rounded-md p-2 w-full mb-3 text-black"
  //         />
  //         <div className="flex justify-end">
  //           <button
  //             onClick={onClose}
  //             className="bg-blue-500 text-white rounded-md px-4 py-2"
  //           >
  //             Отправить
  //           </button>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // )
}

export default ChatModal
