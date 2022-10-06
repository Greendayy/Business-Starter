import Frame42 from "../assets/Portfolio/dscdscd 1.svg"
import Frame43 from "../assets/Portfolio/Frame 42.svg"
import Frame44 from "../assets/Portfolio/Frame 43-2.svg"
import Frame45 from "../assets/Portfolio/Frame 43-3.svg"
import Frame46 from "../assets/Portfolio/Frame 43-4.svg"
import Frame47 from "../assets/Portfolio/dscdsc 1.svg"
import Frame48 from "../assets/Portfolio/5175975 1.png"
import Frame41 from "../assets/Portfolio/Frame 43-1.svg"
import data from "../TextData"
import TextCard from "../component/TextCards"

export default function Portfolio() {
    const textCard3 = data.filter(data => data.id === 3).map(item => {
        return (
            <TextCard
                key={item.id}
                {...item}
            />
        )
    })

    const portfolioImgsSrc=[Frame42,Frame43,Frame41,Frame44,Frame45,Frame46,Frame47,Frame48]

    return (
        <main>
            
            {textCard3}

            <div className="flex flex-col items-center px-6">
                <div className="grid gap-y-10 sm:gap-y-6 gap-x-12 sm:grid-cols-2 justify-around py-12">

                 {portfolioImgsSrc.map((imgSrc,index)=>
                 (<img key={index} src={imgSrc}/>))}  

                </div>
            </div>
            <div className="flex flex-col items-center">
                <input className="border rounded sm:mt-3 h-10 w-40 bg-neutral text-white px-3 text-center mb-12" type="button" value="Learn More" readOnly></input>
            </div>

        </main>
    )
}