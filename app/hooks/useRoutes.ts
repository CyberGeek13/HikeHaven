import { usePathname } from "next/navigation";
import { useMemo } from "react";
import { signOut } from "next-auth/react";

const useRoutes = () => {
    const pathname = usePathname();

    const routes = useMemo(() => [
        {
            label:"Upcoming Treks",
            href:"/upcoming",
            active:pathname === "/upcoming"
        },
        {
            label:"Articles",
            href:"/articles",
            active:pathname === "/articles"
        },
        {
            label:"Our Story",
            href:"/aboutus",
            active:pathname === "/aboutus"
        },
        {
            label:"Rent/Buy Gears",
            href:"/accessories",
            active:pathname === "/accessories"
        },
    ],[pathname])

    return routes;
}

export default useRoutes;