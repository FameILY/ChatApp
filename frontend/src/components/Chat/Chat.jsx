import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import ChatHeader from "../../components/Chat/ChatHeader";

// Connect to the server
const socket = io("http://localhost:8000");

function Chat() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    // Set up the event listener for incoming messages
    socket.on("chat message", (msg) => {
      setMessages((prevMessages) => [...prevMessages, msg]);
    });

    // Clean up the socket connection on component unmount
    return () => {
      socket.off("chat message");
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      // console.log("Form submitted");
      // console.log(input);
      socket.emit("chat message", input);
      setInput(""); // Clear the input field
    }
  };

  return (
    <div className="h-screen">
      <ChatHeader />

      <div className="bg-zinc-900 h-full">
        {/* messages section */}
        <div
          id="messages"
          className="flex flex-col p-4 w-full h-3/4 overflow-y-auto text-black bg-zinc-800"
        >
          {messages.map((msg, index) => (
            <div class="chat chat-start" key={index}>
              <div class="chat-bubble bg-white text-black">{msg}</div>
            </div>
          ))}
        </div>
        {/* input box */}
        <div className="bg-zinc-900">
          <div className="w-full mx-auto">
            <form onSubmit={handleSubmit} className="w-full">
              <div className="flex items-center py-4 px-3">
                <input
                  id="chat"
                  rows="1"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  className=" mx-4 p-2.5 w-full input input-bordered flex items-center gap-2 bg-zinc-900"
                  placeholder="Your message..."
                ></input>
                <button
                  type="submit"
                  className="inline-flex justify-center p-2 text-blue-600 rounded-full cursor-pointer hover:bg-blue-100 dark:text-blue-500 dark:hover:bg-gray-600"
                >
                  <svg
                    className="w-6 h-6 rotate-90"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path>
                  </svg>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chat;
