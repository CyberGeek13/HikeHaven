import { useMemo } from "react";

const useFAQ = () => {
    const faq = useMemo(() => [
        {
            id: 1,
            question: "Question 1",
            answer: "Answer 1"
        },
        {
            id: 2,
            question: "Question 2",
            answer: "Answer 2"
        },
        {
            id: 3,
            question: "Question 3",
            answer: "Answer 2"
        },
        {
            id: 4,
            question: "Quetion 4",
            answer: "Answer 4"
        },
        {
            id: 5,
            question: "Question 5",
            answer: "Answer 5"
        },
        {
            id: 6,
            question: "Question 6",
            answer: "Answer 6"
        }
    ],[])

    return faq;
}

export default useFAQ;