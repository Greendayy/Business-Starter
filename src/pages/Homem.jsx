import Welcome from "../assets/Home/Group-3.svg"
import Google from "../assets/Home/XMLID_24_.svg"
import Microsoft from "../assets/Home/XMLID_1_.svg"
import Airbnb from "../assets/Home/XMLID_1_-1.svg"
import Facebook from "../assets/Home/Group-2.svg"
import Spotify from "../assets/Home/XMLID_1_-2.svg"
import P1 from "../assets/Home/Group-1.svg"
import P2 from "../assets/Home/Group.svg"
import ceo from "../assets/Home/Group 14.svg"
import cto from "../assets/Home/Group 15.svg"
import designer from "../assets/Home/Group 15-1.svg"
import developer from "../assets/Home/Group 15-2.svg"

export default function Homem(){


    return(
        <main>
            
            <div className="bg-green flex flex-col sm:flex-row-reverse space-y-6 sm:space-y-0 sm:py-12 sm:px-16 sm:flex-row">

                <div className="sm:basis-3/5 ">
                    <img className="px-6 sm:ml-24" src={Welcome} />
                </div>

                <div className="text-white px-6 sm:basis-2/5 sm:space-y-8">
                    <p className="text-sm font-bold mb-2">W E L C O M E</p>
                    <h2 className="text-2xl sm:text-4xl font-semibold font-serif">Lorem ipsum dolor sit amet consectetur </h2>
                    <p className="text-xs my-2">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit nemo hic quos, ab, dolor aperiam nobis cum est eos error ipsum, voluptate culpa nesciunt delectus iste?</p>
                    <input className="text-black bg-white rounded text-center py-2 my-4" type="botton" value="Explore"></input>
                </div>

            </div>

            {/* partners */}
            <div className="flex flex-col items-center">
                <div className="space-y-3 py-10">
                    <p className="text-green font-semibold text-center">P A R T N E R S</p>
                    <h3 className="text-3xl font-semibold font-serif text-center">Lorem Ipsum Dolor</h3>
                    <p className="font-sm text-center tracking-wide">Lorem ipsum, dolor sit amet consectetur<br/>
                        adipisicing elit.</p>
                </div>
                <div className="flex flex-col space-y-10 sm:space-y-0 sm:flex-row sm:space-x-20">
                    <img src={Google} />
                    <img src={Microsoft} />
                    <img src={Airbnb} />
                    <img src={Facebook} />
                    <img src={Spotify} />
                </div>
                <input className="border rounded h-10 bg-neutral text-white px-6 sm:px-3 text-center my-10 sm:my-20" type="button" value="Learn More" required></input>
            </div>

            {/* main */}
            <div className="space-y-3 px-6 py-5 sm:space-y-10">
                <div className="flex flex-col sm:flex-row sm:justify-around sm:mx-20">
                    <div className="sm:basis-3/5" >
                        <img className="mb-3 sm:w-4/5"src={P1} />
                    </div>
                    <div className="space-y-3 sm:basis-2/5 sm:place-items-center sm:mt-28">
                        <h2 className="text-xl sm:text-3xl font-semibold font-serif">Lorem ipsum dolor sit amet consectetur </h2>
                        <p className="text-grayer text-sm">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit nemo hic quos, ab, dolor aperiam nobis cum est eos error ipsum, voluptate culpa nesciunt delectus iste?</p>
                        <input className="border rounded mt-3 h-10 bg-neutral text-white px-6 sm:px-3 text-center mb-12" type="button" value="Learn More" required></input>
                    </div>
                </div>

                <div className="flex flex-col-reverse sm:flex-row sm:justify-around">
                    <div className="space-y-3 sm:basis-2/5 sm:mt-28">
                        <h2 className="text-xl sm:text-3xl font-semibold font-serif">Lorem ipsum dolor sit amet consectetur </h2>
                        <p className="text-grayer text-sm">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit nemo hic quos, ab, dolor aperiam nobis cum est eos error ipsum, voluptate culpa nesciunt delectus iste?</p>
                        <input className="border rounded mt-3 h-10 bg-neutral text-white px-6 sm:px-3 text-center mb-12" type="button" value="Learn More" required></input>
                    </div>
                    <div>
                        <img className="my-6 sm:basis-3/5" src={P2} />
                    </div>

                </div>
            </div>

            {/* team */}
            <div className="flex flex-col items-center">
                <div className="space-y-3 py-10 px-3">
                    <p className="text-green font-semibold text-center">T E A M</p>
                    <h2 className="text-3xl font-semibold font-serif text-center">Our Talents</h2>
                    <p className="font-sm text-center tracking-wide">Lorem ipsum, dolor sit amet consectetur
                        Suscipit nemo hic quos, ab,</p>
                </div>

                <div className="flex flex-col sm:flex-row sm:space-x-12">
                    <div className="shadow-xl w-60 h-64 space-y-1">
                        <img className="mx-auto py-2" src={ceo} />
                        <h3 className="ml-7 font-serif">Peg Legge</h3>
                        <p className="ml-7 text-grayer text-xs">CEO</p>
                    </div>
                    <div className="shadow-xl w-60 h-64 space-y-1">
                        <img className="mx-auto py-2" src={cto} />
                        <h3 className="ml-7 font-serif">Richard Guerra</h3>
                        <p className="ml-7 text-grayer text-xs">CTO</p>
                    </div>
                    <div className="shadow-xl w-60 h-64 space-y-1">
                        <img className="mx-auto py-2" src={designer} />
                        <h3 className="ml-7 font-serif">Alexandra Stolz</h3>
                        <p className="ml-7 text-grayer text-xs">DESIGNER</p>
                    </div>
                    <div className="shadow-xl w-60 h-64 space-y-1">
                        <img className="mx-auto py-2" src={developer} />
                        <h3 className="ml-7 font-serif">Janet Bray</h3>
                        <p className="ml-7 text-grayer text-xs">DEVELOPER</p>
                    </div>
                </div>
                <input className="border rounded h-10 bg-neutral text-white px-5 text-center my-12" type="button" value="View Team" required></input>
            </div>
           
        </main>
    )
    }