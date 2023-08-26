import { usePathname } from "next/navigation";
import { useMemo } from "react";

const useWhiteRoutes = () => {
    const pathname = usePathname();

    const routes = useMemo(() => [
        {
            label:"Contact Us",
            href:"/contactus",
            active:pathname === "/contactus"
        },
        {
            label:"My Profile",
            href:"/myprofile",
            active:pathname === "/myprofile"
        },
        {
            label:"Wishlist",
            href:"/wishlist",
            active:pathname === "/wishlist"
        },
    ],[pathname])

    return routes;
}

export default useWhiteRoutes;