import React from "react";

export default function TextCard({title,h2,text}){
    return(
    <div className="space-y-3 py-5">
        <p className="text-green font-extrabold text-center tracking-wide uppercase text-sm">
            {title}</p>
        <h2 className="text-2xl font-semibold tracking-wide font-serif text-center">
            {h2}</h2>
        <p className="text-2xl font-light px-9 tracking-wide text-center tracking-wide">
            {text}</p>
    </div>
    )
}