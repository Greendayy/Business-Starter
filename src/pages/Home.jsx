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

export default function Home() {
    return (
        <main>
            {/* welcome */}
            <div class="bg-green flex py-12 px-16 ">
                <div class="basis-2/5 text-white space-y-8">
                    <p class="text-sm font-bold">W E L C O M E</p>
                    <h2 class="text-4xl font-semibold font-serif">Lorem ipsum dolor sit amet consectetur </h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit nemo hic quos, ab, dolor aperiam nobis cum est eos error ipsum, voluptate culpa nesciunt delectus iste?</p>
                    <input class="text-black bg-white text-center py-2" type="botton" value="Explore"></input>
                </div>
                <div class="basis-3/5 ">
                    <img class="ml-24" src={Welcome} />
                </div>
            </div>

            {/* partners */}
            <div class="flex flex-col items-center">
                <div class="space-y-3 py-10">
                    <p class="text-green font-semibold text-center">P A R T N E R S</p>
                    <h3 class="text-3xl font-semibold font-serif text-center">Lorem Ipsum Dolor</h3>
                    <p class="font-sm text-center tracking-wide">Lorem ipsum, dolor sit amet consectetur<br/>
                        adipisicing elit.</p>
                </div>
                <div class="flex flex-row space-x-20">
                    <img src={Google} />
                    <img src={Microsoft} />
                    <img src={Airbnb} />
                    <img src={Facebook} />
                    <img src={Spotify} />
                </div>
                <input class="border rounded h-10 bg-neutral text-white px-3 text-center  my-20" type="button" value="Learn More" required></input>
            </div>

            {/* main */}
            <div class="space-y-10">
                <div class="flex flex-row justify-around mx-20">
                    <div class="basis-3/5" >
                        <img class="w-4/5"src={P1} />
                    </div>
                    <div class="basis-2/5 place-items-center mt-28">
                        <h2 class="text-3xl font-semibold font-serif">Lorem ipsum dolor sit amet consectetur </h2>
                        <p class="text-grayer font-sm">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit nemo hic quos, ab, dolor aperiam nobis cum est eos error ipsum, voluptate culpa nesciunt delectus iste?</p>
                        <input class="border rounded mt-3 h-10 bg-neutral text-white px-3 text-center mb-12" type="button" value="Learn More" required></input>
                    </div>
                </div>

                <div class="flex flex-row justify-around">
                    <div class="basis-2/5 mt-28">
                        <h2 class="text-3xl font-semibold font-serif">Lorem ipsum dolor sit amet consectetur </h2>
                        <p class="text-grayer font-sm">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit nemo hic quos, ab, dolor aperiam nobis cum est eos error ipsum, voluptate culpa nesciunt delectus iste?</p>
                        <input class="border rounded mt-3 h-10 bg-neutral text-white px-3 text-center mb-12" type="button" value="Learn More" required></input>
                    </div>
                    <div>
                        <img class="basis-3/5" src={P2} />
                    </div>

                </div>
            </div>

            {/* team */}
            <div class="flex flex-col items-center">
                <div class="flex flex-col items-center justify-center space-y-3 py-10">
                    <p class="text-green font-semibold text-center">T E A M</p>
                    <h2 class="text-3xl font-semibold font-serif text-center">Our Talents</h2>
                    <p class="font-sm text-center tracking-wide">Lorem ipsum, dolor sit amet consectetur
                        Suscipit nemo hic quos, ab,</p>
                </div>

                <div class="flex flex-row space-x-12">
                    <div class="shadow-xl w-60 h-64 space-y-1">
                        <img class="mx-auto py-2" src={ceo} />
                        <h3 class="ml-7 font-serif">Peg Legge</h3>
                        <p class="ml-7 text-grayer text-xs">CEO</p>
                    </div>
                    <div class="shadow-xl w-60 h-64 space-y-1">
                        <img class="mx-auto py-2" src={cto} />
                        <h3 class="ml-7 font-serif">Richard Guerra</h3>
                        <p class="ml-7 text-grayer text-xs">CTO</p>
                    </div>
                    <div class="shadow-xl w-60 h-64 space-y-1">
                        <img class="mx-auto py-2" src={designer} />
                        <h3 class="ml-7 font-serif">Alexandra Stolz</h3>
                        <p class="ml-7 text-grayer text-xs">DESIGNER</p>
                    </div>
                    <div class="shadow-xl w-60 h-64 space-y-1">
                        <img class="mx-auto py-2" src={developer} />
                        <h3 class="ml-7 font-serif">Janet Bray</h3>
                        <p class="ml-7 text-grayer text-xs">DEVELOPER</p>
                    </div>
                </div>
                <input class="border rounded h-10 bg-neutral text-white px-5 text-center my-12" type="button" value="View Team" required></input>
            </div>

        </main>
    )
}