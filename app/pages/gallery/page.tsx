'use client';

import Modal from "@/app/components/Modal";
import axios from "axios";
import { CldUploadButton } from "next-cloudinary";
import Image from "next/image";
import { useEffect, useState } from "react";
import { HiPhotograph } from "react-icons/hi";

const Gallery = () => {

    const [images, setImages] = useState<any>([])
    const [toggle, setToggle] = useState(false)
    const [isOpen, setIsOpen] = useState(false)
    const [bigImage, setBigImage] = useState('')

    const handleUpload = (result: any) => {
        axios.post('/api/upload', {
            url: result?.info?.secure_url
        })
        .then(res => {
            console.log(res);
            setToggle(!toggle)
        })
    }

    const handleImageClick = (image: any) => {
        setIsOpen(true)
        setBigImage(image)
    }

    useEffect(() => {
        axios.get('/api/upload')
        .then(res => {
            console.log(res.data);
            setImages(res.data)
        })
        .catch(err => {
            console.log(err);
        })
    }, [toggle])
    return ( 
        <div className="mt-[150px]">
            <div className="flex justify-between items-center pr-[100px]">
                <h1 className="text-[60px] font-semibold ml-7 font-serif">Photo Gallery</h1>
                <CldUploadButton
                    options={{maxFiles: 1}}
                    onUpload={handleUpload}
                    uploadPreset="zidrmycz"
                >
                    <HiPhotograph size={50} className="text-sky-500" />
                </CldUploadButton>
            </div>
            <div className="w-[98vw] px-7">
                <div className="h-1 w-full bg-[#ffd11a] rounded-sm mb-5"/>
            </div>
            <div className="flex flex-wrap gap-[30px] justify-center mb-[30px]">
                {
                    images.map((image: any) => (
                        <Image alt="hike" src={image} height={200} width={400} className="rounded-[10px]" onClick={() => handleImageClick(image)}/>
                    ))
                }
            </div>
            <Modal onClose={() => setIsOpen(false)} isOpen={isOpen}>
                <div className="flex justify-center">
                    <Image alt="hike" src={bigImage} height={1500} width={1500} className="rounded-[10px] w-[3000px]"/>
                </div>
            </Modal>
        </div>
     );
}
 
export default Gallery;