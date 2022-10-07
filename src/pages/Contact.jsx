import Map from "../assets/Map.png"
import data from "../TextData"
import TextCard from "../component/TextCards"

export default function Contact(){
    const textCard5=data.filter(data=>data.id===5).map(item=>{
        return(
            <TextCard
            key={item.id}
            {...item}
            />
        )
    })

    return(
        <main className="py-4">
            {textCard5}
            <div className="flex flex-col-reverse sm:flex-row py-9 px-9">
                <form className="sm:w-1/2 h-full sm:pl-6 flex flex-col sm:px-2 sm:pr-4 space-y-5">
                    <label className="text-lg font-light sm:mb-3">Name</label>
                    <input className="border rounded h-11 bg-gray" type="text" required></input>
                    <label className="text-lg font-light mt-3 sm:mb-3">Email</label>
                    <input className="border rounded h-11 bg-gray" type="email" required></input>
                    <label className="text-lg font-light mt-3 sm:mb-3">Message</label>
                    <input className="border rounded h-24 bg-gray" type="text" required></input>
                    <input className="border rounded-lg text-xl mt-20 h-12 bg-neutral text-white tracking-wide" type="button" value="Submit" readOnly></input>
                </form>
                <img className="mb-8 sm:w-1/2 sm:pr-6 sm:px-2 sm:pl-4" src={Map} /></div>

        </main>
    )
    }