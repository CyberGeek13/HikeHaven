'use client';

import useHikes from "@/app/hooks/useHikes";
import axios from "axios";
import clsx from "clsx";
import { nanoid } from "nanoid";
import Image from "next/image";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const Upcoming = () => {
    const hikes = useHikes();

    const [selectedHikes, setSelectedHikes] = useState<any>([]);

    useEffect(() => {
        const hikes = localStorage.getItem('hikes')
        if (hikes) {
            setSelectedHikes(JSON.parse(hikes))
        }
    }, [])

    const handleDateClick = (hike:any, date:any) => {
        if(selectedHikes.find((h:any) => h.id === hike.id)) {
            const foundDate = selectedHikes.find((h:any) => h.id === hike.id && h.date === date)
            let data = selectedHikes.filter((h:any) => !(h.id === hike.id))
            localStorage.setItem('hikes', JSON.stringify(data))
            if(foundDate.date === date) {
                toast.error('Hike removed successfully')
                setSelectedHikes(data)
                return;
            }
            data = [...data, {id: hike.id, date: date}]
            localStorage.setItem('hikes', JSON.stringify(data))
            toast.success('Date changed successfully')
            setSelectedHikes(data)
            return;
        }
        const data = {
            id: hike.id,
            date: date
        }
        axios.post('/api/hike', data)
        
        localStorage.setItem('hikes', JSON.stringify([...selectedHikes, data]))
        setSelectedHikes([...selectedHikes, data])
        toast.success('Hike added successfully')
    }


    return ( 
        <div className="mt-[200px] flex flex-wrap gap-[100px] justify-center mb-[20px]">
            {
                hikes.map(hike => (
                    <div key={hike.id} className="flex justify-center">
                        <div className="flex flex-col items-center justify-center w-[300px] pb-[100px] bg-white rounded-[10px] shadow-lg">
                            <div className="w-[300px] h-[200px] rounded-t-[10px]">
                                <Image alt="hike" src={hike.image} height={0} width={0} layout="responsive"/>
                            </div>
                            <div className="flex flex-col items-center justify-center w-[300px] h-[200px]">
                                <div className="text-[25px] mt-[65px] font-semibold">{hike.name}</div>
                                <div className="text-[15px] font-semibold">{hike.location}</div>
                                <div className="text-[15px] font-semibold">Rs {hike.price}</div>
                                <div className={clsx(
                                    'text-[13px] ml-[7px]',
                                    hike.difficulty === 'easy' ? 'text-green-500' : '',
                                    hike.difficulty === 'medium' ? 'text-yellow-500' : '',
                                    hike.difficulty === 'hard' ? 'text-red-500' : ''
                                )}>
                                    {hike.difficulty}
                                </div>
                                <div className="flex flex-col gap-2 mt-[7px]">
                                {
                                    hike.availDates.map(data => (
                                        <div 
                                            className={clsx(
                                                "bg-gray-200 text-black p-[3px] w-[250px] text-md font-serif cursor-pointer shadow-md hover:shadow-lg transition-all duration-100 hover:bg-gray-300 px-[10px]",
                                                selectedHikes.find((h:any) => h.id === hike.id && h.date === data) ? 'bg-green-500 text-white hover:bg-green-600' : ''
                                            )}
                                            onClick={() => handleDateClick(hike, data)}
                                            key={nanoid()}
                                        >
                                            {data}
                                        </div>
                                    ))
                                }
                                </div>
                                {
                                    selectedHikes.find((h:any) => h.id === hike.id) ? (
                                        <div className="text-[15px] font-semibold text-green-500 mt-[10px] mb-[20px]">Selected</div>
                                    ) : (
                                        <div className="text-[15px] font-semibold text-gray-500 mt-[10px] mb-[20px]">Click on date to select</div>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
     );
}
 
export default Upcoming;