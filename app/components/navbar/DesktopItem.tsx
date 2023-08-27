'use client';

import React from "react";
import {useRouter} from "next/navigation";
import clsx from "clsx";
import Link from "next/link";
import { IconType } from "react-icons";

interface DesktopItemProps{
    label:string;
    href:string;
    active:boolean;
    logo?:IconType;
}

const DesktopItem:React.FC<DesktopItemProps> = ({
    label,href,active,logo:Logo
}) => {
    return ( 
        <div>
            <Link href={href} 
                className={clsx(`
                    rounded-md
                    p-3
                    text-sm
                    leading-6
                    font-semibold
                    text-gray-800
                    hover:bg-gray-800
                    hover:text-white
                    transition
                    flex
                    items-center
                    gap-2
                `,
                active && 'bg-gray-100 text-black'
                )}
                >
                    
                    {/* <div > */}
                    {
                        Logo ? <Logo /> : null
                    }
                    {/* {label} */}
                    {/* </div> */}
                    {label}
                </Link>
        </div>
     );
}
 
export default DesktopItem;