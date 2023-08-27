import useNews from "@/app/hooks/useNews";
import { useEffect, useState } from "react";
import NewsBody from "./NewsBody";
import clsx from "clsx";

const NewsList = () => {
    const news = useNews();
    const [currentNews, setCurrentNews] = useState(news[0]);

    return ( 
        <div className="flex gap-10 px-7">
            <div className="flex flex-col gap-5 bg-white p-[10px] rounded-md shadow-lg">
                {news.map((newsItem) => (
                    <div className="flex flex-col gap-2 max-w-[450px] hover:underline cursor-pointer">
                        <div className={clsx("text-sm", currentNews.id === newsItem.id && "font-bold")} onClick={() => setCurrentNews(newsItem)}>
                            {newsItem.title}
                        </div>
                    </div>
                ))}
            </div>
            <NewsBody id={currentNews.id} title={currentNews.title} body={currentNews.body} img={currentNews.img} date={currentNews.date}/>
        </div>
     );
}
 
export default NewsList;