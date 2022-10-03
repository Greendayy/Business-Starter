import Headerm from "./Headerm";
import Footerm from "./Footerm"
import { useState } from "react";
import { Outlet } from "react-router-dom";

export default function Layout() {

    const [isOpen, setIsOpen] = useState(false)

    // function toggleOpen() {
    //     return (
    //         setIsOpen(prevOpen => !prevOpen)
    //     )
    // }

    return (
        <>
            <Headerm />
            <main className="min-h-screen w-full flex flex-col flex-wrap">
                <Outlet />
            </main>
            <Footerm className="absolute buttom-0 left-0"/>
        </>


    )
}