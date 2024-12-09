import { Separator } from "@/components/ui/separator";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Award, List, Presentation } from "lucide-react";
import { FC } from "react"
import {  FaRegQuestionCircle } from "react-icons/fa";

interface skilldetailsType{
  cerficications:number,
  course_linked_skills:number,
  market_skills:number
}



const skillDetials : skilldetailsType = {
  cerficications:0,
  course_linked_skills: 106,
  market_skills:74
}


const Skill_Map:FC  = () => {
  return (
    <div className="w-full h-full mt-2">
      <h1 className="py-6 font-semibold text-gray-800 md:text-2xl">
        Skill Map
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
      <div className="flex flex-col justify-between w-full h-full gap-8 py-2 lg:flex-row">
        <div className="h-48 px-6 border border-gray-200 shadow-lg lg:w-1/3 rounded-xl">
          <div className="flex justify-start w-full gap-6 my-6 text-2xl font-semibold text-gray-800 ">
            <span>
              <List className="inline-flex w-12 h-12 px-2 text-4xl text-orange-700 bg-orange-200 rounded-lg text-start" />{" "}
            </span>
            Academic Linked Skills
          </div>
          <Separator className="bg-gray-300" />
          <h1 className="py-4 text-4xl font-semibold text-gray-800">
            {skillDetials.course_linked_skills}
          </h1>
        </div>
        <div className="h-48 px-6 border border-gray-200 shadow-lg lg:w-1/3 rounded-xl">
          <div className="flex justify-start w-full gap-6 my-6 text-2xl font-semibold text-gray-800 ">
            <span>
              <Presentation className="inline-flex w-12 h-12 px-2 text-4xl text-blue-700 bg-blue-200 rounded-lg text-start" />{" "}
            </span>
            Market Skills
          </div>
          <Separator className="bg-gray-300" />
          <h1 className="py-4 text-4xl font-semibold text-gray-800">
            {skillDetials.market_skills}
          </h1>
        </div>
        <div className="h-48 px-6 border border-gray-200 shadow-lg lg:w-1/3 rounded-xl">
          <div className="flex justify-start w-full gap-6 my-6 text-2xl font-semibold text-gray-800 ">
            <span>
              <Award className="inline-flex w-12 h-12 px-2 text-4xl text-green-700 bg-green-200 rounded-lg text-start" />{" "}
            </span>
            Certifications
          </div>
          <Separator className="bg-gray-300" />
          <h1 className="py-4 text-4xl font-semibold text-gray-800">
            {skillDetials.cerficications}
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Skill_Map