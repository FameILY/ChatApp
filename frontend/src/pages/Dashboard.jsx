import React from "react";
import ChatPage from "./ChatPage";
import MainBar from "../components/MainBar";
function Dashboard() {
  return (
    <div className="flex justify-between flex-row h-screen">
      <MainBar />

      
      <ChatPage />
    </div>
  );
}

export default Dashboard;
