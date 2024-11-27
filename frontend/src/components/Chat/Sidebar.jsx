import React from "react";
import ChatCard from "./ChatCard/ChatCard";
function Sidebar() {
  return (
    <div className="bg-zinc-950">
      <div className="bg-zinc-900 flex flex-col h-screen min-w-64 rounded-tl-xl p-2 text-zinc-100">
        <div className="flex flex-col gap-2 p-2">
          <h1 className="text-2xl font-bold pb-4">Chat</h1>
          <label className="input input-bordered flex items-center gap-2 bg-zinc-900">
            <input type="text" className="grow" placeholder="Search" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd"
              />
            </svg>
          </label>
        </div>

        <div className=" p-2 flex flex-col justify-center">
        <ChatCard
        isOnline={true}
        name={"Satyam Bhambid"}
        image={"https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"}
        snippet={"kkrh?"}
        />
         <ChatCard
        isOnline={true}
        name={"Jay Makwana"}
        image={"https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"}
        snippet={"kkrh?"}
        />
         <ChatCard
        isOnline={true}
        name={"Narendra Modi"}
        image={"https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"}
        snippet={"pm ban ne ke tips dedo?"}
        />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
