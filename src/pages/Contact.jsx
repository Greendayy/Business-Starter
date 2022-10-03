import Map from "../assets/Map.png"

export default function Contact() {
    return (
        <div class="py-4">
            <div class="flex flex-col items-center">
                <h2 class="flex text-2xl font-serif font-semibold pb-2">Contact Us</h2>
                <p class="flex text-center text-sm leading-relaxed font-light">Lorem ipsum, dolor sit amet consectetur<br />
                    adipisicing elit.</p>
            </div>
            <div class="flex py-9 px-9">
                <form class="w-1/2 h-full pl-6 flex flex-col px-2 pr-4 space-y-5">
                    <label class="text-ms font-edium mb-3">Name</label>
                    <input class="border rounded h-11 bg-gray" type="text" required></input>
                    <label class="text-ms font-edium mt-3 mb-3">Email</label>
                    <input class="border rounded h-11 bg-gray" type="email" required></input>
                    <label class="text-ms font-edium mt-3 mb-3">Message</label>
                    <input class="border rounded h-24 bg-gray" type="text" required></input>
                    <input class="border rounded mt-3 h-10 bg-neutral text-white" type="button" value="submit" required></input>
                </form>
                <img class="w-1/2 pr-6 px-2 pl-4" src={Map} /></div>

        </div>

    )
}