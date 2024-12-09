import {
  Tooltip,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { TooltipContent } from "@radix-ui/react-tooltip";
import { FC, useEffect, useRef, useState } from "react";
import { FaRegQuestionCircle } from "react-icons/fa";
import ApexCharts from "apexcharts";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Separator } from "@/components/ui/separator";
import "../App.css"
import EmpIndexGraph from "./EmpIndexGraph";




const overallSkillGap = 40;

const Topskills = [
  "Communication Skills",
  "Customer Service",
  "Time Management",
  "Accounting",
  "Financial Analysis",
  "Microsoft Office",
  "Problem Solving",
  "Communication",
  "Sales",
  "Taxation",
];

const MissingSkills = [
  "Analytical Skills",
  "Presentation Skills",
  "Legal Ethics",
];

const Acquiredskills = [
  "Client Relationship Management",
  "Equity Research",
  "SEO",
  "Banking",
  "Finance",
  "Consulting",
  "Investment Research",
  "Microsoft Office",
  "Operations Management",
  "Web Analytics",
  "Business Administration",
  "Financial Regulations",
  "Excel",
  "Administrative Skills",
  "Financial Compliance",
  "Business Law",
  "Office Management",
  "Accounting",
  "Communication Skills",
  "Project Management",
];

const empIndexGraph = [
  { sem: "Semester 1", empIndex: 8.5 },
  { sem: "Semester 2", empIndex: 7.2 },
  { sem: "Semester 3", empIndex: 6.0 },
  { sem: "Semester 4", empIndex: 9.1 },
  { sem: "Semester 5", empIndex: 7.8 },
];

  const isMobile = window.innerWidth < 768;


