'use client';

import Image from "next/image";
import { AiFillLinkedin, AiFillInstagram, AiFillFacebook } from "react-icons/ai"
import { MdEmail } from "react-icons/md"

interface MemberProps {
    name: string;
    position: string;
    image: string;
    quote: string;
    description: string;
    linkedin?: string;
    instagram?: string;
    facebook?: string;
    email?: string;
}

const Member: React.FC<MemberProps> = ({
    name,
    position,
    image,
    quote,
    description,
    linkedin,
    instagram,
    facebook,
    email
}) => {
    return ( 
        <div className="w-[300px] p-[30px] rounded-md bg-gray-100 shadow-lg hover:shadow-2xl transition duration-200 flex flex-col justify-center items-center gap-[20px]">
            <div>
                <Image alt="user" src={image} height={150} width={150} className="rounded-xl"/>
            </div>
            <div className="flex flex-col gap-[5px]">
                <span className="text-lg font-bold">{name}</span>
                <span className="text-sm">{position}</span>
            </div>
            <div>
                {quote}
            </div>
            <div className="flex flex-wrap gap-[10px] justify-center items-center">
                {
                    linkedin && (
                        <AiFillLinkedin 
                            className="text-[30px] cursor-pointer hover:text-blue-500 transition duration-200"
                            onClick={() => window.open(linkedin, "_blank")}
                        />
                    )
                }
                {
                    instagram && (
                        <AiFillInstagram 
                            className="text-[30px] cursor-pointer hover:text-pink-500 transition duration-200"
                            onClick={() => window.open(instagram, "_blank")}
                        />
                    )
                }
                {
                    facebook && (
                        <AiFillFacebook 
                            className="text-[30px] cursor-pointer hover:text-blue-500 transition duration-200"
                            onClick={() => window.open(facebook, "_blank")}
                        />
                    )
                }
                {
                    email && (
                        <MdEmail 
                            className="text-[30px] cursor-pointer hover:text-red-500 transition duration-200"
                            onClick={() => window.open(email, "_blank")}
                        />
                    )
                }
            </div>
        </div>
     );
}
 
export default Member;