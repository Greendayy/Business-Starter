import React from "react";

export default function TeamCard({img,name,position}) {// 形参
   
    return (
        <div className="block mx-auto shadow-3xl w-60 h-64  rounded-lg space-y-1 my-2">
            <img className="mx-auto py-2" src={`/images/${img}`} />
            <h3 className="ml-7 font-serif">{name}</h3>
            <p className="ml-7 text-grayer text-xs">{position}</p>
        </div>
    )
}
