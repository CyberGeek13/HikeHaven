import DesktopNavbar from "./DesktopNavbar";
import Footer from '@/app/components/Footer'

async function Navbar ({
    children
} : {
    children: React.ReactNode
}) {
    return (
        <div className="w-full flex flex-col">
            <DesktopNavbar />
            <main>
                {children}
                <Footer />
            </main>
        </div>
    );
}

export default Navbar