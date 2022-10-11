import Map from "../assets/Map.png";
import data from "../TextData";
import TextCard from "../component/TextCards";

export default function Contact() {
  return (
    <main className="py-4">
      {<TextCard {...data[4]} />}
      <div className="flex flex-col-reverse py-9 px-9 sm:flex-row sm:px-12 sm:py-20">
        <form className="h-full flex flex-col space-y-5 sm:space-y-2 sm:pl-6 sm:w-1/2 sm:px-2 sm:pr-4">
          <label className="text-lg font-light sm:mb-3">Name</label>
          <input
            className="border rounded h-11 bg-gray"
            type="text"
            required
          ></input>
          <label className="text-lg font-light mt-3 sm:mb-3">Email</label>
          <input
            className="border rounded h-11 bg-gray"
            type="email"
            required
          ></input>
          <label className="text-lg font-light mt-3 sm:mb-3">Message</label>
          <input
            className="border rounded h-24 bg-gray"
            type="text"
            required
          ></input>
          <input
            className="border rounded-lg text-xl h-12 bg-neutral text-white tracking-wide"
            type="button"
            value="Submit"
            readOnly
          ></input>
        </form>
        <img className="mb-8 sm:mb-0 sm:w-1/2" src={Map} />
      </div>
    </main>
  );
}
