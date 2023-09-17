'use client';

import axios from "axios";
import { CldUploadButton } from "next-cloudinary";
import { HiPhotograph } from "react-icons/hi";

const Gallery = () => {

    const handleUpload = (result: any) => {
        axios.post('/api/upload', {
            url: result?.info?.secure_url
        })
    }
    return ( 
        <div className="mt-[150px]">
            <h1>Gallery</h1>
            <CldUploadButton
                options={{maxFiles: 1}}
                onUpload={handleUpload}
                uploadPreset="zidrmycz"
            >
                <HiPhotograph size={30} className="text-sky-500" />
            </CldUploadButton>
        </div>
     );
}
 
export default Gallery;