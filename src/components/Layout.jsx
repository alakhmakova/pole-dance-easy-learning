// Outlet: the place where the router puts the page that matches the current address (catalog or category).
import { Outlet } from "react-router";
import Header from './Header'
import Footer from './Footer'

export default function Layout() {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}