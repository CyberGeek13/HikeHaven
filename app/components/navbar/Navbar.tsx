import DesktopNavbar from "./DesktopNavbar";

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
            </main>
        </div>
    );
}

export default Navbar