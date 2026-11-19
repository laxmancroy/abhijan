"use client";

import { useState } from "react";

import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";

const questions = [
  {
    question: "What is Abhijan?",
    answer:
      "Abhijan is an online platform that provides comprehensive preparation materials for various exams, including Job, DUET, Academic, and General knowledge tests.",
  },
  {
    question: "How can I access the study materials?",
    answer:
      "You can access the study materials by signing up for an account on our website. Once registered, you will have access to a wide range of resources.",
  },
  {
    question: "Are the study materials free?",
    answer:
      "Yes, we offer a selection of free study materials. However, some premium content may require a subscription or one-time payment.",
  },
  {
    question: "How often are the study materials updated?",
    answer:
      "We regularly update our study materials to ensure they are current and relevant. Please check back frequently for the latest content.",
  },
];

const Faq = () => {
  const [openQuestion, setOpenQuestion] = useState<number | null>(null);

  return (
    <div className="container mx-auto">
      <div className="bg-card sm:rounded-xl px-8 py-6 sm:mx-8 my-4">
        <h3 className="text-center text-xl font-bold pb-2">
          Frequently Asked Questions
        </h3>
        <div>
          {questions.map((q, index) => (
            <div
              key={q.question}
              className="border-b border-bdr py-4 hover:cursor-pointer"
            >
              <h4
                className="flex items-center justify-between text-sm"
                onClick={() =>
                  setOpenQuestion(openQuestion === index ? null : index)
                }
              >
                {q.question}{" "}
                {openQuestion === index ? <IoIosArrowUp /> : <IoIosArrowDown />}
              </h4>
              <p
                className={`${openQuestion === index ? "block" : "hidden"} pt-3 text-muted-foreground text-sm`}
              >
                {q.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
      </div>
  );
};

export default Faq;
