import { FC } from "react";
import { Card } from "@/components/ui/card";
import userprofle from "../assets/userprofile.png";
import { GiProgression } from "react-icons/gi";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@radix-ui/react-tooltip";

import { Col, Row } from "react-bootstrap";
import { PiGenderMaleBold } from "react-icons/pi";
import JobListContainer from "./JobCard";
import { FaRegQuestionCircle } from "react-icons/fa";

const CareerPathJobListing: FC = () => {
  // const [selectedJobData, setSelectedJobData] = useState("");


  

  return (
    <div className="w-full h-full ">
      <h1 className="text-base font-semibold md:px-2 md:my-1 md:text-2xl">
        Job Based on Aspired Career Path
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger className="mx-2 text-xl font-bold text-gray-700 rounded-full ">
              <FaRegQuestionCircle />
            </TooltipTrigger>
            <TooltipContent className="p-3 bg-black border border-gray-400 rounded-md ">
              <p className="text-base text-white md:text-lg">
                {" "}
                Job Based on Aspired Career Path
              </p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </h1>
      <Card className="p-8 mt-4 border rounded-2xl">
        <div className="flex flex-wrap justify-between gap-4 p-4 border shadow-sm rounded-2xl align-items-center">
          {/* Profile Picture */}
          <div>
            <div className="flex flex-col items-center justify-start gap-6 lg:gap-12 lg:flex-row citems-center md:gap-12 md:p-6 rounded-2xl ">
              <div className="flex justify-end w-full mb-4 md:justify-normal md:w-fit lg:mb-0">
                <img
                  src={userprofle}
                  alt="avatar"
                  className="w-16 rounded-full h-w-16 lg:w-28 lg:h-28"
                />
              </div>

              {/* Name and Course */}
              <div
              
                className="w-full text-start lg:w-fit"
              >
                <p className="mb-1 text-xl font-bold">KARTHIK KANAVALLI</p>
                <p className="text-lg font-light">B.Tech Computer Science</p>
              </div>

              {/* Industry */}
              <div
              
                className="w-full text-start lg:w-fit"
              >
                <div className="flex items-center justify-start gap-2 lg:mb-1">
                  <GiProgression
                    size={24}
                    className="text-gray-700 text-start "
                  />
                  <span className="text-lg font-bold">Industry</span>
                </div>
                <p className="text-lg font-light">Accounting / Auditing</p>
              </div>

              {/* Role */}
              <div
              
                className="w-full text-start lg:w-fit"
              >
                <div className="flex items-center justify-start gap-2 lg:mb-1">
                  <PiGenderMaleBold
                    size={24}
                    className="text-gray-700 text-start"
                  />
                  <span className="text-lg font-bold">Role</span>
                </div>
                <p className="text-lg font-light text-start">
                  Associate - Specialized Services
                </p>
              </div>
            </div>
          </div>

          {/* Change Button */}
          <div className="flex items-center justify-end w-full px-6 lg:w-fit ">
            <button
              className="text-lg font-semibold text-red-600 underline text-end"
              // Add your click handler
            >
              Change
            </button>
          </div>
        </div>

        {/* {selectedJobUi} */}
        <JobListContainer />
      </Card>
      <div className="w-[100%] h-full  p-2"></div>
    </div>
  );
};

export default CareerPathJobListing;
