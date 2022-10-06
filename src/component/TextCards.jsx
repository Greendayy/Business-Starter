import React from "react";

export default function TextCard(props){
    return(
    <div className="space-y-3 py-10">
        <p className="text-green font-semibold text-center tracking-wide uppercase text-sm">
            {props.title}</p>
        <h2 className="text-2xl font-semibold font-serif text-center">
            {props.h2}</h2>
        <p className="font-sm text-center tracking-wide">
            {props.text}</p>
    </div>
    )
}