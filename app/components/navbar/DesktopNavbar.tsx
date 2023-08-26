'use client';

import useRoutes from '@/app/hooks/useRoutes';
import Image from 'next/image';
import DesktopItem from './DesktopItem';
import { signOut } from "next-auth/react";
import {useRouter} from 'next/navigation';
import useWhiteRoutes from '@/app/hooks/useWhiteRoutes';


const DesktopNavbar = () => {
    const routes = useRoutes()
    const whiteRoutes = useWhiteRoutes()
    const router = useRouter()
    const handleClick = () => {
        router.push("/home")
    }
    const handleSignOut = () => {
        signOut();
    }
    return ( 
    <div className='w-full lg:flex lg:flex-col lg:fixed lg:z-40'>
        <div className='w-full lg:flex hidden lg:left-0 lg:z-40 lg:bg-white lg:border-r-[1px] lg:pb-2 justify-between items-center px-6 pt-1'>
            <Image alt='logo' src='/images/logo.png' height={85} width={85} onClick={handleClick} className='cursor-pointer'/>
            {
                whiteRoutes.map(item => (
                    <DesktopItem 
                        label={item.label}
                        key={item.label}
                        href={item.href}
                        active={item.active}
                    />
                ))
            }
        </div>

        <div className='w-full lg:flex hidden lg:left-0 lg:z-40 lg:bg-[#ffd11a] lg:border-r-[1px] justify-between items-center px-6'>
            {
                routes.map(item => (
                    <DesktopItem 
                        label={item.label}
                        key={item.label}
                        href={item.href}
                        active={item.active}
                    />
                ))
            }
            <div className='rounded-md p-3 text-sm leading-6 font-semibold text-gray-800 hover:bg-gray-800 hover:text-white transition' onClick={handleSignOut}>
                <span>Sign Out</span>
            </div>
        </div>
    </div>
     );
}
 
export default DesktopNavbar;