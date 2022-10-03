import Group33 from "../assets/Footer/Group 33.svg"
import Group34 from "../assets/Footer/Group 34.svg"
import Group35 from "../assets/Footer/Group 35.svg"
import Group36 from "../assets/Footer/Group 36.svg"
import Group37 from "../assets/Footer/Group 37.svg"
import Group38 from "../assets/Footer/Group 38.svg"
import Group39 from "../assets/Footer/Group 39.svg"

export default function Footerm() {
    const imgsSrc = [Group33, Group34, Group35, Group36, Group37, Group38, Group39]

    return (
        <footer className="flex-col items-center justify-center space-y-2 mt-auto py-3  bg-green sm:flex-row sm:px-20 sm:py-10" >
            <div className="flex items-center justify-center space-x-2 sm:mr-auto">
                {imgsSrc.map((imgSrc, index) =>
                    (<img key={index} className="w-3.5 h-3.5" src={imgSrc} />)
                )}
            </div>
            <p className="text-center text-white text-xs">© Start, 2022. All rights reserved.</p>
        </footer>
    )
}