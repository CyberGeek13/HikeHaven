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
        <div className="bg-primary w-[600px]">
            <div onClick={() => setIsOpen(option => !option)}>
                <div className="flex justify-between items-center p-[10px]">
                    <h3 className="text-lg font-semibold">
                        {question}
                    </h3>
                </div>
            </div>
            <div className={clsx(
                !isOpen && "hidden",
                isOpen && "block",
                "overflow-auto bg-black bg-opacity-10 z-10 p-[10px]"
            )}>
                {answer}
            </div>
        </div>
     );
}
 
export default FAQ;