import { Card } from "@/components/ui/card";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { FC, useState } from "react"
import { FaInfoCircle, FaRegQuestionCircle } from "react-icons/fa";





 interface SkillRecommendationType {
  skill: string;
  skillWeight: number;
  description: string;
  importance: string;
  course_link: string;
  provider: string;
  providerLogo: string;
  _id: string;
}


const skillRecommendationData: SkillRecommendationType[] = [
  {
    skill: "Insurance",
    skillWeight: 9,
    description:
      "Insurance is a risk management tool that provides financial protection against unexpected events or losses. It involves the transfer of risk from an individual or entity to an insurance company, which in exchange for a premium, agrees to cover the cost of potential damages or liabilities. The insurance industry encompasses various types of coverage, such as life insurance, health insurance, property insurance, auto insurance, and liability insurance. Insurance professionals are responsible for assessing risks, designing policies, underwriting, claims processing, and ensuring compliance with industry regulations. They utilize actuarial analysis, risk assessment, and customer service skills to provide tailored insurance solutions to individuals and businesses.",
    importance:
      "Insurance is a crucial aspect of personal and business financial planning. It helps individuals and organizations mitigate the financial impact of unexpected events, such as accidents, illnesses, natural disasters, or legal liabilities. By transferring risk, insurance provides peace of mind and financial security, allowing people and businesses to focus on their core activities without the constant worry of potential catastrophic losses. Insurance also plays a vital role in the economy, as it enables individuals and businesses to take calculated risks, invest, and contribute to economic growth. Furthermore, insurance companies are significant institutional investors, providing capital for various industries and infrastructure projects. Ultimately, the importance of insurance lies in its ability to protect assets, safeguard financial stability, and promote economic resilience.",
    course_link: "https://www.coursera.org/learn/insurance-fundamentals",
    provider: "Coursera",
    providerLogo:
      "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera-university-assets/logos/coursera-logo-square.png",
    _id: "67399b8194a05a36d2af72a5",
  },
  {
    skill: "Sales Management",
    skillWeight: 10,
    description:
      "Sales management is the process of leading and directing a sales team to achieve organizational goals. It involves various responsibilities, such as recruiting, training, and motivating sales representatives, setting sales targets and quotas, developing sales strategies, and analyzing sales data to identify opportunities and address challenges. Sales managers are responsible for ensuring that the sales team is equipped with the necessary skills, resources, and support to effectively engage with customers, close deals, and contribute to the overall success of the business. They must possess a deep understanding of the sales process, customer behavior, and market dynamics to make informed decisions and lead their team to success.",
    importance:
      "Sales management is a critical function in any organization that relies on revenue generation through sales. Effective sales management can have a significant impact on a company's bottom line by driving sales growth, improving customer satisfaction, and enhancing the overall competitiveness of the business. Sales managers play a crucial role in aligning the sales team's efforts with the organization's strategic objectives, fostering a high-performing sales culture, and continuously adapting to changing market conditions. Mastering sales management skills can lead to increased sales productivity, better customer relationships, and a more efficient and profitable sales operation. Additionally, strong sales management skills are highly valued in various industries, making it a valuable asset for professionals seeking to advance their careers in sales, marketing, or general management roles.",
    course_link: "https://www.coursera.org/learn/sales-management",
    provider: "Coursera",
    providerLogo:
      "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera-university-assets/university/university_logo_square/university_logo_square_coursera.png",
    _id: "67399b8194a05a36d2af72a6",
  },
  {
    skill: "Investment Advisory",
    skillWeight: 9,
    description:
      "Investment advisory is the professional practice of providing personalized financial guidance and recommendations to clients regarding their investment decisions. This skill involves analyzing a client's financial goals, risk tolerance, and investment time horizon, and then developing a customized investment strategy to help them achieve their financial objectives. Investment advisors typically have expertise in areas such as asset allocation, portfolio management, tax planning, and risk management. They use their knowledge of financial markets, investment products, and economic trends to make informed recommendations and help clients make sound investment choices. The advisory process often includes regular portfolio reviews, performance monitoring, and adjustments to the investment plan as the client's needs or market conditions change.",
    importance:
      "Investment advisory is a crucial skill in the financial services industry, as it helps individuals and organizations effectively manage their wealth and achieve their financial goals. A skilled investment advisor can provide valuable insights and guidance that can lead to improved investment performance, reduced risk, and greater financial security. This skill is particularly important for individuals who lack the time, expertise, or confidence to manage their own investments, as well as for businesses and institutions that need to optimize their investment portfolios. By leveraging the expertise of an investment advisor, clients can make more informed decisions, diversify their investments, and potentially achieve higher returns over the long term. Additionally, investment advisory skills are in high demand, as the need for personalized financial guidance continues to grow in an increasingly complex and volatile investment landscape.",
    course_link: "https://www.coursera.org/learn/investment-management",
    provider: "Coursera",
    providerLogo:
      "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera-university-assets/university/brand/logo/coursera-logo.png",
    _id: "67399b8194a05a36d2af72a7",
  },
  {
    skill: "Equity Trading",
    skillWeight: 10,
    description:
      "Equity trading refers to the buying and selling of shares or stocks in publicly traded companies. It involves understanding financial markets, analyzing company performance, and making informed decisions to generate returns. Equity traders use various strategies, such as fundamental analysis, technical analysis, and portfolio management, to identify undervalued or overvalued stocks and capitalize on market movements. They must also be adept at managing risk, executing trades efficiently, and staying up-to-date with economic and industry trends that can impact stock prices. Equity trading requires a combination of financial knowledge, analytical skills, and market awareness to navigate the complexities of the stock market and make profitable trades.",
    importance:
      "Equity trading is a crucial skill for individuals and institutions looking to grow their wealth and achieve financial goals. It provides an opportunity to participate in the growth of publicly traded companies and benefit from their success. Mastering equity trading can lead to higher returns on investments, diversification of portfolios, and the ability to hedge against market volatility. Additionally, equity trading skills are highly valued in the finance industry, as they are essential for roles such as investment analysts, portfolio managers, and financial advisors. Developing expertise in equity trading can open up a wide range of career opportunities and contribute to personal financial stability and independence. Furthermore, understanding the principles of equity trading can help individuals make more informed decisions about their own investments and retirement planning.",
    course_link:
      "https://www.coursera.org/learn/introduction-to-equity-trading",
    provider: "Coursera",
    providerLogo:
      "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera-university-assets/logos/coursera-logo-square.png",
    _id: "67399b8194a05a36d2af72a8",
  },
  {
    skill: "Insurance Sales",
    skillWeight: 9,
    description:
      "Insurance sales involves the process of selling various types of insurance products to individuals and businesses. This skill encompasses understanding different insurance policies, such as life, health, auto, homeowner's, and business insurance. Insurance sales professionals must be knowledgeable about the features, benefits, and pricing of these products, as well as the specific needs and requirements of their clients. They must be able to effectively communicate the value of insurance coverage, address client concerns, and guide them through the selection and purchase process. Strong interpersonal and negotiation skills are essential, as insurance sales often involve building long-term relationships with clients and tailoring solutions to their unique circumstances.",
    importance:
      "Insurance sales is a critical skill in the financial services industry, as it helps individuals and businesses protect themselves from financial risks and uncertainties. By understanding the client's needs and recommending appropriate insurance coverage, insurance sales professionals play a vital role in safeguarding their clients' financial well-being. This skill is particularly important in today's complex and rapidly changing insurance landscape, where clients require guidance to navigate the various options and make informed decisions. Mastering insurance sales can lead to a rewarding career, as it allows professionals to help others manage their risks, while also generating a stable income through commissions and client retention. Additionally, strong insurance sales skills can be transferable to other financial services roles, such as financial planning and investment advising.",
    course_link: "https://www.udemy.com/course/insurance-sales-training/",
    provider: "Udemy",
    providerLogo:
      "https://www.udemy.com/staticx/udemy/images/v6/logo-coral.svg",
    _id: "67399b8194a05a36d2af72a9",
  },
];


