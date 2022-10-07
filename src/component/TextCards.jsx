import React from "react";

export default function TextCard(props){
    return(
    <div className="space-y-3 py-5">
        <p className="text-green font-extrabold text-center tracking-wide uppercase text-sm">
            {props.title}</p>
        <h2 className="text-2xl font-semibold tracking-wide font-serif text-center">
            {props.h2}</h2>
        <p className="text-2xl font-light px-9 tracking-wide text-center tracking-wide">
            {props.text}</p>
    </div>
    )
}