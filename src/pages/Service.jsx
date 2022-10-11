import serviceData from "../ServiceData";
import ServiceCard from "../component/ServiceCards";
import textData from "../TextData";
import TextCard from "../component/TextCards";

export default function Service() {
  return (
    <main className="w-screen">
      {<TextCard {...textData[3]} />}

      <div className="flex flex-col items-center px-6 py-12 space-y-12 lg:grid lg:grid-cols-2 lg:gap-y-20 lg:px-20 lg:space-y-0 lg:justify-items-center xl:flex xl:flex-row xl:space-x-24 xl:mb-9">
        {serviceData.map((item) => {
          return <ServiceCard key={item.id} {...item} />;
        })}
      </div>
    </main>
  );
}
