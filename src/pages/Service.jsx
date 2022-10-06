import serviceData from '../ServiceData'
import ServiceCard from '../component/ServiceCards'
import textData from '../TextData'
import TextCard from '../component/TextCards'

export default function Service(){
    const textCard4=textData.filter(data=>data.id===4).map(item=>{
        return(
            <TextCard
            key={item.id}
            {...item}
            />
        )   
    })

    const serviceCards=serviceData.map(item=>{
        return(
          <ServiceCard
            key={item.id}
            {...item}
            />
        ) 
      })

    return(
        
            <main className="block w-screen">
                {textCard4}

            <div className="flex flex-col px-6 space-y-12 sm:space-y-0 mb-12 sm:flex-row sm:space-x-24 sm:my-9 place-content-center">
                {serviceCards} 
   
            </div>
        </main>       
        
    )
    }