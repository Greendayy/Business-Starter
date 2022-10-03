import Map from "../assets/Map.png"

export default function Contactm(){

    return(
        <main className="py-4">

            <div className="flex flex-col items-center">
                <h2 className="flex text-2xl font-serif font-semibold pb-2">Contact Us</h2>
                <p className="flex text-center text-sm leading-relaxed font-light">Lorem ipsum, dolor sit amet consectetur<br />
                    adipisicing elit.</p>
            </div>
            <div className="flex flex-col-reverse sm:flex-row py-9 px-9">
                <form className="sm:w-1/2 h-full sm:pl-6 flex flex-col sm:px-2 sm:pr-4 space-y-5">
                    <label className="text-ms font-edium sm:mb-3">Name</label>
                    <input className="border rounded h-11 bg-gray" type="text" required></input>
                    <label className="text-ms font-edium mt-3 sm:mb-3">Email</label>
                    <input className="border rounded h-11 bg-gray" type="email" required></input>
                    <label className="text-ms font-edium mt-3 sm:mb-3">Message</label>
                    <input className="border rounded h-24 bg-gray" type="text" required></input>
                    <input className="border rounded mt-3 h-10 bg-neutral text-white" type="button" value="submit" required></input>
                </form>
                <img class="mb-8 sm:w-1/2 sm:pr-6 sm:px-2 sm:pl-4" src={Map} /></div>

        </main>
    )
    }