'use client';

import { useRouter } from "next/navigation";
import Image from "next/image";
import News from "./components/news/News";

const Home = () => {
    const router = useRouter();

    const btnClick=()=>{
        router.push("/upcoming");
    };
    return ( 
        
        <main>
            <div className="relative">
                <Image alt="hero" src="/images/home_mountain.jpg" height={0} width={0} layout="responsive"/>
                <div className="absolute top-[350px] left-[30px] font-bold text-6xl text-white text-center">India’s Largest & Safest Trekking Organisation</div>
                <div className="absolute top-[550px] left-[120px] font-bold text-2xl text-white text-center">5,000+ Trust Our Transformative Trek Experience and Pioneering Safety Standards Each Year</div>
                <div className="absolute top-[630px] left-[600px]">
                    <button onClick={btnClick} className="text-black font-semibold bg-[#ffd11a] p-[10px] rounded-[6px] hover:bg-gray-300 hover:text-black transition">
                        View Upcoming Treks
                    </button>
                </div>
            </div>
            <News />
        </main>
    );
}

export default Home;