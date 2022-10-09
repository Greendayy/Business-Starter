import Logo from "../assets/Logo.svg"
import { Link } from "react-router-dom"
import { useState } from 'react'

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (

        <header className="w-full bg-green  sm:flex sm:justify-between sm:items-center sm:px-4 sm:py-3">
            <div className="bg-green flex items-center justify-between px-4 py-3 sm:p-0">
                <div className="flex flex-row items-center ml-4">
                    <img className="h-10 w-10" src={Logo} /><h1 className="text-white text-3xl ml-2 mr-auto tracking-wide">Start</h1>
                </div>
                <div onClick={() => setIsOpen(!isOpen)}>
                <button  className="sm:hidden text-4xl text-white">
                    <svg t="1664008145513" className="h-6 w-6 text-white" viewBox="0 0 1024 1024" version="1.1"
                        xmlns="http://www.w3.org/2000/svg" fill="#fff" p-id="3353" width="200" height="200">
                        {isOpen ?
                            (<path
                                d="M571.733333 512l268.8-268.8c17.066667-17.066667 17.066667-42.666667 0-59.733333-17.066667-17.066667-42.666667-17.066667-59.733333 0L512 452.266667 243.2 183.466667c-17.066667-17.066667-42.666667-17.066667-59.733333 0-17.066667 17.066667-17.066667 42.666667 0 59.733333L452.266667 512 183.466667 780.8c-17.066667 17.066667-17.066667 42.666667 0 59.733333 8.533333 8.533333 19.2 12.8 29.866666 12.8s21.333333-4.266667 29.866667-12.8L512 571.733333l268.8 268.8c8.533333 8.533333 19.2 12.8 29.866667 12.8s21.333333-4.266667 29.866666-12.8c17.066667-17.066667 17.066667-42.666667 0-59.733333L571.733333 512z"
                                p-id="5045"></path>) :
                            (<path
                                d="M81.28 222.016h861.44c27.264 0 49.28-21.504 49.28-48s-22.016-48-49.28-48H81.28c-27.2 0-49.28 21.504-49.28 48s22.08 48 49.28 48zM942.72 462.016H81.28c-27.264 0-49.28 21.504-49.28 48s22.016 48 49.28 48h861.44c27.264 0 49.28-21.504 49.28-48s-22.144-48-49.28-48zM942.72 801.984H81.28c-27.2 0-49.28 21.504-49.28 48s22.08 48 49.28 48h861.44c27.264 0 49.28-21.504 49.28-48s-22.016-48-49.28-48z"
                                p-id="3354"></path>)}
                    </svg>
                </button>
                </div>
                
            </div>
            <div className={`${isOpen ? "block" : "hidden"} px-2 pt-2 pb-4 sm:flex sm:p-0`}>
                <div className="flex flex-col text-white font-semibold sm:flex-row sm: justify-between sm:items-center sm:space-x-10">
                    <Link to="/" className="mt-2 hover:bg-[#5a5757]">Home</Link>
                    <Link to="/portfolio" className="mt-2 hover:bg-[#5a5757]">Portfolio</Link>
                    <Link to="/service" className="mt-2 hover:bg-[#5a5757]">Services</Link>
                    <Link to="/contact" className="mt-2 hover:bg-[#5a5757]">Contact</Link>
                    <a href="https://baidu.com" target="_blank" rel="noopener noreferrer" className="mt-2">Baidu</a>
                </div>
            </div>
        </header>
    )
}