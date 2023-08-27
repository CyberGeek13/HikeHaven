import { usePathname } from "next/navigation";
import { useMemo } from "react";

const useRoutes = () => {
    const pathname = usePathname();

    const routes = useMemo(() => [
        {
            label:"Upcoming Treks",
            href:"/pages/upcoming",
            active:pathname === "/pages/upcoming"
        },
        {
            label:"Articles",
            href:"/pages/articles",
            active:pathname === "/pages/articles"
        },
        {
            label:"Our Story",
            href:"/pages/aboutus",
            active:pathname === "/pages/aboutus"
        },
        {
            label:"Rent/Buy Gears",
            href:"/pages/accessories",
            active:pathname === "/pages/accessories"
        },
    ],[pathname])

    return routes;
}

export default useRoutes;