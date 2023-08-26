import { usePathname } from "next/navigation";
import { useMemo } from "react";
import { IoMail } from 'react-icons/io5';
import { FaShoppingCart } from 'react-icons/fa';
import { FaCircleUser } from 'react-icons/fa6';

const useWhiteRoutes = () => {
    const pathname = usePathname();

    const routes = useMemo(() => [
        {
            label:"Contact Us",
            href:"/contactus",
            active:pathname === "/contactus",
            logo:IoMail,
        },
        {
            label:"Wishlist",
            href:"/wishlist",
            active:pathname === "/wishlist",
            logo:FaShoppingCart,
        },
        {
            label:"My Profile",
            href:"/myprofile",
            active:pathname === "/myprofile",
            logo:FaCircleUser,
        },
    ],[pathname])

    return routes;
}

export default useWhiteRoutes;