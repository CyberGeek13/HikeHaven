'use client';

import { useRouter } from "next/navigation";
import Image from "next/image";
import News from "./components/news/News";
import { useEffect, useRef, useState } from "react";
import TopScroller from "../../components/goToTop/TopScroller";
import FAQ from "@/app/components/faq/FAQ";
import useFAQ from "@/app/hooks/useFAQ";
import Slider from "react-slick"
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import useHikes from "@/app/hooks/useHikes";
import clsx from "clsx";
import { toast } from "react-hot-toast";
import { nanoid } from 'nanoid'

    const CustomPrevArrow = (props:any) => (
        <div
        className="absolute top-1/3 right-5 transform -translate-y-1/2 cursor-pointer text-xl text-gray-600 z-30 bg-gray-400 p-3 rounded-full hover:bg-primary hover:text-black hover:rounded-md transition-all duration-200"
        onClick={props.onClick}
        >
        &larr;
        </div>
    );

    const CustomNextArrow = (props:any) => (
        <div
        className="absolute bottom-1/3 right-4 transform cursor-pointer text-xl text-gray-600 bg-gray-400 p-3 rounded-full hover:bg-primary hover:text-black hover:rounded-md transition-all duration-200"
        onClick={props.onClick}
        >
        &rarr;
        </div>
    );

const Home = () => {
    const router = useRouter();
    const topSection = useRef<HTMLDivElement>(null);
    const faq = useFAQ();
    const hikes = useHikes();

    const [selectedHikes, setSelectedHikes] = useState<any>([]);

    useEffect(() => {
        const hikes = localStorage.getItem('hikes')
        if (hikes) {
            setSelectedHikes(JSON.parse(hikes))
        }
    }, [])

    useEffect(() => {
        console.log(selectedHikes);
    }, [selectedHikes])

    const btnClick=()=>{
        router.push("/pages/upcoming");
    };

    const scrollUp = () => {
        if (!topSection.current) {
            return;
        }
        window.scrollTo({
          top: topSection.current.offsetTop,
          behavior: 'smooth',
        });
    };

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '0',
        prevArrow: <CustomPrevArrow />,
        nextArrow: <CustomNextArrow />,
    };

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
        localStorage.setItem('hikes', JSON.stringify([...selectedHikes, data]))
        setSelectedHikes([...selectedHikes, data])
        toast.success('Hike added successfully')
    }

    return ( 
        
        <main>
            <TopScroller clickHandler={scrollUp}/>
            <div className="relative" ref={topSection}>
                <Image alt="hero" src="/images/home_mountain.jpg" height={0} width={0} layout="responsive"/>
                <div className="absolute top-[350px] left-[30px] font-bold text-6xl text-white text-center">India’s Largest & Safest Trekking Organisation</div>
                <div className="absolute top-[550px] left-[120px] font-bold text-2xl text-white text-center">5,000+ Trust Our Transformative Trek Experience and Pioneering Safety Standards Each Year</div>
                <div className="absolute top-[630px] left-[600px]">
                    <button onClick={btnClick} className="text-black font-semibold bg-[#ffd11a] p-[10px] rounded-[6px] hover:bg-gray-300 hover:text-black transition">
                        View Upcoming Treks
                    </button>
                </div>
            </div>
            {/* Upcoming Treks */}
            <div className="mb-[50px]">
                <h1 className="text-[60px] font-semibold ml-7 font-serif">Upcoming Treks</h1>
                <div className="w-[98vw] px-7">
                    <div className="h-1 w-full bg-[#ffd11a] rounded-sm mb-5"/>
                </div>
                <div className="flex justify-center">
                    <Slider {...settings} className="w-[90vw]">
                        {
                            hikes.map(hike => (
                                <div key={hike.id} className="flex justify-center">
                                    <div className="flex flex-col items-center justify-center w-[300px] py-[30px] bg-white rounded-[10px] shadow-lg">
                                        <div className="w-[300px] h-[200px] rounded-t-[10px]">
                                            <Image alt="hike" src={hike.image} height={0} width={0} layout="responsive"/>
                                            <div className={clsx(
                                                'text-[13px] ml-[7px]',
                                                hike.difficulty === 'easy' ? 'text-green-500' : '',
                                                hike.difficulty === 'medium' ? 'text-yellow-500' : '',
                                                hike.difficulty === 'hard' ? 'text-red-500' : ''
                                            )}>
                                                {hike.difficulty}
                                            </div>
                                        </div>
                                        <div className="flex flex-col items-center justify-center w-[300px] h-[200px]">
                                            <div className="text-[25px] mt-[25px] font-semibold">{hike.name}</div>
                                            <div className="text-[15px] font-semibold">{hike.location}</div>
                                            <div className="text-[15px] font-semibold">Rs {hike.price}</div>
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
                                                    <div className="text-[15px] font-semibold text-green-500 mt-[10px]">Selected</div>
                                                ) : (
                                                    <div className="text-[15px] font-semibold text-gray-500 mt-[10px]">Click on date to select</div>
                                                )
                                            }
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </Slider>
                </div>
            </div>
            <News />
            {/* FAQ section */}
            <div>
                <h1 className="text-[60px] font-semibold ml-7 font-serif">FAQ</h1>
                <div className="w-[98vw] px-7">
                    <div className="h-1 w-full bg-[#ffd11a] rounded-sm mb-5"/>
                </div>
                <div className="flex flex-wrap items-center justify-center w-full gap-[30px] mb-[30px]">
                    {
                        faq.map(q => (
                            <FAQ key={q.id} question={q.question} answer={q.answer}/>
                        ))
                    }
                </div>
                <div className="flex justify-center mb-[30px]">
                    <button className="bg-primary px-[20px] py-[7px] hover:bg-black hover:bg-opacity-10" onClick={() => router.push('/pages/faq')}>
                        View More FAQs
                    </button>
                </div>
            </div>
        </main>
    );
}

export default Home;