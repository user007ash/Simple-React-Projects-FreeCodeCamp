import React from "react";

function Card({ username,githubUrl,avatarUrl }) {
  return (
    <div className="border-4 border-black bg-neutral-400 px-4 py-4 rounded-2xl min-w-xl">
      <div className="flex gap-8 justify-between items-center">
        <img src={avatarUrl} className="h-20 w-20 rounded-2xl border-none" />
        <a href={githubUrl} target="_blank" className="text-3xl text-center font-bold ">{username}</a>
      </div>
    </div>
  );
}

export default Card;
