import React from "react";

export default function ServiceCard(props){
     return(
        <div className="shadow-xl px-5 py-12">
        <div className="flex flex-col items-center">
            <p>{props.title}</p>
            <div className="flex items-center">
                <h1 className="text-2xl font-bold">{props.price}</h1>
                <p className="text-sm font-normal text-grayer ml-2"> /month</p>
            </div>
            <p className="text-center text-sm text-grayer py-3">{props.text}</p>
        </div>
        <form className="text-sm py-3 pl-3">
            <p><span className="text-green text-2xl px-2">{props.icon}</span> {props.form} </p>
            <p><span className="text-green text-2xl px-2">{props.icon}</span> {props.form} </p>
            <p><span className="text-green text-2xl px-2">{props.icon}</span> {props.form} </p>
            <p><span className="text-green text-2xl px-2">{props.icon}</span> {props.form} </p>
            <p><span className="text-green text-2xl px-2">{props.icon}</span> {props.form} </p>
        </form>
        <div className="flex flex-col items-center">
            <input className="border rounded mt-3 h-10 bg-neutral text-white px-3 text-center" type="button" value="Learn More" readOnly></input>
        </div>
    </div>
     )
}