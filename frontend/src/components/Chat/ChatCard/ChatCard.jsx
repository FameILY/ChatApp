import React from "react";

function ChatCard({ name, snippet, image, isOnline}) {
  return (
    <div className="flex p-2 hover:bg-zinc-800 rounded-xl w-full">
     <div className={`avatar ${isOnline ? "online" : "offline"}`}>
        <div className="w-14 rounded-full">
          <img src={image} alt="" />
        </div>
      </div>

      {/* details */}
      <a href="https://www.somewhere.com">
      <div className="flex flex-col justify-center ps-4">
        <p className="text-lg">{name}</p>
        <p className="text-sm text-zinc-300 flex-nowrap">{snippet}</p>
      </div>

      </a>
    </div>
  );
}

export default ChatCard;
