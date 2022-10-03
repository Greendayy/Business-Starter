import Group33 from "../assets/Footer/Group 33.svg"
import Group34 from "../assets/Footer/Group 34.svg"
import Group35 from "../assets/Footer/Group 35.svg"
import Group36 from "../assets/Footer/Group 36.svg"
import Group37 from "../assets/Footer/Group 37.svg"
import Group38 from "../assets/Footer/Group 38.svg"
import Group39 from "../assets/Footer/Group 39.svg"


export default function Footer() {
    const imgsSrc = [Group33, Group34, Group35, Group36, Group37, Group38, Group39]
    return (
        <div className="flex bg-green px-12 py-7 items-center">
            <div className="flex space-x-2 mr-auto">
                {imgsSrc.map(src =>
                    (<img className="w-3.5 h-3.5" src />)
                )}
            </div>

            <p class="text-white text-xs">© Start, 2022. All rights reserved.</p>
        </div>
    )
}