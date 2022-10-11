import React from "react";

export default function ServiceCard({ title, price, text, icon, form }) {
  return (
    <div className="shadow-3xl w-96 px-5 py-12 rounded hover:scale-105">
      <div className="flex flex-col items-center">
        <p className="text-lg">{title}</p>
        <div className="flex items-center">
          <h1 className="text-6xl font-extrabold">{price}</h1>
          <p className="text-xl font-normal font-light tracking-wide text-grayer ml-2">
            {" "}
            /month
          </p>
        </div>
        <p className="text-center text-xl font-light tracking-wide text-grayer py-3">
          {text}
        </p>
      </div>
      <form className="text-sm text-xl font-light tracking-wide py-7 pl-3 space-y-5">
        <p>
          <span className="text-green text-2xl px-2">{icon}</span> {form}{" "}
        </p>
        <p>
          <span className="text-green text-2xl px-2">{icon}</span> {form}{" "}
        </p>
        <p>
          <span className="text-green text-2xl px-2">{icon}</span> {form}{" "}
        </p>
        <p>
          <span className="text-green text-2xl px-2">{icon}</span> {form}{" "}
        </p>
        <p>
          <span className="text-green text-2xl px-2">{icon}</span> {form}{" "}
        </p>
      </form>
      <div className="flex flex-col items-center">
        <input
          className="border rounded-lg mt-5 h-12 px-10 bg-neutral text-white px-3 text-center text-xl tracking-wide"
          type="button"
          value="Learn More"
          readOnly
        ></input>
      </div>
    </div>
  );
}
