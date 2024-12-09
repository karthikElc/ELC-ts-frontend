
import GaugeChart from "@/components/GaugeChart";
import { Card } from "@/components/ui/card";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@radix-ui/react-tooltip";
import { FC } from "react";
import { FaRegQuestionCircle } from "react-icons/fa";






const EmployabilityIndex: FC = () => {
  let url = "https://test.elcarreira.com/employability/getCareerMap?studentId=67399b628e54b5308e57059a"
  
  let fetchdata = async () => {
    let response =  await fetch(url);
    let data =  await response.json();

    console.log(data);
  }
    fetchdata();
  

  
  return (
    <div className="p-4">
      <h1 className="m-6 text-lg font-bold text-gray-800 sm:text-2xl">
        Employability Index
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger className="py-1 mx-2 text-xl font-bold text-gray-700 rounded-full ">
              <FaRegQuestionCircle />
            </TooltipTrigger>
            <TooltipContent className="p-3 bg-black border border-gray-400 rounded-md ">
              <p className="text-white"> Employability Index</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </h1>
      <Card className="flex flex-col w-full h-full p-4 shadow-xl rounded-xl shadow-b-2 sm:flex sm:flex-row">
        <div className="flex flex-col gap-4 p-4 sm:w-2/3 min-h-32">
          <div className="w-full p-6 border-2 border-purple-300 rounded-2xl bg-purple-50 min-h-32">
            <h3 className="text-xl font-medium text-purple-600 ">
              Employability Index
            </h3>
            <div className="flex items-center justify-between">
              <p className="text-xl text-gray-400">
                You can track your Employability Index here.
              </p>
              <Card className="px-3 py-2 font-bold shadow-md sm:w-30 sm:h-12 sm:px-6 sm:py-2 sm:text-xl bg-purple-50 w-fit shadow-gray-400 rounded-3xl">
                {70}%
              </Card>
            </div>
          </div>
          <div className="flex flex-wrap justify-around w-full sm:gap-8 sm:p-4 sm:flex-wrap sm:flex-row sm:min-h-32">
            <p className="sm:mx-10">
              <span className="text-2xl font-bold text-red-600 rounded-full">
                ●
              </span>
              Need Improvement
            </p>
            <p className="sm:mx-10">
              <span className="text-2xl font-bold text-orange-300 rounded-full">
                ●
              </span>
              Developing
            </p>
            <p className="sm:mx-10">
              <span className="text-2xl font-bold text-yellow-300 rounded-full">
                ●
              </span>
              Sharpening
            </p>
            <p className="sm:mx-10">
              <span className="text-2xl font-bold text-green-300 rounded-full">
                ●
              </span>
              Good Progress
            </p>
            <p className="sm:mx-10">
              <span className="text-2xl font-bold text-green-600 rounded-full">
                ●
              </span>
              Employable
            </p>
          </div>
        </div>
        <div className="w-full h-full min-h-48 sm:w-1/3">
          <GaugeChart />
        </div>
      </Card>
    </div>
  );
};

export default EmployabilityIndex;
