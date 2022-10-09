import serviceData from '../ServiceData'
import ServiceCard from '../component/ServiceCards'
import textData from '../TextData'
import TextCard from '../component/TextCards'

export default function Service() {


    return (

        <main className="block w-screen">
            <TextCard
                {...textData[3]}
            />

            <div className="grid grid-cols-1 gap-5  px-6 space-y-12 md:grid-cols-3">
                {serviceData.map(item => {
                    return (
                        <ServiceCard
                            key={item.id}
                            {...item}
                        />
                    )
                })}

            </div>
        </main>

    )
}