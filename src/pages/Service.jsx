import serviceData from "../ServiceData";
import ServiceCard from "../component/ServiceCards";
import textData from "../TextData";
import TextCard from "../component/TextCards";

export default function Service() {
  return (
    <main className="block w-screen">
      {<TextCard {...textData[3]} />}

      <div className="flex flex-col px-6 space-y-12 sm:space-y-0 mb-12 sm:flex-row sm:space-x-24 sm:my-9 place-content-center">
        {serviceData.map((item) => {
          return <ServiceCard key={item.id} {...item} />;
        })}
      </div>
    </main>
  );
}
