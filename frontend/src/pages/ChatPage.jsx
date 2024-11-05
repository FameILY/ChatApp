import React from "react";
import ChatHeader from "../components/ChatHeader";
import Chat from "../components/Chat";
function ChatPage() {
  return (
    <div className="relative flex flex-col w-full h-screen bg-zinc-900 text-zinc-50">
      <ChatHeader/>
      <Chat/>
    </div>
  );
}

export default ChatPage;
