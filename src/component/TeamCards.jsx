import React from "react";

export default function TeamCard(props) {
   
    return (
        <div className="shadow-3xl w-60 h-64 space-y-1 flex flex-wrap">
            <img className="mx-auto py-2" src={`/images/${props.img}`} />
            <h3 className="ml-7 font-serif">{props.name}</h3>
            <p className="ml-7 text-grayer text-xs">{props.position}</p>
        </div>
    )
}
