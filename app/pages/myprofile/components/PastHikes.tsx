'use client'

import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";

interface PastHikesProps {
    user: any;
}

const PastHikes:React.FC<PastHikesProps> = ({
    user
}) => {
    const [hikes, setHikes] = useState([]);
    const [selectedHikes, setSelectedHikes] = useState<any>([]);
    const pastHikeIds = user.pastHikeIds || [];
    const pastHikeDates = user.pastHikeDates || [];

    useEffect(() => {
        axios.get("/api/hikes").then((res) => {
            console.log(res.data);
            setHikes(res.data);
        });
    }, []);

    useEffect(() => {
        setSelectedHikes(hikes.filter((hike:any) => pastHikeIds.includes(hike.id)))
    }, [hikes])

    return ( 
        <div>
            <h1 className="text-[60px] font-semibold ml-7 font-serif text-center w-full">User Trek History</h1>
                        <div className="w-[98vw] px-7">
                        <div className="h-1 w-full bg-[#ffd11a] rounded-sm mb-5"/>
                    </div>
            {
                selectedHikes.length > 0 ? (
                    <div className="flex flex-wrap justify-center gap-[100px] mt-[50px]">
                        {
                            selectedHikes.map((hike:any) => (
                                <div key={hike.id} className="flex justify-center mb-[30px]">
                                    <div className="flex flex-col items-center justify-center w-[300px] pb-[30px] bg-white rounded-[10px] shadow-lg">
                                        <div className="relative w-[300px] rounded-t-[10px]">
                                            <Image alt="hike" src={hike.image} height={0} width={0} layout="responsive" className="rounded-t-[10px]"/>
                                        </div>
                                        <div className="flex flex-col items-center justify-center w-[300px]">
                                            <div className="text-[25px] mt-[20px] font-semibold">{hike.name}</div>
                                            <div className="text-[15px] font-semibold">{hike.location}</div>
                                            <div className="text-[15px] font-semibold">Rs {hike.price} /-</div>
                                            <div className="text-[15px] font-semibold text-black mt-[10px]">
                                                {pastHikeDates[pastHikeIds.indexOf(hike.id)]}
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                ) : (
                    <div className="flex flex-col items-center justify-center h-[500px]">
                        <div className="text-[30px] font-semibold">No Past Hikes</div>
                        <div className="text-[20px] font-semibold mt-[10px]">Book a hike now!</div>
                    </div>
                )
            }
        </div>
     );
}
 
export default PastHikes;