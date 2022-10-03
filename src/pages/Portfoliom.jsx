import Frame42 from "../assets/Portfolio/dscdscd 1.svg"
import Frame43 from "../assets/Portfolio/Frame 42.svg"
import Frame44 from "../assets/Portfolio/Frame 43-2.svg"
import Frame45 from "../assets/Portfolio/Frame 43-3.svg"
import Frame46 from "../assets/Portfolio/Frame 43-4.svg"
import Frame47 from "../assets/Portfolio/dscdsc 1.svg"
import Frame48 from "../assets/Portfolio/5175975 1.png"
import Frame41 from "../assets/Portfolio/Frame 43-1.svg"

export default function Portfoliom() {


    return (
        <main>

            <div className="flex flex-col items-center">
                <p className="text-green text-xs py-3 font-bold">W O R K S</p>
                <h2 className="text-2xl font-serif font-semibold">Portfolio</h2>
                <p className="text-center text-sm pt-2 leading-relaxed font-light">Lorem ipsum, dolor sit amet consectetur<br />
                    adipisicing elit.</p>
            </div>
            <div className="flex flex-col items-center px-6">
                <div className="grid gap-y-10 sm:gap-y-6 gap-x-12 sm:grid-cols-2 justify-around py-12">
                    <img src={Frame42} />
                    <img src={Frame43} />
                    <img src={Frame41} />
                    <img src={Frame44} />
                    <img src={Frame45} />
                    <img src={Frame46} />
                    <img src={Frame47} />
                    <img src={Frame48} />
                </div>
            </div>
            <div className="flex flex-col items-center">
                <input className="border rounded sm:mt-3 h-10 w-40 bg-neutral text-white px-3 text-center mb-12" type="button" value="Learn More" required></input>
            </div>

        </main>
    )
}