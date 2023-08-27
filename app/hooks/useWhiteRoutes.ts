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
            href:"/pages/contactus",
            active:pathname === "/pages/contactus",
            logo:IoMail,
        },
        {
            label:"Wishlist",
            href:"/pages/wishlist",
            active:pathname === "/pages/wishlist",
            logo:FaShoppingCart,
        },
        {
            label:"My Profile",
            href:"/pages/myprofile",
            active:pathname === "/pages/myprofile",
            logo:FaCircleUser,
        },
    ],[pathname])

    return routes;
}

export default useWhiteRoutes;