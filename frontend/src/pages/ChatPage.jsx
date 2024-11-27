import React from "react";
import ChatHeader from "../components/Chat/ChatHeader";
import Chat from "../components/Chat/Chat";
import Sidebar from "../components/Chat/Sidebar";

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "../components/ui/resizable";
import MainHead from "../components/MainHead";


function ChatPage() {
  return (
    <div className="relative flex flex-col w-full h-screen bg-zinc-900 text-zinc-50">
      <MainHead />
      <ResizablePanelGroup direction="horizontal">
        <ResizablePanel>
          <Sidebar />
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel>
          <Chat />
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
}

export default ChatPage;
