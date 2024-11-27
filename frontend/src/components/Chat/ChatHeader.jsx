import React from "react";

function ChatHeader() {
  return (
    <div className="flex items-center bg-zinc-900 p-4">
      <div className="avatar">
        <div className="ring-primary ring-offset-base-100 w-10 rounded-full ring ring-offset-2">
          <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
        </div>
      </div>
      <p className="text-xl font-semibold ps-4">Person 1</p>
    </div>
  );
}

export default ChatHeader;
