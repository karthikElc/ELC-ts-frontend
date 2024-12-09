import React, { FC, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import {
  AlertDialog,
  // AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { IoCloseSharp } from "react-icons/io5";
import { GoTriangleRight } from "react-icons/go";
import "./employability.css";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Link } from "react-router-dom";
import Pagination from "react-bootstrap/Pagination";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoMdArrowDropup } from "react-icons/io";
import { Input } from "@/components/ui/input";

interface Job {
  jobUrl: string;
  strengths: string[];
  companyName: string;
  vacancies: number;
  job_skills: string[];
  cas_score: number;
  logo: string;
  role: string;
  location: string;
  recommendations: string[];
  jobDescription: string;
  industry: string;
  minSalary?: number;
  maxSalary?: number;
}

interface JobCardProps {
  job: Job;
}

// **********JOB CARD**********

const JobCard: React.FC<JobCardProps> = ({ job }) => {
  return (
    <Card className="w-full p-2 mx-auto transition-shadow shadow-sm lg:w-72 lg:w-full md:w-64 hover:shadow-md hover:border-purple-300 rounded-2xl">
      <CardContent className="p-4 ">
        <div className="flex items-start justify-between">
          {/* img */}
          <div className="flex items-center gap-4 ">
            {job.logo ? (
              <img
                src={job.logo}
                alt={job.companyName}
                className="w-full h-full rounded-full"
              />
            ) : (
              <div className="flex items-center justify-center w-24 h-12 bg-gray-200 rounded-full">
                <span className="text-lg font-semibold text-gray-500">
                  {job.companyName.charAt(0)}
                </span>
              </div>
            )}
            <div></div>
          </div>

          {/* cas */}
          <div className="px-3 py-1 text-center bg-yellow-400 rounded-full">
            <span className="text-sm font-medium ">
              CAS Scoure: {job.cas_score}%
            </span>
          </div>
        </div>
        <div className="flex flex-col items-center gap-2 text-gray-600 ">
          <div className="flex justify-start w-full gap-1">
            <Star className="w-4 h-4" />
            <span className="text-sm">
              {job.vacancies} Job Opening{job.vacancies > 1 ? "s" : ""}
            </span>
          </div>
          <div>
            <h2 className="text-lg font-semibold">{job.companyName}</h2>
            <h3 className="text-base">{job.role}</h3>
            <p className="text-sm text-gray-600">{job.location}</p>
          </div>
        </div>
        <div className="flex flex-col justify-between gap-3 mt-4 md:flex md:flex-row">
          <AlertDialog >
            <AlertDialogTrigger className="px-4 py-3 text-lg font-semibold text-purple-600 border-2 border-purple-400 rounded-md md:text-base md:font-normal hover:bg-purple-50 md:p-1 md:w-2/3 lg:w-2/3">
              Recommendations
            </AlertDialogTrigger>
            <AlertDialogContent className="w-full md:mt-8 mb-8 overflow-y-scroll max-h-[80vh] scrollableContent scroll-smooth">
              <AlertDialogHeader className="flex flex-row justify-between ">
                <AlertDialogTitle className="text-2xl">
                  Job Recommendations
                </AlertDialogTitle>
                <AlertDialogDescription>
                </AlertDialogDescription>
                <AlertDialogCancel className="border border-purple-600 hover:bg-purple-200">
                  <IoCloseSharp className="w-6 h-6 text-2xl font-bold" />
                </AlertDialogCancel>
              </AlertDialogHeader>

              <h4 className="text-lg font-semibold"> Strengths</h4>
              <div className="flex flex-wrap gap-1">
                {job?.strengths?.map((strength, index) => (
                  <p
                    className="p-2 text-base font-medium text-purple-500 border-2 border-purple-500 rounded-md"
                    key={index}
                  >
                    {strength}
                  </p>
                ))}
                {/* {job.strengths} */}
              </div>
              <div className="">
                <h4 className="text-lg font-semibold"> Recommendations</h4>
                {job.recommendations.map((recommendation, index) => (
                  <div key={index} className="flex items-center gap-3 m-1">
                    {/* <GoTriangleRight className="inline-block w-8 h-8 text-lg font-bold me-1 bg-slate-300" /> */}
                    <GoTriangleRight className="inline-block w-8 h-8 text-lg font-bold text-justify me-1 " />
                    <p className="w-3/4 text-base"> {recommendation}</p>
                  </div>
                ))}
              </div>
              <AlertDialogFooter></AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>

          {/* job details */}

          <AlertDialog>
            <AlertDialogTrigger className="px-4 py-3 text-2xl text-purple-600 border-2 border-purple-400 rounded-md hover:bg-purple-50 md:p-1 md:text-base md:w-1/3">
              {" "}
              Job details
            </AlertDialogTrigger>
            <AlertDialogContent className="w-full mt-8 overflow-y-scroll scrollableContent scroll-smooth">
              <AlertDialogHeader className="flex flex-row justify-between ">
                <AlertDialogTitle className="text-2xl ">
                  Job details
                </AlertDialogTitle>
                <AlertDialogCancel className="border border-purple-600 hover:bg-purple-200">
                  <IoCloseSharp className="w-6 h-6 text-2xl font-bold" />
                </AlertDialogCancel>
              </AlertDialogHeader>
              <div className="w-full">
                <div className="flex justify-start">
                  <label className="block text-lg font-bold text-gray-700">
                    Company:
                  </label>
                  <div className="px-2 pt-1 text-gray-600">
                    {job.companyName}
                  </div>
                </div>

                <div className="flex justify-start mb-2">
                  <label className="block text-lg font-bold text-gray-700">
                    Industry:
                  </label>
                  <div className="px-2 pt-1 text-gray-600">{job.industry}</div>
                </div>

                <div className="flex justify-start mb-2">
                  <label className="block text-lg font-bold text-gray-700">
                    Role:
                  </label>
                  <div className="px-2 pt-1 text-gray-600">{job.role}</div>
                </div>

                <div className="flex justify-start mb-2">
                  <label className="block text-lg font-bold text-gray-700">
                    Location:
                  </label>
                  <div className="px-2 pt-1 text-gray-600">{job.location}</div>
                </div>

                <div className="flex justify-start mb-2">
                  <label className="w-2/3 text-lg font-bold text-gray-700 ">
                    {/* <p className="inline-block w-fit">Mandatory Skills:</p> */}
                    Mandatory Skills:
                  </label>

                  <div className="text-gray-600 gap-0-2">
                    <div>{job.job_skills.join(", ")}</div>
                  </div>
                </div>

                <div className="flex justify-start mb-2">
                  <label className="block text-lg font-bold text-gray-700">
                    Minimum Salary:
                  </label>
                  <div className="px-2 pt-1 text-gray-600">{job.minSalary}</div>
                </div>
                <div className="flex justify-start mb-2">
                  <label className="block text-lg font-bold text-gray-700">
                    Maximum Salary:
                  </label>
                  <div className="px-2 pt-1 text-gray-600">{job.maxSalary}</div>
                </div>

                <div className="flex justify-start mb-2">
                  <label className="block text-lg font-bold text-gray-700">
                    Vacancy:
                  </label>
                  <div className="px-2 pt-1 text-gray-600">1</div>
                </div>
                <div className="flex justify-end">
                  <Link
                    target="_blank"
                    rel="noopener noreferrer"
                    to={job.jobUrl}
                  >
                    <Button className="px-2 pt-1 bg-blue-700 w-28">
                      Apply
                    </Button>
                  </Link>
                </div>
              </div>
              <AlertDialogFooter></AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </CardContent>
    </Card>
  );
};

//https://test.elcarreira.com/employability/getRelevantJobs?studentId=67399b628e54b5308e57059a
//https://test.elcarreira.com/employability/getRelevantJobs?studentId=67399b628e54b5308e57059a
//https://test.elcarreira.com/employability/getCareerMap?studentId=67399b628e54b5308e57059a
// **************Job List Component

interface JobListProps {
  jobs: Job[];
}