const Subject_Progression: FC = () => {
  const [showSkillGap, setShowSkillGap] = useState("Graph");
  const chartRef = useRef<HTMLDivElement | null>(null);
  const chartInstanceRef = useRef<ApexCharts | null>(null);

  useEffect(() => {
    // Clean up the existing chart instance before creating a new one
    if (chartInstanceRef.current) {
      chartInstanceRef.current.destroy();
      chartInstanceRef.current = null;
    }

    if (showSkillGap === "Graph" && chartRef.current) {
      const options = {
        series: [
          parseFloat((100 - overallSkillGap).toFixed(2)),
          overallSkillGap,
        ],
        chart: {
          type: "donut",
        },
        plotOptions: {
          pie: {
            donut: {
              size: "60%",
              labels: {
                show: true,
                name: {
                  show: true,
                  offsetY: -10,
                },
                value: {
                  show: true,
                  fontSize: "24px",
                  fontWeight: "bold",
                  color: "#000",
                  offsetY: 10,
                  formatter: (val) => `${val}%`,
                },
                total: {
                  show: true,
                  label: "Acquired",
                  fontSize: "15px",
                  color: "#000",
                  formatter: () =>
                    `${parseFloat((100 - overallSkillGap).toFixed(2))}%`,
                },
              },
            },
          },
        },
        dataLabels: {
          enabled: false,
        },
        colors: ["#9D4EDD", "#E5E5E5"],
        labels: ["Acquired", "Missing"],
        legend: {
          show: false,
          position: "bottom",
          horizontalAlign: "center",
        },
        tooltip: {
          enabled: true,
        },
        states: {
          hover: {
            filter: {
              type: "none",
            },
          },
        },
      };

      // Create and render the new chart instance
      const chart = new ApexCharts(chartRef.current, options);
      chart.render();
      chartInstanceRef.current = chart;
    }

    // Cleanup when the component unmounts
    return () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
        chartInstanceRef.current = null;
      }
    };
  }, [overallSkillGap, showSkillGap]);

  return (
    <div className="w-full h-full ">
      <div className="flex flex-col w-full h-full gap-6 px-0 md:justify-between md:flex-row">
        <div className="md:w-[30%] min-h-[60%] py-6  ">
          <h1 className="py-3 text-lg font-bold text-gray-800 md:text-xl">
            Skill Related to Subjects
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger className="py-1 mx-2 text-xl font-bold text-gray-700 rounded-full ">
                  <FaRegQuestionCircle />
                </TooltipTrigger>
                <TooltipContent className="p-2 bg-black border border-gray-400 rounded-md ">
                  <p className="text-lg text-white">Scheme Eligibility</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </h1>
          <div className="w-full h-full border border-gray-200 shadow-xl rounded-2xl">
            <div className="p-4">
              <p className="text-xl font-normal">Subjects</p>
              {/* student Subject */}
              <h1 className="text-2xl font-bold ">B.Com</h1>
            </div>
            <Separator className="my-2" />
            <div className="px-4">
              <p className="p-4 text-xl font-normal"> Top Skills</p>
              <div className="flex flex-wrap w-full ">
                {Topskills?.map((skill, index) => (
                  <p
                    className="px-2 py-1 m-2 text-lg font-semibold border border-gray-300 rounded-xl bg-purple-50 w-fit hover:border-blue-700"
                    key={index}
                  >
                    {skill}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="md:w-[70%] min-h-[60%] py-6">
          <h1 className="py-3 text-lg font-bold text-gray-800 md:text-xl">
            Employability Progression & Skill Gap
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger className="py-1 mx-2 text-xl font-bold text-gray-700 rounded-full ">
                  <FaRegQuestionCircle />
                </TooltipTrigger>
                <TooltipContent className="p-2 bg-black border border-gray-400 rounded-md ">
                  <p className="text-lg text-white">Scheme Eligibility</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </h1>
          <div className="w-full h-full border border-gray-200 shadow-xl rounded-2xl">
            <div className="flex flex-col justify-between w-full gap-4 p-6 lg:flex-row">
              <div className="w-full  lg:w-[60%]">
                {/* <div className="px-4">
                  <p className="text-xl font-normal">Current Semester</p>
                  <h1 className="text-2xl font-bold font-">Semester 6</h1>
                </div> */}
                <div className="w-full ">
                  <EmpIndexGraph />
                </div>
              </div>
              <div className="lg:w-[35%] border border-gray-300 rounded-xl">
                <div className="flex flex-col gap-2 px-2 py-1">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <div className="flex justify-end">
                        <Button
                          variant="ghost"
                          className="items-end inline-block bg-purple-300 border border-purple-500 outline-none w-fit hover:outline-none "
                        >
                          {showSkillGap}
                        </Button>
                      </div>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-40">
                      <DropdownMenuItem onClick={() => setShowSkillGap("List")}>
                        <span>List</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        onClick={() => setShowSkillGap("Graph")}
                      >
                        <span>Graph</span>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                  {showSkillGap === "Graph" && (
                    <div
                      id="chart"
                      className="w-[70%] mx-auto h-1/2"
                      ref={chartRef}
                    ></div>
                  )}
                  {showSkillGap === "List" && (
                    <div className="w-full">
                      <div className="px-1">
                        <p className="-mt-6 text-xl font-semibold">
                          Acquired Skills
                        </p>
                        <div className="flex flex-wrap w-full overflow-y-auto max-h-48 scrollableContent scroll-smooth ">
                          {Acquiredskills?.map((skill, index) => (
                            <p
                              className="p-1 m-2 text-base font-semibold border border-gray-300 p rounded-xl bg-purple-50 w-fit hover:border-blue-700"
                              key={index}
                            >
                              {skill}
                            </p>
                          ))}
                        </div>
                      </div>
                      <div className="px-1 mt-6">
                        <p className="p-1 text-xl font-semibold -">
                          Missing Skills
                        </p>
                        <div className="flex flex-wrap justify-start w-full overflow-y-auto max-h-48 min-h-40 scrollableContent scroll-smooth">
                          {MissingSkills?.map((skill, index) => (
                            <p
                              className="p-1 m-1 text-base font-normal border border-gray-300 rounded-xl bg-purple-50 w-fit h-fit hover:border-blue-700"
                              key={index}
                            >
                              {skill}
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                <div className="flex flex-col gap-4">
                  <h6 className="mt-3 text-lg font-bold text-center text-gray-800">
                    Market Skill Gap
                  </h6>
                  <p className="p-2 text-base font-normal text-gray-600">
                    In that showing acquired of skills related to this student.
                  </p>
                  <Separator className="my-4" />
                  <p className="text-base font-semibold text-center text-gray-600 ">
                    <div className="inline-flex w-4 h-4 bg-purple-600 rounded-full"></div>
                    Acquired Skill
                  </p>
                  <p className="text-base font-semibold text-center text-gray-600 ">
                    <div className="inline-flex w-4 h-4 bg-gray-300 rounded-full"></div>
                    Missing Skill
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subject_Progression;
