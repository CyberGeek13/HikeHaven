'use client';

import { useRouter } from "next/navigation";
import Image from "next/image";
import News from "./components/news/News";
import { useRef } from "react";
import TopScroller from "../../components/goToTop/TopScroller";
import FAQ from "@/app/components/faq/FAQ";
import useFAQ from "@/app/hooks/useFAQ";

const Home = () => {
    const router = useRouter();
    const topSection = useRef<HTMLDivElement>(null);
    const faq = useFAQ();

    const btnClick=()=>{
        router.push("/upcoming");
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
            </div>
        </main>
    );
}

export default Home;