const JobList: React.FC<JobListProps> = ({ jobs }) => {

  const fetchAlljobs = async () => {
    try {
      const response = await fetch("https://test.elcarreira.com/employability/getRelevantJobs?studentId=67399b628e54b5308e57059a");
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchAlljobs();
  }, []);
  
  const [selectedJobData, setSelectedJobData] = useState("All Jobs");
 const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const jobTypes = [
    { label: "All Jobs", value: "All Jobs" },
    { label: "Relevant Jobs", value: "Relevant Jobs" },
  ];
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col items-center gap-4 py-2 mt-2 md: md:flex-row md:justify-between">
        <div className="text-lg font-normal text-center md:text-left">
          Listing the jobs related to your career path
        </div>
        <div className="flex flex-col justify-end w-full gap-4 py-1 md:w-1/2 md:flex-row">
          <Input
            type="text"
            placeholder="Search for city"
            className="w-full h-8 mt-1 text-gray-600 border border-gray-600 outline-none appearance-none rounded-2xl focus:outline-none active:outline-none md:w-1/3"
          ></Input>
          <DropdownMenu>
            <DropdownMenuTrigger className="outline-none" asChild>
              <button
                onClick={(e) => {
                  e.stopPropagation(); //
                  console.log("clicked", isDropdownOpen);
                  setIsDropdownOpen((prevState) => !prevState);
                }} // Toggle dropdown
                className="w-full h-full px-4 py-2 text-white bg-green-600 border-none rounded-md outline-none md:w-40 hover:bg-green-700 active:outline-none"
              >
                {selectedJobData}
                {isDropdownOpen ? (
                  <IoMdArrowDropup className="inline-flex w-5 h-6 ms-1" />
                ) : (
                  <IoMdArrowDropdown className="inline-flex w-5 h-6 ms-1" />
                )}
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="start"
              className="w-40 outline-none hover:outline-none"
            >
              {jobTypes.map((type) => (
                <DropdownMenuItem
                  key={type.value}
                  onClick={() => setSelectedJobData(type.value)}
                  className={`${
                    selectedJobData === type.value
                      ? "bg-green-600 text-white"
                      : ""
                  }`}
                >
                  {type.label}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <div className="grid w-full grid-cols-1 gap-4 lg:gap-8 md:grid-cols-2 lg:grid-cols-3 md: ">
        {jobs.map((job, index) => (
          <JobCard key={index} job={job} />
        ))}
      </div>
    </div>
  );
};

//************************ */ JOB LIST CONTAINER

// Sample data from your API
const sampleJobs: Job[] = [
  {
    companyName: "Capital Aim",
    vacancies: 1,
    job_skills: [
      "Financial Advisory",
      "Customer Service",
      "Sales",
      "Financial Analysis",
      "Microsoft Office",
    ],
    minSalary: 200000,
    maxSalary: 300000,
    cas_score: 72,
    logo:"https://www.naukri.com/hotjobs/images/v3/devmantraf_apr22.gif",
    
    role: "Opening For BBA, MBA, BCA, BA, BE, B.com, M.com Freshers",
    industry: "Financial Services",
    location: "Indore",
    jobDescription:
      "Company Profile: \u003Cbr\u003ECapital Aim Financial Advisory Pvt Ltd is India s leading financial advisory firm committed to\u003Cbr\u003Emake fair ,  holistic and top quality financial recommendations and tips accessible to all traders and\u003Cbr\u003Einvestors in India.\u003Cbr\u003EOur pressure free work environment and employee centric policies are our USP giving our\u003Cbr\u003Eemployees an opportunity to work with flexibility and grow in their career.\u003Cbr\u003E \u003Cbr\u003E Job Location : Indore \u003Cbr\u003E Responsibilities: \u003Cbr\u003E Establish contact with clients via telephone calls.\u003Cbr\u003E Understanding and evaluating customer needs.\u003Cbr\u003E Presenting the product or service favourably and in a structured professional way.\u003Cbr\u003E Negotiate / close deals and handle complaints or objections.\u003Cbr\u003E Maintaining and developing long term relationships with clients.\u003Cbr\u003E Maintains quality service by establishing and enforcing Organization standards.\u003Cbr\u003E Collaborate with team to achieve better results.\u003Cbr\u003E Skills: \u003Cbr\u003E Good communication skills.\u003Cbr\u003E Fast learner and passion for sales.\u003Cbr\u003E Demonstrate the quality of interacting with new people.\u003Cbr\u003E Possess a high degree of self - motivation and ambition.\u003Cbr\u003E Understanding of negotation techniques.\u003Cbr\u003E\u003Cbr\u003E: \u003Cbr\u003E Any Graduate / Post Graduate.\u003Cbr\u003E  Venue: \u003Cbr\u003ECapitalAim Financial Advisory Pvt. Ltd.",
    jobUrl:
      "https://www.naukri.com/job-listings-opening-for-bba-mba-bca-ba-be-b-com-m-com-freshers-capitalaim-financial-advisory-pvt-ltd-indore-0-to-1-years-100317500543",
    strengths: [
      "Communication Skills",
      "Adaptability",
      "Problem-Solving",
      "Teamwork",
      "Customer Relationship Management",
    ],
    recommendations: [
      "Improve knowledge in financial compliance, regulatory compliance, and internal audit",
      "Develop legal knowledge and understanding of court procedures",
      "Enhance skills in equity research, investment management, and mutual funds",
      "Gain expertise in business consulting and legal drafting",
      "Strengthen tax compliance and forex trading knowledge",
      "Learn about corporate laws and legal research",
      "Develop skills in investment banking and XBRL",
      "Understand legal ethics and banking operations",
      "Improve SQL and insolvency-related skills",
      "Enhance investment analysis and reconciliation abilities",
      "Gain expertise in GST, stock market analysis, and tax preparation",
      "Strengthen financial modeling and financial regulations knowledge",
    ],
  },
  {
    companyName: "Capital Aim",
    vacancies: 1,
    job_skills: [
      "Financial Advisory",
      "Customer Service",
      "Sales",
      "Financial Analysis",
      "Microsoft Office",
    ],
    minSalary: 200000,
    maxSalary: 300000,
    cas_score: 72,
    logo:"https://www.naukri.com/hotjobs/images/v3/devmantraf_apr22.gif",
    role: "Opening For BBA, MBA, BCA, BA, BE, B.com, M.com Freshers",
    industry: "Financial Services",
    location: "Indore",
    jobDescription:
      "Company Profile: \u003Cbr\u003ECapital Aim Financial Advisory Pvt Ltd is India s leading financial advisory firm committed to\u003Cbr\u003Emake fair ,  holistic and top quality financial recommendations and tips accessible to all traders and\u003Cbr\u003Einvestors in India.\u003Cbr\u003EOur pressure free work environment and employee centric policies are our USP giving our\u003Cbr\u003Eemployees an opportunity to work with flexibility and grow in their career.\u003Cbr\u003E \u003Cbr\u003E Job Location : Indore \u003Cbr\u003E Responsibilities: \u003Cbr\u003E Establish contact with clients via telephone calls.\u003Cbr\u003E Understanding and evaluating customer needs.\u003Cbr\u003E Presenting the product or service favourably and in a structured professional way.\u003Cbr\u003E Negotiate / close deals and handle complaints or objections.\u003Cbr\u003E Maintaining and developing long term relationships with clients.\u003Cbr\u003E Maintains quality service by establishing and enforcing Organization standards.\u003Cbr\u003E Collaborate with team to achieve better results.\u003Cbr\u003E Skills: \u003Cbr\u003E Good communication skills.\u003Cbr\u003E Fast learner and passion for sales.\u003Cbr\u003E Demonstrate the quality of interacting with new people.\u003Cbr\u003E Possess a high degree of self - motivation and ambition.\u003Cbr\u003E Understanding of negotation techniques.\u003Cbr\u003E\u003Cbr\u003E: \u003Cbr\u003E Any Graduate / Post Graduate.\u003Cbr\u003E  Venue: \u003Cbr\u003ECapitalAim Financial Advisory Pvt. Ltd.",
    jobUrl:
      "https://www.naukri.com/job-listings-opening-for-bba-mba-bca-ba-be-b-com-m-com-freshers-capitalaim-financial-advisory-pvt-ltd-indore-0-to-1-years-100317500543",
    strengths: [
      "Communication Skills",
      "Adaptability",
      "Problem-Solving",
      "Teamwork",
      "Customer Relationship Management",
    ],
    recommendations: [
      "Improve knowledge in financial compliance, regulatory compliance, and internal audit",
      "Develop legal knowledge and understanding of court procedures",
      "Enhance skills in equity research, investment management, and mutual funds",
      "Gain expertise in business consulting and legal drafting",
      "Strengthen tax compliance and forex trading knowledge",
      "Learn about corporate laws and legal research",
      "Develop skills in investment banking and XBRL",
      "Understand legal ethics and banking operations",
      "Improve SQL and insolvency-related skills",
      "Enhance investment analysis and reconciliation abilities",
      "Gain expertise in GST, stock market analysis, and tax preparation",
      "Strengthen financial modeling and financial regulations knowledge",
    ],
  },
  {
    companyName: "Capital Aim",
    vacancies: 1,
    job_skills: [
      "Financial Advisory",
      "Customer Service",
      "Sales",
      "Financial Analysis",
      "Microsoft Office",
    ],
    minSalary: 200000,
    maxSalary: 300000,
    cas_score: 72,
    logo:"https://www.naukri.com/hotjobs/images/v3/devmantraf_apr22.gif",
    role: "Opening For BBA, MBA, BCA, BA, BE, B.com, M.com Freshers",
    industry: "Financial Services",
    location: "Indore",
    jobDescription:
      "Company Profile: \u003Cbr\u003ECapital Aim Financial Advisory Pvt Ltd is India s leading financial advisory firm committed to\u003Cbr\u003Emake fair ,  holistic and top quality financial recommendations and tips accessible to all traders and\u003Cbr\u003Einvestors in India.\u003Cbr\u003EOur pressure free work environment and employee centric policies are our USP giving our\u003Cbr\u003Eemployees an opportunity to work with flexibility and grow in their career.\u003Cbr\u003E \u003Cbr\u003E Job Location : Indore \u003Cbr\u003E Responsibilities: \u003Cbr\u003E Establish contact with clients via telephone calls.\u003Cbr\u003E Understanding and evaluating customer needs.\u003Cbr\u003E Presenting the product or service favourably and in a structured professional way.\u003Cbr\u003E Negotiate / close deals and handle complaints or objections.\u003Cbr\u003E Maintaining and developing long term relationships with clients.\u003Cbr\u003E Maintains quality service by establishing and enforcing Organization standards.\u003Cbr\u003E Collaborate with team to achieve better results.\u003Cbr\u003E Skills: \u003Cbr\u003E Good communication skills.\u003Cbr\u003E Fast learner and passion for sales.\u003Cbr\u003E Demonstrate the quality of interacting with new people.\u003Cbr\u003E Possess a high degree of self - motivation and ambition.\u003Cbr\u003E Understanding of negotation techniques.\u003Cbr\u003E\u003Cbr\u003E: \u003Cbr\u003E Any Graduate / Post Graduate.\u003Cbr\u003E  Venue: \u003Cbr\u003ECapitalAim Financial Advisory Pvt. Ltd.",
    jobUrl:
      "https://www.naukri.com/job-listings-opening-for-bba-mba-bca-ba-be-b-com-m-com-freshers-capitalaim-financial-advisory-pvt-ltd-indore-0-to-1-years-100317500543",
    strengths: [
      "Communication Skills",
      "Adaptability",
      "Problem-Solving",
      "Teamwork",
      "Customer Relationship Management",
    ],
    recommendations: [
      "Improve knowledge in financial compliance, regulatory compliance, and internal audit",
      "Develop legal knowledge and understanding of court procedures",
      "Enhance skills in equity research, investment management, and mutual funds",
      "Gain expertise in business consulting and legal drafting",
      "Strengthen tax compliance and forex trading knowledge",
      "Learn about corporate laws and legal research",
      "Develop skills in investment banking and XBRL",
      "Understand legal ethics and banking operations",
      "Improve SQL and insolvency-related skills",
      "Enhance investment analysis and reconciliation abilities",
      "Gain expertise in GST, stock market analysis, and tax preparation",
      "Strengthen financial modeling and financial regulations knowledge",
    ],
  },
  {
    companyName: "Capital Aim",
    vacancies: 1,
    job_skills: [
      "Financial Advisory",
      "Customer Service",
      "Sales",
      "Financial Analysis",
      "Microsoft Office",
    ],
    minSalary: 200000,
    maxSalary: 300000,
    cas_score: 72,
    logo:"https://www.naukri.com/hotjobs/images/v3/devmantraf_apr22.gif",
    role: "Opening For BBA, MBA, BCA, BA, BE, B.com, M.com Freshers",
    industry: "Financial Services",
    location: "Indore",
    jobDescription:
      "Company Profile: \u003Cbr\u003ECapital Aim Financial Advisory Pvt Ltd is India s leading financial advisory firm committed to\u003Cbr\u003Emake fair ,  holistic and top quality financial recommendations and tips accessible to all traders and\u003Cbr\u003Einvestors in India.\u003Cbr\u003EOur pressure free work environment and employee centric policies are our USP giving our\u003Cbr\u003Eemployees an opportunity to work with flexibility and grow in their career.\u003Cbr\u003E \u003Cbr\u003E Job Location : Indore \u003Cbr\u003E Responsibilities: \u003Cbr\u003E Establish contact with clients via telephone calls.\u003Cbr\u003E Understanding and evaluating customer needs.\u003Cbr\u003E Presenting the product or service favourably and in a structured professional way.\u003Cbr\u003E Negotiate / close deals and handle complaints or objections.\u003Cbr\u003E Maintaining and developing long term relationships with clients.\u003Cbr\u003E Maintains quality service by establishing and enforcing Organization standards.\u003Cbr\u003E Collaborate with team to achieve better results.\u003Cbr\u003E Skills: \u003Cbr\u003E Good communication skills.\u003Cbr\u003E Fast learner and passion for sales.\u003Cbr\u003E Demonstrate the quality of interacting with new people.\u003Cbr\u003E Possess a high degree of self - motivation and ambition.\u003Cbr\u003E Understanding of negotation techniques.\u003Cbr\u003E\u003Cbr\u003E: \u003Cbr\u003E Any Graduate / Post Graduate.\u003Cbr\u003E  Venue: \u003Cbr\u003ECapitalAim Financial Advisory Pvt. Ltd.",
    jobUrl:
      "https://www.naukri.com/job-listings-opening-for-bba-mba-bca-ba-be-b-com-m-com-freshers-capitalaim-financial-advisory-pvt-ltd-indore-0-to-1-years-100317500543",
    strengths: [
      "Communication Skills",
      "Adaptability",
      "Problem-Solving",
      "Teamwork",
      "Customer Relationship Management",
    ],
    recommendations: [
      "Improve knowledge in financial compliance, regulatory compliance, and internal audit",
      "Develop legal knowledge and understanding of court procedures",
      "Enhance skills in equity research, investment management, and mutual funds",
      "Gain expertise in business consulting and legal drafting",
      "Strengthen tax compliance and forex trading knowledge",
      "Learn about corporate laws and legal research",
      "Develop skills in investment banking and XBRL",
      "Understand legal ethics and banking operations",
      "Improve SQL and insolvency-related skills",
      "Enhance investment analysis and reconciliation abilities",
      "Gain expertise in GST, stock market analysis, and tax preparation",
      "Strengthen financial modeling and financial regulations knowledge",
    ],
  },
  {
    companyName: "Capital Aim",
    vacancies: 1,
    job_skills: [
      "Financial Advisory",
      "Customer Service",
      "Sales",
      "Financial Analysis",
      "Microsoft Office",
    ],
    minSalary: 200000,
    maxSalary: 300000,
    cas_score: 72,
    logo:"https://www.naukri.com/hotjobs/images/v3/devmantraf_apr22.gif",
    role: "Opening For BBA, MBA, BCA, BA, BE, B.com, M.com Freshers",
    industry: "Financial Services",
    location: "Indore",
    jobDescription:
      "Company Profile: \u003Cbr\u003ECapital Aim Financial Advisory Pvt Ltd is India s leading financial advisory firm committed to\u003Cbr\u003Emake fair ,  holistic and top quality financial recommendations and tips accessible to all traders and\u003Cbr\u003Einvestors in India.\u003Cbr\u003EOur pressure free work environment and employee centric policies are our USP giving our\u003Cbr\u003Eemployees an opportunity to work with flexibility and grow in their career.\u003Cbr\u003E \u003Cbr\u003E Job Location : Indore \u003Cbr\u003E Responsibilities: \u003Cbr\u003E Establish contact with clients via telephone calls.\u003Cbr\u003E Understanding and evaluating customer needs.\u003Cbr\u003E Presenting the product or service favourably and in a structured professional way.\u003Cbr\u003E Negotiate / close deals and handle complaints or objections.\u003Cbr\u003E Maintaining and developing long term relationships with clients.\u003Cbr\u003E Maintains quality service by establishing and enforcing Organization standards.\u003Cbr\u003E Collaborate with team to achieve better results.\u003Cbr\u003E Skills: \u003Cbr\u003E Good communication skills.\u003Cbr\u003E Fast learner and passion for sales.\u003Cbr\u003E Demonstrate the quality of interacting with new people.\u003Cbr\u003E Possess a high degree of self - motivation and ambition.\u003Cbr\u003E Understanding of negotation techniques.\u003Cbr\u003E\u003Cbr\u003E: \u003Cbr\u003E Any Graduate / Post Graduate.\u003Cbr\u003E  Venue: \u003Cbr\u003ECapitalAim Financial Advisory Pvt. Ltd.",
    jobUrl:
      "https://www.naukri.com/job-listings-opening-for-bba-mba-bca-ba-be-b-com-m-com-freshers-capitalaim-financial-advisory-pvt-ltd-indore-0-to-1-years-100317500543",
    strengths: [
      "Communication Skills",
      "Adaptability",
      "Problem-Solving",
      "Teamwork",
      "Customer Relationship Management",
    ],
    recommendations: [
      "Improve knowledge in financial compliance, regulatory compliance, and internal audit",
      "Develop legal knowledge and understanding of court procedures",
      "Enhance skills in equity research, investment management, and mutual funds",
      "Gain expertise in business consulting and legal drafting",
      "Strengthen tax compliance and forex trading knowledge",
      "Learn about corporate laws and legal research",
      "Develop skills in investment banking and XBRL",
      "Understand legal ethics and banking operations",
      "Improve SQL and insolvency-related skills",
      "Enhance investment analysis and reconciliation abilities",
      "Gain expertise in GST, stock market analysis, and tax preparation",
      "Strengthen financial modeling and financial regulations knowledge",
    ],
  },
  {
    companyName: "Capital Aim",
    vacancies: 1,
    job_skills: [
      "Financial Advisory",
      "Customer Service",
      "Sales",
      "Financial Analysis",
      "Microsoft Office",
    ],
    minSalary: 200000,
    maxSalary: 300000,
    cas_score: 72,
    logo:"https://www.naukri.com/hotjobs/images/v3/devmantraf_apr22.gif",
    role: "Opening For BBA, MBA, BCA, BA, BE, B.com, M.com Freshers",
    industry: "Financial Services",
    location: "Indore",
    jobDescription:
      "Company Profile: \u003Cbr\u003ECapital Aim Financial Advisory Pvt Ltd is India s leading financial advisory firm committed to\u003Cbr\u003Emake fair ,  holistic and top quality financial recommendations and tips accessible to all traders and\u003Cbr\u003Einvestors in India.\u003Cbr\u003EOur pressure free work environment and employee centric policies are our USP giving our\u003Cbr\u003Eemployees an opportunity to work with flexibility and grow in their career.\u003Cbr\u003E \u003Cbr\u003E Job Location : Indore \u003Cbr\u003E Responsibilities: \u003Cbr\u003E Establish contact with clients via telephone calls.\u003Cbr\u003E Understanding and evaluating customer needs.\u003Cbr\u003E Presenting the product or service favourably and in a structured professional way.\u003Cbr\u003E Negotiate / close deals and handle complaints or objections.\u003Cbr\u003E Maintaining and developing long term relationships with clients.\u003Cbr\u003E Maintains quality service by establishing and enforcing Organization standards.\u003Cbr\u003E Collaborate with team to achieve better results.\u003Cbr\u003E Skills: \u003Cbr\u003E Good communication skills.\u003Cbr\u003E Fast learner and passion for sales.\u003Cbr\u003E Demonstrate the quality of interacting with new people.\u003Cbr\u003E Possess a high degree of self - motivation and ambition.\u003Cbr\u003E Understanding of negotation techniques.\u003Cbr\u003E\u003Cbr\u003E: \u003Cbr\u003E Any Graduate / Post Graduate.\u003Cbr\u003E  Venue: \u003Cbr\u003ECapitalAim Financial Advisory Pvt. Ltd.",
    jobUrl:
      "https://www.naukri.com/job-listings-opening-for-bba-mba-bca-ba-be-b-com-m-com-freshers-capitalaim-financial-advisory-pvt-ltd-indore-0-to-1-years-100317500543",
    strengths: [
      "Communication Skills",
      "Adaptability",
      "Problem-Solving",
      "Teamwork",
      "Customer Relationship Management",
    ],
    recommendations: [
      "Improve knowledge in financial compliance, regulatory compliance, and internal audit",
      "Develop legal knowledge and understanding of court procedures",
      "Enhance skills in equity research, investment management, and mutual funds",
      "Gain expertise in business consulting and legal drafting",
      "Strengthen tax compliance and forex trading knowledge",
      "Learn about corporate laws and legal research",
      "Develop skills in investment banking and XBRL",
      "Understand legal ethics and banking operations",
      "Improve SQL and insolvency-related skills",
      "Enhance investment analysis and reconciliation abilities",
      "Gain expertise in GST, stock market analysis, and tax preparation",
      "Strengthen financial modeling and financial regulations knowledge",
    ],
  },
  {
    companyName: "Capital Aim",
    vacancies: 1,
    job_skills: [
      "Financial Advisory",
      "Customer Service",
      "Sales",
      "Financial Analysis",
      "Microsoft Office",
    ],
    minSalary: 200000,
    maxSalary: 300000,
    cas_score: 72,
    logo:"https://www.naukri.com/hotjobs/images/v3/devmantraf_apr22.gif",
    role: "Opening For BBA, MBA, BCA, BA, BE, B.com, M.com Freshers",
    industry: "Financial Services",
    location: "Indore",
    jobDescription:
      "Company Profile: \u003Cbr\u003ECapital Aim Financial Advisory Pvt Ltd is India s leading financial advisory firm committed to\u003Cbr\u003Emake fair ,  holistic and top quality financial recommendations and tips accessible to all traders and\u003Cbr\u003Einvestors in India.\u003Cbr\u003EOur pressure free work environment and employee centric policies are our USP giving our\u003Cbr\u003Eemployees an opportunity to work with flexibility and grow in their career.\u003Cbr\u003E \u003Cbr\u003E Job Location : Indore \u003Cbr\u003E Responsibilities: \u003Cbr\u003E Establish contact with clients via telephone calls.\u003Cbr\u003E Understanding and evaluating customer needs.\u003Cbr\u003E Presenting the product or service favourably and in a structured professional way.\u003Cbr\u003E Negotiate / close deals and handle complaints or objections.\u003Cbr\u003E Maintaining and developing long term relationships with clients.\u003Cbr\u003E Maintains quality service by establishing and enforcing Organization standards.\u003Cbr\u003E Collaborate with team to achieve better results.\u003Cbr\u003E Skills: \u003Cbr\u003E Good communication skills.\u003Cbr\u003E Fast learner and passion for sales.\u003Cbr\u003E Demonstrate the quality of interacting with new people.\u003Cbr\u003E Possess a high degree of self - motivation and ambition.\u003Cbr\u003E Understanding of negotation techniques.\u003Cbr\u003E\u003Cbr\u003E: \u003Cbr\u003E Any Graduate / Post Graduate.\u003Cbr\u003E  Venue: \u003Cbr\u003ECapitalAim Financial Advisory Pvt. Ltd.",
    jobUrl:
      "https://www.naukri.com/job-listings-opening-for-bba-mba-bca-ba-be-b-com-m-com-freshers-capitalaim-financial-advisory-pvt-ltd-indore-0-to-1-years-100317500543",
    strengths: [
      "Communication Skills",
      "Adaptability",
      "Problem-Solving",
      "Teamwork",
      "Customer Relationship Management",
    ],
    recommendations: [
      "Improve knowledge in financial compliance, regulatory compliance, and internal audit",
      "Develop legal knowledge and understanding of court procedures",
      "Enhance skills in equity research, investment management, and mutual funds",
      "Gain expertise in business consulting and legal drafting",
      "Strengthen tax compliance and forex trading knowledge",
      "Learn about corporate laws and legal research",
      "Develop skills in investment banking and XBRL",
      "Understand legal ethics and banking operations",
      "Improve SQL and insolvency-related skills",
      "Enhance investment analysis and reconciliation abilities",
      "Gain expertise in GST, stock market analysis, and tax preparation",
      "Strengthen financial modeling and financial regulations knowledge",
    ],
  },
  {
    companyName: "Capital Aim",
    vacancies: 1,
    job_skills: [
      "Financial Advisory",
      "Customer Service",
      "Sales",
      "Financial Analysis",
      "Microsoft Office",
    ],
    minSalary: 200000,
    maxSalary: 300000,
    cas_score: 72,
    logo:"https://www.naukri.com/hotjobs/images/v3/devmantraf_apr22.gif",
    role: "Opening For BBA, MBA, BCA, BA, BE, B.com, M.com Freshers",
    industry: "Financial Services",
    location: "Indore",
    jobDescription:
      "Company Profile: \u003Cbr\u003ECapital Aim Financial Advisory Pvt Ltd is India s leading financial advisory firm committed to\u003Cbr\u003Emake fair ,  holistic and top quality financial recommendations and tips accessible to all traders and\u003Cbr\u003Einvestors in India.\u003Cbr\u003EOur pressure free work environment and employee centric policies are our USP giving our\u003Cbr\u003Eemployees an opportunity to work with flexibility and grow in their career.\u003Cbr\u003E \u003Cbr\u003E Job Location : Indore \u003Cbr\u003E Responsibilities: \u003Cbr\u003E Establish contact with clients via telephone calls.\u003Cbr\u003E Understanding and evaluating customer needs.\u003Cbr\u003E Presenting the product or service favourably and in a structured professional way.\u003Cbr\u003E Negotiate / close deals and handle complaints or objections.\u003Cbr\u003E Maintaining and developing long term relationships with clients.\u003Cbr\u003E Maintains quality service by establishing and enforcing Organization standards.\u003Cbr\u003E Collaborate with team to achieve better results.\u003Cbr\u003E Skills: \u003Cbr\u003E Good communication skills.\u003Cbr\u003E Fast learner and passion for sales.\u003Cbr\u003E Demonstrate the quality of interacting with new people.\u003Cbr\u003E Possess a high degree of self - motivation and ambition.\u003Cbr\u003E Understanding of negotation techniques.\u003Cbr\u003E\u003Cbr\u003E: \u003Cbr\u003E Any Graduate / Post Graduate.\u003Cbr\u003E  Venue: \u003Cbr\u003ECapitalAim Financial Advisory Pvt. Ltd.",
    jobUrl:
      "https://www.naukri.com/job-listings-opening-for-bba-mba-bca-ba-be-b-com-m-com-freshers-capitalaim-financial-advisory-pvt-ltd-indore-0-to-1-years-100317500543",
    strengths: [
      "Communication Skills",
      "Adaptability",
      "Problem-Solving",
      "Teamwork",
      "Customer Relationship Management",
    ],
    recommendations: [
      "Improve knowledge in financial compliance, regulatory compliance, and internal audit",
      "Develop legal knowledge and understanding of court procedures",
      "Enhance skills in equity research, investment management, and mutual funds",
      "Gain expertise in business consulting and legal drafting",
      "Strengthen tax compliance and forex trading knowledge",
      "Learn about corporate laws and legal research",
      "Develop skills in investment banking and XBRL",
      "Understand legal ethics and banking operations",
      "Improve SQL and insolvency-related skills",
      "Enhance investment analysis and reconciliation abilities",
      "Gain expertise in GST, stock market analysis, and tax preparation",
      "Strengthen financial modeling and financial regulations knowledge",
    ],
  },
  {
    companyName: "Capital Aim",
    vacancies: 1,
    job_skills: [
      "Financial Advisory",
      "Customer Service",
      "Sales",
      "Financial Analysis",
      "Microsoft Office",
    ],
    minSalary: 200000,
    maxSalary: 300000,
    cas_score: 72,
    logo:"https://www.naukri.com/hotjobs/images/v3/devmantraf_apr22.gif",
    role: "Opening For BBA, MBA, BCA, BA, BE, B.com, M.com Freshers",
    industry: "Financial Services",
    location: "Indore",
    jobDescription:
      "Company Profile: \u003Cbr\u003ECapital Aim Financial Advisory Pvt Ltd is India s leading financial advisory firm committed to\u003Cbr\u003Emake fair ,  holistic and top quality financial recommendations and tips accessible to all traders and\u003Cbr\u003Einvestors in India.\u003Cbr\u003EOur pressure free work environment and employee centric policies are our USP giving our\u003Cbr\u003Eemployees an opportunity to work with flexibility and grow in their career.\u003Cbr\u003E \u003Cbr\u003E Job Location : Indore \u003Cbr\u003E Responsibilities: \u003Cbr\u003E Establish contact with clients via telephone calls.\u003Cbr\u003E Understanding and evaluating customer needs.\u003Cbr\u003E Presenting the product or service favourably and in a structured professional way.\u003Cbr\u003E Negotiate / close deals and handle complaints or objections.\u003Cbr\u003E Maintaining and developing long term relationships with clients.\u003Cbr\u003E Maintains quality service by establishing and enforcing Organization standards.\u003Cbr\u003E Collaborate with team to achieve better results.\u003Cbr\u003E Skills: \u003Cbr\u003E Good communication skills.\u003Cbr\u003E Fast learner and passion for sales.\u003Cbr\u003E Demonstrate the quality of interacting with new people.\u003Cbr\u003E Possess a high degree of self - motivation and ambition.\u003Cbr\u003E Understanding of negotation techniques.\u003Cbr\u003E\u003Cbr\u003E: \u003Cbr\u003E Any Graduate / Post Graduate.\u003Cbr\u003E  Venue: \u003Cbr\u003ECapitalAim Financial Advisory Pvt. Ltd.",
    jobUrl:
      "https://www.naukri.com/job-listings-opening-for-bba-mba-bca-ba-be-b-com-m-com-freshers-capitalaim-financial-advisory-pvt-ltd-indore-0-to-1-years-100317500543",
    strengths: [
      "Communication Skills",
      "Adaptability",
      "Problem-Solving",
      "Teamwork",
      "Customer Relationship Management",
    ],
    recommendations: [
      "Improve knowledge in financial compliance, regulatory compliance, and internal audit",
      "Develop legal knowledge and understanding of court procedures",
      "Enhance skills in equity research, investment management, and mutual funds",
      "Gain expertise in business consulting and legal drafting",
      "Strengthen tax compliance and forex trading knowledge",
      "Learn about corporate laws and legal research",
      "Develop skills in investment banking and XBRL",
      "Understand legal ethics and banking operations",
      "Improve SQL and insolvency-related skills",
      "Enhance investment analysis and reconciliation abilities",
      "Gain expertise in GST, stock market analysis, and tax preparation",
      "Strengthen financial modeling and financial regulations knowledge",
    ],
  },
  {
    companyName: "Capital Aim",
    vacancies: 1,
    job_skills: [
      "Financial Advisory",
      "Customer Service",
      "Sales",
      "Financial Analysis",
      "Microsoft Office",
    ],
    minSalary: 200000,
    maxSalary: 300000,
    cas_score: 72,
    logo:"https://www.naukri.com/hotjobs/images/v3/devmantraf_apr22.gif",
    role: "Opening For BBA, MBA, BCA, BA, BE, B.com, M.com Freshers",
    industry: "Financial Services",
    location: "Indore",
    jobDescription:
      "Company Profile: \u003Cbr\u003ECapital Aim Financial Advisory Pvt Ltd is India s leading financial advisory firm committed to\u003Cbr\u003Emake fair ,  holistic and top quality financial recommendations and tips accessible to all traders and\u003Cbr\u003Einvestors in India.\u003Cbr\u003EOur pressure free work environment and employee centric policies are our USP giving our\u003Cbr\u003Eemployees an opportunity to work with flexibility and grow in their career.\u003Cbr\u003E \u003Cbr\u003E Job Location : Indore \u003Cbr\u003E Responsibilities: \u003Cbr\u003E Establish contact with clients via telephone calls.\u003Cbr\u003E Understanding and evaluating customer needs.\u003Cbr\u003E Presenting the product or service favourably and in a structured professional way.\u003Cbr\u003E Negotiate / close deals and handle complaints or objections.\u003Cbr\u003E Maintaining and developing long term relationships with clients.\u003Cbr\u003E Maintains quality service by establishing and enforcing Organization standards.\u003Cbr\u003E Collaborate with team to achieve better results.\u003Cbr\u003E Skills: \u003Cbr\u003E Good communication skills.\u003Cbr\u003E Fast learner and passion for sales.\u003Cbr\u003E Demonstrate the quality of interacting with new people.\u003Cbr\u003E Possess a high degree of self - motivation and ambition.\u003Cbr\u003E Understanding of negotation techniques.\u003Cbr\u003E\u003Cbr\u003E: \u003Cbr\u003E Any Graduate / Post Graduate.\u003Cbr\u003E  Venue: \u003Cbr\u003ECapitalAim Financial Advisory Pvt. Ltd.",
    jobUrl:
      "https://www.naukri.com/job-listings-opening-for-bba-mba-bca-ba-be-b-com-m-com-freshers-capitalaim-financial-advisory-pvt-ltd-indore-0-to-1-years-100317500543",
    strengths: [
      "Communication Skills",
      "Adaptability",
      "Problem-Solving",
      "Teamwork",
      "Customer Relationship Management",
    ],
    recommendations: [
      "Improve knowledge in financial compliance, regulatory compliance, and internal audit",
      "Develop legal knowledge and understanding of court procedures",
      "Enhance skills in equity research, investment management, and mutual funds",
      "Gain expertise in business consulting and legal drafting",
      "Strengthen tax compliance and forex trading knowledge",
      "Learn about corporate laws and legal research",
      "Develop skills in investment banking and XBRL",
      "Understand legal ethics and banking operations",
      "Improve SQL and insolvency-related skills",
      "Enhance investment analysis and reconciliation abilities",
      "Gain expertise in GST, stock market analysis, and tax preparation",
      "Strengthen financial modeling and financial regulations knowledge",
    ],
  },
  {
    companyName: "Capital Aim",
    vacancies: 1,
    job_skills: [
      "Financial Advisory",
      "Customer Service",
      "Sales",
      "Financial Analysis",
      "Microsoft Office",
    ],
    minSalary: 200000,
    maxSalary: 300000,
    cas_score: 72,
    logo:"https://www.naukri.com/hotjobs/images/v3/devmantraf_apr22.gif",
    role: "Opening For BBA, MBA, BCA, BA, BE, B.com, M.com Freshers",
    industry: "Financial Services",
    location: "Indore",
    jobDescription:
      "Company Profile: \u003Cbr\u003ECapital Aim Financial Advisory Pvt Ltd is India s leading financial advisory firm committed to\u003Cbr\u003Emake fair ,  holistic and top quality financial recommendations and tips accessible to all traders and\u003Cbr\u003Einvestors in India.\u003Cbr\u003EOur pressure free work environment and employee centric policies are our USP giving our\u003Cbr\u003Eemployees an opportunity to work with flexibility and grow in their career.\u003Cbr\u003E \u003Cbr\u003E Job Location : Indore \u003Cbr\u003E Responsibilities: \u003Cbr\u003E Establish contact with clients via telephone calls.\u003Cbr\u003E Understanding and evaluating customer needs.\u003Cbr\u003E Presenting the product or service favourably and in a structured professional way.\u003Cbr\u003E Negotiate / close deals and handle complaints or objections.\u003Cbr\u003E Maintaining and developing long term relationships with clients.\u003Cbr\u003E Maintains quality service by establishing and enforcing Organization standards.\u003Cbr\u003E Collaborate with team to achieve better results.\u003Cbr\u003E Skills: \u003Cbr\u003E Good communication skills.\u003Cbr\u003E Fast learner and passion for sales.\u003Cbr\u003E Demonstrate the quality of interacting with new people.\u003Cbr\u003E Possess a high degree of self - motivation and ambition.\u003Cbr\u003E Understanding of negotation techniques.\u003Cbr\u003E\u003Cbr\u003E: \u003Cbr\u003E Any Graduate / Post Graduate.\u003Cbr\u003E  Venue: \u003Cbr\u003ECapitalAim Financial Advisory Pvt. Ltd.",
    jobUrl:
      "https://www.naukri.com/job-listings-opening-for-bba-mba-bca-ba-be-b-com-m-com-freshers-capitalaim-financial-advisory-pvt-ltd-indore-0-to-1-years-100317500543",
    strengths: [
      "Communication Skills",
      "Adaptability",
      "Problem-Solving",
      "Teamwork",
      "Customer Relationship Management",
    ],
    recommendations: [
      "Improve knowledge in financial compliance, regulatory compliance, and internal audit",
      "Develop legal knowledge and understanding of court procedures",
      "Enhance skills in equity research, investment management, and mutual funds",
      "Gain expertise in business consulting and legal drafting",
      "Strengthen tax compliance and forex trading knowledge",
      "Learn about corporate laws and legal research",
      "Develop skills in investment banking and XBRL",
      "Understand legal ethics and banking operations",
      "Improve SQL and insolvency-related skills",
      "Enhance investment analysis and reconciliation abilities",
      "Gain expertise in GST, stock market analysis, and tax preparation",
      "Strengthen financial modeling and financial regulations knowledge",
    ],
  },
  {
    companyName: "Capital Aim",
    vacancies: 1,
    job_skills: [
      "Financial Advisory",
      "Customer Service",
      "Sales",
      "Financial Analysis",
      "Microsoft Office",
    ],
    minSalary: 200000,
    maxSalary: 300000,
    cas_score: 72,
    logo:"https://www.naukri.com/hotjobs/images/v3/devmantraf_apr22.gif",
    role: "Opening For BBA, MBA, BCA, BA, BE, B.com, M.com Freshers",
    industry: "Financial Services",
    location: "Indore",
    jobDescription:
      "Company Profile: \u003Cbr\u003ECapital Aim Financial Advisory Pvt Ltd is India s leading financial advisory firm committed to\u003Cbr\u003Emake fair ,  holistic and top quality financial recommendations and tips accessible to all traders and\u003Cbr\u003Einvestors in India.\u003Cbr\u003EOur pressure free work environment and employee centric policies are our USP giving our\u003Cbr\u003Eemployees an opportunity to work with flexibility and grow in their career.\u003Cbr\u003E \u003Cbr\u003E Job Location : Indore \u003Cbr\u003E Responsibilities: \u003Cbr\u003E Establish contact with clients via telephone calls.\u003Cbr\u003E Understanding and evaluating customer needs.\u003Cbr\u003E Presenting the product or service favourably and in a structured professional way.\u003Cbr\u003E Negotiate / close deals and handle complaints or objections.\u003Cbr\u003E Maintaining and developing long term relationships with clients.\u003Cbr\u003E Maintains quality service by establishing and enforcing Organization standards.\u003Cbr\u003E Collaborate with team to achieve better results.\u003Cbr\u003E Skills: \u003Cbr\u003E Good communication skills.\u003Cbr\u003E Fast learner and passion for sales.\u003Cbr\u003E Demonstrate the quality of interacting with new people.\u003Cbr\u003E Possess a high degree of self - motivation and ambition.\u003Cbr\u003E Understanding of negotation techniques.\u003Cbr\u003E\u003Cbr\u003E: \u003Cbr\u003E Any Graduate / Post Graduate.\u003Cbr\u003E  Venue: \u003Cbr\u003ECapitalAim Financial Advisory Pvt. Ltd.",
    jobUrl:
      "https://www.naukri.com/job-listings-opening-for-bba-mba-bca-ba-be-b-com-m-com-freshers-capitalaim-financial-advisory-pvt-ltd-indore-0-to-1-years-100317500543",
    strengths: [
      "Communication Skills",
      "Adaptability",
      "Problem-Solving",
      "Teamwork",
      "Customer Relationship Management",
    ],
    recommendations: [
      "Improve knowledge in financial compliance, regulatory compliance, and internal audit",
      "Develop legal knowledge and understanding of court procedures",
      "Enhance skills in equity research, investment management, and mutual funds",
      "Gain expertise in business consulting and legal drafting",
      "Strengthen tax compliance and forex trading knowledge",
      "Learn about corporate laws and legal research",
      "Develop skills in investment banking and XBRL",
      "Understand legal ethics and banking operations",
      "Improve SQL and insolvency-related skills",
      "Enhance investment analysis and reconciliation abilities",
      "Gain expertise in GST, stock market analysis, and tax preparation",
      "Strengthen financial modeling and financial regulations knowledge",
    ],
  },
  {
    companyName: "Capital Aim",
    vacancies: 1,
    job_skills: [
      "Financial Advisory",
      "Customer Service",
      "Sales",
      "Financial Analysis",
      "Microsoft Office",
    ],
    minSalary: 200000,
    maxSalary: 300000,
    cas_score: 72,
    logo:"https://www.naukri.com/hotjobs/images/v3/devmantraf_apr22.gif",
    role: "Opening For BBA, MBA, BCA, BA, BE, B.com, M.com Freshers",
    industry: "Financial Services",
    location: "Indore",
    jobDescription:
      "Company Profile: \u003Cbr\u003ECapital Aim Financial Advisory Pvt Ltd is India s leading financial advisory firm committed to\u003Cbr\u003Emake fair ,  holistic and top quality financial recommendations and tips accessible to all traders and\u003Cbr\u003Einvestors in India.\u003Cbr\u003EOur pressure free work environment and employee centric policies are our USP giving our\u003Cbr\u003Eemployees an opportunity to work with flexibility and grow in their career.\u003Cbr\u003E \u003Cbr\u003E Job Location : Indore \u003Cbr\u003E Responsibilities: \u003Cbr\u003E Establish contact with clients via telephone calls.\u003Cbr\u003E Understanding and evaluating customer needs.\u003Cbr\u003E Presenting the product or service favourably and in a structured professional way.\u003Cbr\u003E Negotiate / close deals and handle complaints or objections.\u003Cbr\u003E Maintaining and developing long term relationships with clients.\u003Cbr\u003E Maintains quality service by establishing and enforcing Organization standards.\u003Cbr\u003E Collaborate with team to achieve better results.\u003Cbr\u003E Skills: \u003Cbr\u003E Good communication skills.\u003Cbr\u003E Fast learner and passion for sales.\u003Cbr\u003E Demonstrate the quality of interacting with new people.\u003Cbr\u003E Possess a high degree of self - motivation and ambition.\u003Cbr\u003E Understanding of negotation techniques.\u003Cbr\u003E\u003Cbr\u003E: \u003Cbr\u003E Any Graduate / Post Graduate.\u003Cbr\u003E  Venue: \u003Cbr\u003ECapitalAim Financial Advisory Pvt. Ltd.",
    jobUrl:
      "https://www.naukri.com/job-listings-opening-for-bba-mba-bca-ba-be-b-com-m-com-freshers-capitalaim-financial-advisory-pvt-ltd-indore-0-to-1-years-100317500543",
    strengths: [
      "Communication Skills",
      "Adaptability",
      "Problem-Solving",
      "Teamwork",
      "Customer Relationship Management",
    ],
    recommendations: [
      "Improve knowledge in financial compliance, regulatory compliance, and internal audit",
      "Develop legal knowledge and understanding of court procedures",
      "Enhance skills in equity research, investment management, and mutual funds",
      "Gain expertise in business consulting and legal drafting",
      "Strengthen tax compliance and forex trading knowledge",
      "Learn about corporate laws and legal research",
      "Develop skills in investment banking and XBRL",
      "Understand legal ethics and banking operations",
      "Improve SQL and insolvency-related skills",
      "Enhance investment analysis and reconciliation abilities",
      "Gain expertise in GST, stock market analysis, and tax preparation",
      "Strengthen financial modeling and financial regulations knowledge",
    ],
  },
  {
    companyName: "Capital Aim",
    vacancies: 1,
    job_skills: [
      "Financial Advisory",
      "Customer Service",
      "Sales",
      "Financial Analysis",
      "Microsoft Office",
    ],
    minSalary: 200000,
    maxSalary: 300000,
    cas_score: 72,
    logo:"https://www.naukri.com/hotjobs/images/v3/devmantraf_apr22.gif",
    role: "Opening For BBA, MBA, BCA, BA, BE, B.com, M.com Freshers",
    industry: "Financial Services",
    location: "Indore",
    jobDescription:
      "Company Profile: \u003Cbr\u003ECapital Aim Financial Advisory Pvt Ltd is India s leading financial advisory firm committed to\u003Cbr\u003Emake fair ,  holistic and top quality financial recommendations and tips accessible to all traders and\u003Cbr\u003Einvestors in India.\u003Cbr\u003EOur pressure free work environment and employee centric policies are our USP giving our\u003Cbr\u003Eemployees an opportunity to work with flexibility and grow in their career.\u003Cbr\u003E \u003Cbr\u003E Job Location : Indore \u003Cbr\u003E Responsibilities: \u003Cbr\u003E Establish contact with clients via telephone calls.\u003Cbr\u003E Understanding and evaluating customer needs.\u003Cbr\u003E Presenting the product or service favourably and in a structured professional way.\u003Cbr\u003E Negotiate / close deals and handle complaints or objections.\u003Cbr\u003E Maintaining and developing long term relationships with clients.\u003Cbr\u003E Maintains quality service by establishing and enforcing Organization standards.\u003Cbr\u003E Collaborate with team to achieve better results.\u003Cbr\u003E Skills: \u003Cbr\u003E Good communication skills.\u003Cbr\u003E Fast learner and passion for sales.\u003Cbr\u003E Demonstrate the quality of interacting with new people.\u003Cbr\u003E Possess a high degree of self - motivation and ambition.\u003Cbr\u003E Understanding of negotation techniques.\u003Cbr\u003E\u003Cbr\u003E: \u003Cbr\u003E Any Graduate / Post Graduate.\u003Cbr\u003E  Venue: \u003Cbr\u003ECapitalAim Financial Advisory Pvt. Ltd.",
    jobUrl:
      "https://www.naukri.com/job-listings-opening-for-bba-mba-bca-ba-be-b-com-m-com-freshers-capitalaim-financial-advisory-pvt-ltd-indore-0-to-1-years-100317500543",
    strengths: [
      "Communication Skills",
      "Adaptability",
      "Problem-Solving",
      "Teamwork",
      "Customer Relationship Management",
    ],
    recommendations: [
      "Improve knowledge in financial compliance, regulatory compliance, and internal audit",
      "Develop legal knowledge and understanding of court procedures",
      "Enhance skills in equity research, investment management, and mutual funds",
      "Gain expertise in business consulting and legal drafting",
      "Strengthen tax compliance and forex trading knowledge",
      "Learn about corporate laws and legal research",
      "Develop skills in investment banking and XBRL",
      "Understand legal ethics and banking operations",
      "Improve SQL and insolvency-related skills",
      "Enhance investment analysis and reconciliation abilities",
      "Gain expertise in GST, stock market analysis, and tax preparation",
      "Strengthen financial modeling and financial regulations knowledge",
    ],
  },
  {
    companyName: "Capital Aim",
    vacancies: 1,
    job_skills: [
      "Financial Advisory",
      "Customer Service",
      "Sales",
      "Financial Analysis",
      "Microsoft Office",
    ],
    minSalary: 200000,
    maxSalary: 300000,
    cas_score: 72,
    logo:"https://www.naukri.com/hotjobs/images/v3/devmantraf_apr22.gif",
    role: "Opening For BBA, MBA, BCA, BA, BE, B.com, M.com Freshers",
    industry: "Financial Services",
    location: "Indore",
    jobDescription:
      "Company Profile: \u003Cbr\u003ECapital Aim Financial Advisory Pvt Ltd is India s leading financial advisory firm committed to\u003Cbr\u003Emake fair ,  holistic and top quality financial recommendations and tips accessible to all traders and\u003Cbr\u003Einvestors in India.\u003Cbr\u003EOur pressure free work environment and employee centric policies are our USP giving our\u003Cbr\u003Eemployees an opportunity to work with flexibility and grow in their career.\u003Cbr\u003E \u003Cbr\u003E Job Location : Indore \u003Cbr\u003E Responsibilities: \u003Cbr\u003E Establish contact with clients via telephone calls.\u003Cbr\u003E Understanding and evaluating customer needs.\u003Cbr\u003E Presenting the product or service favourably and in a structured professional way.\u003Cbr\u003E Negotiate / close deals and handle complaints or objections.\u003Cbr\u003E Maintaining and developing long term relationships with clients.\u003Cbr\u003E Maintains quality service by establishing and enforcing Organization standards.\u003Cbr\u003E Collaborate with team to achieve better results.\u003Cbr\u003E Skills: \u003Cbr\u003E Good communication skills.\u003Cbr\u003E Fast learner and passion for sales.\u003Cbr\u003E Demonstrate the quality of interacting with new people.\u003Cbr\u003E Possess a high degree of self - motivation and ambition.\u003Cbr\u003E Understanding of negotation techniques.\u003Cbr\u003E\u003Cbr\u003E: \u003Cbr\u003E Any Graduate / Post Graduate.\u003Cbr\u003E  Venue: \u003Cbr\u003ECapitalAim Financial Advisory Pvt. Ltd.",
    jobUrl:
      "https://www.naukri.com/job-listings-opening-for-bba-mba-bca-ba-be-b-com-m-com-freshers-capitalaim-financial-advisory-pvt-ltd-indore-0-to-1-years-100317500543",
    strengths: [
      "Communication Skills",
      "Adaptability",
      "Problem-Solving",
      "Teamwork",
      "Customer Relationship Management",
    ],
    recommendations: [
      "Improve knowledge in financial compliance, regulatory compliance, and internal audit",
      "Develop legal knowledge and understanding of court procedures",
      "Enhance skills in equity research, investment management, and mutual funds",
      "Gain expertise in business consulting and legal drafting",
      "Strengthen tax compliance and forex trading knowledge",
      "Learn about corporate laws and legal research",
      "Develop skills in investment banking and XBRL",
      "Understand legal ethics and banking operations",
      "Improve SQL and insolvency-related skills",
      "Enhance investment analysis and reconciliation abilities",
      "Gain expertise in GST, stock market analysis, and tax preparation",
      "Strengthen financial modeling and financial regulations knowledge",
    ],
  },
  {
    companyName: "Capital Aim",
    vacancies: 1,
    job_skills: [
      "Financial Advisory",
      "Customer Service",
      "Sales",
      "Financial Analysis",
      "Microsoft Office",
    ],
    minSalary: 200000,
    maxSalary: 300000,
    cas_score: 72,
    logo:"https://www.naukri.com/hotjobs/images/v3/devmantraf_apr22.gif",
    role: "Opening For BBA, MBA, BCA, BA, BE, B.com, M.com Freshers",
    industry: "Financial Services",
    location: "Indore",
    jobDescription:
      "Company Profile: \u003Cbr\u003ECapital Aim Financial Advisory Pvt Ltd is India s leading financial advisory firm committed to\u003Cbr\u003Emake fair ,  holistic and top quality financial recommendations and tips accessible to all traders and\u003Cbr\u003Einvestors in India.\u003Cbr\u003EOur pressure free work environment and employee centric policies are our USP giving our\u003Cbr\u003Eemployees an opportunity to work with flexibility and grow in their career.\u003Cbr\u003E \u003Cbr\u003E Job Location : Indore \u003Cbr\u003E Responsibilities: \u003Cbr\u003E Establish contact with clients via telephone calls.\u003Cbr\u003E Understanding and evaluating customer needs.\u003Cbr\u003E Presenting the product or service favourably and in a structured professional way.\u003Cbr\u003E Negotiate / close deals and handle complaints or objections.\u003Cbr\u003E Maintaining and developing long term relationships with clients.\u003Cbr\u003E Maintains quality service by establishing and enforcing Organization standards.\u003Cbr\u003E Collaborate with team to achieve better results.\u003Cbr\u003E Skills: \u003Cbr\u003E Good communication skills.\u003Cbr\u003E Fast learner and passion for sales.\u003Cbr\u003E Demonstrate the quality of interacting with new people.\u003Cbr\u003E Possess a high degree of self - motivation and ambition.\u003Cbr\u003E Understanding of negotation techniques.\u003Cbr\u003E\u003Cbr\u003E: \u003Cbr\u003E Any Graduate / Post Graduate.\u003Cbr\u003E  Venue: \u003Cbr\u003ECapitalAim Financial Advisory Pvt. Ltd.",
    jobUrl:
      "https://www.naukri.com/job-listings-opening-for-bba-mba-bca-ba-be-b-com-m-com-freshers-capitalaim-financial-advisory-pvt-ltd-indore-0-to-1-years-100317500543",
    strengths: [
      "Communication Skills",
      "Adaptability",
      "Problem-Solving",
      "Teamwork",
      "Customer Relationship Management",
    ],
    recommendations: [
      "Improve knowledge in financial compliance, regulatory compliance, and internal audit",
      "Develop legal knowledge and understanding of court procedures",
      "Enhance skills in equity research, investment management, and mutual funds",
      "Gain expertise in business consulting and legal drafting",
      "Strengthen tax compliance and forex trading knowledge",
      "Learn about corporate laws and legal research",
      "Develop skills in investment banking and XBRL",
      "Understand legal ethics and banking operations",
      "Improve SQL and insolvency-related skills",
      "Enhance investment analysis and reconciliation abilities",
      "Gain expertise in GST, stock market analysis, and tax preparation",
      "Strengthen financial modeling and financial regulations knowledge",
    ],
  },
  {
    companyName: "Capital Aim",
    vacancies: 1,
    job_skills: [
      "Financial Advisory",
      "Customer Service",
      "Sales",
      "Financial Analysis",
      "Microsoft Office",
    ],
    minSalary: 200000,
    maxSalary: 300000,
    cas_score: 72,
    logo:"https://www.naukri.com/hotjobs/images/v3/devmantraf_apr22.gif",
    role: "Opening For BBA, MBA, BCA, BA, BE, B.com, M.com Freshers",
    industry: "Financial Services",
    location: "Indore",
    jobDescription:
      "Company Profile: \u003Cbr\u003ECapital Aim Financial Advisory Pvt Ltd is India s leading financial advisory firm committed to\u003Cbr\u003Emake fair ,  holistic and top quality financial recommendations and tips accessible to all traders and\u003Cbr\u003Einvestors in India.\u003Cbr\u003EOur pressure free work environment and employee centric policies are our USP giving our\u003Cbr\u003Eemployees an opportunity to work with flexibility and grow in their career.\u003Cbr\u003E \u003Cbr\u003E Job Location : Indore \u003Cbr\u003E Responsibilities: \u003Cbr\u003E Establish contact with clients via telephone calls.\u003Cbr\u003E Understanding and evaluating customer needs.\u003Cbr\u003E Presenting the product or service favourably and in a structured professional way.\u003Cbr\u003E Negotiate / close deals and handle complaints or objections.\u003Cbr\u003E Maintaining and developing long term relationships with clients.\u003Cbr\u003E Maintains quality service by establishing and enforcing Organization standards.\u003Cbr\u003E Collaborate with team to achieve better results.\u003Cbr\u003E Skills: \u003Cbr\u003E Good communication skills.\u003Cbr\u003E Fast learner and passion for sales.\u003Cbr\u003E Demonstrate the quality of interacting with new people.\u003Cbr\u003E Possess a high degree of self - motivation and ambition.\u003Cbr\u003E Understanding of negotation techniques.\u003Cbr\u003E\u003Cbr\u003E: \u003Cbr\u003E Any Graduate / Post Graduate.\u003Cbr\u003E  Venue: \u003Cbr\u003ECapitalAim Financial Advisory Pvt. Ltd.",
    jobUrl:
      "https://www.naukri.com/job-listings-opening-for-bba-mba-bca-ba-be-b-com-m-com-freshers-capitalaim-financial-advisory-pvt-ltd-indore-0-to-1-years-100317500543",
    strengths: [
      "Communication Skills",
      "Adaptability",
      "Problem-Solving",
      "Teamwork",
      "Customer Relationship Management",
    ],
    recommendations: [
      "Improve knowledge in financial compliance, regulatory compliance, and internal audit",
      "Develop legal knowledge and understanding of court procedures",
      "Enhance skills in equity research, investment management, and mutual funds",
      "Gain expertise in business consulting and legal drafting",
      "Strengthen tax compliance and forex trading knowledge",
      "Learn about corporate laws and legal research",
      "Develop skills in investment banking and XBRL",
      "Understand legal ethics and banking operations",
      "Improve SQL and insolvency-related skills",
      "Enhance investment analysis and reconciliation abilities",
      "Gain expertise in GST, stock market analysis, and tax preparation",
      "Strengthen financial modeling and financial regulations knowledge",
    ],
  },
  {
    companyName: "Capital Aim",
    vacancies: 1,
    job_skills: [
      "Financial Advisory",
      "Customer Service",
      "Sales",
      "Financial Analysis",
      "Microsoft Office",
    ],
    minSalary: 200000,
    maxSalary: 300000,
    cas_score: 72,
    logo:"https://www.naukri.com/hotjobs/images/v3/devmantraf_apr22.gif",
    role: "Opening For BBA, MBA, BCA, BA, BE, B.com, M.com Freshers",
    industry: "Financial Services",
    location: "Indore",
    jobDescription:
      "Company Profile: \u003Cbr\u003ECapital Aim Financial Advisory Pvt Ltd is India s leading financial advisory firm committed to\u003Cbr\u003Emake fair ,  holistic and top quality financial recommendations and tips accessible to all traders and\u003Cbr\u003Einvestors in India.\u003Cbr\u003EOur pressure free work environment and employee centric policies are our USP giving our\u003Cbr\u003Eemployees an opportunity to work with flexibility and grow in their career.\u003Cbr\u003E \u003Cbr\u003E Job Location : Indore \u003Cbr\u003E Responsibilities: \u003Cbr\u003E Establish contact with clients via telephone calls.\u003Cbr\u003E Understanding and evaluating customer needs.\u003Cbr\u003E Presenting the product or service favourably and in a structured professional way.\u003Cbr\u003E Negotiate / close deals and handle complaints or objections.\u003Cbr\u003E Maintaining and developing long term relationships with clients.\u003Cbr\u003E Maintains quality service by establishing and enforcing Organization standards.\u003Cbr\u003E Collaborate with team to achieve better results.\u003Cbr\u003E Skills: \u003Cbr\u003E Good communication skills.\u003Cbr\u003E Fast learner and passion for sales.\u003Cbr\u003E Demonstrate the quality of interacting with new people.\u003Cbr\u003E Possess a high degree of self - motivation and ambition.\u003Cbr\u003E Understanding of negotation techniques.\u003Cbr\u003E\u003Cbr\u003E: \u003Cbr\u003E Any Graduate / Post Graduate.\u003Cbr\u003E  Venue: \u003Cbr\u003ECapitalAim Financial Advisory Pvt. Ltd.",
    jobUrl:
      "https://www.naukri.com/job-listings-opening-for-bba-mba-bca-ba-be-b-com-m-com-freshers-capitalaim-financial-advisory-pvt-ltd-indore-0-to-1-years-100317500543",
    strengths: [
      "Communication Skills",
      "Adaptability",
      "Problem-Solving",
      "Teamwork",
      "Customer Relationship Management",
    ],
    recommendations: [
      "Improve knowledge in financial compliance, regulatory compliance, and internal audit",
      "Develop legal knowledge and understanding of court procedures",
      "Enhance skills in equity research, investment management, and mutual funds",
      "Gain expertise in business consulting and legal drafting",
      "Strengthen tax compliance and forex trading knowledge",
      "Learn about corporate laws and legal research",
      "Develop skills in investment banking and XBRL",
      "Understand legal ethics and banking operations",
      "Improve SQL and insolvency-related skills",
      "Enhance investment analysis and reconciliation abilities",
      "Gain expertise in GST, stock market analysis, and tax preparation",
      "Strengthen financial modeling and financial regulations knowledge",
    ],
  },
  {
    companyName: "Capital Aim",
    vacancies: 1,
    job_skills: [
      "Financial Advisory",
      "Customer Service",
      "Sales",
      "Financial Analysis",
      "Microsoft Office",
    ],
    minSalary: 200000,
    maxSalary: 300000,
    cas_score: 72,
    logo:"https://www.naukri.com/hotjobs/images/v3/devmantraf_apr22.gif",
    role: "Opening For BBA, MBA, BCA, BA, BE, B.com, M.com Freshers",
    industry: "Financial Services",
    location: "Indore",
    jobDescription:
      "Company Profile: \u003Cbr\u003ECapital Aim Financial Advisory Pvt Ltd is India s leading financial advisory firm committed to\u003Cbr\u003Emake fair ,  holistic and top quality financial recommendations and tips accessible to all traders and\u003Cbr\u003Einvestors in India.\u003Cbr\u003EOur pressure free work environment and employee centric policies are our USP giving our\u003Cbr\u003Eemployees an opportunity to work with flexibility and grow in their career.\u003Cbr\u003E \u003Cbr\u003E Job Location : Indore \u003Cbr\u003E Responsibilities: \u003Cbr\u003E Establish contact with clients via telephone calls.\u003Cbr\u003E Understanding and evaluating customer needs.\u003Cbr\u003E Presenting the product or service favourably and in a structured professional way.\u003Cbr\u003E Negotiate / close deals and handle complaints or objections.\u003Cbr\u003E Maintaining and developing long term relationships with clients.\u003Cbr\u003E Maintains quality service by establishing and enforcing Organization standards.\u003Cbr\u003E Collaborate with team to achieve better results.\u003Cbr\u003E Skills: \u003Cbr\u003E Good communication skills.\u003Cbr\u003E Fast learner and passion for sales.\u003Cbr\u003E Demonstrate the quality of interacting with new people.\u003Cbr\u003E Possess a high degree of self - motivation and ambition.\u003Cbr\u003E Understanding of negotation techniques.\u003Cbr\u003E\u003Cbr\u003E: \u003Cbr\u003E Any Graduate / Post Graduate.\u003Cbr\u003E  Venue: \u003Cbr\u003ECapitalAim Financial Advisory Pvt. Ltd.",
    jobUrl:
      "https://www.naukri.com/job-listings-opening-for-bba-mba-bca-ba-be-b-com-m-com-freshers-capitalaim-financial-advisory-pvt-ltd-indore-0-to-1-years-100317500543",
    strengths: [
      "Communication Skills",
      "Adaptability",
      "Problem-Solving",
      "Teamwork",
      "Customer Relationship Management",
    ],
    recommendations: [
      "Improve knowledge in financial compliance, regulatory compliance, and internal audit",
      "Develop legal knowledge and understanding of court procedures",
      "Enhance skills in equity research, investment management, and mutual funds",
      "Gain expertise in business consulting and legal drafting",
      "Strengthen tax compliance and forex trading knowledge",
      "Learn about corporate laws and legal research",
      "Develop skills in investment banking and XBRL",
      "Understand legal ethics and banking operations",
      "Improve SQL and insolvency-related skills",
      "Enhance investment analysis and reconciliation abilities",
      "Gain expertise in GST, stock market analysis, and tax preparation",
      "Strengthen financial modeling and financial regulations knowledge",
    ],
  },
  {
    companyName: "Capital Aim",
    vacancies: 1,
    job_skills: [
      "Financial Advisory",
      "Customer Service",
      "Sales",
      "Financial Analysis",
      "Microsoft Office",
    ],
    minSalary: 200000,
    maxSalary: 300000,
    cas_score: 72,
    logo:"https://www.naukri.com/hotjobs/images/v3/devmantraf_apr22.gif",
    role: "Opening For BBA, MBA, BCA, BA, BE, B.com, M.com Freshers",
    industry: "Financial Services",
    location: "Indore",
    jobDescription:
      "Company Profile: \u003Cbr\u003ECapital Aim Financial Advisory Pvt Ltd is India s leading financial advisory firm committed to\u003Cbr\u003Emake fair ,  holistic and top quality financial recommendations and tips accessible to all traders and\u003Cbr\u003Einvestors in India.\u003Cbr\u003EOur pressure free work environment and employee centric policies are our USP giving our\u003Cbr\u003Eemployees an opportunity to work with flexibility and grow in their career.\u003Cbr\u003E \u003Cbr\u003E Job Location : Indore \u003Cbr\u003E Responsibilities: \u003Cbr\u003E Establish contact with clients via telephone calls.\u003Cbr\u003E Understanding and evaluating customer needs.\u003Cbr\u003E Presenting the product or service favourably and in a structured professional way.\u003Cbr\u003E Negotiate / close deals and handle complaints or objections.\u003Cbr\u003E Maintaining and developing long term relationships with clients.\u003Cbr\u003E Maintains quality service by establishing and enforcing Organization standards.\u003Cbr\u003E Collaborate with team to achieve better results.\u003Cbr\u003E Skills: \u003Cbr\u003E Good communication skills.\u003Cbr\u003E Fast learner and passion for sales.\u003Cbr\u003E Demonstrate the quality of interacting with new people.\u003Cbr\u003E Possess a high degree of self - motivation and ambition.\u003Cbr\u003E Understanding of negotation techniques.\u003Cbr\u003E\u003Cbr\u003E: \u003Cbr\u003E Any Graduate / Post Graduate.\u003Cbr\u003E  Venue: \u003Cbr\u003ECapitalAim Financial Advisory Pvt. Ltd.",
    jobUrl:
      "https://www.naukri.com/job-listings-opening-for-bba-mba-bca-ba-be-b-com-m-com-freshers-capitalaim-financial-advisory-pvt-ltd-indore-0-to-1-years-100317500543",
    strengths: [
      "Communication Skills",
      "Adaptability",
      "Problem-Solving",
      "Teamwork",
      "Customer Relationship Management",
    ],
    recommendations: [
      "Improve knowledge in financial compliance, regulatory compliance, and internal audit",
      "Develop legal knowledge and understanding of court procedures",
      "Enhance skills in equity research, investment management, and mutual funds",
      "Gain expertise in business consulting and legal drafting",
      "Strengthen tax compliance and forex trading knowledge",
      "Learn about corporate laws and legal research",
      "Develop skills in investment banking and XBRL",
      "Understand legal ethics and banking operations",
      "Improve SQL and insolvency-related skills",
      "Enhance investment analysis and reconciliation abilities",
      "Gain expertise in GST, stock market analysis, and tax preparation",
      "Strengthen financial modeling and financial regulations knowledge",
    ],
  },
  {
    companyName: "Capital Aim",
    vacancies: 1,
    job_skills: [
      "Financial Advisory",
      "Customer Service",
      "Sales",
      "Financial Analysis",
      "Microsoft Office",
    ],
    minSalary: 200000,
    maxSalary: 300000,
    cas_score: 72,
    logo:"https://www.naukri.com/hotjobs/images/v3/devmantraf_apr22.gif",
    role: "Opening For BBA, MBA, BCA, BA, BE, B.com, M.com Freshers",
    industry: "Financial Services",
    location: "Indore",
    jobDescription:
      "Company Profile: \u003Cbr\u003ECapital Aim Financial Advisory Pvt Ltd is India s leading financial advisory firm committed to\u003Cbr\u003Emake fair ,  holistic and top quality financial recommendations and tips accessible to all traders and\u003Cbr\u003Einvestors in India.\u003Cbr\u003EOur pressure free work environment and employee centric policies are our USP giving our\u003Cbr\u003Eemployees an opportunity to work with flexibility and grow in their career.\u003Cbr\u003E \u003Cbr\u003E Job Location : Indore \u003Cbr\u003E Responsibilities: \u003Cbr\u003E Establish contact with clients via telephone calls.\u003Cbr\u003E Understanding and evaluating customer needs.\u003Cbr\u003E Presenting the product or service favourably and in a structured professional way.\u003Cbr\u003E Negotiate / close deals and handle complaints or objections.\u003Cbr\u003E Maintaining and developing long term relationships with clients.\u003Cbr\u003E Maintains quality service by establishing and enforcing Organization standards.\u003Cbr\u003E Collaborate with team to achieve better results.\u003Cbr\u003E Skills: \u003Cbr\u003E Good communication skills.\u003Cbr\u003E Fast learner and passion for sales.\u003Cbr\u003E Demonstrate the quality of interacting with new people.\u003Cbr\u003E Possess a high degree of self - motivation and ambition.\u003Cbr\u003E Understanding of negotation techniques.\u003Cbr\u003E\u003Cbr\u003E: \u003Cbr\u003E Any Graduate / Post Graduate.\u003Cbr\u003E  Venue: \u003Cbr\u003ECapitalAim Financial Advisory Pvt. Ltd.",
    jobUrl:
      "https://www.naukri.com/job-listings-opening-for-bba-mba-bca-ba-be-b-com-m-com-freshers-capitalaim-financial-advisory-pvt-ltd-indore-0-to-1-years-100317500543",
    strengths: [
      "Communication Skills",
      "Adaptability",
      "Problem-Solving",
      "Teamwork",
      "Customer Relationship Management",
    ],
    recommendations: [
      "Improve knowledge in financial compliance, regulatory compliance, and internal audit",
      "Develop legal knowledge and understanding of court procedures",
      "Enhance skills in equity research, investment management, and mutual funds",
      "Gain expertise in business consulting and legal drafting",
      "Strengthen tax compliance and forex trading knowledge",
      "Learn about corporate laws and legal research",
      "Develop skills in investment banking and XBRL",
      "Understand legal ethics and banking operations",
      "Improve SQL and insolvency-related skills",
      "Enhance investment analysis and reconciliation abilities",
      "Gain expertise in GST, stock market analysis, and tax preparation",
      "Strengthen financial modeling and financial regulations knowledge",
    ],
  },
  {
    companyName: "Capital Aim",
    vacancies: 1,
    job_skills: [
      "Financial Advisory",
      "Customer Service",
      "Sales",
      "Financial Analysis",
      "Microsoft Office",
    ],
    minSalary: 200000,
    maxSalary: 300000,
    cas_score: 72,
    logo:"https://www.naukri.com/hotjobs/images/v3/devmantraf_apr22.gif",
    role: "Opening For BBA, MBA, BCA, BA, BE, B.com, M.com Freshers",
    industry: "Financial Services",
    location: "Indore",
    jobDescription:
      "Company Profile: \u003Cbr\u003ECapital Aim Financial Advisory Pvt Ltd is India s leading financial advisory firm committed to\u003Cbr\u003Emake fair ,  holistic and top quality financial recommendations and tips accessible to all traders and\u003Cbr\u003Einvestors in India.\u003Cbr\u003EOur pressure free work environment and employee centric policies are our USP giving our\u003Cbr\u003Eemployees an opportunity to work with flexibility and grow in their career.\u003Cbr\u003E \u003Cbr\u003E Job Location : Indore \u003Cbr\u003E Responsibilities: \u003Cbr\u003E Establish contact with clients via telephone calls.\u003Cbr\u003E Understanding and evaluating customer needs.\u003Cbr\u003E Presenting the product or service favourably and in a structured professional way.\u003Cbr\u003E Negotiate / close deals and handle complaints or objections.\u003Cbr\u003E Maintaining and developing long term relationships with clients.\u003Cbr\u003E Maintains quality service by establishing and enforcing Organization standards.\u003Cbr\u003E Collaborate with team to achieve better results.\u003Cbr\u003E Skills: \u003Cbr\u003E Good communication skills.\u003Cbr\u003E Fast learner and passion for sales.\u003Cbr\u003E Demonstrate the quality of interacting with new people.\u003Cbr\u003E Possess a high degree of self - motivation and ambition.\u003Cbr\u003E Understanding of negotation techniques.\u003Cbr\u003E\u003Cbr\u003E: \u003Cbr\u003E Any Graduate / Post Graduate.\u003Cbr\u003E  Venue: \u003Cbr\u003ECapitalAim Financial Advisory Pvt. Ltd.",
    jobUrl:
      "https://www.naukri.com/job-listings-opening-for-bba-mba-bca-ba-be-b-com-m-com-freshers-capitalaim-financial-advisory-pvt-ltd-indore-0-to-1-years-100317500543",
    strengths: [
      "Communication Skills",
      "Adaptability",
      "Problem-Solving",
      "Teamwork",
      "Customer Relationship Management",
    ],
    recommendations: [
      "Improve knowledge in financial compliance, regulatory compliance, and internal audit",
      "Develop legal knowledge and understanding of court procedures",
      "Enhance skills in equity research, investment management, and mutual funds",
      "Gain expertise in business consulting and legal drafting",
      "Strengthen tax compliance and forex trading knowledge",
      "Learn about corporate laws and legal research",
      "Develop skills in investment banking and XBRL",
      "Understand legal ethics and banking operations",
      "Improve SQL and insolvency-related skills",
      "Enhance investment analysis and reconciliation abilities",
      "Gain expertise in GST, stock market analysis, and tax preparation",
      "Strengthen financial modeling and financial regulations knowledge",
    ],
  },
  {
    companyName: "Capital Aim",
    vacancies: 1,
    job_skills: [
      "Financial Advisory",
      "Customer Service",
      "Sales",
      "Financial Analysis",
      "Microsoft Office",
    ],
    minSalary: 200000,
    maxSalary: 300000,
    cas_score: 72,
    logo:"https://www.naukri.com/hotjobs/images/v3/devmantraf_apr22.gif",
    role: "Opening For BBA, MBA, BCA, BA, BE, B.com, M.com Freshers",
    industry: "Financial Services",
    location: "Indore",
    jobDescription:
      "Company Profile: \u003Cbr\u003ECapital Aim Financial Advisory Pvt Ltd is India s leading financial advisory firm committed to\u003Cbr\u003Emake fair ,  holistic and top quality financial recommendations and tips accessible to all traders and\u003Cbr\u003Einvestors in India.\u003Cbr\u003EOur pressure free work environment and employee centric policies are our USP giving our\u003Cbr\u003Eemployees an opportunity to work with flexibility and grow in their career.\u003Cbr\u003E \u003Cbr\u003E Job Location : Indore \u003Cbr\u003E Responsibilities: \u003Cbr\u003E Establish contact with clients via telephone calls.\u003Cbr\u003E Understanding and evaluating customer needs.\u003Cbr\u003E Presenting the product or service favourably and in a structured professional way.\u003Cbr\u003E Negotiate / close deals and handle complaints or objections.\u003Cbr\u003E Maintaining and developing long term relationships with clients.\u003Cbr\u003E Maintains quality service by establishing and enforcing Organization standards.\u003Cbr\u003E Collaborate with team to achieve better results.\u003Cbr\u003E Skills: \u003Cbr\u003E Good communication skills.\u003Cbr\u003E Fast learner and passion for sales.\u003Cbr\u003E Demonstrate the quality of interacting with new people.\u003Cbr\u003E Possess a high degree of self - motivation and ambition.\u003Cbr\u003E Understanding of negotation techniques.\u003Cbr\u003E\u003Cbr\u003E: \u003Cbr\u003E Any Graduate / Post Graduate.\u003Cbr\u003E  Venue: \u003Cbr\u003ECapitalAim Financial Advisory Pvt. Ltd.",
    jobUrl:
      "https://www.naukri.com/job-listings-opening-for-bba-mba-bca-ba-be-b-com-m-com-freshers-capitalaim-financial-advisory-pvt-ltd-indore-0-to-1-years-100317500543",
    strengths: [
      "Communication Skills",
      "Adaptability",
      "Problem-Solving",
      "Teamwork",
      "Customer Relationship Management",
    ],
    recommendations: [
      "Improve knowledge in financial compliance, regulatory compliance, and internal audit",
      "Develop legal knowledge and understanding of court procedures",
      "Enhance skills in equity research, investment management, and mutual funds",
      "Gain expertise in business consulting and legal drafting",
      "Strengthen tax compliance and forex trading knowledge",
      "Learn about corporate laws and legal research",
      "Develop skills in investment banking and XBRL",
      "Understand legal ethics and banking operations",
      "Improve SQL and insolvency-related skills",
      "Enhance investment analysis and reconciliation abilities",
      "Gain expertise in GST, stock market analysis, and tax preparation",
      "Strengthen financial modeling and financial regulations knowledge",
    ],
  },
  {
    companyName: "Capital Aim",
    vacancies: 1,
    job_skills: [
      "Financial Advisory",
      "Customer Service",
      "Sales",
      "Financial Analysis",
      "Microsoft Office",
    ],
    minSalary: 200000,
    maxSalary: 300000,
    cas_score: 72,
    logo:"https://www.naukri.com/hotjobs/images/v3/devmantraf_apr22.gif",
    role: "Opening For BBA, MBA, BCA, BA, BE, B.com, M.com Freshers",
    industry: "Financial Services",
    location: "Indore",
    jobDescription:
      "Company Profile: \u003Cbr\u003ECapital Aim Financial Advisory Pvt Ltd is India s leading financial advisory firm committed to\u003Cbr\u003Emake fair ,  holistic and top quality financial recommendations and tips accessible to all traders and\u003Cbr\u003Einvestors in India.\u003Cbr\u003EOur pressure free work environment and employee centric policies are our USP giving our\u003Cbr\u003Eemployees an opportunity to work with flexibility and grow in their career.\u003Cbr\u003E \u003Cbr\u003E Job Location : Indore \u003Cbr\u003E Responsibilities: \u003Cbr\u003E Establish contact with clients via telephone calls.\u003Cbr\u003E Understanding and evaluating customer needs.\u003Cbr\u003E Presenting the product or service favourably and in a structured professional way.\u003Cbr\u003E Negotiate / close deals and handle complaints or objections.\u003Cbr\u003E Maintaining and developing long term relationships with clients.\u003Cbr\u003E Maintains quality service by establishing and enforcing Organization standards.\u003Cbr\u003E Collaborate with team to achieve better results.\u003Cbr\u003E Skills: \u003Cbr\u003E Good communication skills.\u003Cbr\u003E Fast learner and passion for sales.\u003Cbr\u003E Demonstrate the quality of interacting with new people.\u003Cbr\u003E Possess a high degree of self - motivation and ambition.\u003Cbr\u003E Understanding of negotation techniques.\u003Cbr\u003E\u003Cbr\u003E: \u003Cbr\u003E Any Graduate / Post Graduate.\u003Cbr\u003E  Venue: \u003Cbr\u003ECapitalAim Financial Advisory Pvt. Ltd.",
    jobUrl:
      "https://www.naukri.com/job-listings-opening-for-bba-mba-bca-ba-be-b-com-m-com-freshers-capitalaim-financial-advisory-pvt-ltd-indore-0-to-1-years-100317500543",
    strengths: [
      "Communication Skills",
      "Adaptability",
      "Problem-Solving",
      "Teamwork",
      "Customer Relationship Management",
    ],
    recommendations: [
      "Improve knowledge in financial compliance, regulatory compliance, and internal audit",
      "Develop legal knowledge and understanding of court procedures",
      "Enhance skills in equity research, investment management, and mutual funds",
      "Gain expertise in business consulting and legal drafting",
      "Strengthen tax compliance and forex trading knowledge",
      "Learn about corporate laws and legal research",
      "Develop skills in investment banking and XBRL",
      "Understand legal ethics and banking operations",
      "Improve SQL and insolvency-related skills",
      "Enhance investment analysis and reconciliation abilities",
      "Gain expertise in GST, stock market analysis, and tax preparation",
      "Strengthen financial modeling and financial regulations knowledge",
    ],
  },
  {
    companyName: "Capital Aim",
    vacancies: 1,
    job_skills: [
      "Financial Advisory",
      "Customer Service",
      "Sales",
      "Financial Analysis",
      "Microsoft Office",
    ],
    minSalary: 200000,
    maxSalary: 300000,
    cas_score: 72,
    logo:"https://www.naukri.com/hotjobs/images/v3/devmantraf_apr22.gif",
    role: "Opening For BBA, MBA, BCA, BA, BE, B.com, M.com Freshers",
    industry: "Financial Services",
    location: "Indore",
    jobDescription:
      "Company Profile: \u003Cbr\u003ECapital Aim Financial Advisory Pvt Ltd is India s leading financial advisory firm committed to\u003Cbr\u003Emake fair ,  holistic and top quality financial recommendations and tips accessible to all traders and\u003Cbr\u003Einvestors in India.\u003Cbr\u003EOur pressure free work environment and employee centric policies are our USP giving our\u003Cbr\u003Eemployees an opportunity to work with flexibility and grow in their career.\u003Cbr\u003E \u003Cbr\u003E Job Location : Indore \u003Cbr\u003E Responsibilities: \u003Cbr\u003E Establish contact with clients via telephone calls.\u003Cbr\u003E Understanding and evaluating customer needs.\u003Cbr\u003E Presenting the product or service favourably and in a structured professional way.\u003Cbr\u003E Negotiate / close deals and handle complaints or objections.\u003Cbr\u003E Maintaining and developing long term relationships with clients.\u003Cbr\u003E Maintains quality service by establishing and enforcing Organization standards.\u003Cbr\u003E Collaborate with team to achieve better results.\u003Cbr\u003E Skills: \u003Cbr\u003E Good communication skills.\u003Cbr\u003E Fast learner and passion for sales.\u003Cbr\u003E Demonstrate the quality of interacting with new people.\u003Cbr\u003E Possess a high degree of self - motivation and ambition.\u003Cbr\u003E Understanding of negotation techniques.\u003Cbr\u003E\u003Cbr\u003E: \u003Cbr\u003E Any Graduate / Post Graduate.\u003Cbr\u003E  Venue: \u003Cbr\u003ECapitalAim Financial Advisory Pvt. Ltd.",
    jobUrl:
      "https://www.naukri.com/job-listings-opening-for-bba-mba-bca-ba-be-b-com-m-com-freshers-capitalaim-financial-advisory-pvt-ltd-indore-0-to-1-years-100317500543",
    strengths: [
      "Communication Skills",
      "Adaptability",
      "Problem-Solving",
      "Teamwork",
      "Customer Relationship Management",
    ],
    recommendations: [
      "Improve knowledge in financial compliance, regulatory compliance, and internal audit",
      "Develop legal knowledge and understanding of court procedures",
      "Enhance skills in equity research, investment management, and mutual funds",
      "Gain expertise in business consulting and legal drafting",
      "Strengthen tax compliance and forex trading knowledge",
      "Learn about corporate laws and legal research",
      "Develop skills in investment banking and XBRL",
      "Understand legal ethics and banking operations",
      "Improve SQL and insolvency-related skills",
      "Enhance investment analysis and reconciliation abilities",
      "Gain expertise in GST, stock market analysis, and tax preparation",
      "Strengthen financial modeling and financial regulations knowledge",
    ],
  },
  {
    companyName: "Capital Aim",
    vacancies: 1,
    job_skills: [
      "Financial Advisory",
      "Customer Service",
      "Sales",
      "Financial Analysis",
      "Microsoft Office",
    ],
    minSalary: 200000,
    maxSalary: 300000,
    cas_score: 72,
    logo:"https://www.naukri.com/hotjobs/images/v3/devmantraf_apr22.gif",
    role: "Opening For BBA, MBA, BCA, BA, BE, B.com, M.com Freshers",
    industry: "Financial Services",
    location: "Indore",
    jobDescription:
      "Company Profile: \u003Cbr\u003ECapital Aim Financial Advisory Pvt Ltd is India s leading financial advisory firm committed to\u003Cbr\u003Emake fair ,  holistic and top quality financial recommendations and tips accessible to all traders and\u003Cbr\u003Einvestors in India.\u003Cbr\u003EOur pressure free work environment and employee centric policies are our USP giving our\u003Cbr\u003Eemployees an opportunity to work with flexibility and grow in their career.\u003Cbr\u003E \u003Cbr\u003E Job Location : Indore \u003Cbr\u003E Responsibilities: \u003Cbr\u003E Establish contact with clients via telephone calls.\u003Cbr\u003E Understanding and evaluating customer needs.\u003Cbr\u003E Presenting the product or service favourably and in a structured professional way.\u003Cbr\u003E Negotiate / close deals and handle complaints or objections.\u003Cbr\u003E Maintaining and developing long term relationships with clients.\u003Cbr\u003E Maintains quality service by establishing and enforcing Organization standards.\u003Cbr\u003E Collaborate with team to achieve better results.\u003Cbr\u003E Skills: \u003Cbr\u003E Good communication skills.\u003Cbr\u003E Fast learner and passion for sales.\u003Cbr\u003E Demonstrate the quality of interacting with new people.\u003Cbr\u003E Possess a high degree of self - motivation and ambition.\u003Cbr\u003E Understanding of negotation techniques.\u003Cbr\u003E\u003Cbr\u003E: \u003Cbr\u003E Any Graduate / Post Graduate.\u003Cbr\u003E  Venue: \u003Cbr\u003ECapitalAim Financial Advisory Pvt. Ltd.",
    jobUrl:
      "https://www.naukri.com/job-listings-opening-for-bba-mba-bca-ba-be-b-com-m-com-freshers-capitalaim-financial-advisory-pvt-ltd-indore-0-to-1-years-100317500543",
    strengths: [
      "Communication Skills",
      "Adaptability",
      "Problem-Solving",
      "Teamwork",
      "Customer Relationship Management",
    ],
    recommendations: [
      "Improve knowledge in financial compliance, regulatory compliance, and internal audit",
      "Develop legal knowledge and understanding of court procedures",
      "Enhance skills in equity research, investment management, and mutual funds",
      "Gain expertise in business consulting and legal drafting",
      "Strengthen tax compliance and forex trading knowledge",
      "Learn about corporate laws and legal research",
      "Develop skills in investment banking and XBRL",
      "Understand legal ethics and banking operations",
      "Improve SQL and insolvency-related skills",
      "Enhance investment analysis and reconciliation abilities",
      "Gain expertise in GST, stock market analysis, and tax preparation",
      "Strengthen financial modeling and financial regulations knowledge",
    ],
  },
  {
    companyName: "Capital Aim",
    vacancies: 1,
    job_skills: [
      "Financial Advisory",
      "Customer Service",
      "Sales",
      "Financial Analysis",
      "Microsoft Office",
    ],
    minSalary: 200000,
    maxSalary: 300000,
    cas_score: 72,
    logo:"https://www.naukri.com/hotjobs/images/v3/devmantraf_apr22.gif",
    role: "Opening For BBA, MBA, BCA, BA, BE, B.com, M.com Freshers",
    industry: "Financial Services",
    location: "Indore",
    jobDescription:
      "Company Profile: \u003Cbr\u003ECapital Aim Financial Advisory Pvt Ltd is India s leading financial advisory firm committed to\u003Cbr\u003Emake fair ,  holistic and top quality financial recommendations and tips accessible to all traders and\u003Cbr\u003Einvestors in India.\u003Cbr\u003EOur pressure free work environment and employee centric policies are our USP giving our\u003Cbr\u003Eemployees an opportunity to work with flexibility and grow in their career.\u003Cbr\u003E \u003Cbr\u003E Job Location : Indore \u003Cbr\u003E Responsibilities: \u003Cbr\u003E Establish contact with clients via telephone calls.\u003Cbr\u003E Understanding and evaluating customer needs.\u003Cbr\u003E Presenting the product or service favourably and in a structured professional way.\u003Cbr\u003E Negotiate / close deals and handle complaints or objections.\u003Cbr\u003E Maintaining and developing long term relationships with clients.\u003Cbr\u003E Maintains quality service by establishing and enforcing Organization standards.\u003Cbr\u003E Collaborate with team to achieve better results.\u003Cbr\u003E Skills: \u003Cbr\u003E Good communication skills.\u003Cbr\u003E Fast learner and passion for sales.\u003Cbr\u003E Demonstrate the quality of interacting with new people.\u003Cbr\u003E Possess a high degree of self - motivation and ambition.\u003Cbr\u003E Understanding of negotation techniques.\u003Cbr\u003E\u003Cbr\u003E: \u003Cbr\u003E Any Graduate / Post Graduate.\u003Cbr\u003E  Venue: \u003Cbr\u003ECapitalAim Financial Advisory Pvt. Ltd.",
    jobUrl:
      "https://www.naukri.com/job-listings-opening-for-bba-mba-bca-ba-be-b-com-m-com-freshers-capitalaim-financial-advisory-pvt-ltd-indore-0-to-1-years-100317500543",
    strengths: [
      "Communication Skills",
      "Adaptability",
      "Problem-Solving",
      "Teamwork",
      "Customer Relationship Management",
    ],
    recommendations: [
      "Improve knowledge in financial compliance, regulatory compliance, and internal audit",
      "Develop legal knowledge and understanding of court procedures",
      "Enhance skills in equity research, investment management, and mutual funds",
      "Gain expertise in business consulting and legal drafting",
      "Strengthen tax compliance and forex trading knowledge",
      "Learn about corporate laws and legal research",
      "Develop skills in investment banking and XBRL",
      "Understand legal ethics and banking operations",
      "Improve SQL and insolvency-related skills",
      "Enhance investment analysis and reconciliation abilities",
      "Gain expertise in GST, stock market analysis, and tax preparation",
      "Strengthen financial modeling and financial regulations knowledge",
    ],
  },
  {
    companyName: "Capital Aim",
    vacancies: 1,
    job_skills: [
      "Financial Advisory",
      "Customer Service",
      "Sales",
      "Financial Analysis",
      "Microsoft Office",
    ],
    minSalary: 200000,
    maxSalary: 300000,
    cas_score: 72,
    logo:"https://www.naukri.com/hotjobs/images/v3/devmantraf_apr22.gif",
    role: "Opening For BBA, MBA, BCA, BA, BE, B.com, M.com Freshers",
    industry: "Financial Services",
    location: "Indore",
    jobDescription:
      "Company Profile: \u003Cbr\u003ECapital Aim Financial Advisory Pvt Ltd is India s leading financial advisory firm committed to\u003Cbr\u003Emake fair ,  holistic and top quality financial recommendations and tips accessible to all traders and\u003Cbr\u003Einvestors in India.\u003Cbr\u003EOur pressure free work environment and employee centric policies are our USP giving our\u003Cbr\u003Eemployees an opportunity to work with flexibility and grow in their career.\u003Cbr\u003E \u003Cbr\u003E Job Location : Indore \u003Cbr\u003E Responsibilities: \u003Cbr\u003E Establish contact with clients via telephone calls.\u003Cbr\u003E Understanding and evaluating customer needs.\u003Cbr\u003E Presenting the product or service favourably and in a structured professional way.\u003Cbr\u003E Negotiate / close deals and handle complaints or objections.\u003Cbr\u003E Maintaining and developing long term relationships with clients.\u003Cbr\u003E Maintains quality service by establishing and enforcing Organization standards.\u003Cbr\u003E Collaborate with team to achieve better results.\u003Cbr\u003E Skills: \u003Cbr\u003E Good communication skills.\u003Cbr\u003E Fast learner and passion for sales.\u003Cbr\u003E Demonstrate the quality of interacting with new people.\u003Cbr\u003E Possess a high degree of self - motivation and ambition.\u003Cbr\u003E Understanding of negotation techniques.\u003Cbr\u003E\u003Cbr\u003E: \u003Cbr\u003E Any Graduate / Post Graduate.\u003Cbr\u003E  Venue: \u003Cbr\u003ECapitalAim Financial Advisory Pvt. Ltd.",
    jobUrl:
      "https://www.naukri.com/job-listings-opening-for-bba-mba-bca-ba-be-b-com-m-com-freshers-capitalaim-financial-advisory-pvt-ltd-indore-0-to-1-years-100317500543",
    strengths: [
      "Communication Skills",
      "Adaptability",
      "Problem-Solving",
      "Teamwork",
      "Customer Relationship Management",
    ],
    recommendations: [
      "Improve knowledge in financial compliance, regulatory compliance, and internal audit",
      "Develop legal knowledge and understanding of court procedures",
      "Enhance skills in equity research, investment management, and mutual funds",
      "Gain expertise in business consulting and legal drafting",
      "Strengthen tax compliance and forex trading knowledge",
      "Learn about corporate laws and legal research",
      "Develop skills in investment banking and XBRL",
      "Understand legal ethics and banking operations",
      "Improve SQL and insolvency-related skills",
      "Enhance investment analysis and reconciliation abilities",
      "Gain expertise in GST, stock market analysis, and tax preparation",
      "Strengthen financial modeling and financial regulations knowledge",
    ],
  },
  {
    companyName: "Capital Aim",
    vacancies: 1,
    job_skills: [
      "Financial Advisory",
      "Customer Service",
      "Sales",
      "Financial Analysis",
      "Microsoft Office",
    ],
    minSalary: 200000,
    maxSalary: 300000,
    cas_score: 72,
    logo:"https://www.naukri.com/hotjobs/images/v3/devmantraf_apr22.gif",
    role: "Opening For BBA, MBA, BCA, BA, BE, B.com, M.com Freshers",
    industry: "Financial Services",
    location: "Indore",
    jobDescription:
      "Company Profile: \u003Cbr\u003ECapital Aim Financial Advisory Pvt Ltd is India s leading financial advisory firm committed to\u003Cbr\u003Emake fair ,  holistic and top quality financial recommendations and tips accessible to all traders and\u003Cbr\u003Einvestors in India.\u003Cbr\u003EOur pressure free work environment and employee centric policies are our USP giving our\u003Cbr\u003Eemployees an opportunity to work with flexibility and grow in their career.\u003Cbr\u003E \u003Cbr\u003E Job Location : Indore \u003Cbr\u003E Responsibilities: \u003Cbr\u003E Establish contact with clients via telephone calls.\u003Cbr\u003E Understanding and evaluating customer needs.\u003Cbr\u003E Presenting the product or service favourably and in a structured professional way.\u003Cbr\u003E Negotiate / close deals and handle complaints or objections.\u003Cbr\u003E Maintaining and developing long term relationships with clients.\u003Cbr\u003E Maintains quality service by establishing and enforcing Organization standards.\u003Cbr\u003E Collaborate with team to achieve better results.\u003Cbr\u003E Skills: \u003Cbr\u003E Good communication skills.\u003Cbr\u003E Fast learner and passion for sales.\u003Cbr\u003E Demonstrate the quality of interacting with new people.\u003Cbr\u003E Possess a high degree of self - motivation and ambition.\u003Cbr\u003E Understanding of negotation techniques.\u003Cbr\u003E\u003Cbr\u003E: \u003Cbr\u003E Any Graduate / Post Graduate.\u003Cbr\u003E  Venue: \u003Cbr\u003ECapitalAim Financial Advisory Pvt. Ltd.",
    jobUrl:
      "https://www.naukri.com/job-listings-opening-for-bba-mba-bca-ba-be-b-com-m-com-freshers-capitalaim-financial-advisory-pvt-ltd-indore-0-to-1-years-100317500543",
    strengths: [
      "Communication Skills",
      "Adaptability",
      "Problem-Solving",
      "Teamwork",
      "Customer Relationship Management",
    ],
    recommendations: [
      "Improve knowledge in financial compliance, regulatory compliance, and internal audit",
      "Develop legal knowledge and understanding of court procedures",
      "Enhance skills in equity research, investment management, and mutual funds",
      "Gain expertise in business consulting and legal drafting",
      "Strengthen tax compliance and forex trading knowledge",
      "Learn about corporate laws and legal research",
      "Develop skills in investment banking and XBRL",
      "Understand legal ethics and banking operations",
      "Improve SQL and insolvency-related skills",
      "Enhance investment analysis and reconciliation abilities",
      "Gain expertise in GST, stock market analysis, and tax preparation",
      "Strengthen financial modeling and financial regulations knowledge",
    ],
  },
  {
    companyName: "Capital Aim",
    vacancies: 1,
    job_skills: [
      "Financial Advisory",
      "Customer Service",
      "Sales",
      "Financial Analysis",
      "Microsoft Office",
    ],
    minSalary: 200000,
    maxSalary: 300000,
    cas_score: 72,
    logo:"https://www.naukri.com/hotjobs/images/v3/devmantraf_apr22.gif",
    role: "Opening For BBA, MBA, BCA, BA, BE, B.com, M.com Freshers",
    industry: "Financial Services",
    location: "Indore",
    jobDescription:
      "Company Profile: \u003Cbr\u003ECapital Aim Financial Advisory Pvt Ltd is India s leading financial advisory firm committed to\u003Cbr\u003Emake fair ,  holistic and top quality financial recommendations and tips accessible to all traders and\u003Cbr\u003Einvestors in India.\u003Cbr\u003EOur pressure free work environment and employee centric policies are our USP giving our\u003Cbr\u003Eemployees an opportunity to work with flexibility and grow in their career.\u003Cbr\u003E \u003Cbr\u003E Job Location : Indore \u003Cbr\u003E Responsibilities: \u003Cbr\u003E Establish contact with clients via telephone calls.\u003Cbr\u003E Understanding and evaluating customer needs.\u003Cbr\u003E Presenting the product or service favourably and in a structured professional way.\u003Cbr\u003E Negotiate / close deals and handle complaints or objections.\u003Cbr\u003E Maintaining and developing long term relationships with clients.\u003Cbr\u003E Maintains quality service by establishing and enforcing Organization standards.\u003Cbr\u003E Collaborate with team to achieve better results.\u003Cbr\u003E Skills: \u003Cbr\u003E Good communication skills.\u003Cbr\u003E Fast learner and passion for sales.\u003Cbr\u003E Demonstrate the quality of interacting with new people.\u003Cbr\u003E Possess a high degree of self - motivation and ambition.\u003Cbr\u003E Understanding of negotation techniques.\u003Cbr\u003E\u003Cbr\u003E: \u003Cbr\u003E Any Graduate / Post Graduate.\u003Cbr\u003E  Venue: \u003Cbr\u003ECapitalAim Financial Advisory Pvt. Ltd.",
    jobUrl:
      "https://www.naukri.com/job-listings-opening-for-bba-mba-bca-ba-be-b-com-m-com-freshers-capitalaim-financial-advisory-pvt-ltd-indore-0-to-1-years-100317500543",
    strengths: [
      "Communication Skills",
      "Adaptability",
      "Problem-Solving",
      "Teamwork",
      "Customer Relationship Management",
    ],
    recommendations: [
      "Improve knowledge in financial compliance, regulatory compliance, and internal audit",
      "Develop legal knowledge and understanding of court procedures",
      "Enhance skills in equity research, investment management, and mutual funds",
      "Gain expertise in business consulting and legal drafting",
      "Strengthen tax compliance and forex trading knowledge",
      "Learn about corporate laws and legal research",
      "Develop skills in investment banking and XBRL",
      "Understand legal ethics and banking operations",
      "Improve SQL and insolvency-related skills",
      "Enhance investment analysis and reconciliation abilities",
      "Gain expertise in GST, stock market analysis, and tax preparation",
      "Strengthen financial modeling and financial regulations knowledge",
    ],
  },
  {
    companyName: "Capital Aim",
    vacancies: 1,
    job_skills: [
      "Financial Advisory",
      "Customer Service",
      "Sales",
      "Financial Analysis",
      "Microsoft Office",
    ],
    minSalary: 200000,
    maxSalary: 300000,
    cas_score: 72,
    logo:"https://www.naukri.com/hotjobs/images/v3/devmantraf_apr22.gif",
    role: "Opening For BBA, MBA, BCA, BA, BE, B.com, M.com Freshers",
    industry: "Financial Services",
    location: "Indore",
    jobDescription:
      "Company Profile: \u003Cbr\u003ECapital Aim Financial Advisory Pvt Ltd is India s leading financial advisory firm committed to\u003Cbr\u003Emake fair ,  holistic and top quality financial recommendations and tips accessible to all traders and\u003Cbr\u003Einvestors in India.\u003Cbr\u003EOur pressure free work environment and employee centric policies are our USP giving our\u003Cbr\u003Eemployees an opportunity to work with flexibility and grow in their career.\u003Cbr\u003E \u003Cbr\u003E Job Location : Indore \u003Cbr\u003E Responsibilities: \u003Cbr\u003E Establish contact with clients via telephone calls.\u003Cbr\u003E Understanding and evaluating customer needs.\u003Cbr\u003E Presenting the product or service favourably and in a structured professional way.\u003Cbr\u003E Negotiate / close deals and handle complaints or objections.\u003Cbr\u003E Maintaining and developing long term relationships with clients.\u003Cbr\u003E Maintains quality service by establishing and enforcing Organization standards.\u003Cbr\u003E Collaborate with team to achieve better results.\u003Cbr\u003E Skills: \u003Cbr\u003E Good communication skills.\u003Cbr\u003E Fast learner and passion for sales.\u003Cbr\u003E Demonstrate the quality of interacting with new people.\u003Cbr\u003E Possess a high degree of self - motivation and ambition.\u003Cbr\u003E Understanding of negotation techniques.\u003Cbr\u003E\u003Cbr\u003E: \u003Cbr\u003E Any Graduate / Post Graduate.\u003Cbr\u003E  Venue: \u003Cbr\u003ECapitalAim Financial Advisory Pvt. Ltd.",
    jobUrl:
      "https://www.naukri.com/job-listings-opening-for-bba-mba-bca-ba-be-b-com-m-com-freshers-capitalaim-financial-advisory-pvt-ltd-indore-0-to-1-years-100317500543",
    strengths: [
      "Communication Skills",
      "Adaptability",
      "Problem-Solving",
      "Teamwork",
      "Customer Relationship Management",
    ],
    recommendations: [
      "Improve knowledge in financial compliance, regulatory compliance, and internal audit",
      "Develop legal knowledge and understanding of court procedures",
      "Enhance skills in equity research, investment management, and mutual funds",
      "Gain expertise in business consulting and legal drafting",
      "Strengthen tax compliance and forex trading knowledge",
      "Learn about corporate laws and legal research",
      "Develop skills in investment banking and XBRL",
      "Understand legal ethics and banking operations",
      "Improve SQL and insolvency-related skills",
      "Enhance investment analysis and reconciliation abilities",
      "Gain expertise in GST, stock market analysis, and tax preparation",
      "Strengthen financial modeling and financial regulations knowledge",
    ],
  },
  {
    companyName: "Capital Aim",
    vacancies: 1,
    job_skills: [
      "Financial Advisory",
      "Customer Service",
      "Sales",
      "Financial Analysis",
      "Microsoft Office",
    ],
    minSalary: 200000,
    maxSalary: 300000,
    cas_score: 72,
    logo:"https://www.naukri.com/hotjobs/images/v3/devmantraf_apr22.gif",
    role: "Opening For BBA, MBA, BCA, BA, BE, B.com, M.com Freshers",
    industry: "Financial Services",
    location: "Indore",
    jobDescription:
      "Company Profile: \u003Cbr\u003ECapital Aim Financial Advisory Pvt Ltd is India s leading financial advisory firm committed to\u003Cbr\u003Emake fair ,  holistic and top quality financial recommendations and tips accessible to all traders and\u003Cbr\u003Einvestors in India.\u003Cbr\u003EOur pressure free work environment and employee centric policies are our USP giving our\u003Cbr\u003Eemployees an opportunity to work with flexibility and grow in their career.\u003Cbr\u003E \u003Cbr\u003E Job Location : Indore \u003Cbr\u003E Responsibilities: \u003Cbr\u003E Establish contact with clients via telephone calls.\u003Cbr\u003E Understanding and evaluating customer needs.\u003Cbr\u003E Presenting the product or service favourably and in a structured professional way.\u003Cbr\u003E Negotiate / close deals and handle complaints or objections.\u003Cbr\u003E Maintaining and developing long term relationships with clients.\u003Cbr\u003E Maintains quality service by establishing and enforcing Organization standards.\u003Cbr\u003E Collaborate with team to achieve better results.\u003Cbr\u003E Skills: \u003Cbr\u003E Good communication skills.\u003Cbr\u003E Fast learner and passion for sales.\u003Cbr\u003E Demonstrate the quality of interacting with new people.\u003Cbr\u003E Possess a high degree of self - motivation and ambition.\u003Cbr\u003E Understanding of negotation techniques.\u003Cbr\u003E\u003Cbr\u003E: \u003Cbr\u003E Any Graduate / Post Graduate.\u003Cbr\u003E  Venue: \u003Cbr\u003ECapitalAim Financial Advisory Pvt. Ltd.",
    jobUrl:
      "https://www.naukri.com/job-listings-opening-for-bba-mba-bca-ba-be-b-com-m-com-freshers-capitalaim-financial-advisory-pvt-ltd-indore-0-to-1-years-100317500543",
    strengths: [
      "Communication Skills",
      "Adaptability",
      "Problem-Solving",
      "Teamwork",
      "Customer Relationship Management",
    ],
    recommendations: [
      "Improve knowledge in financial compliance, regulatory compliance, and internal audit",
      "Develop legal knowledge and understanding of court procedures",
      "Enhance skills in equity research, investment management, and mutual funds",
      "Gain expertise in business consulting and legal drafting",
      "Strengthen tax compliance and forex trading knowledge",
      "Learn about corporate laws and legal research",
      "Develop skills in investment banking and XBRL",
      "Understand legal ethics and banking operations",
      "Improve SQL and insolvency-related skills",
      "Enhance investment analysis and reconciliation abilities",
      "Gain expertise in GST, stock market analysis, and tax preparation",
      "Strengthen financial modeling and financial regulations knowledge",
    ],
  },
  {
    companyName: "Capital Aim",
    vacancies: 1,
    job_skills: [
      "Financial Advisory",
      "Customer Service",
      "Sales",
      "Financial Analysis",
      "Microsoft Office",
    ],
    minSalary: 200000,
    maxSalary: 300000,
    cas_score: 72,
    logo:"https://www.naukri.com/hotjobs/images/v3/devmantraf_apr22.gif",
    role: "Opening For BBA, MBA, BCA, BA, BE, B.com, M.com Freshers",
    industry: "Financial Services",
    location: "Indore",
    jobDescription:
      "Company Profile: \u003Cbr\u003ECapital Aim Financial Advisory Pvt Ltd is India s leading financial advisory firm committed to\u003Cbr\u003Emake fair ,  holistic and top quality financial recommendations and tips accessible to all traders and\u003Cbr\u003Einvestors in India.\u003Cbr\u003EOur pressure free work environment and employee centric policies are our USP giving our\u003Cbr\u003Eemployees an opportunity to work with flexibility and grow in their career.\u003Cbr\u003E \u003Cbr\u003E Job Location : Indore \u003Cbr\u003E Responsibilities: \u003Cbr\u003E Establish contact with clients via telephone calls.\u003Cbr\u003E Understanding and evaluating customer needs.\u003Cbr\u003E Presenting the product or service favourably and in a structured professional way.\u003Cbr\u003E Negotiate / close deals and handle complaints or objections.\u003Cbr\u003E Maintaining and developing long term relationships with clients.\u003Cbr\u003E Maintains quality service by establishing and enforcing Organization standards.\u003Cbr\u003E Collaborate with team to achieve better results.\u003Cbr\u003E Skills: \u003Cbr\u003E Good communication skills.\u003Cbr\u003E Fast learner and passion for sales.\u003Cbr\u003E Demonstrate the quality of interacting with new people.\u003Cbr\u003E Possess a high degree of self - motivation and ambition.\u003Cbr\u003E Understanding of negotation techniques.\u003Cbr\u003E\u003Cbr\u003E: \u003Cbr\u003E Any Graduate / Post Graduate.\u003Cbr\u003E  Venue: \u003Cbr\u003ECapitalAim Financial Advisory Pvt. Ltd.",
    jobUrl:
      "https://www.naukri.com/job-listings-opening-for-bba-mba-bca-ba-be-b-com-m-com-freshers-capitalaim-financial-advisory-pvt-ltd-indore-0-to-1-years-100317500543",
    strengths: [
      "Communication Skills",
      "Adaptability",
      "Problem-Solving",
      "Teamwork",
      "Customer Relationship Management",
    ],
    recommendations: [
      "Improve knowledge in financial compliance, regulatory compliance, and internal audit",
      "Develop legal knowledge and understanding of court procedures",
      "Enhance skills in equity research, investment management, and mutual funds",
      "Gain expertise in business consulting and legal drafting",
      "Strengthen tax compliance and forex trading knowledge",
      "Learn about corporate laws and legal research",
      "Develop skills in investment banking and XBRL",
      "Understand legal ethics and banking operations",
      "Improve SQL and insolvency-related skills",
      "Enhance investment analysis and reconciliation abilities",
      "Gain expertise in GST, stock market analysis, and tax preparation",
      "Strengthen financial modeling and financial regulations knowledge",
    ],
  },
  {
    companyName: "Capital Aim",
    vacancies: 1,
    job_skills: [
      "Financial Advisory",
      "Customer Service",
      "Sales",
      "Financial Analysis",
      "Microsoft Office",
    ],
    minSalary: 200000,
    maxSalary: 300000,
    cas_score: 72,
    logo:"https://www.naukri.com/hotjobs/images/v3/devmantraf_apr22.gif",
    role: "Opening For BBA, MBA, BCA, BA, BE, B.com, M.com Freshers",
    industry: "Financial Services",
    location: "Indore",
    jobDescription:
      "Company Profile: \u003Cbr\u003ECapital Aim Financial Advisory Pvt Ltd is India s leading financial advisory firm committed to\u003Cbr\u003Emake fair ,  holistic and top quality financial recommendations and tips accessible to all traders and\u003Cbr\u003Einvestors in India.\u003Cbr\u003EOur pressure free work environment and employee centric policies are our USP giving our\u003Cbr\u003Eemployees an opportunity to work with flexibility and grow in their career.\u003Cbr\u003E \u003Cbr\u003E Job Location : Indore \u003Cbr\u003E Responsibilities: \u003Cbr\u003E Establish contact with clients via telephone calls.\u003Cbr\u003E Understanding and evaluating customer needs.\u003Cbr\u003E Presenting the product or service favourably and in a structured professional way.\u003Cbr\u003E Negotiate / close deals and handle complaints or objections.\u003Cbr\u003E Maintaining and developing long term relationships with clients.\u003Cbr\u003E Maintains quality service by establishing and enforcing Organization standards.\u003Cbr\u003E Collaborate with team to achieve better results.\u003Cbr\u003E Skills: \u003Cbr\u003E Good communication skills.\u003Cbr\u003E Fast learner and passion for sales.\u003Cbr\u003E Demonstrate the quality of interacting with new people.\u003Cbr\u003E Possess a high degree of self - motivation and ambition.\u003Cbr\u003E Understanding of negotation techniques.\u003Cbr\u003E\u003Cbr\u003E: \u003Cbr\u003E Any Graduate / Post Graduate.\u003Cbr\u003E  Venue: \u003Cbr\u003ECapitalAim Financial Advisory Pvt. Ltd.",
    jobUrl:
      "https://www.naukri.com/job-listings-opening-for-bba-mba-bca-ba-be-b-com-m-com-freshers-capitalaim-financial-advisory-pvt-ltd-indore-0-to-1-years-100317500543",
    strengths: [
      "Communication Skills",
      "Adaptability",
      "Problem-Solving",
      "Teamwork",
      "Customer Relationship Management",
    ],
    recommendations: [
      "Improve knowledge in financial compliance, regulatory compliance, and internal audit",
      "Develop legal knowledge and understanding of court procedures",
      "Enhance skills in equity research, investment management, and mutual funds",
      "Gain expertise in business consulting and legal drafting",
      "Strengthen tax compliance and forex trading knowledge",
      "Learn about corporate laws and legal research",
      "Develop skills in investment banking and XBRL",
      "Understand legal ethics and banking operations",
      "Improve SQL and insolvency-related skills",
      "Enhance investment analysis and reconciliation abilities",
      "Gain expertise in GST, stock market analysis, and tax preparation",
      "Strengthen financial modeling and financial regulations knowledge",
    ],
  },
  {
    companyName: "Capital Aim",
    vacancies: 1,
    job_skills: [
      "Financial Advisory",
      "Customer Service",
      "Sales",
      "Financial Analysis",
      "Microsoft Office",
    ],
    minSalary: 200000,
    maxSalary: 300000,
    cas_score: 72,
    logo:"https://www.naukri.com/hotjobs/images/v3/devmantraf_apr22.gif",
    role: "Opening For BBA, MBA, BCA, BA, BE, B.com, M.com Freshers",
    industry: "Financial Services",
    location: "Indore",
    jobDescription:
      "Company Profile: \u003Cbr\u003ECapital Aim Financial Advisory Pvt Ltd is India s leading financial advisory firm committed to\u003Cbr\u003Emake fair ,  holistic and top quality financial recommendations and tips accessible to all traders and\u003Cbr\u003Einvestors in India.\u003Cbr\u003EOur pressure free work environment and employee centric policies are our USP giving our\u003Cbr\u003Eemployees an opportunity to work with flexibility and grow in their career.\u003Cbr\u003E \u003Cbr\u003E Job Location : Indore \u003Cbr\u003E Responsibilities: \u003Cbr\u003E Establish contact with clients via telephone calls.\u003Cbr\u003E Understanding and evaluating customer needs.\u003Cbr\u003E Presenting the product or service favourably and in a structured professional way.\u003Cbr\u003E Negotiate / close deals and handle complaints or objections.\u003Cbr\u003E Maintaining and developing long term relationships with clients.\u003Cbr\u003E Maintains quality service by establishing and enforcing Organization standards.\u003Cbr\u003E Collaborate with team to achieve better results.\u003Cbr\u003E Skills: \u003Cbr\u003E Good communication skills.\u003Cbr\u003E Fast learner and passion for sales.\u003Cbr\u003E Demonstrate the quality of interacting with new people.\u003Cbr\u003E Possess a high degree of self - motivation and ambition.\u003Cbr\u003E Understanding of negotation techniques.\u003Cbr\u003E\u003Cbr\u003E: \u003Cbr\u003E Any Graduate / Post Graduate.\u003Cbr\u003E  Venue: \u003Cbr\u003ECapitalAim Financial Advisory Pvt. Ltd.",
    jobUrl:
      "https://www.naukri.com/job-listings-opening-for-bba-mba-bca-ba-be-b-com-m-com-freshers-capitalaim-financial-advisory-pvt-ltd-indore-0-to-1-years-100317500543",
    strengths: [
      "Communication Skills",
      "Adaptability",
      "Problem-Solving",
      "Teamwork",
      "Customer Relationship Management",
    ],
    recommendations: [
      "Improve knowledge in financial compliance, regulatory compliance, and internal audit",
      "Develop legal knowledge and understanding of court procedures",
      "Enhance skills in equity research, investment management, and mutual funds",
      "Gain expertise in business consulting and legal drafting",
      "Strengthen tax compliance and forex trading knowledge",
      "Learn about corporate laws and legal research",
      "Develop skills in investment banking and XBRL",
      "Understand legal ethics and banking operations",
      "Improve SQL and insolvency-related skills",
      "Enhance investment analysis and reconciliation abilities",
      "Gain expertise in GST, stock market analysis, and tax preparation",
      "Strengthen financial modeling and financial regulations knowledge",
    ],
  },
  {
    companyName: "Capital Aim",
    vacancies: 1,
    job_skills: [
      "Financial Advisory",
      "Customer Service",
      "Sales",
      "Financial Analysis",
      "Microsoft Office",
    ],
    minSalary: 200000,
    maxSalary: 300000,
    cas_score: 72,
    logo:"https://www.naukri.com/hotjobs/images/v3/devmantraf_apr22.gif",
    role: "Opening For BBA, MBA, BCA, BA, BE, B.com, M.com Freshers",
    industry: "Financial Services",
    location: "Indore",
    jobDescription:
      "Company Profile: \u003Cbr\u003ECapital Aim Financial Advisory Pvt Ltd is India s leading financial advisory firm committed to\u003Cbr\u003Emake fair ,  holistic and top quality financial recommendations and tips accessible to all traders and\u003Cbr\u003Einvestors in India.\u003Cbr\u003EOur pressure free work environment and employee centric policies are our USP giving our\u003Cbr\u003Eemployees an opportunity to work with flexibility and grow in their career.\u003Cbr\u003E \u003Cbr\u003E Job Location : Indore \u003Cbr\u003E Responsibilities: \u003Cbr\u003E Establish contact with clients via telephone calls.\u003Cbr\u003E Understanding and evaluating customer needs.\u003Cbr\u003E Presenting the product or service favourably and in a structured professional way.\u003Cbr\u003E Negotiate / close deals and handle complaints or objections.\u003Cbr\u003E Maintaining and developing long term relationships with clients.\u003Cbr\u003E Maintains quality service by establishing and enforcing Organization standards.\u003Cbr\u003E Collaborate with team to achieve better results.\u003Cbr\u003E Skills: \u003Cbr\u003E Good communication skills.\u003Cbr\u003E Fast learner and passion for sales.\u003Cbr\u003E Demonstrate the quality of interacting with new people.\u003Cbr\u003E Possess a high degree of self - motivation and ambition.\u003Cbr\u003E Understanding of negotation techniques.\u003Cbr\u003E\u003Cbr\u003E: \u003Cbr\u003E Any Graduate / Post Graduate.\u003Cbr\u003E  Venue: \u003Cbr\u003ECapitalAim Financial Advisory Pvt. Ltd.",
    jobUrl:
      "https://www.naukri.com/job-listings-opening-for-bba-mba-bca-ba-be-b-com-m-com-freshers-capitalaim-financial-advisory-pvt-ltd-indore-0-to-1-years-100317500543",
    strengths: [
      "Communication Skills",
      "Adaptability",
      "Problem-Solving",
      "Teamwork",
      "Customer Relationship Management",
    ],
    recommendations: [
      "Improve knowledge in financial compliance, regulatory compliance, and internal audit",
      "Develop legal knowledge and understanding of court procedures",
      "Enhance skills in equity research, investment management, and mutual funds",
      "Gain expertise in business consulting and legal drafting",
      "Strengthen tax compliance and forex trading knowledge",
      "Learn about corporate laws and legal research",
      "Develop skills in investment banking and XBRL",
      "Understand legal ethics and banking operations",
      "Improve SQL and insolvency-related skills",
      "Enhance investment analysis and reconciliation abilities",
      "Gain expertise in GST, stock market analysis, and tax preparation",
      "Strengthen financial modeling and financial regulations knowledge",
    ],
  },
  {
    companyName: "Capital Aim",
    vacancies: 1,
    job_skills: [
      "Financial Advisory",
      "Customer Service",
      "Sales",
      "Financial Analysis",
      "Microsoft Office",
    ],
    minSalary: 200000,
    maxSalary: 300000,
    cas_score: 72,
    logo:"https://www.naukri.com/hotjobs/images/v3/devmantraf_apr22.gif",
    role: "Opening For BBA, MBA, BCA, BA, BE, B.com, M.com Freshers",
    industry: "Financial Services",
    location: "Indore",
    jobDescription:
      "Company Profile: \u003Cbr\u003ECapital Aim Financial Advisory Pvt Ltd is India s leading financial advisory firm committed to\u003Cbr\u003Emake fair ,  holistic and top quality financial recommendations and tips accessible to all traders and\u003Cbr\u003Einvestors in India.\u003Cbr\u003EOur pressure free work environment and employee centric policies are our USP giving our\u003Cbr\u003Eemployees an opportunity to work with flexibility and grow in their career.\u003Cbr\u003E \u003Cbr\u003E Job Location : Indore \u003Cbr\u003E Responsibilities: \u003Cbr\u003E Establish contact with clients via telephone calls.\u003Cbr\u003E Understanding and evaluating customer needs.\u003Cbr\u003E Presenting the product or service favourably and in a structured professional way.\u003Cbr\u003E Negotiate / close deals and handle complaints or objections.\u003Cbr\u003E Maintaining and developing long term relationships with clients.\u003Cbr\u003E Maintains quality service by establishing and enforcing Organization standards.\u003Cbr\u003E Collaborate with team to achieve better results.\u003Cbr\u003E Skills: \u003Cbr\u003E Good communication skills.\u003Cbr\u003E Fast learner and passion for sales.\u003Cbr\u003E Demonstrate the quality of interacting with new people.\u003Cbr\u003E Possess a high degree of self - motivation and ambition.\u003Cbr\u003E Understanding of negotation techniques.\u003Cbr\u003E\u003Cbr\u003E: \u003Cbr\u003E Any Graduate / Post Graduate.\u003Cbr\u003E  Venue: \u003Cbr\u003ECapitalAim Financial Advisory Pvt. Ltd.",
    jobUrl:
      "https://www.naukri.com/job-listings-opening-for-bba-mba-bca-ba-be-b-com-m-com-freshers-capitalaim-financial-advisory-pvt-ltd-indore-0-to-1-years-100317500543",
    strengths: [
      "Communication Skills",
      "Adaptability",
      "Problem-Solving",
      "Teamwork",
      "Customer Relationship Management",
    ],
    recommendations: [
      "Improve knowledge in financial compliance, regulatory compliance, and internal audit",
      "Develop legal knowledge and understanding of court procedures",
      "Enhance skills in equity research, investment management, and mutual funds",
      "Gain expertise in business consulting and legal drafting",
      "Strengthen tax compliance and forex trading knowledge",
      "Learn about corporate laws and legal research",
      "Develop skills in investment banking and XBRL",
      "Understand legal ethics and banking operations",
      "Improve SQL and insolvency-related skills",
      "Enhance investment analysis and reconciliation abilities",
      "Gain expertise in GST, stock market analysis, and tax preparation",
      "Strengthen financial modeling and financial regulations knowledge",
    ],
  },
  {
    companyName: "Capital Aim",
    vacancies: 1,
    job_skills: [
      "Financial Advisory",
      "Customer Service",
      "Sales",
      "Financial Analysis",
      "Microsoft Office",
    ],
    minSalary: 200000,
    maxSalary: 300000,
    cas_score: 72,
    logo:"https://www.naukri.com/hotjobs/images/v3/devmantraf_apr22.gif",
    role: "Opening For BBA, MBA, BCA, BA, BE, B.com, M.com Freshers",
    industry: "Financial Services",
    location: "Indore",
    jobDescription:
      "Company Profile: \u003Cbr\u003ECapital Aim Financial Advisory Pvt Ltd is India s leading financial advisory firm committed to\u003Cbr\u003Emake fair ,  holistic and top quality financial recommendations and tips accessible to all traders and\u003Cbr\u003Einvestors in India.\u003Cbr\u003EOur pressure free work environment and employee centric policies are our USP giving our\u003Cbr\u003Eemployees an opportunity to work with flexibility and grow in their career.\u003Cbr\u003E \u003Cbr\u003E Job Location : Indore \u003Cbr\u003E Responsibilities: \u003Cbr\u003E Establish contact with clients via telephone calls.\u003Cbr\u003E Understanding and evaluating customer needs.\u003Cbr\u003E Presenting the product or service favourably and in a structured professional way.\u003Cbr\u003E Negotiate / close deals and handle complaints or objections.\u003Cbr\u003E Maintaining and developing long term relationships with clients.\u003Cbr\u003E Maintains quality service by establishing and enforcing Organization standards.\u003Cbr\u003E Collaborate with team to achieve better results.\u003Cbr\u003E Skills: \u003Cbr\u003E Good communication skills.\u003Cbr\u003E Fast learner and passion for sales.\u003Cbr\u003E Demonstrate the quality of interacting with new people.\u003Cbr\u003E Possess a high degree of self - motivation and ambition.\u003Cbr\u003E Understanding of negotation techniques.\u003Cbr\u003E\u003Cbr\u003E: \u003Cbr\u003E Any Graduate / Post Graduate.\u003Cbr\u003E  Venue: \u003Cbr\u003ECapitalAim Financial Advisory Pvt. Ltd.",
    jobUrl:
      "https://www.naukri.com/job-listings-opening-for-bba-mba-bca-ba-be-b-com-m-com-freshers-capitalaim-financial-advisory-pvt-ltd-indore-0-to-1-years-100317500543",
    strengths: [
      "Communication Skills",
      "Adaptability",
      "Problem-Solving",
      "Teamwork",
      "Customer Relationship Management",
    ],
    recommendations: [
      "Improve knowledge in financial compliance, regulatory compliance, and internal audit",
      "Develop legal knowledge and understanding of court procedures",
      "Enhance skills in equity research, investment management, and mutual funds",
      "Gain expertise in business consulting and legal drafting",
      "Strengthen tax compliance and forex trading knowledge",
      "Learn about corporate laws and legal research",
      "Develop skills in investment banking and XBRL",
      "Understand legal ethics and banking operations",
      "Improve SQL and insolvency-related skills",
      "Enhance investment analysis and reconciliation abilities",
      "Gain expertise in GST, stock market analysis, and tax preparation",
      "Strengthen financial modeling and financial regulations knowledge",
    ],
  },
  {
    companyName: "Capital Aim",
    vacancies: 1,
    job_skills: [
      "Financial Advisory",
      "Customer Service",
      "Sales",
      "Financial Analysis",
      "Microsoft Office",
    ],
    minSalary: 200000,
    maxSalary: 300000,
    cas_score: 72,
    logo:"https://www.naukri.com/hotjobs/images/v3/devmantraf_apr22.gif",
    role: "Opening For BBA, MBA, BCA, BA, BE, B.com, M.com Freshers",
    industry: "Financial Services",
    location: "Indore",
    jobDescription:
      "Company Profile: \u003Cbr\u003ECapital Aim Financial Advisory Pvt Ltd is India s leading financial advisory firm committed to\u003Cbr\u003Emake fair ,  holistic and top quality financial recommendations and tips accessible to all traders and\u003Cbr\u003Einvestors in India.\u003Cbr\u003EOur pressure free work environment and employee centric policies are our USP giving our\u003Cbr\u003Eemployees an opportunity to work with flexibility and grow in their career.\u003Cbr\u003E \u003Cbr\u003E Job Location : Indore \u003Cbr\u003E Responsibilities: \u003Cbr\u003E Establish contact with clients via telephone calls.\u003Cbr\u003E Understanding and evaluating customer needs.\u003Cbr\u003E Presenting the product or service favourably and in a structured professional way.\u003Cbr\u003E Negotiate / close deals and handle complaints or objections.\u003Cbr\u003E Maintaining and developing long term relationships with clients.\u003Cbr\u003E Maintains quality service by establishing and enforcing Organization standards.\u003Cbr\u003E Collaborate with team to achieve better results.\u003Cbr\u003E Skills: \u003Cbr\u003E Good communication skills.\u003Cbr\u003E Fast learner and passion for sales.\u003Cbr\u003E Demonstrate the quality of interacting with new people.\u003Cbr\u003E Possess a high degree of self - motivation and ambition.\u003Cbr\u003E Understanding of negotation techniques.\u003Cbr\u003E\u003Cbr\u003E: \u003Cbr\u003E Any Graduate / Post Graduate.\u003Cbr\u003E  Venue: \u003Cbr\u003ECapitalAim Financial Advisory Pvt. Ltd.",
    jobUrl:
      "https://www.naukri.com/job-listings-opening-for-bba-mba-bca-ba-be-b-com-m-com-freshers-capitalaim-financial-advisory-pvt-ltd-indore-0-to-1-years-100317500543",
    strengths: [
      "Communication Skills",
      "Adaptability",
      "Problem-Solving",
      "Teamwork",
      "Customer Relationship Management",
    ],
    recommendations: [
      "Improve knowledge in financial compliance, regulatory compliance, and internal audit",
      "Develop legal knowledge and understanding of court procedures",
      "Enhance skills in equity research, investment management, and mutual funds",
      "Gain expertise in business consulting and legal drafting",
      "Strengthen tax compliance and forex trading knowledge",
      "Learn about corporate laws and legal research",
      "Develop skills in investment banking and XBRL",
      "Understand legal ethics and banking operations",
      "Improve SQL and insolvency-related skills",
      "Enhance investment analysis and reconciliation abilities",
      "Gain expertise in GST, stock market analysis, and tax preparation",
      "Strengthen financial modeling and financial regulations knowledge",
    ],
  },
  {
    companyName: "Capital Aim",
    vacancies: 1,
    job_skills: [
      "Financial Advisory",
      "Customer Service",
      "Sales",
      "Financial Analysis",
      "Microsoft Office",
    ],
    minSalary: 200000,
    maxSalary: 300000,
    cas_score: 72,
    logo:"https://www.naukri.com/hotjobs/images/v3/devmantraf_apr22.gif",
    role: "Opening For BBA, MBA, BCA, BA, BE, B.com, M.com Freshers",
    industry: "Financial Services",
    location: "Indore",
    jobDescription:
      "Company Profile: \u003Cbr\u003ECapital Aim Financial Advisory Pvt Ltd is India s leading financial advisory firm committed to\u003Cbr\u003Emake fair ,  holistic and top quality financial recommendations and tips accessible to all traders and\u003Cbr\u003Einvestors in India.\u003Cbr\u003EOur pressure free work environment and employee centric policies are our USP giving our\u003Cbr\u003Eemployees an opportunity to work with flexibility and grow in their career.\u003Cbr\u003E \u003Cbr\u003E Job Location : Indore \u003Cbr\u003E Responsibilities: \u003Cbr\u003E Establish contact with clients via telephone calls.\u003Cbr\u003E Understanding and evaluating customer needs.\u003Cbr\u003E Presenting the product or service favourably and in a structured professional way.\u003Cbr\u003E Negotiate / close deals and handle complaints or objections.\u003Cbr\u003E Maintaining and developing long term relationships with clients.\u003Cbr\u003E Maintains quality service by establishing and enforcing Organization standards.\u003Cbr\u003E Collaborate with team to achieve better results.\u003Cbr\u003E Skills: \u003Cbr\u003E Good communication skills.\u003Cbr\u003E Fast learner and passion for sales.\u003Cbr\u003E Demonstrate the quality of interacting with new people.\u003Cbr\u003E Possess a high degree of self - motivation and ambition.\u003Cbr\u003E Understanding of negotation techniques.\u003Cbr\u003E\u003Cbr\u003E: \u003Cbr\u003E Any Graduate / Post Graduate.\u003Cbr\u003E  Venue: \u003Cbr\u003ECapitalAim Financial Advisory Pvt. Ltd.",
    jobUrl:
      "https://www.naukri.com/job-listings-opening-for-bba-mba-bca-ba-be-b-com-m-com-freshers-capitalaim-financial-advisory-pvt-ltd-indore-0-to-1-years-100317500543",
    strengths: [
      "Communication Skills",
      "Adaptability",
      "Problem-Solving",
      "Teamwork",
      "Customer Relationship Management",
    ],
    recommendations: [
      "Improve knowledge in financial compliance, regulatory compliance, and internal audit",
      "Develop legal knowledge and understanding of court procedures",
      "Enhance skills in equity research, investment management, and mutual funds",
      "Gain expertise in business consulting and legal drafting",
      "Strengthen tax compliance and forex trading knowledge",
      "Learn about corporate laws and legal research",
      "Develop skills in investment banking and XBRL",
      "Understand legal ethics and banking operations",
      "Improve SQL and insolvency-related skills",
      "Enhance investment analysis and reconciliation abilities",
      "Gain expertise in GST, stock market analysis, and tax preparation",
      "Strengthen financial modeling and financial regulations knowledge",
    ],
  },
  {
    companyName: "Capital Aim",
    vacancies: 1,
    job_skills: [
      "Financial Advisory",
      "Customer Service",
      "Sales",
      "Financial Analysis",
      "Microsoft Office",
    ],
    minSalary: 200000,
    maxSalary: 300000,
    cas_score: 72,
    logo:"https://www.naukri.com/hotjobs/images/v3/devmantraf_apr22.gif",
    role: "Opening For BBA, MBA, BCA, BA, BE, B.com, M.com Freshers",
    industry: "Financial Services",
    location: "Indore",
    jobDescription:
      "Company Profile: \u003Cbr\u003ECapital Aim Financial Advisory Pvt Ltd is India s leading financial advisory firm committed to\u003Cbr\u003Emake fair ,  holistic and top quality financial recommendations and tips accessible to all traders and\u003Cbr\u003Einvestors in India.\u003Cbr\u003EOur pressure free work environment and employee centric policies are our USP giving our\u003Cbr\u003Eemployees an opportunity to work with flexibility and grow in their career.\u003Cbr\u003E \u003Cbr\u003E Job Location : Indore \u003Cbr\u003E Responsibilities: \u003Cbr\u003E Establish contact with clients via telephone calls.\u003Cbr\u003E Understanding and evaluating customer needs.\u003Cbr\u003E Presenting the product or service favourably and in a structured professional way.\u003Cbr\u003E Negotiate / close deals and handle complaints or objections.\u003Cbr\u003E Maintaining and developing long term relationships with clients.\u003Cbr\u003E Maintains quality service by establishing and enforcing Organization standards.\u003Cbr\u003E Collaborate with team to achieve better results.\u003Cbr\u003E Skills: \u003Cbr\u003E Good communication skills.\u003Cbr\u003E Fast learner and passion for sales.\u003Cbr\u003E Demonstrate the quality of interacting with new people.\u003Cbr\u003E Possess a high degree of self - motivation and ambition.\u003Cbr\u003E Understanding of negotation techniques.\u003Cbr\u003E\u003Cbr\u003E: \u003Cbr\u003E Any Graduate / Post Graduate.\u003Cbr\u003E  Venue: \u003Cbr\u003ECapitalAim Financial Advisory Pvt. Ltd.",
    jobUrl:
      "https://www.naukri.com/job-listings-opening-for-bba-mba-bca-ba-be-b-com-m-com-freshers-capitalaim-financial-advisory-pvt-ltd-indore-0-to-1-years-100317500543",
    strengths: [
      "Communication Skills",
      "Adaptability",
      "Problem-Solving",
      "Teamwork",
      "Customer Relationship Management",
    ],
    recommendations: [
      "Improve knowledge in financial compliance, regulatory compliance, and internal audit",
      "Develop legal knowledge and understanding of court procedures",
      "Enhance skills in equity research, investment management, and mutual funds",
      "Gain expertise in business consulting and legal drafting",
      "Strengthen tax compliance and forex trading knowledge",
      "Learn about corporate laws and legal research",
      "Develop skills in investment banking and XBRL",
      "Understand legal ethics and banking operations",
      "Improve SQL and insolvency-related skills",
      "Enhance investment analysis and reconciliation abilities",
      "Gain expertise in GST, stock market analysis, and tax preparation",
      "Strengthen financial modeling and financial regulations knowledge",
    ],
  },
  {
    companyName: "Capital Aim",
    vacancies: 1,
    job_skills: [
      "Financial Advisory",
      "Customer Service",
      "Sales",
      "Financial Analysis",
      "Microsoft Office",
    ],
    cas_score: 72,
    logo:"https://www.naukri.com/hotjobs/images/v3/devmantraf_apr22.gif",
    role: "Opening For BBA, MBA, BCA, BA, BE, B.com, M.com Freshers",
    location: "Indore",
    recommendations: [
      "Improve knowledge in financial compliance",
      "Develop legal knowledge",
      // ... other recommendations
    ],
  },
  {
    companyName: "Capital Aim",
    vacancies: 1,
    job_skills: [
      "Financial Advisory",
      "Customer Service",
      "Sales",
      "Financial Analysis",
      "Microsoft Office",
    ],
    cas_score: 72,
    logo:"https://www.naukri.com/hotjobs/images/v3/devmantraf_apr22.gif",
    role: "Opening For BBA, MBA, BCA, BA, BE, B.com, M.com Freshers",
    location: "Indore",
    recommendations: [
      "Improve knowledge in financial compliance",
      "Develop legal knowledge",
      // ... other recommendations
    ],
  },
  {
    companyName: "Capital Aim",
    vacancies: 1,
    job_skills: [
      "Financial Advisory",
      "Customer Service",
      "Sales",
      "Financial Analysis",
      "Microsoft Office",
    ],
    cas_score: 72,
    logo:"https://www.naukri.com/hotjobs/images/v3/devmantraf_apr22.gif",
    role: "Opening For BBA, MBA, BCA, BA, BE, B.com, M.com Freshers",
    location: "Indore",
    recommendations: [
      "Improve knowledge in financial compliance",
      "Develop legal knowledge",
      // ... other recommendations
    ],
  },
  {
    companyName: "Capital Aim",
    vacancies: 1,
    job_skills: [
      "Financial Advisory",
      "Customer Service",
      "Sales",
      "Financial Analysis",
      "Microsoft Office",
    ],
    cas_score: 72,
    logo:"https://www.naukri.com/hotjobs/images/v3/devmantraf_apr22.gif",
    role: "Opening For BBA, MBA, BCA, BA, BE, B.com, M.com Freshers",
    location: "Indore",
    recommendations: [
      "Improve knowledge in financial compliance",
      "Develop legal knowledge",
      // ... other recommendations
    ],
  },
  {
    companyName: "Capital Aim",
    vacancies: 1,
    job_skills: [
      "Financial Advisory",
      "Customer Service",
      "Sales",
      "Financial Analysis",
      "Microsoft Office",
    ],
    cas_score: 72,
    logo:"https://www.naukri.com/hotjobs/images/v3/devmantraf_apr22.gif",
    role: "Opening For BBA, MBA, BCA, BA, BE, B.com, M.com Freshers",
    location: "Indore",
    recommendations: [
      "Improve knowledge in financial compliance",
      "Develop legal knowledge",
      // ... other recommendations
    ],
  },
  {
    companyName: "Capital Aim",
    vacancies: 1,
    job_skills: [
      "Financial Advisory",
      "Customer Service",
      "Sales",
      "Financial Analysis",
      "Microsoft Office",
    ],
    cas_score: 72,
    logo:"https://www.naukri.com/hotjobs/images/v3/devmantraf_apr22.gif",
    role: "Opening For BBA, MBA, BCA, BA, BE, B.com, M.com Freshers",
    location: "Indore",
    recommendations: [
      "Improve knowledge in financial compliance",
      "Develop legal knowledge",
      // ... other recommendations
    ],
  },
  {
    companyName: "Capital Aim",
    vacancies: 1,
    job_skills: [
      "Financial Advisory",
      "Customer Service",
      "Sales",
      "Financial Analysis",
      "Microsoft Office",
    ],
    cas_score: 72,
    logo:"https://www.naukri.com/hotjobs/images/v3/devmantraf_apr22.gif",
    role: "Opening For BBA, MBA, BCA, BA, BE, B.com, M.com Freshers",
    location: "Indore",
    recommendations: [
      "Improve knowledge in financial compliance",
      "Develop legal knowledge",
      // ... other recommendations
    ],
  },
  {
    companyName: "Capital Aim",
    vacancies: 1,
    job_skills: [
      "Financial Advisory",
      "Customer Service",
      "Sales",
      "Financial Analysis",
      "Microsoft Office",
    ],
    cas_score: 72,
    logo:"https://www.naukri.com/hotjobs/images/v3/devmantraf_apr22.gif",
    role: "Opening For BBA, MBA, BCA, BA, BE, B.com, M.com Freshers",
    location: "Indore",
    recommendations: [
      "Improve knowledge in financial compliance",
      "Develop legal knowledge",
      // ... other recommendations
    ],
  },
  // Add more jobs as needed
];

const JobListContainer: FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 6;

  const totalPages = Math.ceil(sampleJobs.length / jobsPerPage);

  // Get current jobs based on the page
  const currentJobs = sampleJobs.slice(
    (currentPage - 1) * jobsPerPage,
    currentPage * jobsPerPage
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="h-full min-w-full pt-2 ">
      <JobList jobs={currentJobs} />
      <Pagination className="flex justify-center gap-4 mt-4">
        <Button
          onClick={() => handlePageChange(1)}
          className="hidden p-1 text-base font-semibold text-purple-700 bg-purple-200 border border-purple-600 hover:bg-purple-600 hover:text-white md:text-base md:h-8 md:w-20 md:block"
        >
          <Pagination.First className="mx-auto" />
        </Button>
        {currentPage > 1 && (
          <Button
            onClick={() => handlePageChange(Math.max(currentPage - 1, 1))}
            className="p-2 text-base font-semibold text-purple-700 bg-purple-200 border border-purple-600 hover:bg-purple-600 hover:text-white md:text-base md:p-1 md:h-8 md:w-22"
          >
            <Pagination.Prev />
          </Button>
        )}

        {currentPage > 1 && (
          <Button
            onClick={() => handlePageChange(currentPage - 1)}
            className="hidden p-1 text-base font-semibold text-purple-700 bg-purple-200 border border-purple-600 hover:bg-purple-600 hover:text-white md:text-base md:h-8 md:w-20 md:block"
          >
            <Pagination.Item>{currentPage - 1}</Pagination.Item>
          </Button>
        )}

        <Button
          onClick={() => handlePageChange(currentPage)}
          className="p-4 text-base font-semibold text-white bg-purple-500 border border-purple-600 md:p-1 md:text-base md:h-8 md:w-20 hover:bg-purple-700"
        >
          <Pagination.Item>{currentPage}</Pagination.Item>
          
        </Button>
        {currentPage < totalPages && (
          <Button
            onClick={() => handlePageChange(currentPage + 1)}
            className="hidden p-1 text-base font-semibold text-purple-700 bg-purple-200 border border-purple-600 hover:bg-purple-600 hover:text-white md:text-base md:h-8 md:w-20 md:block"
          >
            <Pagination.Item>{currentPage + 1}</Pagination.Item>
          </Button>
        )}

        {currentPage < totalPages && (
          <Button
            onClick={() =>
              handlePageChange(Math.min(currentPage + 1, totalPages))
            }
            className="p-3 text-base font-semibold text-purple-700 bg-purple-200 border border-purple-600 md:p-1 hover:bg-purple-600 hover:text-white md:h-8 md:w-20"
          >
            <Pagination.Next />
          </Button>
        )}

        <Button
          onClick={() => handlePageChange(totalPages)}
          className="hidden p-1 text-base font-semibold text-purple-700 bg-purple-200 border border-purple-600 hover:bg-purple-600 hover:text-white md:text-base md:h-8 md:w-20 md:block"
        >
          <Pagination.Last />
        </Button>
      </Pagination>
    </div>
  );
};
export default JobListContainer;
