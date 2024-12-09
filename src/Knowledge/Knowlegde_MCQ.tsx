import { CardContent, CardTitle } from "@/components/ui/card";
import { Calculator, Calendar } from "lucide-react";
import { FC, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IoIosArrowDropup } from "react-icons/io";
import { IoIosArrowDropdown } from "react-icons/io";

interface KnowledgeMCQProps {
  news: {
    _id: string;
    course: string;
    category: string;
    createdAt: string;
    publishedAt: string;
    sourceURL: string;
    tags: string[];
    title: string;
    knowledge: {
      summary: string;
      skills: string[];
    };
    mcq: {
      question: string;
      answers: string[];
      correct_answer: string;
      _id: string;
    }[];
  };
}

const Knowlegde_MCQ: FC<KnowledgeMCQProps> = ({ news }) => {
  const [data, setData] = useState<[]>([]);
  const [expanded, setExpanded] = useState<{ [key: number]: boolean }>({});
  const [summaryHidden, setSummaryHidden] = useState(false);
  const [selectedAnswers, setSelectedAnswers] = useState<{
    [key: string]: string | null;
  }>({});

  const handleAnswerClick = (questionId: string, selectedAnswer: string) => {
    // Prevent changes once an answer is selected
    if (selectedAnswers[questionId]) return;

    setSelectedAnswers((prev) => ({
      ...prev,
      [questionId]: selectedAnswer,
    }));
  };

  useEffect(() => {
    let correctAnswersCount = 0;
    const correctAnswersList: { questionId: string; answer: string }[] = [];

    Object.entries(selectedAnswers).forEach(([questionId, selectedAnswer]) => {
      const mcq = news.mcq.find((mcq) => mcq._id === questionId);
      if (mcq && mcq.correct_answer === selectedAnswer) {
        correctAnswersCount += 1;
        correctAnswersList.push({ questionId, answer: selectedAnswer });
      }
    });

    // Log the count and correct answers list
    console.log("Correct Answers Count:", correctAnswersCount);
    console.log("Correct Answers List:", correctAnswersList);
  }, [selectedAnswers, news.mcq]);

  return (
    <div className="relative flex flex-col gap-4 px-6 py-4 rounded-md">
      {/* news card */}
      <div className="relative flex flex-col gap-4 py-4 rounded-md">
        {/* {data.map((item) => ( */}
        <div
          key={news?._id}
          className="flex flex-col gap-6 p-4 border border-gray-300 rounded-lg shadow-s"
        >
          <div className="flex lg:justify-between ">
            <CardTitle className="font-semibold">{news?.title} </CardTitle>
            {/* <div>
                <Sheet>
                  <SheetTrigger asChild>
                    <Button
                      variant="outline"
                      className="text-lg font-medium text-purple-500"
                    >
                      View Summary
                    </Button>
                  </SheetTrigger>
                  <SheetContent className="lg:min-w-[60%] min-w-[100%] lg:p-10 p-6 ">
                    <SheetHeader>
                      <SheetTitle className="w-full p-0 m-0 text-lg lg:text-4xl">
                        What am I learning?
                      </SheetTitle>
                    </SheetHeader>
                    <div className="w-full mt-8"></div>
                    <SheetFooter></SheetFooter>
                  </SheetContent>
                </Sheet>
              </div> */}
          </div>
          {/* <CardContent className="p-0 mt-2 text-gray-600">
            {expanded[news._id]
              ? news.knowledge.summary
              : news.knowledge.summary.slice(0, 200) + "..."}
            <button
              className="text-blue-500 hover:underline"
              onClick={() =>
                setExpanded((prevState) => ({
                  ...prevState,
                  [news._id]: !prevState[news._id],
                }))
              }
            >
              {expanded[news._id] ? "Show Less" : "Show More"}
            </button>
          </CardContent> */}
          <div className="flex justify-end w-full">
            {/* <Link
              to={news.sourceURL}
              className="text-lg font-semibold text-purple-500 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Source link
            </Link> */}
            <div className="flex justify-end">
              <p className="text-lg text-gray-500 text-end">
                <Calendar className="inline" />
                {new Date(news.publishedAt).toLocaleDateString()}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* summary toggle */}
      <div className="flex flex-col w-full gap-3">
        <h2 className="my-2 text-2xl font-semibold">
          Summary
          {summaryHidden ? (
            <IoIosArrowDropdown
              className="inline-flex m-2 mb-3 text-2xl font-semibold "
              onClick={() => setSummaryHidden(false)}
            />
          ) : (
            <IoIosArrowDropup
              className="inline-flex m-2 mb-3 text-2xl font-semibold"
              onClick={() => setSummaryHidden(true)}
            />
          )}
        </h2>
        <div
          className={`overflow-hidden transition-all tracking-wide font-semibold text-lg duration-500 ease-in-out text-justify  ${
            summaryHidden ? "max-h-0" : "max-h-screen"
          }`}
        >
          <p className="text-base text-gray-800">{news.knowledge.summary}</p>
          <h3 className="my-2 text-lg font-semibold">Skills</h3>
          <div className="flex flex-wrap gap-2">
            {news.knowledge.skills.map((skill, index) => (
              <p
                key={index}
                className="inline-block p-4  bg-gray-100 rounded-full w-fit ms-3 text-lg font-semibold"
              >
                {skill}
              </p>
            ))}
          </div>
          <div className="flex flex-col gap-3">
            <h3 className="my-2 text-xl font-semibold">Sources</h3>
            <div className="flex justify-start">
              <p className="inline-block w-48 text-lg font-normal ">
                Source Link -{" "}
              </p>
              <Link
                to={news.sourceURL}
                className="text-lg font-semibold text-purple-500 underline"
              >
                {news.sourceURL}
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Quiz  */}
      <div className="w-full mt-3">
        <h1 className="my-2 text-2xl font-semibold">Test My Knowledge</h1>
        {news?.mcq?.length > 0 ? (
          <div className="flex flex-col gap-4 p-4 border border-gray-200 rounded-lg">
            {news?.mcq?.map((mcq, index) => {
              if (mcq.question && mcq.answers.length > 0) {
                const questionId = mcq._id;
                const selectedAnswer = selectedAnswers[questionId];
                

                return (
                  <div key={questionId} className="p-4 mt-4 rounded-lg">
                    <p className="text-lg font-medium">
                      <span className="font-bold me-3">{index}</span>
                      {mcq.question}
                    </p>
                    <ul className="flex flex-col gap-4 mt-2 ms-2">
                      {mcq.answers.map((answer, idx) => {
                        const letter = String.fromCharCode(97 + idx);
                        const isCorrect = mcq.correct_answer === answer;
                        const isSelected = selectedAnswer === answer;

                        let bgColor = "bg-gray-100"; // Default background color

                        if (selectedAnswer) {
                          if (isCorrect) bgColor = "bg-green-200"; // Correct answer turns green
                          if (isSelected && !isCorrect) bgColor = "bg-red-200"; // Wrong selected answer turns red
                        }

                        return (
                          <li
                            key={idx}
                            className={`inline-flex px-4 py-2 text-lg list-none rounded-2xl w-fit cursor-pointer font-semibold ${bgColor}`}
                            onClick={() =>
                              handleAnswerClick(questionId, answer)
                            }
                          >
                            <span className="text-lg font-semibold text-black me-2">
                              {letter}.
                            </span>
                            {answer}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                );
              } else {
                return null; // If there's no question or no answers, don't render anything
              }
            })}
          </div>
        ) : (
          <div className="flex flex-col gap-4 p-4 border border-gray-200 rounded-lg">
            <p className="text-lg text-red-500">No question available</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Knowlegde_MCQ;
