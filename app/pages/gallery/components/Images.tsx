'use client'

import Modal from "@/app/components/Modal";
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";

interface ImagesProps {
    currentUser: any
}

const Images:React.FC<ImagesProps> = ({
    currentUser
}) => {
    const [bigImage, setBigImage] = useState('')
    const [id, setId] = useState('')
    const [isOpen, setIsOpen] = useState(false)
    const [toggle, setToggle] = useState(false)
    const [name, setName] = useState('')

    const handleImageClick = (image: any) => {
        setIsOpen(true)
        setId(image.id)
        setBigImage(image.url)
        setName(image.name)
    }

    const [images, setImages] = useState<any>([])

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
        <div>
            <div className="flex flex-wrap gap-[30px] justify-center mb-[30px]">
                    {
                        images.map((image: any) => (
                            <Image alt="hike" src={image.url} height={200} width={400} className="rounded-[10px]" onClick={() => handleImageClick(image)}/>
                        ))
                    }
            </div>
            <Modal onClose={() => setIsOpen(false)} isOpen={isOpen}>
                    <div className="flex flex-col justify-center items-center gap-[20px]">
                        <Image alt="hike" src={bigImage} height={1500} width={1500} className="rounded-[10px] w-[3000px]"/>
                        {name}
                        {
                            currentUser?.id === id && (
                                <button className="bg-red-500 text-white rounded-[10px] px-[10px] py-[5px]" onClick={() => {
                                    axios.post(`/api/image/`, {
                                        bigImage
                                    })
                                    .then(res => {
                                        console.log(res.data);
                                        setToggle(!toggle)
                                        setIsOpen(false)
                                    })
                                    .catch(err => {
                                        console.log(err);
                                    })
                                }}>
                                    Delete
                                </button>
                            )
                        }
                    </div>
            </Modal>
        </div>
     );
}
 
export default Images;