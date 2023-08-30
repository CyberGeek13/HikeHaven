'use client';

import { BsInstagram } from "react-icons/bs";
import { BiLogoFacebook } from "react-icons/bi";
import { BsStrava } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa"
import Link from "next/link";

const Footer = () => {
    return ( 
        <div className="min-h-[15rem] bg-gray-800 flex justify-around p-[10px] font-serif">
            <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-2">
                    <h3 className="text-primary text-xl">
                        Follow Us
                    </h3>
                    <div className="flex gap-2">
                        <BsInstagram className="text-white cursor-pointer text-[22px] hover:text-[#dd2a7b] transition duration-300"/>
                        <BiLogoFacebook className="text-white cursor-pointer text-[22px] hover:text-[#4267b3] transition duration-300"/>
                        <BsStrava className="text-white cursor-pointer text-[22px] hover:text-[#fc4c02] transition duration-300"/>
                        <FaTwitter className="text-white cursor-pointer text-[22px] hover:text-[#00acee] transition duration-300"/>
                    </div>
                </div>
                <div className="flex max-h-[7rem] text-white gap-[25px]">
                    <div className="flex flex-col">
                        <Link href="/pages/aboutus" className="hover:text-gray-400">FAQs</Link>
                        <Link href="/pages/aboutus" className="hover:text-gray-400">About Us</Link>
                        <Link href="/pages/contactus" className="hover:text-gray-400">Contact Us</Link>
                        <Link href="/pages/aboutus" className="hover:text-gray-400">Work with us</Link>
                    </div>
                    <div className="flex flex-col">
                        <Link href="/pages/aboutus" className="hover:text-gray-400">Terms and Conditions</Link>
                        <Link href="/pages/aboutus" className="hover:text-gray-400">Privacy Policy</Link>
                        <Link href="/pages/aboutus" className="hover:text-gray-400">Disclaimer</Link>
                    </div>
                </div>
            </div>
            <div className="flex flex-col justify-between">
            <div>
                    <h3 className="text-primary text-xl">
                        Contact Us
                    </h3>
                    <p className="text-white text-sm">Purav Ajmera - 8355849582</p>
                    <p className="text-white text-sm">Mon to Sat - 9.30 AM to 7.30 PM</p>
                    <p className="text-white text-sm">Sun - 9.30 AM to 6.30 PM</p>
                </div>
            </div>
        </div>
     );
}
 
export default Footer;