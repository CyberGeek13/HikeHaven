'use client'

import axios from "axios";
import { useEffect, useState } from "react";

interface PastHikesProps {
    user: any;
}

const PastHikes:React.FC<PastHikesProps> = ({
    user
}) => {
    const [hikes, setHikes] = useState([]);
    const [selectedHikes, setSelectedHikes] = useState<any>([]);
    const pastHikeIds = user.pastHikeIds;
    const pastHikeDates = user.pastHikeDates;

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
            {
                selectedHikes.map((hike:any, index:number) => {
                    return (
                        <div key={index}>
                            <div>{hike.name}</div>
                            <div>{hike.location}</div>
                            <div>{pastHikeDates[index]}</div>
                        </div>
                    )
                })
            }
        </div>
     );
}
 
export default PastHikes;