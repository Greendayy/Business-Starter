import React from "react";

export default function LoremCard({
  flex,
  margin,
  img,
  title,
  h2,
  p,
  color,
  input,
}) {
  return (
    <div
      className={`flex flex-col space-y-6 sm:space-y-0 sm:py-12 sm:items-center md:px-16 md:flex ${flex}`}
    >
      <div className="md:basis-3/5 sm:basis-1/2">
        <img className={`px-6 ${margin}`} src={`/images/${img}`} />
      </div>

      <div className="px-6 mb-6 md:basis-2/5 sm:basis-1/2 sm:space-y-2 md:space-y-9">
        <p className="font-extrabold mb-2 tracking-wide">{title}</p>
        <h2 className="text-3xl sm:text-4xl font-semibold font-serif mb-4">
          {h2}
        </h2>
        <p className="mb-6 font-light">{p}</p>
        <input
          className={`rounded-lg text-center py-3 mb-7 tracking-wide text-xl ${color}`}
          type="text"
          value={input}
          readOnly
        ></input>
      </div>
    </div>
  );
}
