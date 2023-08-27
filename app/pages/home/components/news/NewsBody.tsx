'use client';

import Image from "next/image";

interface NewsBodyProps {
    id: number;
    title: string;
    img: string;
    body: string;
    date: string;
}

const NewsBody: React.FC<NewsBodyProps> = ({
    id,
    title,
    img,
    body,
    date
}) => {
    return ( 
        <div className="w-fit">
            <div className="flex justify-center">
                <Image src={img} alt="image" width={600} height={500}/>
            </div>
            <br />
            <div className="font-bold text-[25px]">
                {title}
            </div>
            <br />
            {body}
        </div>
     );
}
 
export default NewsBody;