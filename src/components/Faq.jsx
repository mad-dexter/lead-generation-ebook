import { useState } from "react";
import FaqItems from "./FaqItems";

const faqQuestions = [
  {
    questionNo: 1,
    question: "How to download the E-Book for free?",
    answer:
      "A download link will be sent to you email ID once your enter and submit your details",
    isExpanded: false,
    linkNeeded: true,
  },
  {
    questionNo: 2,
    question: "Is the E-Book free?",
    answer:
      "YES. The ebook is abolutely free and can be downloaded by simply entering your information",
    isExpanded: false,
    linkNeeded: true,
  },
  {
    questionNo: 4,
    question: "Will I receive spam?",
    answer: "Never. Your email is safe with us.",
    isExpanded: false,
    linkNeeded: false,
  },
  {
    questionNo: 3,
    question: "How will the e-book help me?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut ab accusantium laborum cum cupiditate, quibusdam inventore velit necessitatibus ducimus delectus nesciunt numquam, sunt voluptatibus. Consequatur voluptates libero temporibus tenetur quo.",
    isExpanded: false,
    linkNeeded: false,
  },
];

function Faq() {
  const [questions, setQuestions] = useState([...faqQuestions]);

  function expandFAQTabs(qNo, state) {
    setQuestions(
      faqQuestions.map((question) => {
        question.isExpanded = false;
        if (qNo === question.questionNo) {
          question.isExpanded = state;
        }
        return question;
      }),
    );
  }

  return (
    <section
      className="mx-auto bg-[#004D40] px-3 py-16 sm:px-6 md:px-16"
      id="about"
    >
      <h2 className="mb-12 text-center font-header text-5xl font-bold tracking-wider text-white">
        Frequently asked questions
      </h2>
      <div className="grid gap-2 md:grid-cols-2">
        <div className="flex flex-col">
          {questions.map((question) => (
            <FaqItems
              key={question.questionNo}
              question={question}
              expandFAQTabs={expandFAQTabs}
            />
          ))}
        </div>
        <div className="hidden items-center justify-center md:flex">
          <img
            src="/assets/faq.jpg"
            alt="FAQ"
            className="w-[80%] rounded-2xl shadow-2xl"
          />
        </div>
      </div>
      {/* <div className="mt-10 flex items-center justify-center gap-4 tracking-wide md:gap-0">
        Want to be industry leader in digital marketing? Get your E-Book
        <a
          className="ml-2 mr-1 text-lg font-bold text-[#004D40] transition-all duration-200 hover:-translate-y-1 hover:text-[#00352d] hover:underline hover:decoration-4 hover:underline-offset-8"
          href="#form"
        >
          NOW
        </a>
        !!!
      </div> 
      text-[#004D40]*/}
    </section>
  );
}

export default Faq;
