import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { FC, useState } from "react"
import { FaRegQuestionCircle } from "react-icons/fa";
import userprofile from "../assets/userprofile.png";
import SemiCircleProgressBar from "react-progressbar-semicircle";
import "../App.css"
import { Dialog, DialogClose, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { IoIosAddCircleOutline } from "react-icons/io";
import { Separator } from "@/components/ui/separator";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Controller, useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { FaUniversity } from "react-icons/fa";
import { Card } from "@/components/ui/card";
import { data } from "react-router-dom";
import { SelectSeparator } from "@/components/ui/select";
interface usersType {
  name: string;
  course: string;
  percentage: string;
}
const sampleUsers:usersType[] = [
  {
    name: "Lauri Roy",
    course: "B.COM",
    percentage: "90%",
  },
  {
    name: "Sanjay Singh",
    course: "B.COM",
    percentage: "85%",
  },
  {
    name: "Neha Gupta",
    course: "B.COM",
    percentage: "80%",
  },
  {
    name: "Rohan Sharma",
    course: "B.COM",
    percentage: "70%",
  },
]

interface EducationDetails {
  levelOfEducation: string;
  yearOfCompletion: string;
  programme: string;
  specialization: string;
  boardOrUniversity: string;
  institutionName: string;
  markType: "percentage" | "CGPA";
  marks: number;
  outOf?: number;
}

const sampleEducationDetails: EducationDetails[] = [{
  levelOfEducation: "Undergraduate",
  yearOfCompletion: "2024",
  programme: "Bachelor of Commerce",
  specialization: "Economics",
  boardOrUniversity: "Karnataka State Board",
  institutionName: "National College",
  markType: "percentage",
  marks: 82.3,
  
}];


interface skilltype{
  weight: number;
  skill:string
}

const sampleSkills:skillType[]=[
    {
        "weight": 10,
        "skill": "Trade Finance"
    },
    {
        "weight": 10,
        "skill": "GST"
    },
    {
        "weight": 10,
        "skill": "Insolvency"
    },
    {
        "weight": 10,
        "skill": "Stock Market Analysis"
    },
    {
        "weight": 10,
        "skill": "Content Writing"
    },
    {
        "weight": 10,
        "skill": "SEO"
    },
    {
        "weight": 10,
        "skill": "GST Compliance"
    },
    {
        "weight": 10,
        "skill": "Billing"
    },
    {
        "weight": 10,
        "skill": "Telecalling"
    },
    {
        "weight": 10,
        "skill": "XBRL (eXtensible Business Reporting Language)"
    }
]


const Leaderboard: FC = () => {
  const [userEducation, setUserEducation] = useState<EducationDetails[]>(sampleEducationDetails);
  const [users, setUsers] = useState<usersType[]>(sampleUsers);
   const [markType, setMarkType] = useState<string>("percentage");
   const {
     register,
     handleSubmit,
     setValue,
     reset,
     formState: { errors, isSubmitSuccessful },
   } = useForm<EducationDetails>();

const onSubmit=(data: EducationDetails) => {
   console.log("Submitted Data:", {
     ...data,
     markType,
     marks: markType === "percentage" ? data.marks : data.marks,
     outOf: markType === "cgpa" ? data.outOf : undefined,
   });
  reset();
  };

    const handleMarkTypeChange = (type: "percentage" | "CGPA") => {
    setMarkType(type);
    // Reset input fields when switching mark type
    setValue("marks", "");
    setValue("outOf", "");
  };

  
  const years = Array.from(new Array(30), (_, index) => 2024 - index);
  return (
    <div className="w-full h-full ">
      <h1 className="text-lg font-bold text-gray-800 md:text-xl">
        Leaderboard
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger className="py-1 mx-2 text-xl font-bold text-gray-700 rounded-full ">
              <FaRegQuestionCircle />
            </TooltipTrigger>
            <TooltipContent className="p-2 bg-black border border-gray-400 rounded-md ">
              <p className="text-lg text-white">Leaderborad</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </h1>
      <div className="flex items-center justify-center w-full flex-col  min-h-60 max-h-[50%] border rounded-xl shadow-xl ">
        <div className="flex flex-col items-center justify-center w-full mt-6 h-52">
          <img
            src={userprofile}
            className="w-20 h-20 mx-auto rounded-full"
            alt=""
          />
          <h1 className="text-lg font-bold text-center text-gray-700">
            Vijay Kulkarni
          </h1>
          <p className="text-sm text-center text-green-600">150 Points</p>
        </div>

        <div className="flex flex-col justify-between w-full ">
          <div className="flex items-center justify-between w-full px-6">
            <h1 className="w-3/4">Name</h1>
            <h1 className="w-1/4">Points</h1>
          </div>
          <Separator className="inline-flex w-[90%] mx-auto" />
        </div>
        <div className="flex flex-col w-full overflow-y-auto h-60 scrollableContent">
          {users.map((user, index) => (
            <div
              key={index}
              className="flex items-center justify-between w-full px-4 py-2 "
            >
              <div className="flex items-center w-3/4 gap-2 ">
                <p className="text-sm text-gray-600">{index + 1}</p>
                <img src={userprofile} alt="" className="w-6 h-6 mx-2" />
                <p className="text-base font-bold text-gray-700 ">
                  {user.name}
                  <span className="block text-sm font-normal text-gray-500">
                    ({user.course})
                  </span>
                </p>
              </div>
              <div className="relative w-1/4">
                <SemiCircleProgressBar
                  diameter={70}
                  strokeWidth={5}
                  percentage={parseInt(user.percentage)}
                  // showPercentValue
                />
                <span className="absolute text-sm font-bold text-gray-700 transform -translate-x-4 translate-y-1 top-1/2 left-1/2 ">
                  {parseInt(user.percentage)}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col justify-between w-full gap-4 mt-8 ">
        <div className="flex justify-between w-full ">
          <h1 className="font-bold text-gray-800 whitespace-nowrap ">
            Educational Background
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger className="py-1 mx-2 text-xl font-bold text-gray-700 rounded-full ">
                  <FaRegQuestionCircle />
                </TooltipTrigger>
                <TooltipContent className="p-3 bg-black border border-gray-400 rounded-md ">
                  <p className="text-white"> Educational Background</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </h1>
          <Dialog>
            <DialogTrigger asChild>
              <IoIosAddCircleOutline className="w-6 h-6 font-semibold" />
            </DialogTrigger>
            <DialogContent className="w-[90%] md:w-full">
              <DialogHeader>
                <DialogTitle className="w-full my-2 text-lg font-semibold h-fit whitespace-nowrap">
                  Educational Background
                </DialogTitle>
                <Separator className="my-2 " />
              </DialogHeader>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="py-4 space-y-4"
              >
                <p className="text-sm text-gray-500">
                  Fill all the details to add your qualifications.
                </p>
                <div className="flex flex-col justify-between gap-4 md:flex-row">
                  <div className="flex flex-wrap items-center justify-between md:flex-col md:w-1/2 md:items-start">
                    <Label
                      htmlFor="levelOfEducation"
                      className="inline-flex py-2"
                    >
                      Level Of Education
                    </Label>
                    <select
                      id="levelOfEducation"
                      {...register("levelOfEducation", {
                        required: "Level is required",
                      })}
                      defaultValue={"select level"}
                      className="inline-flex w-1/2 p-2 border rounded md:w-full md:text-lg"
                    >
                      <optgroup className="w-1/3 text-sm ">
                        <option className="w-1/3 text-sm " value="" selected>
                          select level
                        </option>
                        <option className="w-1/3 text-sm " value="High school">
                          High school
                        </option>
                        <option className="w-1/3 text-sm " value="Intermediate">
                          Intermediate
                        </option>
                        <option
                          className="w-1/3 text-sm "
                          value="Undergraduate"
                        >
                          Undergraduate
                        </option>
                        <option className="w-1/3 text-sm " value="Postgraduate">
                          Postgraduate
                        </option>
                        <option className="w-1/3 text-sm " value="PhD">
                          PhD
                        </option>
                      </optgroup>
                    </select>
                    {errors.levelOfEducation && (
                      <p className="text-sm text-red-500">
                        {errors.levelOfEducation.message}
                      </p>
                    )}
                  </div>
                  <div className="flex flex-wrap items-center justify-between md:flex-col md:w-1/2 md:items-start">
                    <Label
                      htmlFor="yearOfCompletion"
                      className="inline-flex py-2"
                    >
                      yearOfCompletion
                    </Label>
                    <select
                      id="yearOfCompletion"
                      {...register("yearOfCompletion", {
                        required: "Year is required",
                      })}
                      className="inline-flex w-1/2 p-2 border rounded md:w-full md:text-lg"
                      defaultValue="" // Default value for the dropdown
                    >
                      <option disabled value="">
                        Select Year
                      </option>
                      {years.map((year) => (
                        <option
                          className="w-1/3 text-xs "
                          key={year}
                          value={year}
                        >
                          {year}
                        </option>
                      ))}
                    </select>
                    {errors.yearOfCompletion && (
                      <p className="text-sm text-red-500">
                        {errors.yearOfCompletion.message}
                      </p>
                    )}
                  </div>
                </div>
                <div className="flex flex-col justify-between gap-4 md:flex-row">
                  <div className="flex flex-wrap items-center justify-between md:flex-col md:w-1/2 md:items-start">
                    <Label htmlFor="programme">Programme</Label>
                    <Input
                      id="programme"
                      type="text"
                      {...register("programme", {
                        required: "Start Date is required",
                      })}
                      placeholder="Programme"
                      className="inline-flex w-1/2 p-2 mt-1 border rounded md:text-lg md:w-full"
                    />
                    {errors.programme && (
                      <p className="text-sm text-red-500">
                        {errors.programme.message}
                      </p>
                    )}
                  </div>
                  <div className="flex flex-wrap items-center justify-between md:flex-col md:w-1/2 md:items-start">
                    <Label htmlFor="specialization">specialization</Label>
                    <Input
                      id="specialization"
                      type="text"
                      {...register("specialization", {
                        required: "pecialization is required",
                      })}
                      placeholder="eg commerce/economics"
                      className="inline-flex w-1/2 p-2 mt-1 border rounded md:text-lg md:w-full "
                    />
                    {errors.specialization && (
                      <p className="text-sm text-red-500">
                        {errors.specialization.message}
                      </p>
                    )}
                  </div>
                </div>
                <div className="flex items-center justify-between md:items-start">
                  <div className="flex flex-wrap items-center justify-between w-full md:flex-col md:items-start ">
                    <Label
                      htmlFor="boardOrUniversity"
                      className="inline-flex py-2"
                    >
                      Board Or University
                    </Label>
                    <Input
                      id="boardOrUniversity"
                      type="text"
                      {...register("boardOrUniversity", {
                        required: "Board or university is required",
                      })}
                      placeholder="Board or University"
                      className="w-full p-2 mt-1 border rounded md:text-lg"
                    />
                    {errors.boardOrUniversity && (
                      <p className="text-sm text-red-500">
                        {errors.boardOrUniversity.message}
                      </p>
                    )}
                  </div>
                </div>
                <div className="flex items-center justify-between md:items-start">
                  <div className="flex flex-wrap items-center justify-between w-full md:flex-col md:items-start ">
                    <Label
                      htmlFor="institutionName"
                      className="inline-flex py-2"
                    >
                      Institution Name
                    </Label>
                    <Input
                      id="institutionName"
                      type="text"
                      {...register("institutionName", {
                        required: "Institution is required",
                      })}
                      placeholder="Institution Name"
                      className="w-full p-2 mt-1 border rounded md:text-lg"
                    />
                    {errors.institutionName && (
                      <p className="text-sm text-red-500">
                        {errors.institutionName.message}
                      </p>
                    )}
                  </div>
                </div>
                {/* <div>
                <label className="block text-sm font-medium">
                  Choose Mark Type:
                </label>
                <div className="flex space-x-4">
                  <label className="flex items-center space-x-2">
                    <input
                      type="radio"
                      value="percentage"
                      checked={markType === "percentage"}
                      onChange={() => setMarkType("percentage")}
                      className="w-4 h-4"
                    />
                    <span>Overall Percentage</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input
                      type="radio"
                      value="cgpa"
                      checked={markType === "cgpa"}
                      onChange={() => setMarkType("cgpa")}
                      className="w-4 h-4"
                    />
                    <span>CGPA</span>
                  </label>
                </div>

                {markType === "percentage" && (
                  <div className="mt-4">
                    <input
                      {...register("marks", {
                        required: "Percentage is required",
                      })}
                      placeholder="e.g., 75.5"
                      className="w-full p-2 border rounded"
                    />
                  </div>
                )}
                {markType === "cgpa" && (
                  <div className="flex mt-4 space-x-2">
                    <input
                      {...register("marks", { required: "CGPA is required" })}
                      placeholder="e.g., 4.5"
                      className="w-full p-2 border rounded"
                    />
                    <select
                      {...register("outOf", {
                        required: "CGPA scale is required",
                      })}
                      className="p-2 border rounded"
                    >
                      <option value="10">10</option>
                      <option value="4">4</option>
                    </select>
                  </div>
                )}
              </div> */}

                <div>
                  <label className="block text-sm font-medium">
                    Choose Mark Type:
                  </label>
                  <div className="flex space-x-4">
                    <label className="flex items-center space-x-2">
                      <input
                        type="radio"
                        value="percentage"
                        checked={markType === "percentage"}
                        onChange={() => handleMarkTypeChange("percentage")}
                        className="w-4 h-4"
                      />
                      <span>Overall Percentage</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input
                        type="radio"
                        value="cgpa"
                        checked={markType === "cgpa"}
                        onChange={() => handleMarkTypeChange("cgpa")}
                        className="w-4 h-4"
                      />
                      <span>CGPA</span>
                    </label>
                  </div>

                  {/* Dynamic Input Fields */}
                  {markType === "percentage" && (
                    <div className="mt-4">
                      <input
                        {...register("marks", {
                          required: "Percentage is required",
                        })}
                        type="number"
                        step="0.1"
                        placeholder="e.g., 75.5"
                        className="w-full p-2 border rounded"
                      />
                    </div>
                  )}

                  {markType === "cgpa" && (
                    <div className="flex mt-4 space-x-2">
                      <input
                        {...register("cgpa", {
                          required: "CGPA is required",
                        })}
                        type="number"
                        step="0.1"
                        placeholder="e.g., 8.5"
                        className="w-full p-2 border rounded"
                      />
                      <select
                        {...register("outOf", {
                          required: "CGPA scale is required",
                        })}
                        className="p-2 border rounded"
                      >
                        <option value="10">10</option>
                        <option value="4">4</option>
                      </select>
                    </div>
                  )}
                </div>

                <DialogFooter className="flex justify-between w-full gap-4">
                  <DialogClose asChild>
                    <Button
                      onClick={() =>
                        reset({
                          levelOfEducation: "",
                          boardOrUniversity: "",
                          yearOfCompletion: "",
                          institutionName: "",
                          marks: 0,
                          programme: "",
                          specialization: "",
                        })
                      }
                      className="bg-purple-500 md:w-1/2 hover:bg-purple-600"
                      type="button"
                    >
                      Cancel
                    </Button>
                  </DialogClose>
                  {/* <DialogClose> */}
                  <DialogClose asChild>
                    <Button
                      type="submit"
                      className="bg-purple-500 md:w-1/2 hover:bg-purple-600"
                    >
                      Add
                    </Button>
                  </DialogClose>
                  {/* </DialogClose> */}
                </DialogFooter>
              </form>
            </DialogContent>
          </Dialog>
        </div>
        <div className="w-full overflow-y-auto border border-gray-200 rounded-lg shadow-xl min-h-fit scrollableContent max-h-96">
          {userEducation.length > 0
            ? userEducation.map((EducationDetails, index) => (
                <div
                  key={index}
                  className="flex items-center justify-start gap-4 p-4 md:w-1/2 h-fit"
              >
                <div className="flex items-center justify-center">
  <FaUniversity className="h-10 p-2 text-2xl font-semibold text-gray-400 bg-gray-200 rounded-lg min-w-12" />
                </div>
                  <div className="flex flex-col ">
                  
                  
                    <p className="text-sm text-gray-500">
                      {EducationDetails.institutionName}
                    </p>
                  </div>
                </div>
              ))
            : null}
        </div>
      </div>

      <div className="flex flex-col w-full gap-4 mt-8 ">
        <div className="w-full">
          <h1 className="text-lg font-bold text-gray-800 p md:text-xl">
            List of Skills
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger className="py-1 mx-2 text-xl font-bold text-gray-700 rounded-full ">
                  <FaRegQuestionCircle />
                </TooltipTrigger>
                <TooltipContent className="p-2 bg-black border border-gray-400 rounded-md ">
                  <p className="text-lg text-white">List of Skills</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </h1>
        </div>
        <Card className="w-full overflow-y-auto min-h-72 max-h-96 scrollableContent">
          {sampleSkills.map((data, index) => {
            return (
              <div
                key={index}
                className="flex items-center justify-between gap-4 px-4 py-2 h-fit"
              >
                <h3 className="text-lg font-semibold text-gray-500">
                  {data.skill}
                </h3>
                <span>
                  {data.weight &&
                    Array(Math.ceil(data.weight / 2))
                      .fill(null)
                      .map((_, i) => (
                        <span
                          key={i}
                          className="text-xl font-bold text-purple-500 ms-2"
                        >
                          ★
                        </span>
                      ))}
                </span>
              </div>
            );
          })}
        </Card>
      </div>
    </div>
  );
}

export default Leaderboard