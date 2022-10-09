import Google from "../assets/Home/XMLID_24_.svg";
import Microsoft from "../assets/Home/XMLID_1_.svg";
import Airbnb from "../assets/Home/XMLID_1_-1.svg";
import Facebook from "../assets/Home/Group-2.svg";
import Spotify from "../assets/Home/XMLID_1_-2.svg";
import textData from "../TextData";
import TextCard from "../component/TextCards";
import teamData from "../TeamData";
import TeamCard from "../component/TeamCards";
import loremData from "../LoremData";
import LoremCard from "../component/LoremCards";

export default function Home() {
  const logoImagsSrc = [Google, Microsoft, Airbnb, Facebook, Spotify];

  return (
    <main>
      <div className="bg-green text-white">
        {<LoremCard {...loremData[0]} />}
      </div>

      {/* partners */}
      <div className="flex flex-col items-center">
        {<TextCard {...textData[0]} />}
        <div className="flex flex-col space-y-10 my-7 sm:space-y-0 sm:flex-row sm:space-x-20">
          {logoImagsSrc.map((imgSrc, index) => (
            <img key={index} src={imgSrc} />
          ))}
        </div>
        <input
          className="border rounded-lg h-12 bg-neutral text-white tracking-wide text-xl px-10 sm:px-3 text-center my-10 sm:my-20"
          type="button"
          value="Learn More"
          readOnly
        ></input>
      </div>

      {/* lorem */}
      <div className="space-y-7 my-5">{<LoremCard {...loremData[1]} />}</div>

      {/* team */}

      <div className="flex flex-col items-center">
        {<TextCard {...textData[1]} />}

        <div className="flex flex-col sm:flex-row sm:space-x-12">
          {teamData.map((item) => {
            return <TeamCard key={item.id} {...item} />;
          })}
        </div>
        <input
          className="border rounded-lg h-12 bg-neutral text-white tracking-wide text-xl px-10 text-center my-12"
          type="button"
          value="View Team"
          readOnly
        ></input>
      </div>
    </main>
  );
}
