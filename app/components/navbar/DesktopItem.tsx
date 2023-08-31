'use client';

import React, { useState } from "react";
import {useRouter} from "next/navigation";
import clsx from "clsx";
import Link from "next/link";
import { IconType } from "react-icons";
import { BiSolidDownArrow } from "react-icons/bi";

interface DesktopItemProps{
    label:string;
    href:string;
    active:boolean;
    logo?:IconType;
    options?: any[];
}

const DesktopItem:React.FC<DesktopItemProps> = ({
    label,href,active,logo:Logo,options
}) => {
    const [showOptions,setShowOptions] = useState(false)
    return ( 
        <div>
            {
                options 
                ?
                <div>
                    <div className="rounded-md p-3 text-sm leading-6 font-semibold text-gray-800 hover:bg-gray-800 hover:text-white transition flex items-center gap-2 cursor-pointer" onClick={() => setShowOptions(option => !option)}>
                        {label}
                        <BiSolidDownArrow className={clsx(
                            showOptions && "transform rotate-180 transition duration-300"
                        )}/>
                    </div>
                    {
                        showOptions && (
                            <div className="flex flex-col gap-2 absolute bg-white px-[18px] py-[10px] rounded-md">
                                {
                                    options.map((option) => (
                                        <Link key={option.label} href={option.href} className="hover:bg-gray-800 hover:text-white transition duration-100 w-[100%] p-[7px] rounded-md">
                                            {option.label}
                                        </Link>
                                    ))
                                }
                            </div>
                        )
                    }
                </div>
                :
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
                        {
                            Logo ? <Logo /> : null
                        }
                        {label}
                    </Link>
            }
        </div>
     );
}
 
export default DesktopItem;