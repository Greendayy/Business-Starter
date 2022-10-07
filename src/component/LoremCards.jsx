import React from "react";

export default function LoremCard(props) {
    return (
        <div className="flex flex-col sm:flex-row-reverse space-y-6 sm:space-y-0 sm:py-12 sm:px-16 sm:flex-row">

            <div className="sm:basis-3/5 ">
                <img className="px-6 sm:ml-24" src={`/images/${props.img}`} />
            </div>

            <div className="px-6 mb:6 sm:basis-2/5 sm:space-y-9">
                <p className="font-extrabold mb-2 tracking-wide">{props.title}</p>
                <h2 className="text-3xl sm:text-4xl font-semibold font-serif mb-4">{props.h2}</h2>
                <p className="mb-6 font-light">{props.p}</p>
                <input className={`rounded-lg text-center py-3 mb-7 tracking-wide text-xl ${props.color}`} type="text" value={props.input} readOnly></input>
            </div>

        </div>
    )
}

