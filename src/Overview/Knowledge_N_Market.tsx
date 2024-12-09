import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { FC, useEffect, useRef, useState } from "react";
import { FaRegQuestionCircle } from "react-icons/fa";
import {
  RiArrowRightSLine,
  RiFootballLine,
  RiOpenArmLine,
  RiUserSmileLine,
} from "react-icons/ri";
import Knowledge from "../pages/Knowledge";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { Link, Links, useNavigate, data } from 'react-router-dom';
import ApexCharts from "apexcharts";
import { Button } from "@/components/ui/button";
import { GiProgression } from "react-icons/gi";
import { Separator } from "@/components/ui/separator";
import JobTrendGraph from "./JobTrendGraph";

const KnowledgeIndex = 0;
const skills = [
  "Accounts",
  "Trial Balance",
  "Accounting",
  "Finance",
  "Fresher",
  "Accountant",
  "Bank Reconciliation",
  "Balance Sheet",
];

interface KnowledgeItem {
  headline: string;
  description: string;
  date: string; // ISO 8601 string format for dates
  link: string;
}

interface KnowledgeData {
  knowledgeIndex: string;
  knowledgeItem: KnowledgeItem;
}

const sampledata = {
  skillInDemand: [
    "Financial statements",
    "Due diligence",
    "Financial reporting",
    "Financial analysis",
    "Consulting",
    "Cash flow",
    "Risk management",
    "Credit rating",
  ],
  exitingCareerOpportunity:
    "Assurance - Financial Markets - Structured Finance - Associate",
  leadingEmployer: "Pricewaterhouse Coopers Private Limited",
  jobOfTheWeek:
    "Pricewaterhouse Coopers Private Limited, Maximum Salary 2750000",
  jobURL:
    "https://www.naukri.com/job-listings-assurance-financial-markets-structured-finance-associate-pricewaterhouse-coopers-private-limited-kolkata-hyderabad-bengaluru-0-to-2-years-291024502566",
  jobTrends: [
    {
      name: 30,
      numJobs: 7,
      value: 26,
    },
  ],
};

