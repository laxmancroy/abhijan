import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";

const questions = [
    {
        question: "What is Abhijan?",
        answer: "Abhijan is an online platform that provides comprehensive preparation materials for various exams, including Job, DUET, Academic, and General knowledge tests."
    },
    {
        question: "How can I access the study materials?",
        answer: "You can access the study materials by signing up for an account on our website. Once registered, you will have access to a wide range of resources."
    },
    {
        question: "Are the study materials free?",
        answer: "Yes, we offer a selection of free study materials. However, some premium content may require a subscription or one-time payment."
    },
    {
        question: "How often are the study materials updated?",
        answer: "We regularly update our study materials to ensure they are current and relevant. Please check back frequently for the latest content."
    }
];

const Faq = () => {
    return (
        <div className="b">
            <div className="container mx-auto px-4 py-8 md:p-16">
                <h3 className="text-center text-3xl font-bold">Frequently Asked Questions</h3>
                <div>
                    {
                        questions.map((q) => (
                            <div key={q.question} className="border-b border-border py-4 hover:cursor-pointer">
                                <h4 className="flex items-center justify-between">{ q.question } <IoIosArrowDown /></h4>
                                <p className="pt-3 text-muted-foreground text-sm hidden">{ q.answer }</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Faq;