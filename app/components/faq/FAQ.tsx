'use client';

import clsx from "clsx";
import { useState } from "react";

interface FAQProps{
    question: string;
    answer: string;
}

const FAQ: React.FC<FAQProps> = ({
    question,
    answer
}) => {
    const [isOpen, setIsOpen] = useState(false)
    return ( 
        <div className="bg-primary w-[600px] text-sm font-serif">
            <div onClick={() => setIsOpen(option => !option)}>
                <div className="flex justify-between items-center p-[10px]">
                    <h3 className="font-semibold">
                        {question}
                    </h3>
                </div>
            </div>
            <div className={clsx(
                !isOpen && "hidden",
                isOpen && "block",
                "overflow-auto bg-gray-100 z-10 p-[10px] shadow-2xl"
            )}>
                {answer}
            </div>
        </div>
     );
}
 
export default FAQ;