// const jobTrends= [
//   {
//     "name": 30,
//     "numJobs": 20,
//     "value": 150
//   }
// ]
const isTabletOrMobile = window.innerWidth < 768;
let tempIndex: number = 0;
const Knowledge_N_Market: FC = () => {
  const [MarketDetials, setMarketDetials] = useState(sampledata);
  const [KnowledgeIndex, setKnowledgeIndex] = useState < KnowledgeData>({});
  const [activeTab, setActiveTab] = useState("list");
  const chartRef = useRef(null);
  const navigate = useNavigate();

  const fetchMarketDetials = async () => {
    const response = await fetch(
      "https://test.elcarreira.com/overview/getMarketDetails?studentId=67399b628e54b5308e57059a",
      {
        method: "GET",
      }
    );
    const result = await response.json();
    // console.log(result.data);
    setMarketDetials(result.data);
  };
  
  const fetchingKnowledgeIndex = async () => { 
    const response = await fetch("https://test.elcarreira.com/overview/getKnowledgeDetails?studentId=67399b628e54b5308e57059a",{
      method: "GET",
    });
    const result = await response.json();
    // console.log(result);
    setKnowledgeIndex(result);
  }
  console.log(KnowledgeIndex.knowledgeIndex);
  
  tempIndex = parseFloat(KnowledgeIndex.knowledgeIndex).toFixed(1);
  
  // console.log( typeof tempIndex);

  useEffect(() => {
    fetchMarketDetials();
    fetchingKnowledgeIndex();
  }, [tempIndex]);

  useEffect(() => {
    
    // const tempIndex = parseFloat(parseFloat(KnowledgeIndex.knowledgeIndex)?.toFixed(1));
    // const Index = parseFloat(parseFloat(KnowledgeIndex.knowledgeIndex)?.toFixed(0))
    // const knowledgeIndexNumber = parseFloat(
    //   KnowledgeIndex.knowledgeIndex
    // );
    let Index = (typeof tempIndex === "string") ? parseFloat(tempIndex) : tempIndex;
    console.log(typeof Index);
    
    // console.log(knowledgeIndexNumber);
    const options = {
      series: [Index, 10 - Index],
      chart: {
        type: "donut",
        width: "120px", // Adjust the width to desired size
      },
      plotOptions: {
        pie: {
          donut: {
            size: "65%",
            labels: {
              show: true,
              name: {
                show: false,
                offsetY: -10,
              },
              value: {
                show: true,
                fontSize: "20px",
                fontWeight: "600",
                color: "#323336",
                offsetY: 10,
              },
              total: {
                show: true,
                fontSize: "20px",
                fontWeight: "700",
                color: "#red",
                formatter: () => `${Index}%`,
              },
            },
          },
        },
      },
      dataLabels: {
        enabled: false, // Hide data labels
      },
      colors: ["#9D4EDD", "#F1F1F1"],
      legend: {
        show: false,
        position: "bottom",
        horizontalAlign: "center",
      },
      tooltip: {
        enabled: false,
      },
      states: {
        hover: {
          filter: {
            type: "none", // Disable hover effect globally
          },
        },
      },
    };
    const chart = new ApexCharts(chartRef.current, options);
    chart.render();

    return () => {
      chart.destroy(); // Clean up the chart when component unmounts
    };
  }, [tempIndex]);

  return (
    <div>
      <div className="flex flex-col justify-between gap-8 sm:flex-row">
        <div className="h-full sm:w-1/2 sm:h-full sm:min-w-1/2">
          <div className="flex justify-between w-full">
            <h1 className="mt-6 text-2xl font-semibold text-gray-800">
              Knowledge
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger className="py-1 mx-2 text-xl font-bold text-gray-700 rounded-full ">
                    <FaRegQuestionCircle />
                  </TooltipTrigger>
                  <TooltipContent className="p-3 bg-black border border-gray-400 rounded-md ">
                    <p className="text-white"> Knowledge</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </h1>
            <h6
              onClick={() => navigate("/knowledge")}
              className="m-6 text-lg font-semibold text-purple-600 cursor-pointer"
            >
              See More <RiArrowRightSLine className="inline-flex" />
            </h6>
          </div>
          <Card className="w-full h-full shadow-xl rounded-2xl">
            <div className="p-8">
              <CardTitle className="text-base font-bold">
                {KnowledgeIndex?.knowledgeItem?.headline}
             
              </CardTitle>
              <CardContent className="h-32 p-1 mt-3 overflow-y-auto text-gray-400 scrollableContent">
                {KnowledgeIndex?.knowledgeItem?.description}
                
              </CardContent>
              <div className="flex items-center justify-between w-full ">
                <h1 className="text-lg font-semibold text-center text-purple-400">
                  {new Date().toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                  {/* {KnowledgeIndex} */}
                </h1>
                <Link
                  target="_blank"
                  to="https://economictimes.indiatimes.com/wealth/tax/income-tax-dept-issues-faqs-on-pan-2-0-project-check-details-about-applying-for-new-pan-change-pan-number/articleshow/115702815.cms"
                >
                  <h1 className="text-lg font-semibold text-center text-purple-400 underline active:text-purple-900 visited:text-purple-950">
                    Source Link
                  </h1>
                </Link>
              </div>
            </div>
            <Card className="h-full p-6 mx-auto mt-2 mb-8 w-[95%] rounded-2xl ">
              <div className="flex justify-between w-full h-full">
                <div className="flex flex-wrap items-center w-full gap-20 min-w-40 min-h-20">
                  <div
                    className="inline-block w-8 h-8 sm:h-8"
                    ref={chartRef}
                  ></div>
                  <div className="flex flex-col ">
                    <h1 className="text-2xl font-semibold">
                      Your Knowledge Index
                    </h1>
                    <h1 className="text-lg font-light">{parseFloat(KnowledgeIndex?.knowledgeIndex).toFixed(0) } Out of 10</h1>
                  </div>
                </div>
                <div className="h-full w-i/4">
                  <span className="w-10 h-10 p-3 px-8 text-xl font-bold text-purple-700 rounded-full bg-purple-50">
                    {KnowledgeIndex.knowledgeIndex}
                  </span>
                </div>
              </div>
            </Card>
          </Card>
        </div>
        <div className="h-full min-h-full sm:w-1/2 sm:minw-1/2">
          <div className="flex justify-between w-full">
            <h1 className="mt-6 text-2xl font-semibold text-gray-800">
              Market
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger className="py-1 mx-2 text-xl font-bold text-gray-700 rounded-full ">
                    <FaRegQuestionCircle />
                  </TooltipTrigger>
                  <TooltipContent className="p-3 bg-black border border-gray-400 rounded-md ">
                    <p className="text-white"> Market</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </h1>
            <h6
              onClick={() => navigate("/employability")}
              className="m-6 text-lg font-semibold text-purple-600 cursor-pointer"
            >
              See More <RiArrowRightSLine className="inline-flex" />
            </h6>
          </div>
          <Card className="w-full h-full shadow-xl rounded-2xl ">
            <div className="flex justify-between p-8">
              <h1 className="mt-2 text-2xl font-semibold ">Weekly Trends</h1>
              <div className="flex gap-4">
                {/* Button Group */}
                <Button
                  className={`${
                    activeTab === "list"
                      ? "bg-purple-200 border  border-purple-500 text-purple-800"
                      : "bg-gray-800 text-white"
                  } rounded-md p-4`}
                  onClick={() => setActiveTab("list")}
                >
                  List
                </Button>
                <Button
                  className={`${
                    activeTab === "graph"
                      ? "bg-purple-200 border border-purple-500 text-purple-800"
                      : "bg-gray-800 text-white"
                  } rounded-md p-4`}
                  onClick={() => setActiveTab("graph")}
                >
                  Graph
                </Button>
              </div>
            </div>
            <div className="w-full h-full mt-4">
              {activeTab === "list" && (
                <div className="flex flex-col gap-4 p-4 ">
                  {/* Content for List */}
                  <div className="flex flex-col justify-between w-full gap-4 sm:flex-row">
                    <div className="p-4 border border-purple-600 sm:w-1/2 bg-purple-50 rounded-xl">
                      <div>
                        <RiOpenArmLine className="inline-flex mb-2 text-2xl font-semibold me-2" />
                        <h1 className="inline-flex text-xl font-normal">
                          Skill in Demand
                        </h1>
                        <Separator className="my-2 bg-gray-400" />
                      </div>
                      <div className="flex flex-wrap gap-1 text-base font-semibold">
                        {MarketDetials?.skillInDemand?.map((skill, index) => (
                          <span key={index} className="ms-1">
                            {skill}
                          </span>
                        ))}
                        {/* {data?skillInDemand?.map((skill, index) => (
                          <span key={index} className="mr-2">
                            {skill}
                          </span>
                        ))} */}
                      </div>
                    </div>
                    <div className="p-4 border border-purple-600 sm:w-1/2 bg-purple-50 rounded-xl">
                      <div className="flex flex-wrap justify-start">
                        <GiProgression className="inline-flex mb-2 text-lg font-semibold me-2" />
                        <h1 className="inline-flex text-lg font-normal">
                          Existing Career Opportunities
                        </h1>
                        <Separator className="my-2 bg-gray-300" />
                      </div>
                      <p className="text-lg font-normal">
                        {MarketDetials?.exitingCareerOpportunity}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col justify-between w-full gap-4 sm:flex-row">
                    <div className="p-4 border border-purple-600 sm:w-1/2 bg-purple-50 rounded-xl">
                      <div className="flex flex-wrap justify-start">
                        <RiFootballLine className="inline-flex mb-2 text-xl font-semibold text-pink-500 me-2" />
                        <h1 className="inline-flex text-lg font-normal">
                          Leading Employers Spotlight
                        </h1>
                        <Separator className="my-2 bg-gray-400" />
                      </div>
                      <p className="text-lg font-medium">
                        {MarketDetials?.leadingEmployer}
                      </p>
                    </div>
                    <div className="p-4 border border-purple-600 sm:w-1/2 bg-purple-50 rounded-xl">
                      <div>
                        <RiUserSmileLine className="inline-flex mb-2 text-xl font-semibold text-green-700 me-2" />
                        <h1 className="inline-flex text-lg font-normal">
                          Jobs of the Week
                        </h1>
                        <Link
                          target="_blank"
                          to={MarketDetials?.jobURL}
                          className="inline-flex mb-1 text-lg text-purple-500 underline ms-3 text-end"
                        >
                          Apply Link
                        </Link>
                        <Separator className="my-2 bg-gray-400" />
                      </div>
                      <p className="text-lg font-medium">
                        {MarketDetials?.jobOfTheWeek.split("-").join(" ")}
                      </p>
                    </div>
                  </div>
                </div>
              )}
              {activeTab === "graph" && (
                <div className="p-4 text-white ">
                  {/* Content for Graph */}
                  <JobTrendGraph jobTrends={MarketDetials?.jobTrends} isTabletOrMobile />
                </div>
              )}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Knowledge_N_Market;
