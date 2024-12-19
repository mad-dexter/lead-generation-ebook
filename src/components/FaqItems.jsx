import { CirclePlus, CircleMinus } from "lucide-react";

function FaqItems({ question, expandFAQTabs }) {
  return (
    <div className="flex flex-col gap-2 border-b text-white">
      <div className="mx-5 grid grid-cols-[90fr_10fr] py-5">
        <p>{question.question}</p>
        <button
          className="bg-transparent"
          onClick={() => {
            // setIsOpen((open) => !open);
            expandFAQTabs(question.questionNo, !question.isExpanded);
          }}
        >
          <CirclePlus
            className={`${question.isExpanded ? "hidden" : "flex"} h-5 w-5`}
          />
          <CircleMinus
            className={`${question.isExpanded ? "flex" : "hidden"} h-5 w-5`}
          />
        </button>
      </div>
      <div
        className={`${question.isExpanded ? "block opacity-100" : "hidden opacity-0"} rounded-md bg-[#E0F2F1] px-8 py-4 text-black transition-all duration-200`}
      >
        {question.answer}
        {question.linkNeeded ? (
          <a
            className="ml-2 mr-1 text-lg font-semibold text-[#004D40] transition-all duration-200 hover:-translate-y-1 hover:text-[#00352d] hover:underline hover:underline-offset-2"
            href="#form"
          >
            here.
          </a>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default FaqItems;
