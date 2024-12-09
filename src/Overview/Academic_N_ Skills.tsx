import { FC, useEffect, useRef } from "react";
import education from "../assets/graduation.gif";
import training from "../assets/mentorship.gif";
import experience from "../assets/employer.gif";
import development from "../assets/analytics.gif";
import { RiArrowRightSLine } from "react-icons/ri";
import ApexCharts from "apexcharts";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@radix-ui/react-tooltip";
import { FaRegQuestionCircle } from "react-icons/fa";
import { Card } from "@/components/ui/card";
import "../App.css";
import "animate.css";
import { useNavigate } from "react-router-dom";

const MarketSkills = [
  "Know Your Customer (KYC)",
  "Sales Coordination",
  "Computer Operations",
  "Sales Coordination",
  "Computer Operations",
  "Sales Coordination",
  "Computer Operations",
  "Sales Coordination",
  "Computer Operations",
  "User Experience (UX) Design",
];

const Academic: FC = () => {
  const chartRef = useRef(null);
  const navigate = useNavigate();
  useEffect(() => {
    const options = {
      series: [7, 10 - 7],
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
                fontWeight: "700",
                color: "#323336",
                offsetY: 5,
              },
              total: {
                show: true,
                fontSize: "20px",
                fontWeight: "700",
                color: "#323336",
                formatter: () => `${7}`,
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
  }, []);
  return (
    <div className="px-2 mb-3">
      <div className="w-full mt-3">
        <h1 className="text-3xl font-semibold Inter_Bold xl:text-4xl">
          Greetings, Vijay Kulkarni
        </h1>
      </div>
      <div className="w-full h-full mt-4">
        <Card className="flex flex-col w-full min-h-full gap-8 border-none shadow-none lg:flex lg:flex-row">
          <div className="min-h-full lg:w-1/2 animate__animated animate__fadeInLeft ">
            <div className="flex justify-between w-full">
              <h1 className="m-6 text-xl font-semibold text-gray-800">
                Academic
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger className="py-1 mx-2 text-xl font-bold text-gray-700 rounded-full ">
                      <FaRegQuestionCircle />
                    </TooltipTrigger>
                    <TooltipContent className="p-3 bg-black border border-gray-400 rounded-md ">
                      <p className="text-white"> Academic</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </h1>
              <h6
                onClick={() => {}}
                className="m-6 text-lg font-semibold text-purple-600 cursor-pointer"
              >
                See More <RiArrowRightSLine className="inline-flex" />
              </h6>
            </div>

            <Card className="flex flex-col w-full min-h-full gap-4 p-4 border xl:min-h-80 rounded-xl drop-shadow-xl xl:flex-wrap xl:flex-row xl:flex">
              <div className="flex flex-col gap-6 m-1 xl:flex xl:flex-row ">
                <div className="flex justify-between w-full h-full p-2 border border-purple-600 rounded-xl xl:w-1/2">
                  <div className="w-1/2 px-4">
                    <img
                      src={education}
                      className="w-4/5 h-[80%] bg-white rounded-xl"
                      alt=""
                    />
                  </div>
                  <div className="flex flex-col items-center justify-around w-1/2 text-purple-500">
                    <h1 className="text-lg font-bold text-black">Education</h1>
                    <h3 className="text-lg font-bold">B.Com</h3>
                    <h4 className="text-sm font-semibold">
                      Semester 6, CGPA: 0
                    </h4>
                  </div>
                </div>

                <div className="flex justify-between w-full h-full p-4 border border-purple-600 rounded-xl xl:w-1/2">
                  <div className="w-1/2 px-4">
                    <img
                      src={training}
                      className="w-4/5h-[80%] bg-white rounded-xl"
                      alt=""
                    />
                  </div>
                  <div className="flex flex-col items-center justify-around w-3/4 text-purple-500">
                    <h1 className="text-lg font-bold text-black">Training</h1>
                    <h3 className="text-lg font-bold">0</h3>
                    {/* <h4 className="text-lg font-bold">Semester 6, CGPA: 0</h4> */}
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-6 m-1 xl:flex xl:flex-row">
                <div className="flex justify-between w-full h-full p-4 border border-purple-600 rounded-xl xl:w-1/2">
                  <div className="w-1/2 px-4">
                    <img
                      src={experience}
                      className="w-4/5 h-[80%] bg-white rounded-xl"
                      alt=""
                    />
                  </div>
                  <div className="flex flex-col items-center justify-around w-3/4 text-purple-500">
                    <h1 className="text-lg font-bold text-black">Experience</h1>
                    <h3 className="text-lg font-bold">0</h3>
                    {/* <h4 className="text-lg font-bold">Semester 6, CGPA: 0</h4> */}
                  </div>
                </div>

                <div className="flex justify-between w-full h-full px-2 py-4 border border-purple-600 rounded-xl xl:w-1/2 ">
                  <div className="w-1/2 px-4">
                    <img
                      src={development}
                      className="w-4/5 h-[80%] bg-white rounded-xl"
                      alt=""
                    />
                  </div>
                  <div className="flex flex-col items-center justify-around w-1/2 text-purple-500">
                    <h1 className="text-lg font-bold text-black">
                      Development
                    </h1>
                    <h3 className="text-lg font-bold">0</h3>
                    {/* <h4 className="text-lg font-bold">Semester 6, CGPA: 0</h4> */}
                  </div>
                </div>
              </div>
            </Card>
          </div>
          <div className="h-full lg:w-1/2 animate__animated animate__repeat-1 animate__fadeInRight">
            <div className="flex justify-between w-full">
              <h1 className="m-6 text-xl font-semibold text-gray-800">
                Skills
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger className="py-1 mx-2 text-xl font-bold text-gray-700 rounded-full ">
                      <FaRegQuestionCircle />
                    </TooltipTrigger>
                    <TooltipContent className="p-3 bg-black border border-gray-400 rounded-md ">
                      <p className="text-white"> Skills</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </h1>
              <h6
                onClick={() => navigate("/skills")}
                className="m-6 text-lg font-semibold text-purple-600 cursor-pointer"
              >
                See More <RiArrowRightSLine className="inline-flex" />
              </h6>
            </div>
            <Card className="flex flex-col w-full h-full gap-4 p-4 border xl:min-h-80 rounded-xl drop-shadow-xl ">
              <div className="flex flex-col gap-4 px-4">
                <h2 className="text-xl font-normal text-gray-800">
                  Market Skills
                </h2>
                <div className="flex flex-wrap gap-3 overflow-y-scroll scroll-smooth scrollableContent max-h-24">
                  {MarketSkills?.map((skill, index) => (
                    <span
                      key={index}
                      className="px-4 py-1 mt-1 mr-2 text-lg font-medium text-purple-600 bg-purple-100 border-purple-600 rounded-md borer"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-3 p-4">
                  <Card className="flex flex-col justify-center h-full min-w-full gap-2 px-6 xl:flex-row">
                    <div className="flex flex-wrap items-center w-full gap-18">
                      <div className="inline-block " ref={chartRef}></div>
                      <div className="flex flex-col ">
                        <h1 className="text-2xl font-semibold">
                          Your Skill Index
                        </h1>
                        <h1 className="text-lg font-light">7 Out of 10</h1>
                      </div>
                    </div>
                    <div className="w-1/4 p-3">
                      <h1 className="text-2xl font-semibold text-center text-purple-600 bg-purple-100 rounded-2xl">
                        {7}
                      </h1>
                    </div>
                  </Card>
                  {/* <div className="w-12 h-12 px-6 py-1 mr-2 text-lg font-medium text-purple-600 bg-purple-300 border-purple-600 rounded-md borer"></div> */}
                </div>
              </div>
            </Card>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Academic;