const Skill_Recommendation: FC = () => {
    const[recommendedSkills, setRecommendedSkills] = useState<SkillRecommendationType[]>(skillRecommendationData);
    const [selectedSkill, setSelectedSkill] = useState<string>(recommendedSkills[0].skill);


  return (
    <div className="w-full h-full mb-8">
      <div className="flex w-full h-full ">
        <h1 className="py-3 text-lg font-bold text-gray-800 md:text-2xl w-[35%]">
          Recommended Market Skills
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger className="py-1 mx-2 text-xl font-bold text-gray-700 rounded-full ">
                <FaRegQuestionCircle />
              </TooltipTrigger>
              <TooltipContent className="p-3 bg-black border border-gray-400 rounded-md ">
                <p className="text-white"> Shcema Eligibility</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </h1>
        <h1 className="py-3 px-4  text-lg font-bold text-gray-800 md:text-2xl w-[65%]">
          Skill Details
        </h1>
      </div>
      <div className="flex w-full h-full gap-6 ">
        <Card className="w-[35%] min-h-96 h-full flex flex-col rounded-xl shadow-xl p-2">
          {recommendedSkills.map((skill) => (
            <div
              key={skill._id}
              onClick={() => setSelectedSkill(skill.skill)}
              className={`w-full h-full flex justify-between py-2 px-4 text-lg font-semibold text-gray-800 rounded-md  cursor-pointer ${
                selectedSkill === skill.skill ? "bg-gray-100  " : ""
              }`}
            >
              <h1 className="w-full ">{skill.skill}</h1>
              <span className="inline-block w-full text-gray-600 text-end ">
                {skill.skillWeight}
                <span className="font-bold text-yellow-500 ms-2">★</span>
              </span>
            </div>
          ))}
        </Card>
        <Card className="w-[65%] min-h-full rounded-xl shadow-xl flex px-2">
          <div className="w-full h-full ">
            {recommendedSkills.map(
              (skill) =>
                selectedSkill === skill.skill && (
                  <div
                    key={skill._id}
                    className="flex justify-between w-full h-full px-4 py-6 "
                  >
                    <div className="w-[70%] h-full  max-h-80 overflow-y-auto scrollableContent">
                      <h1 className="my-2 text-xl font-bold text-gray-800">
                        Details
                      </h1>
                      <p className="text-gray-600">{skill.description}</p>
                      <h1 className="my-2 text-xl font-bold text-gray-800">
                        Importance
                      </h1>
                      <p className="text-gray-600">{skill.importance}</p>
                    </div>
                    <div className="w-[30%] flex flex-col items-center justify-center gap-2  ">
                      {/* <p className="text-gray-600">{skill.provider}</p> */}

                      <img
                        src={skill.providerLogo}
                        alt={skill.provider}
                        className="w-10 h-10 rounded-full"
                      />

                      <a
                        href={skill.course_link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                      >
                        View Course
                      </a>
                    </div>
                  </div>
                )
            )}
          </div>
        </Card>
      </div>
    </div>
  );
}

export default Skill_Recommendation