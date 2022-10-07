import Google from "../assets/Home/XMLID_24_.svg"
import Microsoft from "../assets/Home/XMLID_1_.svg"
import Airbnb from "../assets/Home/XMLID_1_-1.svg"
import Facebook from "../assets/Home/Group-2.svg"
import Spotify from "../assets/Home/XMLID_1_-2.svg"
import textData from "../TextData"
import TextCard from "../component/TextCards"
import teamData from "../TeamData"
import TeamCard from '../component/TeamCards'
import loremData from '../LoremData'
import LoremCard from "../component/LoremCards"

export default function Home() {
    const logoImagsSrc = [Google, Microsoft, Airbnb, Facebook, Spotify]

    const textCard1 = textData.filter(data => data.id === 1).map(item => {
        return (
            <TextCard
                key={item.id}
                {...item}
            />
        )
    })

    const textCard2 = textData.filter(data => data.id === 2).map(item => {
        return (
            <TextCard
                key={item.id}
                {...item}
            />
        )
    })

    const loremCard1 = loremData.filter(data=>data.id===1).map(item=>{
        return(
            <LoremCard
                key={item.id}
                {...item}
            />
        )
    })

    const loremCard2 = loremData.filter(data=>data.id>1&&data.id<=3).map(item=>{
        return(
            <LoremCard
                key={item.id}
                {...item}
            />
        )
    })

    const teamCard = teamData.map(item=>{
        return(
            <TeamCard
                key = {item.id}
                {...item}
            />
        )
    })

    return (
        <main>
            <div className="bg-green text-white">
                {loremCard1}
            </div>
            
            {/* partners */}
            <div className="flex flex-col items-center">
                {textCard1}
                <div className="flex flex-col space-y-10 my-7 sm:space-y-0 sm:flex-row sm:space-x-20">
                    {logoImagsSrc.map((imgSrc, index) => (
                        <img key={index} src={imgSrc} />
                    ))}
                </div>
                <input className="border rounded-lg h-12 bg-neutral text-white tracking-wide text-xl px-10 sm:px-3 text-center my-10 sm:my-20" type="button" value="Learn More" readOnly></input>
            </div>

            {/* main */}
            <div className="space-y-7 my-5">
                {loremCard2}
            </div>
            
            
            {/* <div className="space-y-3 px-6 py-5 sm:space-y-10">
                <div className="flex flex-col sm:flex-row sm:justify-around sm:mx-20">
                    <div className="sm:basis-3/5" >
                        <img className="mb-3 sm:w-4/5" src={P1} />
                    </div>
                    <div className="space-y-3 sm:basis-2/5 sm:place-items-center sm:mt-28">
                        <h2 className="text-xl sm:text-3xl font-semibold font-serif">Lorem ipsum dolor sit amet consectetur </h2>
                        <p className="text-grayer text-sm">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit nemo hic quos, ab, dolor aperiam nobis cum est eos error ipsum, voluptate culpa nesciunt delectus iste?</p>
                        <input className="border rounded mt-3 h-10 bg-neutral text-white px-6 sm:px-3 text-center mb-12" type="button" value="Learn More" readOnly></input>
                    </div>
                </div>

                <div className="flex flex-col-reverse sm:flex-row sm:justify-around">
                    <div className="space-y-3 sm:basis-2/5 sm:mt-28">
                        <h2 className="text-xl sm:text-3xl font-semibold font-serif">Lorem ipsum dolor sit amet consectetur </h2>
                        <p className="text-grayer text-sm">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit nemo hic quos, ab, dolor aperiam nobis cum est eos error ipsum, voluptate culpa nesciunt delectus iste?</p>
                        <input className="border rounded mt-3 h-10 bg-neutral text-white px-6 sm:px-3 text-center mb-12" type="button" value="Learn More" readOnly></input>
                    </div>
                    <div>
                        <img className="my-6 sm:basis-3/5" src={P2} />
                    </div>

                </div>
            </div> */}

            {/* team */}

            <div className="flex flex-col items-center">
                {textCard2}


                <div className="flex flex-col sm:flex-row sm:space-x-12">
                    {teamCard}
                </div>
                <input className="border rounded-lg h-12 bg-neutral text-white tracking-wide text-xl px-10 text-center my-12" type="button" value="View Team" readOnly></input>
            </div>

        </main>
    )
}