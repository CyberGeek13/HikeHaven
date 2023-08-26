'use client';

import React from "react";
import {useRouter} from "next/navigation";
import clsx from "clsx";
import Link from "next/link";

interface DesktopItemProps{
    label:string;
    href:string;
    active:boolean;
    
}

const DesktopItem:React.FC<DesktopItemProps> = ({
    label,href,active
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
                `,
                active && 'bg-gray-100 text-black'
                )}
                >
                    <span>{label}</span>
                </Link>
        </div>
     );
}
 
export default DesktopItem;