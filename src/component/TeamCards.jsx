import React from "react";

export default function TeamCard(props) {
  return (
    <div className="flex flex-col shadow-3xl w-60 h-64 space-y-4 rounded hover:scale-105">
      <img className="mx-auto pt-4 w-40 h-40" src={`/images/${props.img}`} />
      <h3 className="ml-7 font-serif">{props.name}</h3>
      <p className="ml-7 text-grayer text-sm uppercase">{props.position}</p>
    </div>
  );
}
