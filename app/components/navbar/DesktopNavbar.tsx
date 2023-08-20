'use client';

import useRoutes from '@/app/hooks/useRoutes';
import Image from 'next/image';
import DesktopItem from './DesktopItem';
import {useRouter} from 'next/navigation';

const DesktopNavbar = () => {
    const routes = useRoutes()
    const router = useRouter()
    const handleClick = () => {
        router.push("/home")
    }
    return ( 
        <div className='w-full lg:flex hidden lg:fixed lg:left-0 lg:z-40 lg:bg-[#ffd11a] lg:border-r-[1px] lg:pb-4 justify-between items-center px-6 pt-2'>
            <Image alt='logo' src='/images/logo.png' height={85} width={85} onClick={handleClick} className='cursor-pointer'/>
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
            <div className="mt-100"><button onClick={handleClick}>Sign Out</button></div>
        
        </div>
     );
}
 
export default DesktopNavbar;