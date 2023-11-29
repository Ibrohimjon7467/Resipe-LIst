// import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"
import Recipes from './../components/Recipes';

function RootLayout() {
    return (
        <>
            <Navbar />
            <main className="h-full">
                <Recipes />
            </main>
        </>
    )
}

export default RootLayout