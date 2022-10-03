import Logo from "../assets/Logo.svg"
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <div class="bg-green flex items-center px-12 py-7">
            <img class="h-12 w-12" src={Logo} />
            <h1 class="text-white text-4xl ml-2 mr-auto">Start</h1>
            <div class="flex space-x-6 text-white text-sm">
                <Link to="/">Home</Link>
                <Link to="/portfolio">Portfolio</Link>
                <Link to="/service">Services</Link>
                <Link to="/contact">Contact</Link>
                <a href="https://baidu.com" target="_blank" rel="noopener noreferrer" >Baidu</a>
            </div>
        </div>
    )
}