import Footer from "../components/Footer"
import Navbar from "../components/Navbar"

function Layout({ children }) {
    return (
        <main className="flex flex-col min-h-screen">
            <Navbar />
            <div className="grow">
            {children}
            </div>
            <Footer/>
        </main>
    )
}

export default Layout