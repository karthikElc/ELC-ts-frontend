import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { FC, useState } from "react";
import { FaRegQuestionCircle } from "react-icons/fa";
import "../App.css";
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { RiPieChart2Line } from "react-icons/ri";
import { Progress } from "@/components/ui/progress";
import MissingareaGraph from "./MissingareaGraph";


interface semestersType {
  semester: string;
  coverage: string;
}

const semesters: semestersType[] = [
  {
    semester: "Semester 1",
    coverage: "17.11",
  },
  {
    semester: "Semester 2",
    coverage: "19.79",
  },
  {
    semester: "Semester 3",
    coverage: "12.03",
  },
  {
    semester: "Semester 4",
    coverage: "11.23",
  },
  {
    semester: "Semester 5",
    coverage: "19.79",
  },
  {
    semester: "Semester 6",
    coverage: "20.05",
  },
];

interface MicroSkill {
  skill: string;
  weight: number;
  _id: string;
}

interface SkillDetail {
  skill: string;
  skillWeight: number;
  skillScore: string;
  microSkills: {
    analyzed_skill: string;
    top_micro_skills: MicroSkill[];
  };
  _id: string;
}

interface SubjectDetail {
  subject: string;
  skillDetails: SkillDetail[];
  focusArea: string[]; // Specify this type if needed
  _id: string;
}

// interface SemesterDetail {
//   subjectDetails: SubjectDetail[];
//   _id: string;
// }

interface SemesterData {
  semester: string;
  subjectDetails: SubjectDetail[];
  _id: string;
}
const semesterData: SemesterData[] = [
  {
    semester: "Semester 1",
    subjectDetails: [
      {
        subject: "Financial Accounting-I",
        skillDetails: [
          {
            skill: "Accounting",
            skillWeight: 9.280701754385966,
            skillScore: "77.94",
            microSkills: {
              analyzed_skill: "Accounting",
              top_micro_skills: [
                {
                  skill: "Tally ERP",
                  weight: 10,
                  _id: "67399b7b94a05a36d2af624d",
                },
                {
                  skill: "TDS",
                  weight: 10,
                  _id: "67399b7b94a05a36d2af624e",
                },
                {
                  skill: "GST",
                  weight: 10,
                  _id: "67399b7b94a05a36d2af624f",
                },
                {
                  skill: "Financial Accounting",
                  weight: 9.716417910447761,
                  _id: "67399b7b94a05a36d2af6250",
                },
                {
                  skill: "Reconciliation",
                  weight: 9.416666666666666,
                  _id: "67399b7b94a05a36d2af6251",
                },
              ],
            },
            _id: "67399b7b94a05a36d2af624c",
          },
          {
            skill: "Financial Reporting",
            skillWeight: 8.626865671641792,
            skillScore: "72.93",
            microSkills: {
              analyzed_skill: "Financial Reporting",
              top_micro_skills: [
                {
                  skill: "GIPS Compliance",
                  weight: 10,
                  _id: "67399b7b94a05a36d2af6253",
                },
                {
                  skill: "GAAP Reporting",
                  weight: 10,
                  _id: "67399b7b94a05a36d2af6254",
                },
                {
                  skill: "Regulatory Reporting",
                  weight: 9.333333333333334,
                  _id: "67399b7b94a05a36d2af6255",
                },
                {
                  skill: "Preparation of Financial Statements",
                  weight: 9.142857142857142,
                  _id: "67399b7b94a05a36d2af6256",
                },
                {
                  skill: "Preparing Financial Statements",
                  weight: 9.071428571428571,
                  _id: "67399b7b94a05a36d2af6257",
                },
              ],
            },
            _id: "67399b7b94a05a36d2af6252",
          },
          {
            skill: "Financial Accounting",
            skillWeight: 8.568627450980392,
            skillScore: "72.42",
            microSkills: {
              analyzed_skill: "Financial Accounting",
              top_micro_skills: [
                {
                  skill: "Preparation of Financial Statements",
                  weight: 9.25,
                  _id: "67399b7b94a05a36d2af6259",
                },
                {
                  skill: "Accounts Receivable/Payable",
                  weight: 9,
                  _id: "67399b7b94a05a36d2af625a",
                },
                {
                  skill: "Financial Statements Preparation",
                  weight: 9,
                  _id: "67399b7b94a05a36d2af625b",
                },
                {
                  skill: "IFRS",
                  weight: 9,
                  _id: "67399b7b94a05a36d2af625c",
                },
                {
                  skill: "General Ledger",
                  weight: 9,
                  _id: "67399b7b94a05a36d2af625d",
                },
              ],
            },
            _id: "67399b7b94a05a36d2af6258",
          },
          {
            skill: "Financial Analysis",
            skillWeight: 8.407407407407407,
            skillScore: "73.27",
            microSkills: {
              analyzed_skill: "Financial Analysis",
              top_micro_skills: [
                {
                  skill: "Equity Analysis",
                  weight: 10,
                  _id: "67399b7b94a05a36d2af625f",
                },
                {
                  skill: "Equity Valuation",
                  weight: 10,
                  _id: "67399b7b94a05a36d2af6260",
                },
                {
                  skill: "Derivative Analysis",
                  weight: 10,
                  _id: "67399b7b94a05a36d2af6261",
                },
                {
                  skill: "Portfolio Management",
                  weight: 9.857142857142858,
                  _id: "67399b7b94a05a36d2af6262",
                },
                {
                  skill: "Equity Research",
                  weight: 9.529411764705882,
                  _id: "67399b7b94a05a36d2af6263",
                },
              ],
            },
            _id: "67399b7b94a05a36d2af625e",
          },
          {
            skill: "Auditing",
            skillWeight: 9.28,
            skillScore: "78.54",
            microSkills: {
              analyzed_skill: "Auditing",
              top_micro_skills: [
                {
                  skill: "Audit Planning",
                  weight: 10,
                  _id: "67399b7b94a05a36d2af6265",
                },
                {
                  skill: "Financial Auditing",
                  weight: 9.93939393939394,
                  _id: "67399b7b94a05a36d2af6266",
                },
                {
                  skill: "Compliance Auditing",
                  weight: 9.705882352941176,
                  _id: "67399b7b94a05a36d2af6267",
                },
                {
                  skill: "Internal Auditing",
                  weight: 9.384615384615385,
                  _id: "67399b7b94a05a36d2af6268",
                },
                {
                  skill: "Statutory Auditing",
                  weight: 8.625,
                  _id: "67399b7b94a05a36d2af6269",
                },
              ],
            },
            _id: "67399b7b94a05a36d2af6264",
          },
          {
            skill: "Taxation",
            skillWeight: 8.536082474226804,
            skillScore: "72.33",
            microSkills: {
              analyzed_skill: "Taxation",
              top_micro_skills: [
                {
                  skill: "TDS",
                  weight: 9.25,
                  _id: "67399b7b94a05a36d2af626b",
                },
                {
                  skill: "GST",
                  weight: 9.025,
                  _id: "67399b7b94a05a36d2af626c",
                },
                {
                  skill: "Tax Regulations",
                  weight: 9,
                  _id: "67399b7b94a05a36d2af626d",
                },
                {
                  skill: "Income Tax Compliance",
                  weight: 9,
                  _id: "67399b7b94a05a36d2af626e",
                },
                {
                  skill: "Tax Filing",
                  weight: 8.7,
                  _id: "67399b7b94a05a36d2af626f",
                },
              ],
            },
            _id: "67399b7b94a05a36d2af626a",
          },
          {
            skill: "Corporate Laws",
            skillWeight: 7.666666666666667,
            skillScore: "65.19",
            microSkills: {
              analyzed_skill: "Corporate Laws",
              top_micro_skills: [
                {
                  skill: "Company Act",
                  weight: 8,
                  _id: "67399b7b94a05a36d2af6271",
                },
                {
                  skill: "Compliance Management",
                  weight: 7.666666666666667,
                  _id: "67399b7b94a05a36d2af6272",
                },
                {
                  skill: "SEBI Regulations",
                  weight: 7.666666666666667,
                  _id: "67399b7b94a05a36d2af6273",
                },
                {
                  skill: "Companies Act",
                  weight: 7.5,
                  _id: "67399b7b94a05a36d2af6274",
                },
              ],
            },
            _id: "67399b7b94a05a36d2af6270",
          },
          {
            skill: "Compliance",
            skillWeight: 7.928571428571429,
            skillScore: "67.41",
            microSkills: {
              analyzed_skill: "Compliance",
              top_micro_skills: [
                {
                  skill: "Audit and Compliance",
                  weight: 10,
                  _id: "67399b7b94a05a36d2af6276",
                },
                {
                  skill: "Internal Auditing",
                  weight: 10,
                  _id: "67399b7b94a05a36d2af6277",
                },
                {
                  skill: "Compliance Reporting",
                  weight: 10,
                  _id: "67399b7b94a05a36d2af6278",
                },
                {
                  skill: "Regulatory Compliance",
                  weight: 8.222222222222221,
                  _id: "67399b7b94a05a36d2af6279",
                },
                {
                  skill: "Reporting",
                  weight: 8,
                  _id: "67399b7b94a05a36d2af627a",
                },
              ],
            },
            _id: "67399b7b94a05a36d2af6275",
          },
          {
            skill: "Financial Regulations",
            skillWeight: 7,
            skillScore: "60.01",
            microSkills: {
              analyzed_skill: "Financial Regulations",
              top_micro_skills: [
                {
                  skill: "PMLA (Prevention of Money Laundering Act)",
                  weight: 9,
                  _id: "67399b7b94a05a36d2af627c",
                },
                {
                  skill: "RBI Guidelines",
                  weight: 9,
                  _id: "67399b7b94a05a36d2af627d",
                },
                {
                  skill: "AML Compliance",
                  weight: 9,
                  _id: "67399b7b94a05a36d2af627e",
                },
                {
                  skill: "FEMA (Foreign Exchange Management Act)",
                  weight: 9,
                  _id: "67399b7b94a05a36d2af627f",
                },
                {
                  skill: "KYC Compliance",
                  weight: 9,
                  _id: "67399b7b94a05a36d2af6280",
                },
              ],
            },
            _id: "67399b7b94a05a36d2af627b",
          },
          {
            skill: "Reconciliation",
            skillWeight: 10,
            skillScore: "85.00",
            microSkills: {
              analyzed_skill: "Reconciliation",
              top_micro_skills: [
                {
                  skill: "Financial Reconciliation",
                  weight: 10,
                  _id: "67399b7b94a05a36d2af6282",
                },
                {
                  skill: "Bank Reconciliation",
                  weight: 10,
                  _id: "67399b7b94a05a36d2af6283",
                },
                {
                  skill: "Account Reconciliation",
                  weight: 10,
                  _id: "67399b7b94a05a36d2af6284",
                },
              ],
            },
            _id: "67399b7b94a05a36d2af6281",
          },
          {
            skill: "Bookkeeping",
            skillWeight: 9,
            skillScore: "75.73",
            microSkills: {
              analyzed_skill: "Bookkeeping",
              top_micro_skills: [
                {
                  skill: "Payroll Processing",
                  weight: 10,
                  _id: "67399b7b94a05a36d2af6286",
                },
                {
                  skill: "Financial Reporting",
                  weight: 10,
                  _id: "67399b7b94a05a36d2af6287",
                },
                {
                  skill: "Bank Reconciliation",
                  weight: 9.25,
                  _id: "67399b7b94a05a36d2af6288",
                },
                {
                  skill: "Ledger Maintenance",
                  weight: 9,
                  _id: "67399b7b94a05a36d2af6289",
                },
                {
                  skill: "Double Entry Bookkeeping",
                  weight: 9,
                  _id: "67399b7b94a05a36d2af628a",
                },
              ],
            },
            _id: "67399b7b94a05a36d2af6285",
          },
        ],
        focusArea: [],
        _id: "67399b7b94a05a36d2af624b",
      },
      {
        subject: "Management Principles and Applications",
        skillDetails: [
          {
            skill: "Business Administration",
            skillWeight: 7,
            skillScore: "63.70",
            microSkills: {
              analyzed_skill: "Business Administration",
              top_micro_skills: [
                {
                  skill: "Financial Accounting",
                  weight: 8,
                  _id: "67399b7b94a05a36d2af628d",
                },
                {
                  skill: "Business Law",
                  weight: 7,
                  _id: "67399b7b94a05a36d2af628e",
                },
                {
                  skill: "Project Management",
                  weight: 7,
                  _id: "67399b7b94a05a36d2af628f",
                },
              ],
            },
            _id: "67399b7b94a05a36d2af628c",
          },
          {
            skill: "Business Analysis",
            skillWeight: 7,
            skillScore: "78.26",
            microSkills: {
              analyzed_skill: "Business Analysis",
              top_micro_skills: [
                {
                  skill: "Requirements Gathering",
                  weight: 10,
                  _id: "67399b7b94a05a36d2af6291",
                },
                {
                  skill: "Process Mapping",
                  weight: 9.333333333333334,
                  _id: "67399b7b94a05a36d2af6292",
                },
                {
                  skill: "Data Analysis",
                  weight: 8.5,
                  _id: "67399b7b94a05a36d2af6293",
                },
                {
                  skill: "Stakeholder Management",
                  weight: 8.25,
                  _id: "67399b7b94a05a36d2af6294",
                },
                {
                  skill: "Problem Solving",
                  weight: 7,
                  _id: "67399b7b94a05a36d2af6295",
                },
              ],
            },
            _id: "67399b7b94a05a36d2af6290",
          },
          {
            skill: "Business Acumen",
            skillWeight: 7,
            skillScore: "63.70",
            microSkills: {
              analyzed_skill: "Business Acumen",
              top_micro_skills: [
                {
                  skill: "Strategic Thinking",
                  weight: 7,
                  _id: "67399b7b94a05a36d2af6297",
                },
                {
                  skill: "Industry Knowledge",
                  weight: 7,
                  _id: "67399b7b94a05a36d2af6298",
                },
                {
                  skill: "Problem-Solving",
                  weight: 7,
                  _id: "67399b7b94a05a36d2af6299",
                },
                {
                  skill: "Market Awareness",
                  weight: 7,
                  _id: "67399b7b94a05a36d2af629a",
                },
                {
                  skill: "Financial Literacy",
                  weight: 7,
                  _id: "67399b7b94a05a36d2af629b",
                },
              ],
            },
            _id: "67399b7b94a05a36d2af6296",
          },
          {
            skill: "Problem-Solving",
            skillWeight: 6.441860465116279,
            skillScore: "58.42",
            microSkills: {
              analyzed_skill: "Problem-Solving",
              top_micro_skills: [
                {
                  skill: "Decision-Making",
                  weight: 7,
                  _id: "67399b7b94a05a36d2af629d",
                },
                {
                  skill: "Troubleshooting",
                  weight: 7,
                  _id: "67399b7b94a05a36d2af629e",
                },
                {
                  skill: "Conflict Resolution",
                  weight: 7,
                  _id: "67399b7b94a05a36d2af629f",
                },
                {
                  skill: "Analytical Thinking",
                  weight: 6.7,
                  _id: "67399b7b94a05a36d2af62a0",
                },
                {
                  skill: "Critical Thinking",
                  weight: 6.446808510638298,
                  _id: "67399b7b94a05a36d2af62a1",
                },
              ],
            },
            _id: "67399b7b94a05a36d2af629c",
          },
          {
            skill: "Analytical Thinking",
            skillWeight: 6,
            skillScore: "54.60",
            microSkills: {
              analyzed_skill: "Analytical Thinking",
              top_micro_skills: [
                {
                  skill: "Problem Solving",
                  weight: 7,
                  _id: "67399b7b94a05a36d2af62a3",
                },
                {
                  skill: "Critical Thinking",
                  weight: 6.5,
                  _id: "67399b7b94a05a36d2af62a4",
                },
                {
                  skill: "Data Interpretation",
                  weight: 6,
                  _id: "67399b7b94a05a36d2af62a5",
                },
                {
                  skill: "Problem Identification",
                  weight: 6,
                  _id: "67399b7b94a05a36d2af62a6",
                },
                {
                  skill: "Problem-Solving",
                  weight: 6,
                  _id: "67399b7b94a05a36d2af62a7",
                },
              ],
            },
            _id: "67399b7b94a05a36d2af62a2",
          },
          {
            skill: "Data Analysis",
            skillWeight: 7.617647058823529,
            skillScore: "69.07",
            microSkills: {
              analyzed_skill: "Data Analysis",
              top_micro_skills: [
                {
                  skill: "Reporting and Documentation",
                  weight: 9,
                  _id: "67399b7b94a05a36d2af62a9",
                },
                {
                  skill: "Exploratory Data Analysis",
                  weight: 8.875,
                  _id: "67399b7b94a05a36d2af62aa",
                },
                {
                  skill: "Spreadsheet Management",
                  weight: 8.5,
                  _id: "67399b7b94a05a36d2af62ab",
                },
                {
                  skill: "Spreadsheet",
                  weight: 8,
                  _id: "67399b7b94a05a36d2af62ac",
                },
                {
                  skill: "Data Manipulation",
                  weight: 8,
                  _id: "67399b7b94a05a36d2af62ad",
                },
              ],
            },
            _id: "67399b7b94a05a36d2af62a8",
          },
          {
            skill: "Organizational Skills",
            skillWeight: 7.5,
            skillScore: "68.25",
            microSkills: {
              analyzed_skill: "Organizational Skills",
              top_micro_skills: [
                {
                  skill: "Time Management",
                  weight: 8,
                  _id: "67399b7b94a05a36d2af62af",
                },
                {
                  skill: "Attention to Detail",
                  weight: 8,
                  _id: "67399b7b94a05a36d2af62b0",
                },
                {
                  skill: "Task Prioritization",
                  weight: 7.5,
                  _id: "67399b7b94a05a36d2af62b1",
                },
                {
                  skill: "Record Keeping",
                  weight: 7,
                  _id: "67399b7b94a05a36d2af62b2",
                },
              ],
            },
            _id: "67399b7b94a05a36d2af62ae",
          },
          {
            skill: "Time Management",
            skillWeight: 6.833333333333333,
            skillScore: "62.15",
            microSkills: {
              analyzed_skill: "Time Management",
              top_micro_skills: [
                {
                  skill: "Organization",
                  weight: 8,
                  _id: "67399b7b94a05a36d2af62b4",
                },
                {
                  skill: "Deadline-oriented",
                  weight: 8,
                  _id: "67399b7b94a05a36d2af62b5",
                },
                {
                  skill: "Stress Management",
                  weight: 7.5,
                  _id: "67399b7b94a05a36d2af62b6",
                },
                {
                  skill: "Productivity Techniques",
                  weight: 7.333333333333333,
                  _id: "67399b7b94a05a36d2af62b7",
                },
                {
                  skill: "Punctuality",
                  weight: 7.25,
                  _id: "67399b7b94a05a36d2af62b8",
                },
              ],
            },
            _id: "67399b7b94a05a36d2af62b3",
          },
          {
            skill: "Communication Skills",
            skillWeight: 7.419475655430712,
            skillScore: "68.52",
            microSkills: {
              analyzed_skill: "Communication Skills",
              top_micro_skills: [
                {
                  skill: "Listening Skills",
                  weight: 9,
                  _id: "67399b7b94a05a36d2af62ba",
                },
                {
                  skill: "Persuasive Writing",
                  weight: 8,
                  _id: "67399b7b94a05a36d2af62bb",
                },
                {
                  skill: "Public Speaking",
                  weight: 8,
                  _id: "67399b7b94a05a36d2af62bc",
                },
                {
                  skill: "Persuasion",
                  weight: 8,
                  _id: "67399b7b94a05a36d2af62bd",
                },
                {
                  skill: "Persuasive Communication",
                  weight: 8,
                  _id: "67399b7b94a05a36d2af62be",
                },
              ],
            },
            _id: "67399b7b94a05a36d2af62b9",
          },
        ],
        focusArea: [],
        _id: "67399b7b94a05a36d2af628b",
      },
      {
        subject: "Principles of Marketing",
        skillDetails: [
          {
            skill: "Digital Marketing",
            skillWeight: 9,
            skillScore: "69.30",
            microSkills: {
              analyzed_skill: "Digital Marketing",
              top_micro_skills: [
                {
                  skill: "Search Engine Optimization (SEO)",
                  weight: 8.666666666666666,
                  _id: "67399b7b94a05a36d2af62c1",
                },
                {
                  skill: "Social Media Marketing",
                  weight: 8.6,
                  _id: "67399b7b94a05a36d2af62c2",
                },
                {
                  skill: "Content Creation",
                  weight: 8,
                  _id: "67399b7b94a05a36d2af62c3",
                },
                {
                  skill: "Analytics",
                  weight: 8,
                  _id: "67399b7b94a05a36d2af62c4",
                },
                {
                  skill: "Analytics and Reporting",
                  weight: 8,
                  _id: "67399b7b94a05a36d2af62c5",
                },
              ],
            },
            _id: "67399b7b94a05a36d2af62c0",
          },
          {
            skill: "SEO",
            skillWeight: 10,
            skillScore: "77.00",
            microSkills: {
              analyzed_skill: "SEO",
              top_micro_skills: [
                {
                  skill: "On-Page Optimization",
                  weight: 10,
                  _id: "67399b7b94a05a36d2af62c7",
                },
                {
                  skill: "Link Building",
                  weight: 10,
                  _id: "67399b7b94a05a36d2af62c8",
                },
                {
                  skill: "Keyword Research",
                  weight: 10,
                  _id: "67399b7b94a05a36d2af62c9",
                },
                {
                  skill: "Search Engine Algorithms",
                  weight: 9,
                  _id: "67399b7b94a05a36d2af62ca",
                },
                {
                  skill: "Google Analytics",
                  weight: 9,
                  _id: "67399b7b94a05a36d2af62cb",
                },
              ],
            },
            _id: "67399b7b94a05a36d2af62c6",
          },
          {
            skill: "Content Writing",
            skillWeight: 10,
            skillScore: "77.00",
            microSkills: {
              analyzed_skill: "Content Writing",
              top_micro_skills: [
                {
                  skill: "Copywriting",
                  weight: 9,
                  _id: "67399b7b94a05a36d2af62cd",
                },
                {
                  skill: "SEO Optimization",
                  weight: 8,
                  _id: "67399b7b94a05a36d2af62ce",
                },
                {
                  skill: "Storytelling",
                  weight: 8,
                  _id: "67399b7b94a05a36d2af62cf",
                },
              ],
            },
            _id: "67399b7b94a05a36d2af62cc",
          },
          {
            skill: "Sales and Marketing",
            skillWeight: 7.733333333333333,
            skillScore: "57.98",
            microSkills: {
              analyzed_skill: "Sales and Marketing",
              top_micro_skills: [
                {
                  skill: "Product Promotion",
                  weight: 8,
                  _id: "67399b7b94a05a36d2af62d1",
                },
                {
                  skill: "Closing Deals",
                  weight: 8,
                  _id: "67399b7b94a05a36d2af62d2",
                },
                {
                  skill: "Prospecting Techniques",
                  weight: 8,
                  _id: "67399b7b94a05a36d2af62d3",
                },
                {
                  skill: "Customer Relationship Management",
                  weight: 8,
                  _id: "67399b7b94a05a36d2af62d4",
                },
                {
                  skill: "Prospecting",
                  weight: 7.774193548387097,
                  _id: "67399b7b94a05a36d2af62d5",
                },
              ],
            },
            _id: "67399b7b94a05a36d2af62d0",
          },
          {
            skill: "Client Relationship Management",
            skillWeight: 7.75,
            skillScore: "62.22",
            microSkills: {
              analyzed_skill: "Client Relationship Management",
              top_micro_skills: [
                {
                  skill: "Problem Solving",
                  weight: 9,
                  _id: "67399b7b94a05a36d2af62d7",
                },
                {
                  skill: "Communication Skills",
                  weight: 8.6,
                  _id: "67399b7b94a05a36d2af62d8",
                },
                {
                  skill: "Customer Service",
                  weight: 8.5,
                  _id: "67399b7b94a05a36d2af62d9",
                },
                {
                  skill: "Negotiation Skills",
                  weight: 8.5,
                  _id: "67399b7b94a05a36d2af62da",
                },
                {
                  skill: "Interpersonal Skills",
                  weight: 8.4,
                  _id: "67399b7b94a05a36d2af62db",
                },
              ],
            },
            _id: "67399b7b94a05a36d2af62d6",
          },
          {
            skill: "Customer Relationship Management",
            skillWeight: 9.058823529411764,
            skillScore: "71.15",
            microSkills: {
              analyzed_skill: "Customer Relationship Management",
              top_micro_skills: [
                {
                  skill: "Effective Communication",
                  weight: 10,
                  _id: "67399b7b94a05a36d2af62dd",
                },
                {
                  skill: "Relationship Management",
                  weight: 9.666666666666666,
                  _id: "67399b7b94a05a36d2af62de",
                },
                {
                  skill: "Client Relationship Building",
                  weight: 9.514285714285714,
                  _id: "67399b7b94a05a36d2af62df",
                },
                {
                  skill: "Client Retention Strategies",
                  weight: 9.463414634146341,
                  _id: "67399b7b94a05a36d2af62e0",
                },
                {
                  skill: "Client Servicing",
                  weight: 9.375,
                  _id: "67399b7b94a05a36d2af62e1",
                },
              ],
            },
            _id: "67399b7b94a05a36d2af62dc",
          },
          {
            skill: "Customer Service",
            skillWeight: 8.474178403755868,
            skillScore: "65.06",
            microSkills: {
              analyzed_skill: "Customer Service",
              top_micro_skills: [
                {
                  skill: "Inbound Customer Service",
                  weight: 10,
                  _id: "67399b7b94a05a36d2af62e3",
                },
                {
                  skill: "Active Listening",
                  weight: 9,
                  _id: "67399b7b94a05a36d2af62e4",
                },
                {
                  skill: "Call Handling",
                  weight: 9,
                  _id: "67399b7b94a05a36d2af62e5",
                },
                {
                  skill: "Complaint Handling",
                  weight: 9,
                  _id: "67399b7b94a05a36d2af62e6",
                },
                {
                  skill: "Customer Relationship Management",
                  weight: 9,
                  _id: "67399b7b94a05a36d2af62e7",
                },
              ],
            },
            _id: "67399b7b94a05a36d2af62e2",
          },
          {
            skill: "Research",
            skillWeight: 8.333333333333334,
            skillScore: "64.14",
            microSkills: {
              analyzed_skill: "Research",
              top_micro_skills: [
                {
                  skill: "Data Analysis",
                  weight: 8.5,
                  _id: "67399b7b94a05a36d2af62e9",
                },
                {
                  skill: "Report Writing",
                  weight: 8.5,
                  _id: "67399b7b94a05a36d2af62ea",
                },
                {
                  skill: "Data Collection",
                  weight: 8.333333333333334,
                  _id: "67399b7b94a05a36d2af62eb",
                },
                {
                  skill: "Hypothesis Testing",
                  weight: 8,
                  _id: "67399b7b94a05a36d2af62ec",
                },
                {
                  skill: "Analytical Thinking",
                  weight: 8,
                  _id: "67399b7b94a05a36d2af62ed",
                },
              ],
            },
            _id: "67399b7b94a05a36d2af62e8",
          },
          {
            skill: "Industry Research",
            skillWeight: 9,
            skillScore: "69.30",
            microSkills: {
              analyzed_skill: "Industry Research",
              top_micro_skills: [
                {
                  skill: "Competitor Analysis",
                  weight: 9,
                  _id: "67399b7b94a05a36d2af62ef",
                },
                {
                  skill: "Trend Analysis",
                  weight: 9,
                  _id: "67399b7b94a05a36d2af62f0",
                },
                {
                  skill: "Market Analysis",
                  weight: 9,
                  _id: "67399b7b94a05a36d2af62f1",
                },
              ],
            },
            _id: "67399b7b94a05a36d2af62ee",
          },
          {
            skill: "Analytical Skills",
            skillWeight: 6.375,
            skillScore: "49.74",
            microSkills: {
              analyzed_skill: "Analytical Skills",
              top_micro_skills: [
                {
                  skill: "Data Interpretation",
                  weight: 9,
                  _id: "67399b7b94a05a36d2af62f3",
                },
                {
                  skill: "Financial Analysis",
                  weight: 8,
                  _id: "67399b7b94a05a36d2af62f4",
                },
                {
                  skill: "Market Research",
                  weight: 7,
                  _id: "67399b7b94a05a36d2af62f5",
                },
                {
                  skill: "Critical Thinking",
                  weight: 6.75,
                  _id: "67399b7b94a05a36d2af62f6",
                },
                {
                  skill: "Problem Solving",
                  weight: 6.7,
                  _id: "67399b7b94a05a36d2af62f7",
                },
              ],
            },
            _id: "67399b7b94a05a36d2af62f2",
          },
          {
            skill: "Analytical Thinking",
            skillWeight: 6,
            skillScore: "54.60",
            microSkills: {
              analyzed_skill: "Analytical Thinking",
              top_micro_skills: [
                {
                  skill: "Problem Solving",
                  weight: 7,
                  _id: "67399b7b94a05a36d2af62f9",
                },
                {
                  skill: "Critical Thinking",
                  weight: 6.5,
                  _id: "67399b7b94a05a36d2af62fa",
                },
                {
                  skill: "Data Interpretation",
                  weight: 6,
                  _id: "67399b7b94a05a36d2af62fb",
                },
                {
                  skill: "Problem Identification",
                  weight: 6,
                  _id: "67399b7b94a05a36d2af62fc",
                },
                {
                  skill: "Problem-Solving",
                  weight: 6,
                  _id: "67399b7b94a05a36d2af62fd",
                },
              ],
            },
            _id: "67399b7b94a05a36d2af62f8",
          },
          {
            skill: "Problem-Solving",
            skillWeight: 6.441860465116279,
            skillScore: "58.42",
            microSkills: {
              analyzed_skill: "Problem-Solving",
              top_micro_skills: [
                {
                  skill: "Decision-Making",
                  weight: 7,
                  _id: "67399b7b94a05a36d2af62ff",
                },
                {
                  skill: "Troubleshooting",
                  weight: 7,
                  _id: "67399b7b94a05a36d2af6300",
                },
                {
                  skill: "Conflict Resolution",
                  weight: 7,
                  _id: "67399b7b94a05a36d2af6301",
                },
                {
                  skill: "Analytical Thinking",
                  weight: 6.7,
                  _id: "67399b7b94a05a36d2af6302",
                },
                {
                  skill: "Critical Thinking",
                  weight: 6.446808510638298,
                  _id: "67399b7b94a05a36d2af6303",
                },
              ],
            },
            _id: "67399b7b94a05a36d2af62fe",
          },
          {
            skill: "Data Analysis",
            skillWeight: 7.617647058823529,
            skillScore: "69.07",
            microSkills: {
              analyzed_skill: "Data Analysis",
              top_micro_skills: [
                {
                  skill: "Reporting and Documentation",
                  weight: 9,
                  _id: "67399b7b94a05a36d2af6305",
                },
                {
                  skill: "Exploratory Data Analysis",
                  weight: 8.875,
                  _id: "67399b7b94a05a36d2af6306",
                },
                {
                  skill: "Spreadsheet Management",
                  weight: 8.5,
                  _id: "67399b7b94a05a36d2af6307",
                },
                {
                  skill: "Spreadsheet",
                  weight: 8,
                  _id: "67399b7b94a05a36d2af6308",
                },
                {
                  skill: "Data Manipulation",
                  weight: 8,
                  _id: "67399b7b94a05a36d2af6309",
                },
              ],
            },
            _id: "67399b7b94a05a36d2af6304",
          },
          {
            skill: "Microsoft Office",
            skillWeight: 6.980952380952381,
            skillScore: "53.21",
            microSkills: {
              analyzed_skill: "Microsoft Office",
              top_micro_skills: [
                {
                  skill: "Excel",
                  weight: 7.473029045643154,
                  _id: "67399b7b94a05a36d2af630b",
                },
                {
                  skill: "Outlook",
                  weight: 7,
                  _id: "67399b7b94a05a36d2af630c",
                },
                {
                  skill: "Word",
                  weight: 6.892561983471074,
                  _id: "67399b7b94a05a36d2af630d",
                },
                {
                  skill: "PowerPoint",
                  weight: 6.768595041322314,
                  _id: "67399b7b94a05a36d2af630e",
                },
              ],
            },
            _id: "67399b7b94a05a36d2af630a",
          },
          {
            skill: "Excel",
            skillWeight: 7.5,
            skillScore: "58.29",
            microSkills: {
              analyzed_skill: "Excel",
              top_micro_skills: [
                {
                  skill: "Data Visualization",
                  weight: 8.285714285714286,
                  _id: "67399b7b94a05a36d2af6310",
                },
                {
                  skill: "Vlookups",
                  weight: 8,
                  _id: "67399b7b94a05a36d2af6311",
                },
                {
                  skill: "Financial Formulas",
                  weight: 8,
                  _id: "67399b7b94a05a36d2af6312",
                },
                {
                  skill: "Macros",
                  weight: 8,
                  _id: "67399b7b94a05a36d2af6313",
                },
                {
                  skill: "Formulas and Functions",
                  weight: 7.666666666666667,
                  _id: "67399b7b94a05a36d2af6314",
                },
              ],
            },
            _id: "67399b7b94a05a36d2af630f",
          },
          {
            skill: "Spreadsheet",
            skillWeight: 7.666666666666667,
            skillScore: "59.06",
            microSkills: {
              analyzed_skill: "Spreadsheet",
              top_micro_skills: [
                {
                  skill: "Excel",
                  weight: 8,
                  _id: "67399b7b94a05a36d2af6316",
                },
                {
                  skill: "Formulas",
                  weight: 8,
                  _id: "67399b7b94a05a36d2af6317",
                },
                {
                  skill: "Data Analysis",
                  weight: 7.666666666666667,
                  _id: "67399b7b94a05a36d2af6318",
                },
                {
                  skill: "Microsoft Excel",
                  weight: 7,
                  _id: "67399b7b94a05a36d2af6319",
                },
                {
                  skill: "Formulas and Functions",
                  weight: 7,
                  _id: "67399b7b94a05a36d2af631a",
                },
              ],
            },
            _id: "67399b7b94a05a36d2af6315",
          },
          {
            skill: "Communication Skills",
            skillWeight: 7.419475655430712,
            skillScore: "68.52",
            microSkills: {
              analyzed_skill: "Communication Skills",
              top_micro_skills: [
                {
                  skill: "Listening Skills",
                  weight: 9,
                  _id: "67399b7b94a05a36d2af631c",
                },
                {
                  skill: "Persuasive Writing",
                  weight: 8,
                  _id: "67399b7b94a05a36d2af631d",
                },
                {
                  skill: "Public Speaking",
                  weight: 8,
                  _id: "67399b7b94a05a36d2af631e",
                },
                {
                  skill: "Persuasion",
                  weight: 8,
                  _id: "67399b7b94a05a36d2af631f",
                },
                {
                  skill: "Persuasive Communication",
                  weight: 8,
                  _id: "67399b7b94a05a36d2af6320",
                },
              ],
            },
            _id: "67399b7b94a05a36d2af631b",
          },
          {
            skill: "Presentation Skills",
            skillWeight: 6.7,
            skillScore: "47.89",
            microSkills: {
              analyzed_skill: "Presentation Skills",
              top_micro_skills: [
                {
                  skill: "Persuasive Pitching",
                  weight: 9,
                  _id: "67399b7b94a05a36d2af6322",
                },
                {
                  skill: "Slide Preparation",
                  weight: 8,
                  _id: "67399b7b94a05a36d2af6323",
                },
                {
                  skill: "Effective Communication",
                  weight: 8,
                  _id: "67399b7b94a05a36d2af6324",
                },
                {
                  skill: "PowerPoint",
                  weight: 7.5,
                  _id: "67399b7b94a05a36d2af6325",
                },
                {
                  skill: "Data Visualization",
                  weight: 7.25,
                  _id: "67399b7b94a05a36d2af6326",
                },
              ],
            },
            _id: "67399b7b94a05a36d2af6321",
          },
        ],
        focusArea: ["Analytical Skills", "Presentation Skills"],
        _id: "67399b7b94a05a36d2af62bf",
      },
      {
        subject: "Business Communication",
        skillDetails: [
          {
            skill: "Communication Skills",
            skillWeight: 7.419475655430712,
            skillScore: "68.52",
            microSkills: {
              analyzed_skill: "Communication Skills",
              top_micro_skills: [
                {
                  skill: "Listening Skills",
                  weight: 9,
                  _id: "67399b7b94a05a36d2af6329",
                },
                {
                  skill: "Persuasive Writing",
                  weight: 8,
                  _id: "67399b7b94a05a36d2af632a",
                },
                {
                  skill: "Public Speaking",
                  weight: 8,
                  _id: "67399b7b94a05a36d2af632b",
                },
                {
                  skill: "Persuasion",
                  weight: 8,
                  _id: "67399b7b94a05a36d2af632c",
                },
                {
                  skill: "Persuasive Communication",
                  weight: 8,
                  _id: "67399b7b94a05a36d2af632d",
                },
              ],
            },
            _id: "67399b7b94a05a36d2af6328",
          },
          {
            skill: "Business Communication",
            skillWeight: 6.416666666666667,
            skillScore: "52.08",
            microSkills: {
              analyzed_skill: "Business Communication",
              top_micro_skills: [
                {
                  skill: "Report Writing",
                  weight: 7.076923076923077,
                  _id: "67399b7b94a05a36d2af632f",
                },
                {
                  skill: "Presentation Skills",
                  weight: 7,
                  _id: "67399b7b94a05a36d2af6330",
                },
                {
                  skill: "Stakeholder Management",
                  weight: 7,
                  _id: "67399b7b94a05a36d2af6331",
                },
                {
                  skill: "Interpersonal Skills",
                  weight: 7,
                  _id: "67399b7b94a05a36d2af6332",
                },
                {
                  skill: "Email Etiquette",
                  weight: 6.6,
                  _id: "67399b7b94a05a36d2af6333",
                },
              ],
            },
            _id: "67399b7b94a05a36d2af632e",
          },
          {
            skill: "Presentation Skills",
            skillWeight: 6.7,
            skillScore: "47.89",
            microSkills: {
              analyzed_skill: "Presentation Skills",
              top_micro_skills: [
                {
                  skill: "Persuasive Pitching",
                  weight: 9,
                  _id: "67399b7b94a05a36d2af6335",
                },
                {
                  skill: "Slide Preparation",
                  weight: 8,
                  _id: "67399b7b94a05a36d2af6336",
                },
                {
                  skill: "Effective Communication",
                  weight: 8,
                  _id: "67399b7b94a05a36d2af6337",
                },
                {
                  skill: "PowerPoint",
                  weight: 7.5,
                  _id: "67399b7b94a05a36d2af6338",
                },
                {
                  skill: "Data Visualization",
                  weight: 7.25,
                  _id: "67399b7b94a05a36d2af6339",
                },
              ],
            },
            _id: "67399b7b94a05a36d2af6334",
          },
          {
            skill: "Telephone Skills",
            skillWeight: 9,
            skillScore: "71.77",
            microSkills: {
              analyzed_skill: "Telephone Skills",
              top_micro_skills: [
                {
                  skill: "Telephone Etiquette",
                  weight: 9,
                  _id: "67399b7b94a05a36d2af633b",
                },
                {
                  skill: "Clear Communication",
                  weight: 9,
                  _id: "67399b7b94a05a36d2af633c",
                },
                {
                  skill: "Clear Speech",
                  weight: 9,
                  _id: "67399b7b94a05a36d2af633d",
                },
                {
                  skill: "Active Listening",
                  weight: 9,
                  _id: "67399b7b94a05a36d2af633e",
                },
                {
                  skill: "Call Handling",
                  weight: 8.8,
                  _id: "67399b7b94a05a36d2af633f",
                },
              ],
            },
            _id: "67399b7b94a05a36d2af633a",
          },
          {
            skill: "Language Skills",
            skillWeight: 8,
            skillScore: "64.80",
            microSkills: {
              analyzed_skill: "Language Skills",
              top_micro_skills: [
                {
                  skill: "Malayalam",
                  weight: 8.5,
                  _id: "67399b7b94a05a36d2af6341",
                },
                {
                  skill: "English",
                  weight: 7.5,
                  _id: "67399b7b94a05a36d2af6342",
                },
              ],
            },
            _id: "67399b7b94a05a36d2af6340",
          },
          {
            skill: "Analytical Skills",
            skillWeight: 6.375,
            skillScore: "49.74",
            microSkills: {
              analyzed_skill: "Analytical Skills",
              top_micro_skills: [
                {
                  skill: "Data Interpretation",
                  weight: 9,
                  _id: "67399b7b94a05a36d2af6344",
                },
                {
                  skill: "Financial Analysis",
                  weight: 8,
                  _id: "67399b7b94a05a36d2af6345",
                },
                {
                  skill: "Market Research",
                  weight: 7,
                  _id: "67399b7b94a05a36d2af6346",
                },
                {
                  skill: "Critical Thinking",
                  weight: 6.75,
                  _id: "67399b7b94a05a36d2af6347",
                },
                {
                  skill: "Problem Solving",
                  weight: 6.7,
                  _id: "67399b7b94a05a36d2af6348",
                },
              ],
            },
            _id: "67399b7b94a05a36d2af6343",
          },
          {
            skill: "Problem-Solving",
            skillWeight: 6.441860465116279,
            skillScore: "58.42",
            microSkills: {
              analyzed_skill: "Problem-Solving",
              top_micro_skills: [
                {
                  skill: "Decision-Making",
                  weight: 7,
                  _id: "67399b7b94a05a36d2af634a",
                },
                {
                  skill: "Troubleshooting",
                  weight: 7,
                  _id: "67399b7b94a05a36d2af634b",
                },
                {
                  skill: "Conflict Resolution",
                  weight: 7,
                  _id: "67399b7b94a05a36d2af634c",
                },
                {
                  skill: "Analytical Thinking",
                  weight: 6.7,
                  _id: "67399b7b94a05a36d2af634d",
                },
                {
                  skill: "Critical Thinking",
                  weight: 6.446808510638298,
                  _id: "67399b7b94a05a36d2af634e",
                },
              ],
            },
            _id: "67399b7b94a05a36d2af6349",
          },
          {
            skill: "Research",
            skillWeight: 8.333333333333334,
            skillScore: "64.14",
            microSkills: {
              analyzed_skill: "Research",
              top_micro_skills: [
                {
                  skill: "Data Analysis",
                  weight: 8.5,
                  _id: "67399b7b94a05a36d2af6350",
                },
                {
                  skill: "Report Writing",
                  weight: 8.5,
                  _id: "67399b7b94a05a36d2af6351",
                },
                {
                  skill: "Data Collection",
                  weight: 8.333333333333334,
                  _id: "67399b7b94a05a36d2af6352",
                },
                {
                  skill: "Hypothesis Testing",
                  weight: 8,
                  _id: "67399b7b94a05a36d2af6353",
                },
                {
                  skill: "Analytical Thinking",
                  weight: 8,
                  _id: "67399b7b94a05a36d2af6354",
                },
              ],
            },
            _id: "67399b7b94a05a36d2af634f",
          },
          {
            skill: "Microsoft Office",
            skillWeight: 6.980952380952381,
            skillScore: "53.21",
            microSkills: {
              analyzed_skill: "Microsoft Office",
              top_micro_skills: [
                {
                  skill: "Excel",
                  weight: 7.473029045643154,
                  _id: "67399b7b94a05a36d2af6356",
                },
                {
                  skill: "Outlook",
                  weight: 7,
                  _id: "67399b7b94a05a36d2af6357",
                },
                {
                  skill: "Word",
                  weight: 6.892561983471074,
                  _id: "67399b7b94a05a36d2af6358",
                },
                {
                  skill: "PowerPoint",
                  weight: 6.768595041322314,
                  _id: "67399b7b94a05a36d2af6359",
                },
              ],
            },
            _id: "67399b7b94a05a36d2af6355",
          },
        ],
        focusArea: ["Presentation Skills", "Analytical Skills"],
        _id: "67399b7b94a05a36d2af6327",
      },
      {
        subject: "Financial Environment",
        skillDetails: [
          {
            skill: "Financial Accounting",
            skillWeight: 8.568627450980392,
            skillScore: "72.42",
            microSkills: {
              analyzed_skill: "Financial Accounting",
              top_micro_skills: [
                {
                  skill: "Preparation of Financial Statements",
                  weight: 9.25,
                  _id: "67399b7b94a05a36d2af635c",
                },
                {
                  skill: "Accounts Receivable/Payable",
                  weight: 9,
                  _id: "67399b7b94a05a36d2af635d",
                },
                {
                  skill: "Financial Statements Preparation",
                  weight: 9,
                  _id: "67399b7b94a05a36d2af635e",
                },
                {
                  skill: "IFRS",
                  weight: 9,
                  _id: "67399b7b94a05a36d2af635f",
                },
                {
                  skill: "General Ledger",
                  weight: 9,
                  _id: "67399b7b94a05a36d2af6360",
                },
              ],
            },
            _id: "67399b7b94a05a36d2af635b",
          },
          {
            skill: "Financial Analysis",
            skillWeight: 8.407407407407407,
            skillScore: "73.27",
            microSkills: {
              analyzed_skill: "Financial Analysis",
              top_micro_skills: [
                {
                  skill: "Equity Analysis",
                  weight: 10,
                  _id: "67399b7b94a05a36d2af6362",
                },
                {
                  skill: "Equity Valuation",
                  weight: 10,
                  _id: "67399b7b94a05a36d2af6363",
                },
                {
                  skill: "Derivative Analysis",
                  weight: 10,
                  _id: "67399b7b94a05a36d2af6364",
                },
                {
                  skill: "Portfolio Management",
                  weight: 9.857142857142858,
                  _id: "67399b7b94a05a36d2af6365",
                },
                {
                  skill: "Equity Research",
                  weight: 9.529411764705882,
                  _id: "67399b7b94a05a36d2af6366",
                },
              ],
            },
            _id: "67399b7b94a05a36d2af6361",
          },
          {
            skill: "Financial Management",
            skillWeight: 7.894736842105263,
            skillScore: "71.98",
            microSkills: {
              analyzed_skill: "Financial Management",
              top_micro_skills: [
                {
                  skill: "Credit Risk Assessment",
                  weight: 9,
                  _id: "67399b7b94a05a36d2af6368",
                },
                {
                  skill: "Cash Flow Management",
                  weight: 9,
                  _id: "67399b7b94a05a36d2af6369",
                },
                {
                  skill: "Loan Portfolio Management",
                  weight: 9,
                  _id: "67399b7b94a05a36d2af636a",
                },
                {
                  skill: "Financial Analysis",
                  weight: 8.5,
                  _id: "67399b7b94a05a36d2af636b",
                },
                {
                  skill: "Financial Reporting",
                  weight: 8.2,
                  _id: "67399b7b94a05a36d2af636c",
                },
              ],
            },
            _id: "67399b7b94a05a36d2af6367",
          },
          {
            skill: "Financial Modeling",
            skillWeight: 7.25,
            skillScore: "64.97",
            microSkills: {
              analyzed_skill: "Financial Modeling",
              top_micro_skills: [
                {
                  skill: "Sensitivity Analysis",
                  weight: 8,
                  _id: "67399b7b94a05a36d2af636e",
                },
                {
                  skill: "Financial Forecasting",
                  weight: 8,
                  _id: "67399b7b94a05a36d2af636f",
                },
                {
                  skill: "Data Analysis",
                  weight: 8,
                  _id: "67399b7b94a05a36d2af6370",
                },
                {
                  skill: "Excel Proficiency",
                  weight: 7.333333333333333,
                  _id: "67399b7b94a05a36d2af6371",
                },
                {
                  skill: "Forecasting",
                  weight: 7,
                  _id: "67399b7b94a05a36d2af6372",
                },
              ],
            },
            _id: "67399b7b94a05a36d2af636d",
          },
          {
            skill: "Financial Planning",
            skillWeight: 10,
            skillScore: "89.73",
            microSkills: {
              analyzed_skill: "Financial Planning",
              top_micro_skills: [
                {
                  skill: "Investment Strategies",
                  weight: 10,
                  _id: "67399b7b94a05a36d2af6374",
                },
                {
                  skill: "Retirement Planning",
                  weight: 9.857142857142858,
                  _id: "67399b7b94a05a36d2af6375",
                },
                {
                  skill: "Tax Planning",
                  weight: 9.571428571428571,
                  _id: "67399b7b94a05a36d2af6376",
                },
                {
                  skill: "Investment Planning",
                  weight: 9.5,
                  _id: "67399b7b94a05a36d2af6377",
                },
              ],
            },
            _id: "67399b7b94a05a36d2af6373",
          },
          {
            skill: "Financial Services",
            skillWeight: 8.3125,
            skillScore: "77.08",
            microSkills: {
              analyzed_skill: "Financial Services",
              top_micro_skills: [
                {
                  skill: "Stock Broking",
                  weight: 10,
                  _id: "67399b7b94a05a36d2af6379",
                },
                {
                  skill: "Gold Loan",
                  weight: 10,
                  _id: "67399b7b94a05a36d2af637a",
                },
                {
                  skill: "NISM Certification",
                  weight: 9.666666666666666,
                  _id: "67399b7b94a05a36d2af637b",
                },
                {
                  skill: "Demat Account",
                  weight: 9.666666666666666,
                  _id: "67399b7b94a05a36d2af637c",
                },
                {
                  skill: "Demat Account Management",
                  weight: 9,
                  _id: "67399b7b94a05a36d2af637d",
                },
              ],
            },
            _id: "67399b7b94a05a36d2af6378",
          },
          {
            skill: "Finance",
            skillWeight: 9,
            skillScore: "75.80",
            microSkills: {
              analyzed_skill: "Finance",
              top_micro_skills: [
                {
                  skill: "Financial Analysis",
                  weight: 9,
                  _id: "67399b7b94a05a36d2af637f",
                },
                {
                  skill: "Financial Reporting",
                  weight: 9,
                  _id: "67399b7b94a05a36d2af6380",
                },
                {
                  skill: "Financial Modeling",
                  weight: 8,
                  _id: "67399b7b94a05a36d2af6381",
                },
                {
                  skill: "Financial Products",
                  weight: 8,
                  _id: "67399b7b94a05a36d2af6382",
                },
                {
                  skill: "Budgeting",
                  weight: 8,
                  _id: "67399b7b94a05a36d2af6383",
                },
              ],
            },
            _id: "67399b7b94a05a36d2af637e",
          },
          {
            skill: "Auditing",
            skillWeight: 9.28,
            skillScore: "78.54",
            microSkills: {
              analyzed_skill: "Auditing",
              top_micro_skills: [
                {
                  skill: "Audit Planning",
                  weight: 10,
                  _id: "67399b7b94a05a36d2af6385",
                },
                {
                  skill: "Financial Auditing",
                  weight: 9.93939393939394,
                  _id: "67399b7b94a05a36d2af6386",
                },
                {
                  skill: "Compliance Auditing",
                  weight: 9.705882352941176,
                  _id: "67399b7b94a05a36d2af6387",
                },
                {
                  skill: "Internal Auditing",
                  weight: 9.384615384615385,
                  _id: "67399b7b94a05a36d2af6388",
                },
                {
                  skill: "Statutory Auditing",
                  weight: 8.625,
                  _id: "67399b7b94a05a36d2af6389",
                },
              ],
            },
            _id: "67399b7b94a05a36d2af6384",
          },
          {
            skill: "Taxation",
            skillWeight: 8.536082474226804,
            skillScore: "72.33",
            microSkills: {
              analyzed_skill: "Taxation",
              top_micro_skills: [
                {
                  skill: "TDS",
                  weight: 9.25,
                  _id: "67399b7b94a05a36d2af638b",
                },
                {
                  skill: "GST",
                  weight: 9.025,
                  _id: "67399b7b94a05a36d2af638c",
                },
                {
                  skill: "Tax Regulations",
                  weight: 9,
                  _id: "67399b7b94a05a36d2af638d",
                },
                {
                  skill: "Income Tax Compliance",
                  weight: 9,
                  _id: "67399b7b94a05a36d2af638e",
                },
                {
                  skill: "Tax Filing",
                  weight: 8.7,
                  _id: "67399b7b94a05a36d2af638f",
                },
              ],
            },
            _id: "67399b7b94a05a36d2af638a",
          },
          {
            skill: "Corporate Laws",
            skillWeight: 7.666666666666667,
            skillScore: "65.19",
            microSkills: {
              analyzed_skill: "Corporate Laws",
              top_micro_skills: [
                {
                  skill: "Company Act",
                  weight: 8,
                  _id: "67399b7b94a05a36d2af6391",
                },
                {
                  skill: "Compliance Management",
                  weight: 7.666666666666667,
                  _id: "67399b7b94a05a36d2af6392",
                },
                {
                  skill: "SEBI Regulations",
                  weight: 7.666666666666667,
                  _id: "67399b7b94a05a36d2af6393",
                },
                {
                  skill: "Companies Act",
                  weight: 7.5,
                  _id: "67399b7b94a05a36d2af6394",
                },
              ],
            },
            _id: "67399b7b94a05a36d2af6390",
          },
          {
            skill: "Business Law",
            skillWeight: 6.75,
            skillScore: "61.42",
            microSkills: {
              analyzed_skill: "Business Law",
              top_micro_skills: [
                {
                  skill: "Company Law",
                  weight: 7.666666666666667,
                  _id: "67399b7b94a05a36d2af6396",
                },
                {
                  skill: "Contract Law",
                  weight: 7.3125,
                  _id: "67399b7b94a05a36d2af6397",
                },
                {
                  skill: "Intellectual Property Law",
                  weight: 7.181818181818182,
                  _id: "67399b7b94a05a36d2af6398",
                },
                {
                  skill: "Corporate Law",
                  weight: 7.153846153846154,
                  _id: "67399b7b94a05a36d2af6399",
                },
                {
                  skill: "Regulatory Compliance",
                  weight: 6.8,
                  _id: "67399b7b94a05a36d2af639a",
                },
              ],
            },
            _id: "67399b7b94a05a36d2af6395",
          },
          {
            skill: "Compliance",
            skillWeight: 7.928571428571429,
            skillScore: "67.41",
            microSkills: {
              analyzed_skill: "Compliance",
              top_micro_skills: [
                {
                  skill: "Audit and Compliance",
                  weight: 10,
                  _id: "67399b7b94a05a36d2af639c",
                },
                {
                  skill: "Internal Auditing",
                  weight: 10,
                  _id: "67399b7b94a05a36d2af639d",
                },
                {
                  skill: "Compliance Reporting",
                  weight: 10,
                  _id: "67399b7b94a05a36d2af639e",
                },
                {
                  skill: "Regulatory Compliance",
                  weight: 8.222222222222221,
                  _id: "67399b7b94a05a36d2af639f",
                },
                {
                  skill: "Reporting",
                  weight: 8,
                  _id: "67399b7b94a05a36d2af63a0",
                },
              ],
            },
            _id: "67399b7b94a05a36d2af639b",
          },
          {
            skill: "Financial Compliance",
            skillWeight: 8,
            skillScore: "81.90",
            microSkills: {
              analyzed_skill: "Financial Compliance",
              top_micro_skills: [
                {
                  skill: "NBFC Compliance",
                  weight: 10,
                  _id: "67399b7b94a05a36d2af63a2",
                },
                {
                  skill: "Regulatory Reporting",
                  weight: 9,
                  _id: "67399b7b94a05a36d2af63a3",
                },
                {
                  skill: "KYC and AML",
                  weight: 9,
                  _id: "67399b7b94a05a36d2af63a4",
                },
                {
                  skill: "Regulatory Compliance",
                  weight: 8,
                  _id: "67399b7b94a05a36d2af63a5",
                },
                {
                  skill: "Internal Controls",
                  weight: 8,
                  _id: "67399b7b94a05a36d2af63a6",
                },
              ],
            },
            _id: "67399b7b94a05a36d2af63a1",
          },
          {
            skill: "Regulatory Compliance",
            skillWeight: 7.25,
            skillScore: "61.15",
            microSkills: {
              analyzed_skill: "Regulatory Compliance",
              top_micro_skills: [
                {
                  skill: "Compliance Monitoring",
                  weight: 9,
                  _id: "67399b7b94a05a36d2af63a8",
                },
                {
                  skill: "Financial Regulations",
                  weight: 9,
                  _id: "67399b7b94a05a36d2af63a9",
                },
                {
                  skill: "Wealth Management Regulations",
                  weight: 9,
                  _id: "67399b7b94a05a36d2af63aa",
                },
                {
                  skill: "Regulatory Reporting",
                  weight: 8.5,
                  _id: "67399b7b94a05a36d2af63ab",
                },
                {
                  skill: "Audit Procedures",
                  weight: 8,
                  _id: "67399b7b94a05a36d2af63ac",
                },
              ],
            },
            _id: "67399b7b94a05a36d2af63a7",
          },
          {
            skill: "Financial Regulations",
            skillWeight: 7,
            skillScore: "60.01",
            microSkills: {
              analyzed_skill: "Financial Regulations",
              top_micro_skills: [
                {
                  skill: "PMLA (Prevention of Money Laundering Act)",
                  weight: 9,
                  _id: "67399b7b94a05a36d2af63ae",
                },
                {
                  skill: "RBI Guidelines",
                  weight: 9,
                  _id: "67399b7b94a05a36d2af63af",
                },
                {
                  skill: "AML Compliance",
                  weight: 9,
                  _id: "67399b7b94a05a36d2af63b0",
                },
                {
                  skill: "FEMA (Foreign Exchange Management Act)",
                  weight: 9,
                  _id: "67399b7b94a05a36d2af63b1",
                },
                {
                  skill: "KYC Compliance",
                  weight: 9,
                  _id: "67399b7b94a05a36d2af63b2",
                },
              ],
            },
            _id: "67399b7b94a05a36d2af63ad",
          },
          {
            skill: "Risk Management",
            skillWeight: 6.9,
            skillScore: "64.79",
            microSkills: {
              analyzed_skill: "Risk Management",
              top_micro_skills: [
                {
                  skill: "Compliance Monitoring",
                  weight: 9,
                  _id: "67399b7b94a05a36d2af63b4",
                },
                {
                  skill: "Quantitative Risk Modeling",
                  weight: 8,
                  _id: "67399b7b94a05a36d2af63b5",
                },
                {
                  skill: "Compliance and Regulations",
                  weight: 8,
                  _id: "67399b7b94a05a36d2af63b6",
                },
                {
                  skill: "Portfolio Risk Analysis",
                  weight: 8,
                  _id: "67399b7b94a05a36d2af63b7",
                },
                {
                  skill: "Operational Risk",
                  weight: 8,
                  _id: "67399b7b94a05a36d2af63b8",
                },
              ],
            },
            _id: "67399b7b94a05a36d2af63b3",
          },
          {
            skill: "Audit",
            skillWeight: 8,
            skillScore: "72.80",
            microSkills: {
              analyzed_skill: "Audit",
              top_micro_skills: [
                {
                  skill: "Compliance Audit",
                  weight: 8,
                  _id: "67399b7b94a05a36d2af63ba",
                },
                {
                  skill: "Internal Audit",
                  weight: 8,
                  _id: "67399b7b94a05a36d2af63bb",
                },
                {
                  skill: "Risk Assessment",
                  weight: 8,
                  _id: "67399b7b94a05a36d2af63bc",
                },
              ],
            },
            _id: "67399b7b94a05a36d2af63b9",
          },
          {
            skill: "Reconciliation",
            skillWeight: 10,
            skillScore: "85.00",
            microSkills: {
              analyzed_skill: "Reconciliation",
              top_micro_skills: [
                {
                  skill: "Financial Reconciliation",
                  weight: 10,
                  _id: "67399b7b94a05a36d2af63be",
                },
                {
                  skill: "Bank Reconciliation",
                  weight: 10,
                  _id: "67399b7b94a05a36d2af63bf",
                },
                {
                  skill: "Account Reconciliation",
                  weight: 10,
                  _id: "67399b7b94a05a36d2af63c0",
                },
              ],
            },
            _id: "67399b7b94a05a36d2af63bd",
          },
          {
            skill: "Bookkeeping",
            skillWeight: 9,
            skillScore: "75.73",
            microSkills: {
              analyzed_skill: "Bookkeeping",
              top_micro_skills: [
                {
                  skill: "Payroll Processing",
                  weight: 10,
                  _id: "67399b7b94a05a36d2af63c2",
                },
                {
                  skill: "Financial Reporting",
                  weight: 10,
                  _id: "67399b7b94a05a36d2af63c3",
                },
                {
                  skill: "Bank Reconciliation",
                  weight: 9.25,
                  _id: "67399b7b94a05a36d2af63c4",
                },
                {
                  skill: "Ledger Maintenance",
                  weight: 9,
                  _id: "67399b7b94a05a36d2af63c5",
                },
                {
                  skill: "Double Entry Bookkeeping",
                  weight: 9,
                  _id: "67399b7b94a05a36d2af63c6",
                },
              ],
            },
            _id: "67399b7b94a05a36d2af63c1",
          },
          {
            skill: "Banking",
            skillWeight: 9,
            skillScore: "83.72",
            microSkills: {
              analyzed_skill: "Banking",
              top_micro_skills: [
                {
                  skill: "Branch Operations",
                  weight: 10,
                  _id: "67399b7b94a05a36d2af63c8",
                },
                {
                  skill: "Financial Products Knowledge",
                  weight: 9,
                  _id: "67399b7b94a05a36d2af63c9",
                },
                {
                  skill: "Financial Regulations",
                  weight: 9,
                  _id: "67399b7b94a05a36d2af63ca",
                },
                {
                  skill: "Retail Banking",
                  weight: 8.75,
                  _id: "67399b7b94a05a36d2af63cb",
                },
                {
                  skill: "Customer Service",
                  weight: 8.5,
                  _id: "67399b7b94a05a36d2af63cc",
                },
              ],
            },
            _id: "67399b7b94a05a36d2af63c7",
          },
          {
            skill: "Banking Operations",
            skillWeight: 8.518518518518519,
            skillScore: "76.89",
            microSkills: {
              analyzed_skill: "Banking Operations",
              top_micro_skills: [
                {
                  skill: "Deposits",
                  weight: 10,
                  _id: "67399b7b94a05a36d2af63ce",
                },
                {
                  skill: "Deposit and Withdrawal Handling",
                  weight: 10,
                  _id: "67399b7b94a05a36d2af63cf",
                },
                {
                  skill: "Customer Service",
                  weight: 9.25,
                  _id: "67399b7b94a05a36d2af63d0",
                },
                {
                  skill: "Retail Banking",
                  weight: 9,
                  _id: "67399b7b94a05a36d2af63d1",
                },
                {
                  skill: "Banking Software",
                  weight: 9,
                  _id: "67399b7b94a05a36d2af63d2",
                },
              ],
            },
            _id: "67399b7b94a05a36d2af63cd",
          },
          {
            skill: "Business Administration",
            skillWeight: 7,
            skillScore: "63.70",
            microSkills: {
              analyzed_skill: "Business Administration",
              top_micro_skills: [
                {
                  skill: "Financial Accounting",
                  weight: 8,
                  _id: "67399b7b94a05a36d2af63d4",
                },
                {
                  skill: "Business Law",
                  weight: 7,
                  _id: "67399b7b94a05a36d2af63d5",
                },
                {
                  skill: "Project Management",
                  weight: 7,
                  _id: "67399b7b94a05a36d2af63d6",
                },
              ],
            },
            _id: "67399b7b94a05a36d2af63d3",
          },
          {
            skill: "Business Analysis",
            skillWeight: 7,
            skillScore: "78.26",
            microSkills: {
              analyzed_skill: "Business Analysis",
              top_micro_skills: [
                {
                  skill: "Requirements Gathering",
                  weight: 10,
                  _id: "67399b7b94a05a36d2af63d8",
                },
                {
                  skill: "Process Mapping",
                  weight: 9.333333333333334,
                  _id: "67399b7b94a05a36d2af63d9",
                },
                {
                  skill: "Data Analysis",
                  weight: 8.5,
                  _id: "67399b7b94a05a36d2af63da",
                },
                {
                  skill: "Stakeholder Management",
                  weight: 8.25,
                  _id: "67399b7b94a05a36d2af63db",
                },
                {
                  skill: "Problem Solving",
                  weight: 7,
                  _id: "67399b7b94a05a36d2af63dc",
                },
              ],
            },
            _id: "67399b7b94a05a36d2af63d7",
          },
          {
            skill: "Business Consulting",
            skillWeight: 9.5,
            skillScore: "86.45",
            microSkills: {
              analyzed_skill: "Business Consulting",
              top_micro_skills: [
                {
                  skill: "Analytical Thinking",
                  weight: 10,
                  _id: "67399b7b94a05a36d2af63de",
                },
                {
                  skill: "Problem Solving",
                  weight: 9.5,
                  _id: "67399b7b94a05a36d2af63df",
                },
                {
                  skill: "Client Interaction",
                  weight: 9.5,
                  _id: "67399b7b94a05a36d2af63e0",
                },
                {
                  skill: "Business Analysis",
                  weight: 9,
                  _id: "67399b7b94a05a36d2af63e1",
                },
                {
                  skill: "Presentation Skills",
                  weight: 9,
                  _id: "67399b7b94a05a36d2af63e2",
                },
              ],
            },
            _id: "67399b7b94a05a36d2af63dd",
          },
          {
            skill: "Sales and Business Development",
            skillWeight: 8,
            skillScore: "72.80",
            microSkills: {
              analyzed_skill: "Sales and Business Development",
              top_micro_skills: [
                {
                  skill: "Lead Generation",
                  weight: 8,
                  _id: "67399b7b94a05a36d2af63e4",
                },
                {
                  skill: "Prospecting",
                  weight: 8,
                  _id: "67399b7b94a05a36d2af63e5",
                },
                {
                  skill: "Negotiation",
                  weight: 7,
                  _id: "67399b7b94a05a36d2af63e6",
                },
              ],
            },
            _id: "67399b7b94a05a36d2af63e3",
          },
          {
            skill: "Client Relationship Management",
            skillWeight: 7.75,
            skillScore: "62.22",
            microSkills: {
              analyzed_skill: "Client Relationship Management",
              top_micro_skills: [
                {
                  skill: "Problem Solving",
                  weight: 9,
                  _id: "67399b7b94a05a36d2af63e8",
                },
                {
                  skill: "Communication Skills",
                  weight: 8.6,
                  _id: "67399b7b94a05a36d2af63e9",
                },
                {
                  skill: "Customer Service",
                  weight: 8.5,
                  _id: "67399b7b94a05a36d2af63ea",
                },
                {
                  skill: "Negotiation Skills",
                  weight: 8.5,
                  _id: "67399b7b94a05a36d2af63eb",
                },
                {
                  skill: "Interpersonal Skills",
                  weight: 8.4,
                  _id: "67399b7b94a05a36d2af63ec",
                },
              ],
            },
            _id: "67399b7b94a05a36d2af63e7",
          },
          {
            skill: "Customer Service",
            skillWeight: 8.474178403755868,
            skillScore: "65.06",
            microSkills: {
              analyzed_skill: "Customer Service",
              top_micro_skills: [
                {
                  skill: "Inbound Customer Service",
                  weight: 10,
                  _id: "67399b7b94a05a36d2af63ee",
                },
                {
                  skill: "Active Listening",
                  weight: 9,
                  _id: "67399b7b94a05a36d2af63ef",
                },
                {
                  skill: "Call Handling",
                  weight: 9,
                  _id: "67399b7b94a05a36d2af63f0",
                },
                {
                  skill: "Complaint Handling",
                  weight: 9,
                  _id: "67399b7b94a05a36d2af63f1",
                },
                {
                  skill: "Customer Relationship Management",
                  weight: 9,
                  _id: "67399b7b94a05a36d2af63f2",
                },
              ],
            },
            _id: "67399b7b94a05a36d2af63ed",
          },
          {
            skill: "Research",
            skillWeight: 8.333333333333334,
            skillScore: "64.14",
            microSkills: {
              analyzed_skill: "Research",
              top_micro_skills: [
                {
                  skill: "Data Analysis",
                  weight: 8.5,
                  _id: "67399b7b94a05a36d2af63f4",
                },
                {
                  skill: "Report Writing",
                  weight: 8.5,
                  _id: "67399b7b94a05a36d2af63f5",
                },
                {
                  skill: "Data Collection",
                  weight: 8.333333333333334,
                  _id: "67399b7b94a05a36d2af63f6",
                },
                {
                  skill: "Hypothesis Testing",
                  weight: 8,
                  _id: "67399b7b94a05a36d2af63f7",
                },
                {
                  skill: "Analytical Thinking",
                  weight: 8,
                  _id: "67399b7b94a05a36d2af63f8",
                },
              ],
            },
            _id: "67399b7b94a05a36d2af63f3",
          },
          {
            skill: "Industry Research",
            skillWeight: 9,
            skillScore: "69.30",
            microSkills: {
              analyzed_skill: "Industry Research",
              top_micro_skills: [
                {
                  skill: "Competitor Analysis",
                  weight: 9,
                  _id: "67399b7b94a05a36d2af63fa",
                },
                {
                  skill: "Trend Analysis",
                  weight: 9,
                  _id: "67399b7b94a05a36d2af63fb",
                },
                {
                  skill: "Market Analysis",
                  weight: 9,
                  _id: "67399b7b94a05a36d2af63fc",
                },
              ],
            },
            _id: "67399b7b94a05a36d2af63f9",
          },
          {
            skill: "Economics",
            skillWeight: 6.25,
            skillScore: "56.88",
            microSkills: {
              analyzed_skill: "Economics",
              top_micro_skills: [
                {
                  skill: "International Economics",
                  weight: 6.75,
                  _id: "67399b7b94a05a36d2af63fe",
                },
                {
                  skill: "Macroeconomics",
                  weight: 6.75,
                  _id: "67399b7b94a05a36d2af63ff",
                },
                {
                  skill: "Microeconomics",
                  weight: 6.75,
                  _id: "67399b7b94a05a36d2af6400",
                },
              ],
            },
            _id: "67399b7b94a05a36d2af63fd",
          },
          {
            skill: "Analytical Skills",
            skillWeight: 6.375,
            skillScore: "49.74",
            microSkills: {
              analyzed_skill: "Analytical Skills",
              top_micro_skills: [
                {
                  skill: "Data Interpretation",
                  weight: 9,
                  _id: "67399b7b94a05a36d2af6402",
                },
                {
                  skill: "Financial Analysis",
                  weight: 8,
                  _id: "67399b7b94a05a36d2af6403",
                },
                {
                  skill: "Market Research",
                  weight: 7,
                  _id: "67399b7b94a05a36d2af6404",
                },
                {
                  skill: "Critical Thinking",
                  weight: 6.75,
                  _id: "67399b7b94a05a36d2af6405",
                },
                {
                  skill: "Problem Solving",
                  weight: 6.7,
                  _id: "67399b7b94a05a36d2af6406",
                },
              ],
            },
            _id: "67399b7b94a05a36d2af6401",
          },
          {
            skill: "Analytical Thinking",
            skillWeight: 6,
            skillScore: "54.60",
            microSkills: {
              analyzed_skill: "Analytical Thinking",
              top_micro_skills: [
                {
                  skill: "Problem Solving",
                  weight: 7,
                  _id: "67399b7b94a05a36d2af6408",
                },
                {
                  skill: "Critical Thinking",
                  weight: 6.5,
                  _id: "67399b7b94a05a36d2af6409",
                },
                {
                  skill: "Data Interpretation",
                  weight: 6,
                  _id: "67399b7b94a05a36d2af640a",
                },
                {
                  skill: "Problem Identification",
                  weight: 6,
                  _id: "67399b7b94a05a36d2af640b",
                },
                {
                  skill: "Problem-Solving",
                  weight: 6,
                  _id: "67399b7b94a05a36d2af640c",
                },
              ],
            },
            _id: "67399b7b94a05a36d2af6407",
          },
          {
            skill: "Problem-Solving",
            skillWeight: 6.441860465116279,
            skillScore: "58.42",
            microSkills: {
              analyzed_skill: "Problem-Solving",
              top_micro_skills: [
                {
                  skill: "Decision-Making",
                  weight: 7,
                  _id: "67399b7b94a05a36d2af640e",
                },
                {
                  skill: "Troubleshooting",
                  weight: 7,
                  _id: "67399b7b94a05a36d2af640f",
                },
                {
                  skill: "Conflict Resolution",
                  weight: 7,
                  _id: "67399b7b94a05a36d2af6410",
                },
                {
                  skill: "Analytical Thinking",
                  weight: 6.7,
                  _id: "67399b7b94a05a36d2af6411",
                },
                {
                  skill: "Critical Thinking",
                  weight: 6.446808510638298,
                  _id: "67399b7b94a05a36d2af6412",
                },
              ],
            },
            _id: "67399b7b94a05a36d2af640d",
          },
          {
            skill: "Data Analysis",
            skillWeight: 7.617647058823529,
            skillScore: "69.07",
            microSkills: {
              analyzed_skill: "Data Analysis",
              top_micro_skills: [
                {
                  skill: "Reporting and Documentation",
                  weight: 9,
                  _id: "67399b7b94a05a36d2af6414",
                },
                {
                  skill: "Exploratory Data Analysis",
                  weight: 8.875,
                  _id: "67399b7b94a05a36d2af6415",
                },
                {
                  skill: "Spreadsheet Management",
                  weight: 8.5,
                  _id: "67399b7b94a05a36d2af6416",
                },
                {
                  skill: "Spreadsheet",
                  weight: 8,
                  _id: "67399b7b94a05a36d2af6417",
                },
                {
                  skill: "Data Manipulation",
                  weight: 8,
                  _id: "67399b7b94a05a36d2af6418",
                },
              ],
            },
            _id: "67399b7b94a05a36d2af6413",
          },
          {
            skill: "Data Management",
            skillWeight: 9.5,
            skillScore: "86.45",
            microSkills: {
              analyzed_skill: "Data Management",
              top_micro_skills: [
                {
                  skill: "Data Transformation",
                  weight: 9,
                  _id: "67399b7b94a05a36d2af641a",
                },
                {
                  skill: "Data Cleaning",
                  weight: 9,
                  _id: "67399b7b94a05a36d2af641b",
                },
                {
                  skill: "Data Normalization",
                  weight: 9,
                  _id: "67399b7b94a05a36d2af641c",
                },
                {
                  skill: "Data Warehousing",
                  weight: 8,
                  _id: "67399b7b94a05a36d2af641d",
                },
              ],
            },
            _id: "67399b7b94a05a36d2af6419",
          },
          {
            skill: "SQL",
            skillWeight: 7.454545454545454,
            skillScore: "68.52",
            microSkills: {
              analyzed_skill: "SQL",
              top_micro_skills: [
                {
                  skill: "SQL Queries",
                  weight: 8.272727272727273,
                  _id: "67399b7b94a05a36d2af641f",
                },
                {
                  skill: "Data Manipulation",
                  weight: 7.4,
                  _id: "67399b7b94a05a36d2af6420",
                },
                {
                  skill: "Database Management",
                  weight: 7.25,
                  _id: "67399b7b94a05a36d2af6421",
                },
                {
                  skill: "Data Modeling",
                  weight: 7,
                  _id: "67399b7b94a05a36d2af6422",
                },
                {
                  skill: "Data Extraction",
                  weight: 7,
                  _id: "67399b7b94a05a36d2af6423",
                },
              ],
            },
            _id: "67399b7b94a05a36d2af641e",
          },
          {
            skill: "Computer Proficiency",
            skillWeight: 7,
            skillScore: "63.70",
            microSkills: {
              analyzed_skill: "Computer Proficiency",
              top_micro_skills: [
                {
                  skill: "MS Office Suite",
                  weight: 8,
                  _id: "67399b7b94a05a36d2af6425",
                },
                {
                  skill: "Internet Navigation",
                  weight: 7,
                  _id: "67399b7b94a05a36d2af6426",
                },
                {
                  skill: "Basic Troubleshooting",
                  weight: 7,
                  _id: "67399b7b94a05a36d2af6427",
                },
              ],
            },
            _id: "67399b7b94a05a36d2af6424",
          },
          {
            skill: "Microsoft Office",
            skillWeight: 6.980952380952381,
            skillScore: "53.21",
            microSkills: {
              analyzed_skill: "Microsoft Office",
              top_micro_skills: [
                {
                  skill: "Excel",
                  weight: 7.473029045643154,
                  _id: "67399b7b94a05a36d2af6429",
                },
                {
                  skill: "Outlook",
                  weight: 7,
                  _id: "67399b7b94a05a36d2af642a",
                },
                {
                  skill: "Word",
                  weight: 6.892561983471074,
                  _id: "67399b7b94a05a36d2af642b",
                },
                {
                  skill: "PowerPoint",
                  weight: 6.768595041322314,
                  _id: "67399b7b94a05a36d2af642c",
                },
              ],
            },
            _id: "67399b7b94a05a36d2af6428",
          },
          {
            skill: "Excel",
            skillWeight: 7.5,
            skillScore: "58.29",
            microSkills: {
              analyzed_skill: "Excel",
              top_micro_skills: [
                {
                  skill: "Data Visualization",
                  weight: 8.285714285714286,
                  _id: "67399b7b94a05a36d2af642e",
                },
                {
                  skill: "Vlookups",
                  weight: 8,
                  _id: "67399b7b94a05a36d2af642f",
                },
                {
                  skill: "Financial Formulas",
                  weight: 8,
                  _id: "67399b7b94a05a36d2af6430",
                },
                {
                  skill: "Macros",
                  weight: 8,
                  _id: "67399b7b94a05a36d2af6431",
                },
                {
                  skill: "Formulas and Functions",
                  weight: 7.666666666666667,
                  _id: "67399b7b94a05a36d2af6432",
                },
              ],
            },
            _id: "67399b7b94a05a36d2af642d",
          },
          {
            skill: "Spreadsheet",
            skillWeight: 7.666666666666667,
            skillScore: "59.06",
            microSkills: {
              analyzed_skill: "Spreadsheet",
              top_micro_skills: [
                {
                  skill: "Excel",
                  weight: 8,
                  _id: "67399b7b94a05a36d2af6434",
                },
                {
                  skill: "Formulas",
                  weight: 8,
                  _id: "67399b7b94a05a36d2af6435",
                },
                {
                  skill: "Data Analysis",
                  weight: 7.666666666666667,
                  _id: "67399b7b94a05a36d2af6436",
                },
                {
                  skill: "Microsoft Excel",
                  weight: 7,
                  _id: "67399b7b94a05a36d2af6437",
                },
                {
                  skill: "Formulas and Functions",
                  weight: 7,
                  _id: "67399b7b94a05a36d2af6438",
                },
              ],
            },
            _id: "67399b7b94a05a36d2af6433",
          },
          {
            skill: "Basic Accounting",
            skillWeight: 6.666666666666667,
            skillScore: "59.15",
            microSkills: {
              analyzed_skill: "Basic Accounting",
              top_micro_skills: [
                {
                  skill: "Reconciliation",
                  weight: 7.5,
                  _id: "67399b7b94a05a36d2af643a",
                },
                {
                  skill: "Financial Statements",
                  weight: 7.5,
                  _id: "67399b7b94a05a36d2af643b",
                },
                {
                  skill: "Bookkeeping",
                  weight: 7,
                  _id: "67399b7b94a05a36d2af643c",
                },
                {
                  skill: "Financial Reporting",
                  weight: 6.333333333333333,
                  _id: "67399b7b94a05a36d2af643d",
                },
                {
                  skill: "Invoicing",
                  weight: 6.25,
                  _id: "67399b7b94a05a36d2af643e",
                },
              ],
            },
            _id: "67399b7b94a05a36d2af6439",
          },
          {
            skill: "Office Management",
            skillWeight: 9,
            skillScore: "81.90",
            microSkills: {
              analyzed_skill: "Office Management",
              top_micro_skills: [
                {
                  skill: "Scheduling",
                  weight: 9,
                  _id: "67399b7b94a05a36d2af6440",
                },
                {
                  skill: "Scheduling Appointments",
                  weight: 9,
                  _id: "67399b7b94a05a36d2af6441",
                },
                {
                  skill: "Organizing Files and Documents",
                  weight: 9,
                  _id: "67399b7b94a05a36d2af6442",
                },
                {
                  skill: "Maintaining Records",
                  weight: 9,
                  _id: "67399b7b94a05a36d2af6443",
                },
                {
                  skill: "Data Entry",
                  weight: 8,
                  _id: "67399b7b94a05a36d2af6444",
                },
              ],
            },
            _id: "67399b7b94a05a36d2af643f",
          },
          {
            skill: "Administrative Skills",
            skillWeight: 6.8,
            skillScore: "64.79",
            microSkills: {
              analyzed_skill: "Administrative Skills",
              top_micro_skills: [
                {
                  skill: "Attention to Detail",
                  weight: 8,
                  _id: "67399b7b94a05a36d2af6446",
                },
                {
                  skill: "File Management",
                  weight: 7.285714285714286,
                  _id: "67399b7b94a05a36d2af6447",
                },
                {
                  skill: "Data Entry",
                  weight: 7.285714285714286,
                  _id: "67399b7b94a05a36d2af6448",
                },
                {
                  skill: "Scheduling",
                  weight: 7,
                  _id: "67399b7b94a05a36d2af6449",
                },
                {
                  skill: "Office Procedures",
                  weight: 7,
                  _id: "67399b7b94a05a36d2af644a",
                },
              ],
            },
            _id: "67399b7b94a05a36d2af6445",
          },
          {
            skill: "Organizational Skills",
            skillWeight: 7.5,
            skillScore: "68.25",
            microSkills: {
              analyzed_skill: "Organizational Skills",
              top_micro_skills: [
                {
                  skill: "Time Management",
                  weight: 8,
                  _id: "67399b7b94a05a36d2af644c",
                },
                {
                  skill: "Attention to Detail",
                  weight: 8,
                  _id: "67399b7b94a05a36d2af644d",
                },
                {
                  skill: "Task Prioritization",
                  weight: 7.5,
                  _id: "67399b7b94a05a36d2af644e",
                },
                {
                  skill: "Record Keeping",
                  weight: 7,
                  _id: "67399b7b94a05a36d2af644f",
                },
              ],
            },
            _id: "67399b7b94a05a36d2af644b",
          },
          {
            skill: "Time Management",
            skillWeight: 6.833333333333333,
            skillScore: "62.15",
            microSkills: {
              analyzed_skill: "Time Management",
              top_micro_skills: [
                {
                  skill: "Organization",
                  weight: 8,
                  _id: "67399b7b94a05a36d2af6451",
                },
                {
                  skill: "Deadline-oriented",
                  weight: 8,
                  _id: "67399b7b94a05a36d2af6452",
                },
                {
                  skill: "Stress Management",
                  weight: 7.5,
                  _id: "67399b7b94a05a36d2af6453",
                },
                {
                  skill: "Productivity Techniques",
                  weight: 7.333333333333333,
                  _id: "67399b7b94a05a36d2af6454",
                },
                {
                  skill: "Punctuality",
                  weight: 7.25,
                  _id: "67399b7b94a05a36d2af6455",
                },
              ],
            },
            _id: "67399b7b94a05a36d2af6450",
          },
          {
            skill: "Attention to Detail",
            skillWeight: 7.948453608247423,
            skillScore: "71.98",
            microSkills: {
              analyzed_skill: "Attention to Detail",
              top_micro_skills: [
                {
                  skill: "Verification",
                  weight: 9,
                  _id: "67399b7b94a05a36d2af6457",
                },
                {
                  skill: "Audit",
                  weight: 9,
                  _id: "67399b7b94a05a36d2af6458",
                },
                {
                  skill: "Fact-checking",
                  weight: 8.5,
                  _id: "67399b7b94a05a36d2af6459",
                },
                {
                  skill: "Meticulous Record Keeping",
                  weight: 8.333333333333334,
                  _id: "67399b7b94a05a36d2af645a",
                },
                {
                  skill: "Error Checking",
                  weight: 8.285714285714286,
                  _id: "67399b7b94a05a36d2af645b",
                },
              ],
            },
            _id: "67399b7b94a05a36d2af6456",
          },
          {
            skill: "Presentation Skills",
            skillWeight: 6.7,
            skillScore: "47.89",
            microSkills: {
              analyzed_skill: "Presentation Skills",
              top_micro_skills: [
                {
                  skill: "Persuasive Pitching",
                  weight: 9,
                  _id: "67399b7b94a05a36d2af645d",
                },
                {
                  skill: "Slide Preparation",
                  weight: 8,
                  _id: "67399b7b94a05a36d2af645e",
                },
                {
                  skill: "Effective Communication",
                  weight: 8,
                  _id: "67399b7b94a05a36d2af645f",
                },
                {
                  skill: "PowerPoint",
                  weight: 7.5,
                  _id: "67399b7b94a05a36d2af6460",
                },
                {
                  skill: "Data Visualization",
                  weight: 7.25,
                  _id: "67399b7b94a05a36d2af6461",
                },
              ],
            },
            _id: "67399b7b94a05a36d2af645c",
          },
          {
            skill: "Communication Skills",
            skillWeight: 7.419475655430712,
            skillScore: "68.52",
            microSkills: {
              analyzed_skill: "Communication Skills",
              top_micro_skills: [
                {
                  skill: "Listening Skills",
                  weight: 9,
                  _id: "67399b7b94a05a36d2af6463",
                },
                {
                  skill: "Persuasive Writing",
                  weight: 8,
                  _id: "67399b7b94a05a36d2af6464",
                },
                {
                  skill: "Public Speaking",
                  weight: 8,
                  _id: "67399b7b94a05a36d2af6465",
                },
                {
                  skill: "Persuasion",
                  weight: 8,
                  _id: "67399b7b94a05a36d2af6466",
                },
                {
                  skill: "Persuasive Communication",
                  weight: 8,
                  _id: "67399b7b94a05a36d2af6467",
                },
              ],
            },
            _id: "67399b7b94a05a36d2af6462",
          },
          {
            skill: "Business Communication",
            skillWeight: 6.416666666666667,
            skillScore: "52.08",
            microSkills: {
              analyzed_skill: "Business Communication",
              top_micro_skills: [
                {
                  skill: "Report Writing",
                  weight: 7.076923076923077,
                  _id: "67399b7b94a05a36d2af6469",
                },
                {
                  skill: "Presentation Skills",
                  weight: 7,
                  _id: "67399b7b94a05a36d2af646a",
                },
                {
                  skill: "Stakeholder Management",
                  weight: 7,
                  _id: "67399b7b94a05a36d2af646b",
                },
                {
                  skill: "Interpersonal Skills",
                  weight: 7,
                  _id: "67399b7b94a05a36d2af646c",
                },
                {
                  skill: "Email Etiquette",
                  weight: 6.6,
                  _id: "67399b7b94a05a36d2af646d",
                },
              ],
            },
            _id: "67399b7b94a05a36d2af6468",
          },
          {
            skill: "Adaptability",
            skillWeight: 6.375,
            skillScore: "58.70",
            microSkills: {
              analyzed_skill: "Adaptability",
              top_micro_skills: [
                {
                  skill: "Change Management",
                  weight: 7.333333333333333,
                  _id: "67399b7b94a05a36d2af646f",
                },
                {
                  skill: "Resilience",
                  weight: 7.2,
                  _id: "67399b7b94a05a36d2af6470",
                },
                {
                  skill: "Flexibility",
                  weight: 7.090909090909091,
                  _id: "67399b7b94a05a36d2af6471",
                },
                {
                  skill: "Continuous Learning",
                  weight: 7,
                  _id: "67399b7b94a05a36d2af6472",
                },
                {
                  skill: "Problem Solving",
                  weight: 7,
                  _id: "67399b7b94a05a36d2af6473",
                },
              ],
            },
            _id: "67399b7b94a05a36d2af646e",
          },
          {
            skill: "Teamwork",
            skillWeight: 6.583333333333333,
            skillScore: "60.33",
            microSkills: {
              analyzed_skill: "Teamwork",
              top_micro_skills: [
                {
                  skill: "Interpersonal Skills",
                  weight: 7.2727272727272725,
                  _id: "67399b7b94a05a36d2af6475",
                },
                {
                  skill: "Collaboration",
                  weight: 7.0125,
                  _id: "67399b7b94a05a36d2af6476",
                },
                {
                  skill: "Problem Solving",
                  weight: 7,
                  _id: "67399b7b94a05a36d2af6477",
                },
                {
                  skill: "Flexibility",
                  weight: 7,
                  _id: "67399b7b94a05a36d2af6478",
                },
                {
                  skill: "Communication",
                  weight: 6.923076923076923,
                  _id: "67399b7b94a05a36d2af6479",
                },
              ],
            },
            _id: "67399b7b94a05a36d2af6474",
          },
          {
            skill: "Team Management",
            skillWeight: 7.777777777777778,
            skillScore: "69.52",
            microSkills: {
              analyzed_skill: "Team Management",
              top_micro_skills: [
                {
                  skill: "Leadership",
                  weight: 8.333333333333334,
                  _id: "67399b7b94a05a36d2af647b",
                },
                {
                  skill: "Performance Management",
                  weight: 8,
                  _id: "67399b7b94a05a36d2af647c",
                },
                {
                  skill: "Team Coordination",
                  weight: 8,
                  _id: "67399b7b94a05a36d2af647d",
                },
                {
                  skill: "Team Motivation",
                  weight: 7.6,
                  _id: "67399b7b94a05a36d2af647e",
                },
                {
                  skill: "Performance Evaluation",
                  weight: 7.6,
                  _id: "67399b7b94a05a36d2af647f",
                },
              ],
            },
            _id: "67399b7b94a05a36d2af647a",
          },
          {
            skill: "Consulting",
            skillWeight: 9,
            skillScore: "81.90",
            microSkills: {
              analyzed_skill: "Consulting",
              top_micro_skills: [
                {
                  skill: "Client Interaction",
                  weight: 9,
                  _id: "67399b7b94a05a36d2af6481",
                },
                {
                  skill: "Problem Solving",
                  weight: 8.5,
                  _id: "67399b7b94a05a36d2af6482",
                },
                {
                  skill: "Analytical Thinking",
                  weight: 8,
                  _id: "67399b7b94a05a36d2af6483",
                },
                {
                  skill: "Presentation Skills",
                  weight: 7.5,
                  _id: "67399b7b94a05a36d2af6484",
                },
              ],
            },
            _id: "67399b7b94a05a36d2af6480",
          },
          {
            skill: "Project Management",
            skillWeight: 6.625,
            skillScore: "57.88",
            microSkills: {
              analyzed_skill: "Project Management",
              top_micro_skills: [
                {
                  skill: "Stakeholder Engagement",
                  weight: 7,
                  _id: "67399b7b94a05a36d2af6486",
                },
                {
                  skill: "Risk Management",
                  weight: 7,
                  _id: "67399b7b94a05a36d2af6487",
                },
                {
                  skill: "Time Management",
                  weight: 6.5,
                  _id: "67399b7b94a05a36d2af6488",
                },
                {
                  skill: "Stakeholder Management",
                  weight: 6.4,
                  _id: "67399b7b94a05a36d2af6489",
                },
                {
                  skill: "Agile Methodologies",
                  weight: 6.333333333333333,
                  _id: "67399b7b94a05a36d2af648a",
                },
              ],
            },
            _id: "67399b7b94a05a36d2af6485",
          },
        ],
        focusArea: ["Analytical Skills", "Presentation Skills"],
        _id: "67399b7b94a05a36d2af635a",
      },
    ],
    _id: "67399b7b94a05a36d2af624a",
  },
  {
    semester: "Semester 2",
    subjectDetails: [
      {
        subject: "Financial Accounting-II",
        skillDetails: [
          {
            skill: "Accounts",
            skillWeight: 9.280701754385966,
            skillScore: "77.94",
            microSkills: {
              analyzed_skill: "Accounting",
              top_micro_skills: [
                {
                  skill: "Tally ERP",
                  weight: 10,
                  _id: "67399b7b94a05a36d2af624d",
                },
                {
                  skill: "TDS",
                  weight: 10,
                  _id: "67399b7b94a05a36d2af624e",
                },
                {
                  skill: "GST",
                  weight: 10,
                  _id: "67399b7b94a05a36d2af624f",
                },
                {
                  skill: "Financial Accounting",
                  weight: 9.716417910447761,
                  _id: "67399b7b94a05a36d2af6250",
                },
                {
                  skill: "Reconciliation",
                  weight: 9.416666666666666,
                  _id: "67399b7b94a05a36d2af6251",
                },
              ],
            },
            _id: "67399b7b94a05a36d2af624c",
          },
          {
            skill: "Finance",
            skillWeight: 8.626865671641792,
            skillScore: "72.93",
            microSkills: {
              analyzed_skill: "Financial Reporting",
              top_micro_skills: [
                {
                  skill: "GIPS Compliance",
                  weight: 10,
                  _id: "67399b7b94a05a36d2af6253",
                },
                {
                  skill: "GAAP Reporting",
                  weight: 10,
                  _id: "67399b7b94a05a36d2af6254",
                },
                {
                  skill: "Regulatory Reporting",
                  weight: 9.333333333333334,
                  _id: "67399b7b94a05a36d2af6255",
                },
                {
                  skill: "Preparation of Financial Statements",
                  weight: 9.142857142857142,
                  _id: "67399b7b94a05a36d2af6256",
                },
                {
                  skill: "Preparing Financial Statements",
                  weight: 9.071428571428571,
                  _id: "67399b7b94a05a36d2af6257",
                },
              ],
            },
            _id: "67399b7b94a05a36d2af6252",
          },
          {
            skill: "Financial Accounting",
            skillWeight: 8.568627450980392,
            skillScore: "72.42",
            microSkills: {
              analyzed_skill: "Financial Accounting",
              top_micro_skills: [
                {
                  skill: "Preparation of Financial Statements",
                  weight: 9.25,
                  _id: "67399b7b94a05a36d2af6259",
                },
                {
                  skill: "Accounts Receivable/Payable",
                  weight: 9,
                  _id: "67399b7b94a05a36d2af625a",
                },
                {
                  skill: "Financial Statements Preparation",
                  weight: 9,
                  _id: "67399b7b94a05a36d2af625b",
                },
                {
                  skill: "IFRS",
                  weight: 9,
                  _id: "67399b7b94a05a36d2af625c",
                },
                {
                  skill: "General Ledger",
                  weight: 9,
                  _id: "67399b7b94a05a36d2af625d",
                },
              ],
            },
            _id: "67399b7b94a05a36d2af6258",
          },
          {
            skill: "Financial Analysis",
            skillWeight: 8.407407407407407,
            skillScore: "73.27",
            microSkills: {
              analyzed_skill: "Financial Analysis",
              top_micro_skills: [
                {
                  skill: "Equity Analysis",
                  weight: 10,
                  _id: "67399b7b94a05a36d2af625f",
                },
                {
                  skill: "Equity Valuation",
                  weight: 10,
                  _id: "67399b7b94a05a36d2af6260",
                },
                {
                  skill: "Derivative Analysis",
                  weight: 10,
                  _id: "67399b7b94a05a36d2af6261",
                },
                {
                  skill: "Portfolio Management",
                  weight: 9.857142857142858,
                  _id: "67399b7b94a05a36d2af6262",
                },
                {
                  skill: "Equity Research",
                  weight: 9.529411764705882,
                  _id: "67399b7b94a05a36d2af6263",
                },
              ],
            },
            _id: "67399b7b94a05a36d2af625e",
          },
          {
            skill: "Auditing",
            skillWeight: 9.28,
            skillScore: "78.54",
            microSkills: {
              analyzed_skill: "Auditing",
              top_micro_skills: [
                {
                  skill: "Audit Planning",
                  weight: 10,
                  _id: "67399b7b94a05a36d2af6265",
                },
                {
                  skill: "Financial Auditing",
                  weight: 9.93939393939394,
                  _id: "67399b7b94a05a36d2af6266",
                },
                {
                  skill: "Compliance Auditing",
                  weight: 9.705882352941176,
                  _id: "67399b7b94a05a36d2af6267",
                },
                {
                  skill: "Internal Auditing",
                  weight: 9.384615384615385,
                  _id: "67399b7b94a05a36d2af6268",
                },
                {
                  skill: "Statutory Auditing",
                  weight: 8.625,
                  _id: "67399b7b94a05a36d2af6269",
                },
              ],
            },
            _id: "67399b7b94a05a36d2af6264",
          },
          {
            skill: "Taxation",
            skillWeight: 8.536082474226804,
            skillScore: "72.33",
            microSkills: {
              analyzed_skill: "Taxation",
              top_micro_skills: [
                {
                  skill: "TDS",
                  weight: 9.25,
                  _id: "67399b7b94a05a36d2af626b",
                },
                {
                  skill: "GST",
                  weight: 9.025,
                  _id: "67399b7b94a05a36d2af626c",
                },
                {
                  skill: "Tax Regulations",
                  weight: 9,
                  _id: "67399b7b94a05a36d2af626d",
                },
                {
                  skill: "Income Tax Compliance",
                  weight: 9,
                  _id: "67399b7b94a05a36d2af626e",
                },
                {
                  skill: "Tax Filing",
                  weight: 8.7,
                  _id: "67399b7b94a05a36d2af626f",
                },
              ],
            },
            _id: "67399b7b94a05a36d2af626a",
          },
          {
            skill: "Corporate Laws",
            skillWeight: 7.666666666666667,
            skillScore: "65.19",
            microSkills: {
              analyzed_skill: "Corporate Laws",
              top_micro_skills: [
                {
                  skill: "Company Act",
                  weight: 8,
                  _id: "67399b7b94a05a36d2af6271",
                },
                {
                  skill: "Compliance Management",
                  weight: 7.666666666666667,
                  _id: "67399b7b94a05a36d2af6272",
                },
                {
                  skill: "SEBI Regulations",
                  weight: 7.666666666666667,
                  _id: "67399b7b94a05a36d2af6273",
                },
                {
                  skill: "Companies Act",
                  weight: 7.5,
                  _id: "67399b7b94a05a36d2af6274",
                },
              ],
            },
            _id: "67399b7b94a05a36d2af6270",
          },
          {
            skill: "Compliance",
            skillWeight: 7.928571428571429,
            skillScore: "67.41",
            microSkills: {
              analyzed_skill: "Compliance",
              top_micro_skills: [
                {
                  skill: "Audit and Compliance",
                  weight: 10,
                  _id: "67399b7b94a05a36d2af6276",
                },
                {
                  skill: "Internal Auditing",
                  weight: 10,
                  _id: "67399b7b94a05a36d2af6277",
                },
                {
                  skill: "Compliance Reporting",
                  weight: 10,
                  _id: "67399b7b94a05a36d2af6278",
                },
                {
                  skill: "Regulatory Compliance",
                  weight: 8.222222222222221,
                  _id: "67399b7b94a05a36d2af6279",
                },
                {
                  skill: "Reporting",
                  weight: 8,
                  _id: "67399b7b94a05a36d2af627a",
                },
              ],
            },
            _id: "67399b7b94a05a36d2af6275",
          },
          {
            skill: "Financial Regulations",
            skillWeight: 7,
            skillScore: "60.01",
            microSkills: {
              analyzed_skill: "Financial Regulations",
              top_micro_skills: [
                {
                  skill: "PMLA (Prevention of Money Laundering Act)",
                  weight: 9,
                  _id: "67399b7b94a05a36d2af627c",
                },
                {
                  skill: "RBI Guidelines",
                  weight: 9,
                  _id: "67399b7b94a05a36d2af627d",
                },
                {
                  skill: "AML Compliance",
                  weight: 9,
                  _id: "67399b7b94a05a36d2af627e",
                },
                {
                  skill: "FEMA (Foreign Exchange Management Act)",
                  weight: 9,
                  _id: "67399b7b94a05a36d2af627f",
                },
                {
                  skill: "KYC Compliance",
                  weight: 9,
                  _id: "67399b7b94a05a36d2af6280",
                },
              ],
            },
            _id: "67399b7b94a05a36d2af627b",
          },
          {
            skill: "Reconciliation",
            skillWeight: 10,
            skillScore: "85.00",
            microSkills: {
              analyzed_skill: "Reconciliation",
              top_micro_skills: [
                {
                  skill: "Financial Reconciliation",
                  weight: 10,
                  _id: "67399b7b94a05a36d2af6282",
                },
                {
                  skill: "Bank Reconciliation",
                  weight: 10,
                  _id: "67399b7b94a05a36d2af6283",
                },
                {
                  skill: "Account Reconciliation",
                  weight: 10,
                  _id: "67399b7b94a05a36d2af6284",
                },
              ],
            },
            _id: "67399b7b94a05a36d2af6281",
          },
          {
            skill: "Bookkeeping",
            skillWeight: 9,
            skillScore: "75.73",
            microSkills: {
              analyzed_skill: "Bookkeeping",
              top_micro_skills: [
                {
                  skill: "Payroll Processing",
                  weight: 10,
                  _id: "67399b7b94a05a36d2af6286",
                },
                {
                  skill: "Financial Reporting",
                  weight: 10,
                  _id: "67399b7b94a05a36d2af6287",
                },
                {
                  skill: "Bank Reconciliation",
                  weight: 9.25,
                  _id: "67399b7b94a05a36d2af6288",
                },
                {
                  skill: "Ledger Maintenance",
                  weight: 9,
                  _id: "67399b7b94a05a36d2af6289",
                },
                {
                  skill: "Double Entry Bookkeeping",
                  weight: 9,
                  _id: "67399b7b94a05a36d2af628a",
                },
              ],
            },
            _id: "67399b7b94a05a36d2af6285",
          },
        ],
        focusArea: [],
        _id: "67399b7b94a05a36d2af624b",
      },
      {
        subject: "Management Principles and Applications",
        skillDetails: [
          {
            skill: "Business Administration",
            skillWeight: 7,
            skillScore: "63.70",
            microSkills: {
              analyzed_skill: "Business Administration",
              top_micro_skills: [
                {
                  skill: "Financial Accounting",
                  weight: 8,
                  _id: "67399b7b94a05a36d2af628d",
                },
                {
                  skill: "Business Law",
                  weight: 7,
                  _id: "67399b7b94a05a36d2af628e",
                },
                {
                  skill: "Project Management",
                  weight: 7,
                  _id: "67399b7b94a05a36d2af628f",
                },
              ],
            },
            _id: "67399b7b94a05a36d2af628c",
          },
          {
            skill: "Business Analysis",
            skillWeight: 7,
            skillScore: "78.26",
            microSkills: {
              analyzed_skill: "Business Analysis",
              top_micro_skills: [
                {
                  skill: "Requirements Gathering",
                  weight: 10,
                  _id: "67399b7b94a05a36d2af6291",
                },
                {
                  skill: "Process Mapping",
                  weight: 9.333333333333334,
                  _id: "67399b7b94a05a36d2af6292",
                },
                {
                  skill: "Data Analysis",
                  weight: 8.5,
                  _id: "67399b7b94a05a36d2af6293",
                },
                {
                  skill: "Stakeholder Management",
                  weight: 8.25,
                  _id: "67399b7b94a05a36d2af6294",
                },
                {
                  skill: "Problem Solving",
                  weight: 7,
                  _id: "67399b7b94a05a36d2af6295",
                },
              ],
            },
            _id: "67399b7b94a05a36d2af6290",
          },
          {
            skill: "Business Acumen",
            skillWeight: 7,
            skillScore: "63.70",
            microSkills: {
              analyzed_skill: "Business Acumen",
              top_micro_skills: [
                {
                  skill: "Strategic Thinking",
                  weight: 7,
                  _id: "67399b7b94a05a36d2af6297",
                },
                {
                  skill: "Industry Knowledge",
                  weight: 7,
                  _id: "67399b7b94a05a36d2af6298",
                },
                {
                  skill: "Problem-Solving",
                  weight: 7,
                  _id: "67399b7b94a05a36d2af6299",
                },
                {
                  skill: "Market Awareness",
                  weight: 7,
                  _id: "67399b7b94a05a36d2af629a",
                },
                {
                  skill: "Financial Literacy",
                  weight: 7,
                  _id: "67399b7b94a05a36d2af629b",
                },
              ],
            },
            _id: "67399b7b94a05a36d2af6296",
          },
          {
            skill: "Problem-Solving",
            skillWeight: 6.441860465116279,
            skillScore: "58.42",
            microSkills: {
              analyzed_skill: "Problem-Solving",
              top_micro_skills: [
                {
                  skill: "Decision-Making",
                  weight: 7,
                  _id: "67399b7b94a05a36d2af629d",
                },
                {
                  skill: "Troubleshooting",
                  weight: 7,
                  _id: "67399b7b94a05a36d2af629e",
                },
                {
                  skill: "Conflict Resolution",
                  weight: 7,
                  _id: "67399b7b94a05a36d2af629f",
                },
                {
                  skill: "Analytical Thinking",
                  weight: 6.7,
                  _id: "67399b7b94a05a36d2af62a0",
                },
                {
                  skill: "Critical Thinking",
                  weight: 6.446808510638298,
                  _id: "67399b7b94a05a36d2af62a1",
                },
              ],
            },
            _id: "67399b7b94a05a36d2af629c",
          },
          {
            skill: "Analytical Thinking",
            skillWeight: 6,
            skillScore: "54.60",
            microSkills: {
              analyzed_skill: "Analytical Thinking",
              top_micro_skills: [
                {
                  skill: "Problem Solving",
                  weight: 7,
                  _id: "67399b7b94a05a36d2af62a3",
                },
                {
                  skill: "Critical Thinking",
                  weight: 6.5,
                  _id: "67399b7b94a05a36d2af62a4",
                },
                {
                  skill: "Data Interpretation",
                  weight: 6,
                  _id: "67399b7b94a05a36d2af62a5",
                },
                {
                  skill: "Problem Identification",
                  weight: 6,
                  _id: "67399b7b94a05a36d2af62a6",
                },
                {
                  skill: "Problem-Solving",
                  weight: 6,
                  _id: "67399b7b94a05a36d2af62a7",
                },
              ],
            },
            _id: "67399b7b94a05a36d2af62a2",
          },
          {
            skill: "Data Analysis",
            skillWeight: 7.617647058823529,
            skillScore: "69.07",
            microSkills: {
              analyzed_skill: "Data Analysis",
              top_micro_skills: [
                {
                  skill: "Reporting and Documentation",
                  weight: 9,
                  _id: "67399b7b94a05a36d2af62a9",
                },
                {
                  skill: "Exploratory Data Analysis",
                  weight: 8.875,
                  _id: "67399b7b94a05a36d2af62aa",
                },
                {
                  skill: "Spreadsheet Management",
                  weight: 8.5,
                  _id: "67399b7b94a05a36d2af62ab",
                },
                {
                  skill: "Spreadsheet",
                  weight: 8,
                  _id: "67399b7b94a05a36d2af62ac",
                },
                {
                  skill: "Data Manipulation",
                  weight: 8,
                  _id: "67399b7b94a05a36d2af62ad",
                },
              ],
            },
            _id: "67399b7b94a05a36d2af62a8",
          },
          {
            skill: "Organizational Skills",
            skillWeight: 7.5,
            skillScore: "68.25",
            microSkills: {
              analyzed_skill: "Organizational Skills",
              top_micro_skills: [
                {
                  skill: "Time Management",
                  weight: 8,
                  _id: "67399b7b94a05a36d2af62af",
                },
                {
                  skill: "Attention to Detail",
                  weight: 8,
                  _id: "67399b7b94a05a36d2af62b0",
                },
                {
                  skill: "Task Prioritization",
                  weight: 7.5,
                  _id: "67399b7b94a05a36d2af62b1",
                },
                {
                  skill: "Record Keeping",
                  weight: 7,
                  _id: "67399b7b94a05a36d2af62b2",
                },
              ],
            },
            _id: "67399b7b94a05a36d2af62ae",
          },
          {
            skill: "Time Management",
            skillWeight: 6.833333333333333,
            skillScore: "62.15",
            microSkills: {
              analyzed_skill: "Time Management",
              top_micro_skills: [
                {
                  skill: "Organization",
                  weight: 8,
                  _id: "67399b7b94a05a36d2af62b4",
                },
                {
                  skill: "Deadline-oriented",
                  weight: 8,
                  _id: "67399b7b94a05a36d2af62b5",
                },
                {
                  skill: "Stress Management",
                  weight: 7.5,
                  _id: "67399b7b94a05a36d2af62b6",
                },
                {
                  skill: "Productivity Techniques",
                  weight: 7.333333333333333,
                  _id: "67399b7b94a05a36d2af62b7",
                },
                {
                  skill: "Punctuality",
                  weight: 7.25,
                  _id: "67399b7b94a05a36d2af62b8",
                },
              ],
            },
            _id: "67399b7b94a05a36d2af62b3",
          },
          {
            skill: "Communication Skills",
            skillWeight: 7.419475655430712,
            skillScore: "68.52",
            microSkills: {
              analyzed_skill: "Communication Skills",
              top_micro_skills: [
                {
                  skill: "Listening Skills",
                  weight: 9,
                  _id: "67399b7b94a05a36d2af62ba",
                },
                {
                  skill: "Persuasive Writing",
                  weight: 8,
                  _id: "67399b7b94a05a36d2af62bb",
                },
                {
                  skill: "Public Speaking",
                  weight: 8,
                  _id: "67399b7b94a05a36d2af62bc",
                },
                {
                  skill: "Persuasion",
                  weight: 8,
                  _id: "67399b7b94a05a36d2af62bd",
                },
                {
                  skill: "Persuasive Communication",
                  weight: 8,
                  _id: "67399b7b94a05a36d2af62be",
                },
              ],
            },
            _id: "67399b7b94a05a36d2af62b9",
          },
        ],
        focusArea: [],
        _id: "67399b7b94a05a36d2af628b",
      },
      {
        subject: "Principles of Marketing",
        skillDetails: [
          {
            skill: "Digital Marketing",
            skillWeight: 9,
            skillScore: "69.30",
            microSkills: {
              analyzed_skill: "Digital Marketing",
              top_micro_skills: [
                {
                  skill: "Search Engine Optimization (SEO)",
                  weight: 8.666666666666666,
                  _id: "67399b7b94a05a36d2af62c1",
                },
                {
                  skill: "Social Media Marketing",
                  weight: 8.6,
                  _id: "67399b7b94a05a36d2af62c2",
                },
                {
                  skill: "Content Creation",
                  weight: 8,
                  _id: "67399b7b94a05a36d2af62c3",
                },
                {
                  skill: "Analytics",
                  weight: 8,
                  _id: "67399b7b94a05a36d2af62c4",
                },
                {
                  skill: "Analytics and Reporting",
                  weight: 8,
                  _id: "67399b7b94a05a36d2af62c5",
                },
              ],
            },
            _id: "67399b7b94a05a36d2af62c0",
          },
          {
            skill: "SEO",
            skillWeight: 10,
            skillScore: "77.00",
            microSkills: {
              analyzed_skill: "SEO",
              top_micro_skills: [
                {
                  skill: "On-Page Optimization",
                  weight: 10,
                  _id: "67399b7b94a05a36d2af62c7",
                },
                {
                  skill: "Link Building",
                  weight: 10,
                  _id: "67399b7b94a05a36d2af62c8",
                },
                {
                  skill: "Keyword Research",
                  weight: 10,
                  _id: "67399b7b94a05a36d2af62c9",
                },
                {
                  skill: "Search Engine Algorithms",
                  weight: 9,
                  _id: "67399b7b94a05a36d2af62ca",
                },
                {
                  skill: "Google Analytics",
                  weight: 9,
                  _id: "67399b7b94a05a36d2af62cb",
                },
              ],
            },
            _id: "67399b7b94a05a36d2af62c6",
          },
          {
            skill: "Content Writing",
            skillWeight: 10,
            skillScore: "77.00",
            microSkills: {
              analyzed_skill: "Content Writing",
              top_micro_skills: [
                {
                  skill: "Copywriting",
                  weight: 9,
                  _id: "67399b7b94a05a36d2af62cd",
                },
                {
                  skill: "SEO Optimization",
                  weight: 8,
                  _id: "67399b7b94a05a36d2af62ce",
                },
                {
                  skill: "Storytelling",
                  weight: 8,
                  _id: "67399b7b94a05a36d2af62cf",
                },
              ],
            },
            _id: "67399b7b94a05a36d2af62cc",
          },
          {
            skill: "Sales and Marketing",
            skillWeight: 7.733333333333333,
            skillScore: "57.98",
            microSkills: {
              analyzed_skill: "Sales and Marketing",
              top_micro_skills: [
                {
                  skill: "Product Promotion",
                  weight: 8,
                  _id: "67399b7b94a05a36d2af62d1",
                },
                {
                  skill: "Closing Deals",
                  weight: 8,
                  _id: "67399b7b94a05a36d2af62d2",
                },
                {
                  skill: "Prospecting Techniques",
                  weight: 8,
                  _id: "67399b7b94a05a36d2af62d3",
                },
                {
                  skill: "Customer Relationship Management",
                  weight: 8,
                  _id: "67399b7b94a05a36d2af62d4",
                },
                {
                  skill: "Prospecting",
                  weight: 7.774193548387097,
                  _id: "67399b7b94a05a36d2af62d5",
                },
              ],
            },
            _id: "67399b7b94a05a36d2af62d0",
          },
          {
            skill: "Client Relationship Management",
            skillWeight: 7.75,
            skillScore: "62.22",
            microSkills: {
              analyzed_skill: "Client Relationship Management",
              top_micro_skills: [
                {
                  skill: "Problem Solving",
                  weight: 9,
                  _id: "67399b7b94a05a36d2af62d7",
                },
                {
                  skill: "Communication Skills",
                  weight: 8.6,
                  _id: "67399b7b94a05a36d2af62d8",
                },
                {
                  skill: "Customer Service",
                  weight: 8.5,
                  _id: "67399b7b94a05a36d2af62d9",
                },
                {
                  skill: "Negotiation Skills",
                  weight: 8.5,
                  _id: "67399b7b94a05a36d2af62da",
                },
                {
                  skill: "Interpersonal Skills",
                  weight: 8.4,
                  _id: "67399b7b94a05a36d2af62db",
                },
              ],
            },
            _id: "67399b7b94a05a36d2af62d6",
          },
          {
            skill: "Customer Relationship Management",
            skillWeight: 9.058823529411764,
            skillScore: "71.15",
            microSkills: {
              analyzed_skill: "Customer Relationship Management",
              top_micro_skills: [
                {
                  skill: "Effective Communication",
                  weight: 10,
                  _id: "67399b7b94a05a36d2af62dd",
                },
                {
                  skill: "Relationship Management",
                  weight: 9.666666666666666,
                  _id: "67399b7b94a05a36d2af62de",
                },
                {
                  skill: "Client Relationship Building",
                  weight: 9.514285714285714,
                  _id: "67399b7b94a05a36d2af62df",
                },
                {
                  skill: "Client Retention Strategies",
                  weight: 9.463414634146341,
                  _id: "67399b7b94a05a36d2af62e0",
                },
                {
                  skill: "Client Servicing",
                  weight: 9.375,
                  _id: "67399b7b94a05a36d2af62e1",
                },
              ],
            },
            _id: "67399b7b94a05a36d2af62dc",
          },
          {
            skill: "Customer Service",
            skillWeight: 8.474178403755868,
            skillScore: "65.06",
            microSkills: {
              analyzed_skill: "Customer Service",
              top_micro_skills: [
                {
                  skill: "Inbound Customer Service",
                  weight: 10,
                  _id: "67399b7b94a05a36d2af62e3",
                },
                {
                  skill: "Active Listening",
                  weight: 9,
                  _id: "67399b7b94a05a36d2af62e4",
                },
                {
                  skill: "Call Handling",
                  weight: 9,
                  _id: "67399b7b94a05a36d2af62e5",
                },
                {
                  skill: "Complaint Handling",
                  weight: 9,
                  _id: "67399b7b94a05a36d2af62e6",
                },
                {
                  skill: "Customer Relationship Management",
                  weight: 9,
                  _id: "67399b7b94a05a36d2af62e7",
                },
              ],
            },
            _id: "67399b7b94a05a36d2af62e2",
          },
          {
            skill: "Research",
            skillWeight: 8.333333333333334,
            skillScore: "64.14",
            microSkills: {
              analyzed_skill: "Research",
              top_micro_skills: [
                {
                  skill: "Data Analysis",
                  weight: 8.5,
                  _id: "67399b7b94a05a36d2af62e9",
                },
                {
                  skill: "Report Writing",
                  weight: 8.5,
                  _id: "67399b7b94a05a36d2af62ea",
                },
                {
                  skill: "Data Collection",
                  weight: 8.333333333333334,
                  _id: "67399b7b94a05a36d2af62eb",
                },
                {
                  skill: "Hypothesis Testing",
                  weight: 8,
                  _id: "67399b7b94a05a36d2af62ec",
                },
                {
                  skill: "Analytical Thinking",
                  weight: 8,
                  _id: "67399b7b94a05a36d2af62ed",
                },
              ],
            },
            _id: "67399b7b94a05a36d2af62e8",
          },
          {
            skill: "Industry Research",
            skillWeight: 9,
            skillScore: "69.30",
            microSkills: {
              analyzed_skill: "Industry Research",
              top_micro_skills: [
                {
                  skill: "Competitor Analysis",
                  weight: 9,
                  _id: "67399b7b94a05a36d2af62ef",
                },
                {
                  skill: "Trend Analysis",
                  weight: 9,
                  _id: "67399b7b94a05a36d2af62f0",
                },
                {
                  skill: "Market Analysis",
                  weight: 9,
                  _id: "67399b7b94a05a36d2af62f1",
                },
              ],
            },
            _id: "67399b7b94a05a36d2af62ee",
          },
          {
            skill: "Analytical Skills",
            skillWeight: 6.375,
            skillScore: "49.74",
            microSkills: {
              analyzed_skill: "Analytical Skills",
              top_micro_skills: [
                {
                  skill: "Data Interpretation",
                  weight: 9,
                  _id: "67399b7b94a05a36d2af62f3",
                },
                {
                  skill: "Financial Analysis",
                  weight: 8,
                  _id: "67399b7b94a05a36d2af62f4",
                },
                {
                  skill: "Market Research",
                  weight: 7,
                  _id: "67399b7b94a05a36d2af62f5",
                },
                {
                  skill: "Critical Thinking",
                  weight: 6.75,
                  _id: "67399b7b94a05a36d2af62f6",
                },
                {
                  skill: "Problem Solving",
                  weight: 6.7,
                  _id: "67399b7b94a05a36d2af62f7",
                },
              ],
            },
            _id: "67399b7b94a05a36d2af62f2",
          },
          {
            skill: "Analytical Thinking",
            skillWeight: 6,
            skillScore: "54.60",
            microSkills: {
              analyzed_skill: "Analytical Thinking",
              top_micro_skills: [
                {
                  skill: "Problem Solving",
                  weight: 7,
                  _id: "67399b7b94a05a36d2af62f9",
                },
                {
                  skill: "Critical Thinking",
                  weight: 6.5,
                  _id: "67399b7b94a05a36d2af62fa",
                },
                {
                  skill: "Data Interpretation",
                  weight: 6,
                  _id: "67399b7b94a05a36d2af62fb",
                },
                {
                  skill: "Problem Identification",
                  weight: 6,
                  _id: "67399b7b94a05a36d2af62fc",
                },
                {
                  skill: "Problem-Solving",
                  weight: 6,
                  _id: "67399b7b94a05a36d2af62fd",
                },
              ],
            },
            _id: "67399b7b94a05a36d2af62f8",
          },
          {
            skill: "Problem-Solving",
            skillWeight: 6.441860465116279,
            skillScore: "58.42",
            microSkills: {
              analyzed_skill: "Problem-Solving",
              top_micro_skills: [
                {
                  skill: "Decision-Making",
                  weight: 7,
                  _id: "67399b7b94a05a36d2af62ff",
                },
                {
                  skill: "Troubleshooting",
                  weight: 7,
                  _id: "67399b7b94a05a36d2af6300",
                },
                {
                  skill: "Conflict Resolution",
                  weight: 7,
                  _id: "67399b7b94a05a36d2af6301",
                },
                {
                  skill: "Analytical Thinking",
                  weight: 6.7,
                  _id: "67399b7b94a05a36d2af6302",
                },
                {
                  skill: "Critical Thinking",
                  weight: 6.446808510638298,
                  _id: "67399b7b94a05a36d2af6303",
                },
              ],
            },
            _id: "67399b7b94a05a36d2af62fe",
          },
          {
            skill: "Data Analysis",
            skillWeight: 7.617647058823529,
            skillScore: "69.07",
            microSkills: {
              analyzed_skill: "Data Analysis",
              top_micro_skills: [
                {
                  skill: "Reporting and Documentation",
                  weight: 9,
                  _id: "67399b7b94a05a36d2af6305",
                },
                {
                  skill: "Exploratory Data Analysis",
                  weight: 8.875,
                  _id: "67399b7b94a05a36d2af6306",
                },
                {
                  skill: "Spreadsheet Management",
                  weight: 8.5,
                  _id: "67399b7b94a05a36d2af6307",
                },
                {
                  skill: "Spreadsheet",
                  weight: 8,
                  _id: "67399b7b94a05a36d2af6308",
                },
                {
                  skill: "Data Manipulation",
                  weight: 8,
                  _id: "67399b7b94a05a36d2af6309",
                },
              ],
            },
            _id: "67399b7b94a05a36d2af6304",
          },
          {
            skill: "Microsoft Office",
            skillWeight: 6.980952380952381,
            skillScore: "53.21",
            microSkills: {
              analyzed_skill: "Microsoft Office",
              top_micro_skills: [
                {
                  skill: "Excel",
                  weight: 7.473029045643154,
                  _id: "67399b7b94a05a36d2af630b",
                },
                {
                  skill: "Outlook",
                  weight: 7,
                  _id: "67399b7b94a05a36d2af630c",
                },
                {
                  skill: "Word",
                  weight: 6.892561983471074,
                  _id: "67399b7b94a05a36d2af630d",
                },
                {
                  skill: "PowerPoint",
                  weight: 6.768595041322314,
                  _id: "67399b7b94a05a36d2af630e",
                },
              ],
            },
            _id: "67399b7b94a05a36d2af630a",
          },
          {
            skill: "Excel",
            skillWeight: 7.5,
            skillScore: "58.29",
            microSkills: {
              analyzed_skill: "Excel",
              top_micro_skills: [
                {
                  skill: "Data Visualization",
                  weight: 8.285714285714286,
                  _id: "67399b7b94a05a36d2af6310",
                },
                {
                  skill: "Vlookups",
                  weight: 8,
                  _id: "67399b7b94a05a36d2af6311",
                },
                {
                  skill: "Financial Formulas",
                  weight: 8,
                  _id: "67399b7b94a05a36d2af6312",
                },
                {
                  skill: "Macros",
                  weight: 8,
                  _id: "67399b7b94a05a36d2af6313",
                },
                {
                  skill: "Formulas and Functions",
                  weight: 7.666666666666667,
                  _id: "67399b7b94a05a36d2af6314",
                },
              ],
            },
            _id: "67399b7b94a05a36d2af630f",
          },
          {
            skill: "Spreadsheet",
            skillWeight: 7.666666666666667,
            skillScore: "59.06",
            microSkills: {
              analyzed_skill: "Spreadsheet",
              top_micro_skills: [
                {
                  skill: "Excel",
                  weight: 8,
                  _id: "67399b7b94a05a36d2af6316",
                },
                {
                  skill: "Formulas",
                  weight: 8,
                  _id: "67399b7b94a05a36d2af6317",
                },
                {
                  skill: "Data Analysis",
                  weight: 7.666666666666667,
                  _id: "67399b7b94a05a36d2af6318",
                },
                {
                  skill: "Microsoft Excel",
                  weight: 7,
                  _id: "67399b7b94a05a36d2af6319",
                },
                {
                  skill: "Formulas and Functions",
                  weight: 7,
                  _id: "67399b7b94a05a36d2af631a",
                },
              ],
            },
            _id: "67399b7b94a05a36d2af6315",
          },
          {
            skill: "Communication Skills",
            skillWeight: 7.419475655430712,
            skillScore: "68.52",
            microSkills: {
              analyzed_skill: "Communication Skills",
              top_micro_skills: [
                {
                  skill: "Listening Skills",
                  weight: 9,
                  _id: "67399b7b94a05a36d2af631c",
                },
                {
                  skill: "Persuasive Writing",
                  weight: 8,
                  _id: "67399b7b94a05a36d2af631d",
                },
                {
                  skill: "Public Speaking",
                  weight: 8,
                  _id: "67399b7b94a05a36d2af631e",
                },
                {
                  skill: "Persuasion",
                  weight: 8,
                  _id: "67399b7b94a05a36d2af631f",
                },
                {
                  skill: "Persuasive Communication",
                  weight: 8,
                  _id: "67399b7b94a05a36d2af6320",
                },
              ],
            },
            _id: "67399b7b94a05a36d2af631b",
          },
          {
            skill: "Presentation Skills",
            skillWeight: 6.7,
            skillScore: "47.89",
            microSkills: {
              analyzed_skill: "Presentation Skills",
              top_micro_skills: [
                {
                  skill: "Persuasive Pitching",
                  weight: 9,
                  _id: "67399b7b94a05a36d2af6322",
                },
                {
                  skill: "Slide Preparation",
                  weight: 8,
                  _id: "67399b7b94a05a36d2af6323",
                },
                {
                  skill: "Effective Communication",
                  weight: 8,
                  _id: "67399b7b94a05a36d2af6324",
                },
                {
                  skill: "PowerPoint",
                  weight: 7.5,
                  _id: "67399b7b94a05a36d2af6325",
                },
                {
                  skill: "Data Visualization",
                  weight: 7.25,
                  _id: "67399b7b94a05a36d2af6326",
                },
              ],
            },
            _id: "67399b7b94a05a36d2af6321",
          },
        ],
        focusArea: ["Analytical Skills", "Presentation Skills"],
        _id: "67399b7b94a05a36d2af62bf",
      },
      {
        subject: "Business Communication",
        skillDetails: [
          {
            skill: "Communication Skills",
            skillWeight: 7.419475655430712,
            skillScore: "68.52",
            microSkills: {
              analyzed_skill: "Communication Skills",
              top_micro_skills: [
                {
                  skill: "Listening Skills",
                  weight: 9,
                  _id: "67399b7b94a05a36d2af6329",
                },
                {
                  skill: "Persuasive Writing",
                  weight: 8,
                  _id: "67399b7b94a05a36d2af632a",
                },
                {
                  skill: "Public Speaking",
                  weight: 8,
                  _id: "67399b7b94a05a36d2af632b",
                },
                {
                  skill: "Persuasion",
                  weight: 8,
                  _id: "67399b7b94a05a36d2af632c",
                },
                {
                  skill: "Persuasive Communication",
                  weight: 8,
                  _id: "67399b7b94a05a36d2af632d",
                },
              ],
            },
            _id: "67399b7b94a05a36d2af6328",
          },
          {
            skill: "Business Communication",
            skillWeight: 6.416666666666667,
            skillScore: "52.08",
            microSkills: {
              analyzed_skill: "Business Communication",
              top_micro_skills: [
                {
                  skill: "Report Writing",
                  weight: 7.076923076923077,
                  _id: "67399b7b94a05a36d2af632f",
                },
                {
                  skill: "Presentation Skills",
                  weight: 7,
                  _id: "67399b7b94a05a36d2af6330",
                },
                {
                  skill: "Stakeholder Management",
                  weight: 7,
                  _id: "67399b7b94a05a36d2af6331",
                },
                {
                  skill: "Interpersonal Skills",
                  weight: 7,
                  _id: "67399b7b94a05a36d2af6332",
                },
                {
                  skill: "Email Etiquette",
                  weight: 6.6,
                  _id: "67399b7b94a05a36d2af6333",
                },
              ],
            },
            _id: "67399b7b94a05a36d2af632e",
          },
          {
            skill: "Presentation Skills",
            skillWeight: 6.7,
            skillScore: "47.89",
            microSkills: {
              analyzed_skill: "Presentation Skills",
              top_micro_skills: [
                {
                  skill: "Persuasive Pitching",
                  weight: 9,
                  _id: "67399b7b94a05a36d2af6335",
                },
                {
                  skill: "Slide Preparation",
                  weight: 8,
                  _id: "67399b7b94a05a36d2af6336",
                },
                {
                  skill: "Effective Communication",
                  weight: 8,
                  _id: "67399b7b94a05a36d2af6337",
                },
                {
                  skill: "PowerPoint",
                  weight: 7.5,
                  _id: "67399b7b94a05a36d2af6338",
                },
                {
                  skill: "Data Visualization",
                  weight: 7.25,
                  _id: "67399b7b94a05a36d2af6339",
                },
              ],
            },
            _id: "67399b7b94a05a36d2af6334",
          },
          {
            skill: "Telephone Skills",
            skillWeight: 9,
            skillScore: "71.77",
            microSkills: {
              analyzed_skill: "Telephone Skills",
              top_micro_skills: [
                {
                  skill: "Telephone Etiquette",
                  weight: 9,
                  _id: "67399b7b94a05a36d2af633b",
                },
                {
                  skill: "Clear Communication",
                  weight: 9,
                  _id: "67399b7b94a05a36d2af633c",
                },
                {
                  skill: "Clear Speech",
                  weight: 9,
                  _id: "67399b7b94a05a36d2af633d",
                },
                {
                  skill: "Active Listening",
                  weight: 9,
                  _id: "67399b7b94a05a36d2af633e",
                },
                {
                  skill: "Call Handling",
                  weight: 8.8,
                  _id: "67399b7b94a05a36d2af633f",
                },
              ],
            },
            _id: "67399b7b94a05a36d2af633a",
          },
          {
            skill: "Language Skills",
            skillWeight: 8,
            skillScore: "64.80",
            microSkills: {
              analyzed_skill: "Language Skills",
              top_micro_skills: [
                {
                  skill: "Malayalam",
                  weight: 8.5,
                  _id: "67399b7b94a05a36d2af6341",
                },
                {
                  skill: "English",
                  weight: 7.5,
                  _id: "67399b7b94a05a36d2af6342",
                },
              ],
            },
            _id: "67399b7b94a05a36d2af6340",
          },
          {
            skill: "Analytical Skills",
            skillWeight: 6.375,
            skillScore: "49.74",
            microSkills: {
              analyzed_skill: "Analytical Skills",
              top_micro_skills: [
                {
                  skill: "Data Interpretation",
                  weight: 9,
                  _id: "67399b7b94a05a36d2af6344",
                },
                {
                  skill: "Financial Analysis",
                  weight: 8,
                  _id: "67399b7b94a05a36d2af6345",
                },
                {
                  skill: "Market Research",
                  weight: 7,
                  _id: "67399b7b94a05a36d2af6346",
                },
                {
                  skill: "Critical Thinking",
                  weight: 6.75,
                  _id: "67399b7b94a05a36d2af6347",
                },
                {
                  skill: "Problem Solving",
                  weight: 6.7,
                  _id: "67399b7b94a05a36d2af6348",
                },
              ],
            },
            _id: "67399b7b94a05a36d2af6343",
          },
          {
            skill: "Problem-Solving",
            skillWeight: 6.441860465116279,
            skillScore: "58.42",
            microSkills: {
              analyzed_skill: "Problem-Solving",
              top_micro_skills: [
                {
                  skill: "Decision-Making",
                  weight: 7,
                  _id: "67399b7b94a05a36d2af634a",
                },
                {
                  skill: "Troubleshooting",
                  weight: 7,
                  _id: "67399b7b94a05a36d2af634b",
                },
                {
                  skill: "Conflict Resolution",
                  weight: 7,
                  _id: "67399b7b94a05a36d2af634c",
                },
                {
                  skill: "Analytical Thinking",
                  weight: 6.7,
                  _id: "67399b7b94a05a36d2af634d",
                },
                {
                  skill: "Critical Thinking",
                  weight: 6.446808510638298,
                  _id: "67399b7b94a05a36d2af634e",
                },
              ],
            },
            _id: "67399b7b94a05a36d2af6349",
          },
          {
            skill: "Research",
            skillWeight: 8.333333333333334,
            skillScore: "64.14",
            microSkills: {
              analyzed_skill: "Research",
              top_micro_skills: [
                {
                  skill: "Data Analysis",
                  weight: 8.5,
                  _id: "67399b7b94a05a36d2af6350",
                },
                {
                  skill: "Report Writing",
                  weight: 8.5,
                  _id: "67399b7b94a05a36d2af6351",
                },
                {
                  skill: "Data Collection",
                  weight: 8.333333333333334,
                  _id: "67399b7b94a05a36d2af6352",
                },
                {
                  skill: "Hypothesis Testing",
                  weight: 8,
                  _id: "67399b7b94a05a36d2af6353",
                },
                {
                  skill: "Analytical Thinking",
                  weight: 8,
                  _id: "67399b7b94a05a36d2af6354",
                },
              ],
            },
            _id: "67399b7b94a05a36d2af634f",
          },
          {
            skill: "Microsoft Office",
            skillWeight: 6.980952380952381,
            skillScore: "53.21",
            microSkills: {
              analyzed_skill: "Microsoft Office",
              top_micro_skills: [
                {
                  skill: "Excel",
                  weight: 7.473029045643154,
                  _id: "67399b7b94a05a36d2af6356",
                },
                {
                  skill: "Outlook",
                  weight: 7,
                  _id: "67399b7b94a05a36d2af6357",
                },
                {
                  skill: "Word",
                  weight: 6.892561983471074,
                  _id: "67399b7b94a05a36d2af6358",
                },
                {
                  skill: "PowerPoint",
                  weight: 6.768595041322314,
                  _id: "67399b7b94a05a36d2af6359",
                },
              ],
            },
            _id: "67399b7b94a05a36d2af6355",
          },
        ],
        focusArea: ["Presentation Skills", "Analytical Skills"],
        _id: "67399b7b94a05a36d2af6327",
      },
      {
        subject: "Financial Environment",
        skillDetails: [
          {
            skill: "Financial Accounting",
            skillWeight: 8.568627450980392,
            skillScore: "72.42",
            microSkills: {
              analyzed_skill: "Financial Accounting",
              top_micro_skills: [
                {
                  skill: "Preparation of Financial Statements",
                  weight: 9.25,
                  _id: "67399b7b94a05a36d2af635c",
                },
                {
                  skill: "Accounts Receivable/Payable",
                  weight: 9,
                  _id: "67399b7b94a05a36d2af635d",
                },
                {
                  skill: "Financial Statements Preparation",
                  weight: 9,
                  _id: "67399b7b94a05a36d2af635e",
                },
                {
                  skill: "IFRS",
                  weight: 9,
                  _id: "67399b7b94a05a36d2af635f",
                },
                {
                  skill: "General Ledger",
                  weight: 9,
                  _id: "67399b7b94a05a36d2af6360",
                },
              ],
            },
            _id: "67399b7b94a05a36d2af635b",
          },
          {
            skill: "Financial Analysis",
            skillWeight: 8.407407407407407,
            skillScore: "73.27",
            microSkills: {
              analyzed_skill: "Financial Analysis",
              top_micro_skills: [
                {
                  skill: "Equity Analysis",
                  weight: 10,
                  _id: "67399b7b94a05a36d2af6362",
                },
                {
                  skill: "Equity Valuation",
                  weight: 10,
                  _id: "67399b7b94a05a36d2af6363",
                },
                {
                  skill: "Derivative Analysis",
                  weight: 10,
                  _id: "67399b7b94a05a36d2af6364",
                },
                {
                  skill: "Portfolio Management",
                  weight: 9.857142857142858,
                  _id: "67399b7b94a05a36d2af6365",
                },
                {
                  skill: "Equity Research",
                  weight: 9.529411764705882,
                  _id: "67399b7b94a05a36d2af6366",
                },
              ],
            },
            _id: "67399b7b94a05a36d2af6361",
          },
          {
            skill: "Financial Management",
            skillWeight: 7.894736842105263,
            skillScore: "71.98",
            microSkills: {
              analyzed_skill: "Financial Management",
              top_micro_skills: [
                {
                  skill: "Credit Risk Assessment",
                  weight: 9,
                  _id: "67399b7b94a05a36d2af6368",
                },
                {
                  skill: "Cash Flow Management",
                  weight: 9,
                  _id: "67399b7b94a05a36d2af6369",
                },
                {
                  skill: "Loan Portfolio Management",
                  weight: 9,
                  _id: "67399b7b94a05a36d2af636a",
                },
                {
                  skill: "Financial Analysis",
                  weight: 8.5,
                  _id: "67399b7b94a05a36d2af636b",
                },
                {
                  skill: "Financial Reporting",
                  weight: 8.2,
                  _id: "67399b7b94a05a36d2af636c",
                },
              ],
            },
            _id: "67399b7b94a05a36d2af6367",
          },
          {
            skill: "Financial Modeling",
            skillWeight: 7.25,
            skillScore: "64.97",
            microSkills: {
              analyzed_skill: "Financial Modeling",
              top_micro_skills: [
                {
                  skill: "Sensitivity Analysis",
                  weight: 8,
                  _id: "67399b7b94a05a36d2af636e",
                },
                {
                  skill: "Financial Forecasting",
                  weight: 8,
                  _id: "67399b7b94a05a36d2af636f",
                },
                {
                  skill: "Data Analysis",
                  weight: 8,
                  _id: "67399b7b94a05a36d2af6370",
                },
                {
                  skill: "Excel Proficiency",
                  weight: 7.333333333333333,
                  _id: "67399b7b94a05a36d2af6371",
                },
                {
                  skill: "Forecasting",
                  weight: 7,
                  _id: "67399b7b94a05a36d2af6372",
                },
              ],
            },
            _id: "67399b7b94a05a36d2af636d",
          },
          {
            skill: "Financial Planning",
            skillWeight: 10,
            skillScore: "89.73",
            microSkills: {
              analyzed_skill: "Financial Planning",
              top_micro_skills: [
                {
                  skill: "Investment Strategies",
                  weight: 10,
                  _id: "67399b7b94a05a36d2af6374",
                },
                {
                  skill: "Retirement Planning",
                  weight: 9.857142857142858,
                  _id: "67399b7b94a05a36d2af6375",
                },
                {
                  skill: "Tax Planning",
                  weight: 9.571428571428571,
                  _id: "67399b7b94a05a36d2af6376",
                },
                {
                  skill: "Investment Planning",
                  weight: 9.5,
                  _id: "67399b7b94a05a36d2af6377",
                },
              ],
            },
            _id: "67399b7b94a05a36d2af6373",
          },
          {
            skill: "Financial Services",
            skillWeight: 8.3125,
            skillScore: "77.08",
            microSkills: {
              analyzed_skill: "Financial Services",
              top_micro_skills: [
                {
                  skill: "Stock Broking",
                  weight: 10,
                  _id: "67399b7b94a05a36d2af6379",
                },
                {
                  skill: "Gold Loan",
                  weight: 10,
                  _id: "67399b7b94a05a36d2af637a",
                },
                {
                  skill: "NISM Certification",
                  weight: 9.666666666666666,
                  _id: "67399b7b94a05a36d2af637b",
                },
                {
                  skill: "Demat Account",
                  weight: 9.666666666666666,
                  _id: "67399b7b94a05a36d2af637c",
                },
                {
                  skill: "Demat Account Management",
                  weight: 9,
                  _id: "67399b7b94a05a36d2af637d",
                },
              ],
            },
            _id: "67399b7b94a05a36d2af6378",
          },
          {
            skill: "Finance",
            skillWeight: 9,
            skillScore: "75.80",
            microSkills: {
              analyzed_skill: "Finance",
              top_micro_skills: [
                {
                  skill: "Financial Analysis",
                  weight: 9,
                  _id: "67399b7b94a05a36d2af637f",
                },
                {
                  skill: "Financial Reporting",
                  weight: 9,
                  _id: "67399b7b94a05a36d2af6380",
                },
                {
                  skill: "Financial Modeling",
                  weight: 8,
                  _id: "67399b7b94a05a36d2af6381",
                },
                {
                  skill: "Financial Products",
                  weight: 8,
                  _id: "67399b7b94a05a36d2af6382",
                },
                {
                  skill: "Budgeting",
                  weight: 8,
                  _id: "67399b7b94a05a36d2af6383",
                },
              ],
            },
            _id: "67399b7b94a05a36d2af637e",
          },
          {
            skill: "Auditing",
            skillWeight: 9.28,
            skillScore: "78.54",
            microSkills: {
              analyzed_skill: "Auditing",
              top_micro_skills: [
                {
                  skill: "Audit Planning",
                  weight: 10,
                  _id: "67399b7b94a05a36d2af6385",
                },
                {
                  skill: "Financial Auditing",
                  weight: 9.93939393939394,
                  _id: "67399b7b94a05a36d2af6386",
                },
                {
                  skill: "Compliance Auditing",
                  weight: 9.705882352941176,
                  _id: "67399b7b94a05a36d2af6387",
                },
                {
                  skill: "Internal Auditing",
                  weight: 9.384615384615385,
                  _id: "67399b7b94a05a36d2af6388",
                },
                {
                  skill: "Statutory Auditing",
                  weight: 8.625,
                  _id: "67399b7b94a05a36d2af6389",
                },
              ],
            },
            _id: "67399b7b94a05a36d2af6384",
          },
          {
            skill: "Taxation",
            skillWeight: 8.536082474226804,
            skillScore: "72.33",
            microSkills: {
              analyzed_skill: "Taxation",
              top_micro_skills: [
                {
                  skill: "TDS",
                  weight: 9.25,
                  _id: "67399b7b94a05a36d2af638b",
                },
                {
                  skill: "GST",
                  weight: 9.025,
                  _id: "67399b7b94a05a36d2af638c",
                },
                {
                  skill: "Tax Regulations",
                  weight: 9,
                  _id: "67399b7b94a05a36d2af638d",
                },
                {
                  skill: "Income Tax Compliance",
                  weight: 9,
                  _id: "67399b7b94a05a36d2af638e",
                },
                {
                  skill: "Tax Filing",
                  weight: 8.7,
                  _id: "67399b7b94a05a36d2af638f",
                },
              ],
            },
            _id: "67399b7b94a05a36d2af638a",
          },
          {
            skill: "Corporate Laws",
            skillWeight: 7.666666666666667,
            skillScore: "65.19",
            microSkills: {
              analyzed_skill: "Corporate Laws",
              top_micro_skills: [
                {
                  skill: "Company Act",
                  weight: 8,
                  _id: "67399b7b94a05a36d2af6391",
                },
                {
                  skill: "Compliance Management",
                  weight: 7.666666666666667,
                  _id: "67399b7b94a05a36d2af6392",
                },
                {
                  skill: "SEBI Regulations",
                  weight: 7.666666666666667,
                  _id: "67399b7b94a05a36d2af6393",
                },
                {
                  skill: "Companies Act",
                  weight: 7.5,
                  _id: "67399b7b94a05a36d2af6394",
                },
              ],
            },
            _id: "67399b7b94a05a36d2af6390",
          },
          {
            skill: "Business Law",
            skillWeight: 6.75,
            skillScore: "61.42",
            microSkills: {
              analyzed_skill: "Business Law",
              top_micro_skills: [
                {
                  skill: "Company Law",
                  weight: 7.666666666666667,
                  _id: "67399b7b94a05a36d2af6396",
                },
                {
                  skill: "Contract Law",
                  weight: 7.3125,
                  _id: "67399b7b94a05a36d2af6397",
                },
                {
                  skill: "Intellectual Property Law",
                  weight: 7.181818181818182,
                  _id: "67399b7b94a05a36d2af6398",
                },
                {
                  skill: "Corporate Law",
                  weight: 7.153846153846154,
                  _id: "67399b7b94a05a36d2af6399",
                },
                {
                  skill: "Regulatory Compliance",
                  weight: 6.8,
                  _id: "67399b7b94a05a36d2af639a",
                },
              ],
            },
            _id: "67399b7b94a05a36d2af6395",
          },
          {
            skill: "Compliance",
            skillWeight: 7.928571428571429,
            skillScore: "67.41",
            microSkills: {
              analyzed_skill: "Compliance",
              top_micro_skills: [
                {
                  skill: "Audit and Compliance",
                  weight: 10,
                  _id: "67399b7b94a05a36d2af639c",
                },
                {
                  skill: "Internal Auditing",
                  weight: 10,
                  _id: "67399b7b94a05a36d2af639d",
                },
                {
                  skill: "Compliance Reporting",
                  weight: 10,
                  _id: "67399b7b94a05a36d2af639e",
                },
                {
                  skill: "Regulatory Compliance",
                  weight: 8.222222222222221,
                  _id: "67399b7b94a05a36d2af639f",
                },
                {
                  skill: "Reporting",
                  weight: 8,
                  _id: "67399b7b94a05a36d2af63a0",
                },
              ],
            },
            _id: "67399b7b94a05a36d2af639b",
          },
          {
            skill: "Financial Compliance",
            skillWeight: 8,
            skillScore: "81.90",
            microSkills: {
              analyzed_skill: "Financial Compliance",
              top_micro_skills: [
                {
                  skill: "NBFC Compliance",
                  weight: 10,
                  _id: "67399b7b94a05a36d2af63a2",
                },
                {
                  skill: "Regulatory Reporting",
                  weight: 9,
                  _id: "67399b7b94a05a36d2af63a3",
                },
                {
                  skill: "KYC and AML",
                  weight: 9,
                  _id: "67399b7b94a05a36d2af63a4",
                },
                {
                  skill: "Regulatory Compliance",
                  weight: 8,
                  _id: "67399b7b94a05a36d2af63a5",
                },
                {
                  skill: "Internal Controls",
                  weight: 8,
                  _id: "67399b7b94a05a36d2af63a6",
                },
              ],
            },
            _id: "67399b7b94a05a36d2af63a1",
          },
          {
            skill: "Regulatory Compliance",
            skillWeight: 7.25,
            skillScore: "61.15",
            microSkills: {
              analyzed_skill: "Regulatory Compliance",
              top_micro_skills: [
                {
                  skill: "Compliance Monitoring",
                  weight: 9,
                  _id: "67399b7b94a05a36d2af63a8",
                },
                {
                  skill: "Financial Regulations",
                  weight: 9,
                  _id: "67399b7b94a05a36d2af63a9",
                },
                {
                  skill: "Wealth Management Regulations",
                  weight: 9,
                  _id: "67399b7b94a05a36d2af63aa",
                },
                {
                  skill: "Regulatory Reporting",
                  weight: 8.5,
                  _id: "67399b7b94a05a36d2af63ab",
                },
                {
                  skill: "Audit Procedures",
                  weight: 8,
                  _id: "67399b7b94a05a36d2af63ac",
                },
              ],
            },
            _id: "67399b7b94a05a36d2af63a7",
          },
          {
            skill: "Financial Regulations",
            skillWeight: 7,
            skillScore: "60.01",
            microSkills: {
              analyzed_skill: "Financial Regulations",
              top_micro_skills: [
                {
                  skill: "PMLA (Prevention of Money Laundering Act)",
                  weight: 9,
                  _id: "67399b7b94a05a36d2af63ae",
                },
                {
                  skill: "RBI Guidelines",
                  weight: 9,
                  _id: "67399b7b94a05a36d2af63af",
                },
                {
                  skill: "AML Compliance",
                  weight: 9,
                  _id: "67399b7b94a05a36d2af63b0",
                },
                {
                  skill: "FEMA (Foreign Exchange Management Act)",
                  weight: 9,
                  _id: "67399b7b94a05a36d2af63b1",
                },
                {
                  skill: "KYC Compliance",
                  weight: 9,
                  _id: "67399b7b94a05a36d2af63b2",
                },
              ],
            },
            _id: "67399b7b94a05a36d2af63ad",
          },
          {
            skill: "Risk Management",
            skillWeight: 6.9,
            skillScore: "64.79",
            microSkills: {
              analyzed_skill: "Risk Management",
              top_micro_skills: [
                {
                  skill: "Compliance Monitoring",
                  weight: 9,
                  _id: "67399b7b94a05a36d2af63b4",
                },
                {
                  skill: "Quantitative Risk Modeling",
                  weight: 8,
                  _id: "67399b7b94a05a36d2af63b5",
                },
                {
                  skill: "Compliance and Regulations",
                  weight: 8,
                  _id: "67399b7b94a05a36d2af63b6",
                },
                {
                  skill: "Portfolio Risk Analysis",
                  weight: 8,
                  _id: "67399b7b94a05a36d2af63b7",
                },
                {
                  skill: "Operational Risk",
                  weight: 8,
                  _id: "67399b7b94a05a36d2af63b8",
                },
              ],
            },
            _id: "67399b7b94a05a36d2af63b3",
          },
          {
            skill: "Audit",
            skillWeight: 8,
            skillScore: "72.80",
            microSkills: {
              analyzed_skill: "Audit",
              top_micro_skills: [
                {
                  skill: "Compliance Audit",
                  weight: 8,
                  _id: "67399b7b94a05a36d2af63ba",
                },
                {
                  skill: "Internal Audit",
                  weight: 8,
                  _id: "67399b7b94a05a36d2af63bb",
                },
                {
                  skill: "Risk Assessment",
                  weight: 8,
                  _id: "67399b7b94a05a36d2af63bc",
                },
              ],
            },
            _id: "67399b7b94a05a36d2af63b9",
          },
          {
            skill: "Reconciliation",
            skillWeight: 10,
            skillScore: "85.00",
            microSkills: {
              analyzed_skill: "Reconciliation",
              top_micro_skills: [
                {
                  skill: "Financial Reconciliation",
                  weight: 10,
                  _id: "67399b7b94a05a36d2af63be",
                },
                {
                  skill: "Bank Reconciliation",
                  weight: 10,
                  _id: "67399b7b94a05a36d2af63bf",
                },
                {
                  skill: "Account Reconciliation",
                  weight: 10,
                  _id: "67399b7b94a05a36d2af63c0",
                },
              ],
            },
            _id: "67399b7b94a05a36d2af63bd",
          },
          {
            skill: "Bookkeeping",
            skillWeight: 9,
            skillScore: "75.73",
            microSkills: {
              analyzed_skill: "Bookkeeping",
              top_micro_skills: [
                {
                  skill: "Payroll Processing",
                  weight: 10,
                  _id: "67399b7b94a05a36d2af63c2",
                },
                {
                  skill: "Financial Reporting",
                  weight: 10,
                  _id: "67399b7b94a05a36d2af63c3",
                },
                {
                  skill: "Bank Reconciliation",
                  weight: 9.25,
                  _id: "67399b7b94a05a36d2af63c4",
                },
                {
                  skill: "Ledger Maintenance",
                  weight: 9,
                  _id: "67399b7b94a05a36d2af63c5",
                },
                {
                  skill: "Double Entry Bookkeeping",
                  weight: 9,
                  _id: "67399b7b94a05a36d2af63c6",
                },
              ],
            },
            _id: "67399b7b94a05a36d2af63c1",
          },
          {
            skill: "Banking",
            skillWeight: 9,
            skillScore: "83.72",
            microSkills: {
              analyzed_skill: "Banking",
              top_micro_skills: [
                {
                  skill: "Branch Operations",
                  weight: 10,
                  _id: "67399b7b94a05a36d2af63c8",
                },
                {
                  skill: "Financial Products Knowledge",
                  weight: 9,
                  _id: "67399b7b94a05a36d2af63c9",
                },
                {
                  skill: "Financial Regulations",
                  weight: 9,
                  _id: "67399b7b94a05a36d2af63ca",
                },
                {
                  skill: "Retail Banking",
                  weight: 8.75,
                  _id: "67399b7b94a05a36d2af63cb",
                },
                {
                  skill: "Customer Service",
                  weight: 8.5,
                  _id: "67399b7b94a05a36d2af63cc",
                },
              ],
            },
            _id: "67399b7b94a05a36d2af63c7",
          },
          {
            skill: "Banking Operations",
            skillWeight: 8.518518518518519,
            skillScore: "76.89",
            microSkills: {
              analyzed_skill: "Banking Operations",
              top_micro_skills: [
                {
                  skill: "Deposits",
                  weight: 10,
                  _id: "67399b7b94a05a36d2af63ce",
                },
                {
                  skill: "Deposit and Withdrawal Handling",
                  weight: 10,
                  _id: "67399b7b94a05a36d2af63cf",
                },
                {
                  skill: "Customer Service",
                  weight: 9.25,
                  _id: "67399b7b94a05a36d2af63d0",
                },
                {
                  skill: "Retail Banking",
                  weight: 9,
                  _id: "67399b7b94a05a36d2af63d1",
                },
                {
                  skill: "Banking Software",
                  weight: 9,
                  _id: "67399b7b94a05a36d2af63d2",
                },
              ],
            },
            _id: "67399b7b94a05a36d2af63cd",
          },
          {
            skill: "Business Administration",
            skillWeight: 7,
            skillScore: "63.70",
            microSkills: {
              analyzed_skill: "Business Administration",
              top_micro_skills: [
                {
                  skill: "Financial Accounting",
                  weight: 8,
                  _id: "67399b7b94a05a36d2af63d4",
                },
                {
                  skill: "Business Law",
                  weight: 7,
                  _id: "67399b7b94a05a36d2af63d5",
                },
                {
                  skill: "Project Management",
                  weight: 7,
                  _id: "67399b7b94a05a36d2af63d6",
                },
              ],
            },
            _id: "67399b7b94a05a36d2af63d3",
          },
          {
            skill: "Business Analysis",
            skillWeight: 7,
            skillScore: "78.26",
            microSkills: {
              analyzed_skill: "Business Analysis",
              top_micro_skills: [
                {
                  skill: "Requirements Gathering",
                  weight: 10,
                  _id: "67399b7b94a05a36d2af63d8",
                },
                {
                  skill: "Process Mapping",
                  weight: 9.333333333333334,
                  _id: "67399b7b94a05a36d2af63d9",
                },
                {
                  skill: "Data Analysis",
                  weight: 8.5,
                  _id: "67399b7b94a05a36d2af63da",
                },
                {
                  skill: "Stakeholder Management",
                  weight: 8.25,
                  _id: "67399b7b94a05a36d2af63db",
                },
                {
                  skill: "Problem Solving",
                  weight: 7,
                  _id: "67399b7b94a05a36d2af63dc",
                },
              ],
            },
            _id: "67399b7b94a05a36d2af63d7",
          },
          {
            skill: "Business Consulting",
            skillWeight: 9.5,
            skillScore: "86.45",
            microSkills: {
              analyzed_skill: "Business Consulting",
              top_micro_skills: [
                {
                  skill: "Analytical Thinking",
                  weight: 10,
                  _id: "67399b7b94a05a36d2af63de",
                },
                {
                  skill: "Problem Solving",
                  weight: 9.5,
                  _id: "67399b7b94a05a36d2af63df",
                },
                {
                  skill: "Client Interaction",
                  weight: 9.5,
                  _id: "67399b7b94a05a36d2af63e0",
                },
                {
                  skill: "Business Analysis",
                  weight: 9,
                  _id: "67399b7b94a05a36d2af63e1",
                },
                {
                  skill: "Presentation Skills",
                  weight: 9,
                  _id: "67399b7b94a05a36d2af63e2",
                },
              ],
            },
            _id: "67399b7b94a05a36d2af63dd",
          },
          {
            skill: "Sales and Business Development",
            skillWeight: 8,
            skillScore: "72.80",
            microSkills: {
              analyzed_skill: "Sales and Business Development",
              top_micro_skills: [
                {
                  skill: "Lead Generation",
                  weight: 8,
                  _id: "67399b7b94a05a36d2af63e4",
                },
                {
                  skill: "Prospecting",
                  weight: 8,
                  _id: "67399b7b94a05a36d2af63e5",
                },
                {
                  skill: "Negotiation",
                  weight: 7,
                  _id: "67399b7b94a05a36d2af63e6",
                },
              ],
            },
            _id: "67399b7b94a05a36d2af63e3",
          },
          {
            skill: "Client Relationship Management",
            skillWeight: 7.75,
            skillScore: "62.22",
            microSkills: {
              analyzed_skill: "Client Relationship Management",
              top_micro_skills: [
                {
                  skill: "Problem Solving",
                  weight: 9,
                  _id: "67399b7b94a05a36d2af63e8",
                },
                {
                  skill: "Communication Skills",
                  weight: 8.6,
                  _id: "67399b7b94a05a36d2af63e9",
                },
                {
                  skill: "Customer Service",
                  weight: 8.5,
                  _id: "67399b7b94a05a36d2af63ea",
                },
                {
                  skill: "Negotiation Skills",
                  weight: 8.5,
                  _id: "67399b7b94a05a36d2af63eb",
                },
                {
                  skill: "Interpersonal Skills",
                  weight: 8.4,
                  _id: "67399b7b94a05a36d2af63ec",
                },
              ],
            },
            _id: "67399b7b94a05a36d2af63e7",
          },
          {
            skill: "Customer Service",
            skillWeight: 8.474178403755868,
            skillScore: "65.06",
            microSkills: {
              analyzed_skill: "Customer Service",
              top_micro_skills: [
                {
                  skill: "Inbound Customer Service",
                  weight: 10,
                  _id: "67399b7b94a05a36d2af63ee",
                },
                {
                  skill: "Active Listening",
                  weight: 9,
                  _id: "67399b7b94a05a36d2af63ef",
                },
                {
                  skill: "Call Handling",
                  weight: 9,
                  _id: "67399b7b94a05a36d2af63f0",
                },
                {
                  skill: "Complaint Handling",
                  weight: 9,
                  _id: "67399b7b94a05a36d2af63f1",
                },
                {
                  skill: "Customer Relationship Management",
                  weight: 9,
                  _id: "67399b7b94a05a36d2af63f2",
                },
              ],
            },
            _id: "67399b7b94a05a36d2af63ed",
          },
          {
            skill: "Research",
            skillWeight: 8.333333333333334,
            skillScore: "64.14",
            microSkills: {
              analyzed_skill: "Research",
              top_micro_skills: [
                {
                  skill: "Data Analysis",
                  weight: 8.5,
                  _id: "67399b7b94a05a36d2af63f4",
                },
                {
                  skill: "Report Writing",
                  weight: 8.5,
                  _id: "67399b7b94a05a36d2af63f5",
                },
                {
                  skill: "Data Collection",
                  weight: 8.333333333333334,
                  _id: "67399b7b94a05a36d2af63f6",
                },
                {
                  skill: "Hypothesis Testing",
                  weight: 8,
                  _id: "67399b7b94a05a36d2af63f7",
                },
                {
                  skill: "Analytical Thinking",
                  weight: 8,
                  _id: "67399b7b94a05a36d2af63f8",
                },
              ],
            },
            _id: "67399b7b94a05a36d2af63f3",
          },
          {
            skill: "Industry Research",
            skillWeight: 9,
            skillScore: "69.30",
            microSkills: {
              analyzed_skill: "Industry Research",
              top_micro_skills: [
                {
                  skill: "Competitor Analysis",
                  weight: 9,
                  _id: "67399b7b94a05a36d2af63fa",
                },
                {
                  skill: "Trend Analysis",
                  weight: 9,
                  _id: "67399b7b94a05a36d2af63fb",
                },
                {
                  skill: "Market Analysis",
                  weight: 9,
                  _id: "67399b7b94a05a36d2af63fc",
                },
              ],
            },
            _id: "67399b7b94a05a36d2af63f9",
          },
          {
            skill: "Economics",
            skillWeight: 6.25,
            skillScore: "56.88",
            microSkills: {
              analyzed_skill: "Economics",
              top_micro_skills: [
                {
                  skill: "International Economics",
                  weight: 6.75,
                  _id: "67399b7b94a05a36d2af63fe",
                },
                {
                  skill: "Macroeconomics",
                  weight: 6.75,
                  _id: "67399b7b94a05a36d2af63ff",
                },
                {
                  skill: "Microeconomics",
                  weight: 6.75,
                  _id: "67399b7b94a05a36d2af6400",
                },
              ],
            },
            _id: "67399b7b94a05a36d2af63fd",
          },
          {
            skill: "Analytical Skills",
            skillWeight: 6.375,
            skillScore: "49.74",
            microSkills: {
              analyzed_skill: "Analytical Skills",
              top_micro_skills: [
                {
                  skill: "Data Interpretation",
                  weight: 9,
                  _id: "67399b7b94a05a36d2af6402",
                },
                {
                  skill: "Financial Analysis",
                  weight: 8,
                  _id: "67399b7b94a05a36d2af6403",
                },
                {
                  skill: "Market Research",
                  weight: 7,
                  _id: "67399b7b94a05a36d2af6404",
                },
                {
                  skill: "Critical Thinking",
                  weight: 6.75,
                  _id: "67399b7b94a05a36d2af6405",
                },
                {
                  skill: "Problem Solving",
                  weight: 6.7,
                  _id: "67399b7b94a05a36d2af6406",
                },
              ],
            },
            _id: "67399b7b94a05a36d2af6401",
          },
          {
            skill: "Analytical Thinking",
            skillWeight: 6,
            skillScore: "54.60",
            microSkills: {
              analyzed_skill: "Analytical Thinking",
              top_micro_skills: [
                {
                  skill: "Problem Solving",
                  weight: 7,
                  _id: "67399b7b94a05a36d2af6408",
                },
                {
                  skill: "Critical Thinking",
                  weight: 6.5,
                  _id: "67399b7b94a05a36d2af6409",
                },
                {
                  skill: "Data Interpretation",
                  weight: 6,
                  _id: "67399b7b94a05a36d2af640a",
                },
                {
                  skill: "Problem Identification",
                  weight: 6,
                  _id: "67399b7b94a05a36d2af640b",
                },
                {
                  skill: "Problem-Solving",
                  weight: 6,
                  _id: "67399b7b94a05a36d2af640c",
                },
              ],
            },
            _id: "67399b7b94a05a36d2af6407",
          },
          {
            skill: "Problem-Solving",
            skillWeight: 6.441860465116279,
            skillScore: "58.42",
            microSkills: {
              analyzed_skill: "Problem-Solving",
              top_micro_skills: [
                {
                  skill: "Decision-Making",
                  weight: 7,
                  _id: "67399b7b94a05a36d2af640e",
                },
                {
                  skill: "Troubleshooting",
                  weight: 7,
                  _id: "67399b7b94a05a36d2af640f",
                },
                {
                  skill: "Conflict Resolution",
                  weight: 7,
                  _id: "67399b7b94a05a36d2af6410",
                },
                {
                  skill: "Analytical Thinking",
                  weight: 6.7,
                  _id: "67399b7b94a05a36d2af6411",
                },
                {
                  skill: "Critical Thinking",
                  weight: 6.446808510638298,
                  _id: "67399b7b94a05a36d2af6412",
                },
              ],
            },
            _id: "67399b7b94a05a36d2af640d",
          },
          {
            skill: "Data Analysis",
            skillWeight: 7.617647058823529,
            skillScore: "69.07",
            microSkills: {
              analyzed_skill: "Data Analysis",
              top_micro_skills: [
                {
                  skill: "Reporting and Documentation",
                  weight: 9,
                  _id: "67399b7b94a05a36d2af6414",
                },
                {
                  skill: "Exploratory Data Analysis",
                  weight: 8.875,
                  _id: "67399b7b94a05a36d2af6415",
                },
                {
                  skill: "Spreadsheet Management",
                  weight: 8.5,
                  _id: "67399b7b94a05a36d2af6416",
                },
                {
                  skill: "Spreadsheet",
                  weight: 8,
                  _id: "67399b7b94a05a36d2af6417",
                },
                {
                  skill: "Data Manipulation",
                  weight: 8,
                  _id: "67399b7b94a05a36d2af6418",
                },
              ],
            },
            _id: "67399b7b94a05a36d2af6413",
          },
          {
            skill: "Data Management",
            skillWeight: 9.5,
            skillScore: "86.45",
            microSkills: {
              analyzed_skill: "Data Management",
              top_micro_skills: [
                {
                  skill: "Data Transformation",
                  weight: 9,
                  _id: "67399b7b94a05a36d2af641a",
                },
                {
                  skill: "Data Cleaning",
                  weight: 9,
                  _id: "67399b7b94a05a36d2af641b",
                },
                {
                  skill: "Data Normalization",
                  weight: 9,
                  _id: "67399b7b94a05a36d2af641c",
                },
                {
                  skill: "Data Warehousing",
                  weight: 8,
                  _id: "67399b7b94a05a36d2af641d",
                },
              ],
            },
            _id: "67399b7b94a05a36d2af6419",
          },
          {
            skill: "SQL",
            skillWeight: 7.454545454545454,
            skillScore: "68.52",
            microSkills: {
              analyzed_skill: "SQL",
              top_micro_skills: [
                {
                  skill: "SQL Queries",
                  weight: 8.272727272727273,
                  _id: "67399b7b94a05a36d2af641f",
                },
                {
                  skill: "Data Manipulation",
                  weight: 7.4,
                  _id: "67399b7b94a05a36d2af6420",
                },
                {
                  skill: "Database Management",
                  weight: 7.25,
                  _id: "67399b7b94a05a36d2af6421",
                },
                {
                  skill: "Data Modeling",
                  weight: 7,
                  _id: "67399b7b94a05a36d2af6422",
                },
                {
                  skill: "Data Extraction",
                  weight: 7,
                  _id: "67399b7b94a05a36d2af6423",
                },
              ],
            },
            _id: "67399b7b94a05a36d2af641e",
          },
          {
            skill: "Computer Proficiency",
            skillWeight: 7,
            skillScore: "63.70",
            microSkills: {
              analyzed_skill: "Computer Proficiency",
              top_micro_skills: [
                {
                  skill: "MS Office Suite",
                  weight: 8,
                  _id: "67399b7b94a05a36d2af6425",
                },
                {
                  skill: "Internet Navigation",
                  weight: 7,
                  _id: "67399b7b94a05a36d2af6426",
                },
                {
                  skill: "Basic Troubleshooting",
                  weight: 7,
                  _id: "67399b7b94a05a36d2af6427",
                },
              ],
            },
            _id: "67399b7b94a05a36d2af6424",
          },
          {
            skill: "Microsoft Office",
            skillWeight: 6.980952380952381,
            skillScore: "53.21",
            microSkills: {
              analyzed_skill: "Microsoft Office",
              top_micro_skills: [
                {
                  skill: "Excel",
                  weight: 7.473029045643154,
                  _id: "67399b7b94a05a36d2af6429",
                },
                {
                  skill: "Outlook",
                  weight: 7,
                  _id: "67399b7b94a05a36d2af642a",
                },
                {
                  skill: "Word",
                  weight: 6.892561983471074,
                  _id: "67399b7b94a05a36d2af642b",
                },
                {
                  skill: "PowerPoint",
                  weight: 6.768595041322314,
                  _id: "67399b7b94a05a36d2af642c",
                },
              ],
            },
            _id: "67399b7b94a05a36d2af6428",
          },
          {
            skill: "Excel",
            skillWeight: 7.5,
            skillScore: "58.29",
            microSkills: {
              analyzed_skill: "Excel",
              top_micro_skills: [
                {
                  skill: "Data Visualization",
                  weight: 8.285714285714286,
                  _id: "67399b7b94a05a36d2af642e",
                },
                {
                  skill: "Vlookups",
                  weight: 8,
                  _id: "67399b7b94a05a36d2af642f",
                },
                {
                  skill: "Financial Formulas",
                  weight: 8,
                  _id: "67399b7b94a05a36d2af6430",
                },
                {
                  skill: "Macros",
                  weight: 8,
                  _id: "67399b7b94a05a36d2af6431",
                },
                {
                  skill: "Formulas and Functions",
                  weight: 7.666666666666667,
                  _id: "67399b7b94a05a36d2af6432",
                },
              ],
            },
            _id: "67399b7b94a05a36d2af642d",
          },
          {
            skill: "Spreadsheet",
            skillWeight: 7.666666666666667,
            skillScore: "59.06",
            microSkills: {
              analyzed_skill: "Spreadsheet",
              top_micro_skills: [
                {
                  skill: "Excel",
                  weight: 8,
                  _id: "67399b7b94a05a36d2af6434",
                },
                {
                  skill: "Formulas",
                  weight: 8,
                  _id: "67399b7b94a05a36d2af6435",
                },
                {
                  skill: "Data Analysis",
                  weight: 7.666666666666667,
                  _id: "67399b7b94a05a36d2af6436",
                },
                {
                  skill: "Microsoft Excel",
                  weight: 7,
                  _id: "67399b7b94a05a36d2af6437",
                },
                {
                  skill: "Formulas and Functions",
                  weight: 7,
                  _id: "67399b7b94a05a36d2af6438",
                },
              ],
            },
            _id: "67399b7b94a05a36d2af6433",
          },
          {
            skill: "Basic Accounting",
            skillWeight: 6.666666666666667,
            skillScore: "59.15",
            microSkills: {
              analyzed_skill: "Basic Accounting",
              top_micro_skills: [
                {
                  skill: "Reconciliation",
                  weight: 7.5,
                  _id: "67399b7b94a05a36d2af643a",
                },
                {
                  skill: "Financial Statements",
                  weight: 7.5,
                  _id: "67399b7b94a05a36d2af643b",
                },
                {
                  skill: "Bookkeeping",
                  weight: 7,
                  _id: "67399b7b94a05a36d2af643c",
                },
                {
                  skill: "Financial Reporting",
                  weight: 6.333333333333333,
                  _id: "67399b7b94a05a36d2af643d",
                },
                {
                  skill: "Invoicing",
                  weight: 6.25,
                  _id: "67399b7b94a05a36d2af643e",
                },
              ],
            },
            _id: "67399b7b94a05a36d2af6439",
          },
          {
            skill: "Office Management",
            skillWeight: 9,
            skillScore: "81.90",
            microSkills: {
              analyzed_skill: "Office Management",
              top_micro_skills: [
                {
                  skill: "Scheduling",
                  weight: 9,
                  _id: "67399b7b94a05a36d2af6440",
                },
                {
                  skill: "Scheduling Appointments",
                  weight: 9,
                  _id: "67399b7b94a05a36d2af6441",
                },
                {
                  skill: "Organizing Files and Documents",
                  weight: 9,
                  _id: "67399b7b94a05a36d2af6442",
                },
                {
                  skill: "Maintaining Records",
                  weight: 9,
                  _id: "67399b7b94a05a36d2af6443",
                },
                {
                  skill: "Data Entry",
                  weight: 8,
                  _id: "67399b7b94a05a36d2af6444",
                },
              ],
            },
            _id: "67399b7b94a05a36d2af643f",
          },
          {
            skill: "Administrative Skills",
            skillWeight: 6.8,
            skillScore: "64.79",
            microSkills: {
              analyzed_skill: "Administrative Skills",
              top_micro_skills: [
                {
                  skill: "Attention to Detail",
                  weight: 8,
                  _id: "67399b7b94a05a36d2af6446",
                },
                {
                  skill: "File Management",
                  weight: 7.285714285714286,
                  _id: "67399b7b94a05a36d2af6447",
                },
                {
                  skill: "Data Entry",
                  weight: 7.285714285714286,
                  _id: "67399b7b94a05a36d2af6448",
                },
                {
                  skill: "Scheduling",
                  weight: 7,
                  _id: "67399b7b94a05a36d2af6449",
                },
                {
                  skill: "Office Procedures",
                  weight: 7,
                  _id: "67399b7b94a05a36d2af644a",
                },
              ],
            },
            _id: "67399b7b94a05a36d2af6445",
          },
          {
            skill: "Organizational Skills",
            skillWeight: 7.5,
            skillScore: "68.25",
            microSkills: {
              analyzed_skill: "Organizational Skills",
              top_micro_skills: [
                {
                  skill: "Time Management",
                  weight: 8,
                  _id: "67399b7b94a05a36d2af644c",
                },
                {
                  skill: "Attention to Detail",
                  weight: 8,
                  _id: "67399b7b94a05a36d2af644d",
                },
                {
                  skill: "Task Prioritization",
                  weight: 7.5,
                  _id: "67399b7b94a05a36d2af644e",
                },
                {
                  skill: "Record Keeping",
                  weight: 7,
                  _id: "67399b7b94a05a36d2af644f",
                },
              ],
            },
            _id: "67399b7b94a05a36d2af644b",
          },
          {
            skill: "Time Management",
            skillWeight: 6.833333333333333,
            skillScore: "62.15",
            microSkills: {
              analyzed_skill: "Time Management",
              top_micro_skills: [
                {
                  skill: "Organization",
                  weight: 8,
                  _id: "67399b7b94a05a36d2af6451",
                },
                {
                  skill: "Deadline-oriented",
                  weight: 8,
                  _id: "67399b7b94a05a36d2af6452",
                },
                {
                  skill: "Stress Management",
                  weight: 7.5,
                  _id: "67399b7b94a05a36d2af6453",
                },
                {
                  skill: "Productivity Techniques",
                  weight: 7.333333333333333,
                  _id: "67399b7b94a05a36d2af6454",
                },
                {
                  skill: "Punctuality",
                  weight: 7.25,
                  _id: "67399b7b94a05a36d2af6455",
                },
              ],
            },
            _id: "67399b7b94a05a36d2af6450",
          },
          {
            skill: "Attention to Detail",
            skillWeight: 7.948453608247423,
            skillScore: "71.98",
            microSkills: {
              analyzed_skill: "Attention to Detail",
              top_micro_skills: [
                {
                  skill: "Verification",
                  weight: 9,
                  _id: "67399b7b94a05a36d2af6457",
                },
                {
                  skill: "Audit",
                  weight: 9,
                  _id: "67399b7b94a05a36d2af6458",
                },
                {
                  skill: "Fact-checking",
                  weight: 8.5,
                  _id: "67399b7b94a05a36d2af6459",
                },
                {
                  skill: "Meticulous Record Keeping",
                  weight: 8.333333333333334,
                  _id: "67399b7b94a05a36d2af645a",
                },
                {
                  skill: "Error Checking",
                  weight: 8.285714285714286,
                  _id: "67399b7b94a05a36d2af645b",
                },
              ],
            },
            _id: "67399b7b94a05a36d2af6456",
          },
          {
            skill: "Presentation Skills",
            skillWeight: 6.7,
            skillScore: "47.89",
            microSkills: {
              analyzed_skill: "Presentation Skills",
              top_micro_skills: [
                {
                  skill: "Persuasive Pitching",
                  weight: 9,
                  _id: "67399b7b94a05a36d2af645d",
                },
                {
                  skill: "Slide Preparation",
                  weight: 8,
                  _id: "67399b7b94a05a36d2af645e",
                },
                {
                  skill: "Effective Communication",
                  weight: 8,
                  _id: "67399b7b94a05a36d2af645f",
                },
                {
                  skill: "PowerPoint",
                  weight: 7.5,
                  _id: "67399b7b94a05a36d2af6460",
                },
                {
                  skill: "Data Visualization",
                  weight: 7.25,
                  _id: "67399b7b94a05a36d2af6461",
                },
              ],
            },
            _id: "67399b7b94a05a36d2af645c",
          },
          {
            skill: "Communication Skills",
            skillWeight: 7.419475655430712,
            skillScore: "68.52",
            microSkills: {
              analyzed_skill: "Communication Skills",
              top_micro_skills: [
                {
                  skill: "Listening Skills",
                  weight: 9,
                  _id: "67399b7b94a05a36d2af6463",
                },
                {
                  skill: "Persuasive Writing",
                  weight: 8,
                  _id: "67399b7b94a05a36d2af6464",
                },
                {
                  skill: "Public Speaking",
                  weight: 8,
                  _id: "67399b7b94a05a36d2af6465",
                },
                {
                  skill: "Persuasion",
                  weight: 8,
                  _id: "67399b7b94a05a36d2af6466",
                },
                {
                  skill: "Persuasive Communication",
                  weight: 8,
                  _id: "67399b7b94a05a36d2af6467",
                },
              ],
            },
            _id: "67399b7b94a05a36d2af6462",
          },
          {
            skill: "Business Communication",
            skillWeight: 6.416666666666667,
            skillScore: "52.08",
            microSkills: {
              analyzed_skill: "Business Communication",
              top_micro_skills: [
                {
                  skill: "Report Writing",
                  weight: 7.076923076923077,
                  _id: "67399b7b94a05a36d2af6469",
                },
                {
                  skill: "Presentation Skills",
                  weight: 7,
                  _id: "67399b7b94a05a36d2af646a",
                },
                {
                  skill: "Stakeholder Management",
                  weight: 7,
                  _id: "67399b7b94a05a36d2af646b",
                },
                {
                  skill: "Interpersonal Skills",
                  weight: 7,
                  _id: "67399b7b94a05a36d2af646c",
                },
                {
                  skill: "Email Etiquette",
                  weight: 6.6,
                  _id: "67399b7b94a05a36d2af646d",
                },
              ],
            },
            _id: "67399b7b94a05a36d2af6468",
          },
          {
            skill: "Adaptability",
            skillWeight: 6.375,
            skillScore: "58.70",
            microSkills: {
              analyzed_skill: "Adaptability",
              top_micro_skills: [
                {
                  skill: "Change Management",
                  weight: 7.333333333333333,
                  _id: "67399b7b94a05a36d2af646f",
                },
                {
                  skill: "Resilience",
                  weight: 7.2,
                  _id: "67399b7b94a05a36d2af6470",
                },
                {
                  skill: "Flexibility",
                  weight: 7.090909090909091,
                  _id: "67399b7b94a05a36d2af6471",
                },
                {
                  skill: "Continuous Learning",
                  weight: 7,
                  _id: "67399b7b94a05a36d2af6472",
                },
                {
                  skill: "Problem Solving",
                  weight: 7,
                  _id: "67399b7b94a05a36d2af6473",
                },
              ],
            },
            _id: "67399b7b94a05a36d2af646e",
          },
          {
            skill: "Teamwork",
            skillWeight: 6.583333333333333,
            skillScore: "60.33",
            microSkills: {
              analyzed_skill: "Teamwork",
              top_micro_skills: [
                {
                  skill: "Interpersonal Skills",
                  weight: 7.2727272727272725,
                  _id: "67399b7b94a05a36d2af6475",
                },
                {
                  skill: "Collaboration",
                  weight: 7.0125,
                  _id: "67399b7b94a05a36d2af6476",
                },
                {
                  skill: "Problem Solving",
                  weight: 7,
                  _id: "67399b7b94a05a36d2af6477",
                },
                {
                  skill: "Flexibility",
                  weight: 7,
                  _id: "67399b7b94a05a36d2af6478",
                },
                {
                  skill: "Communication",
                  weight: 6.923076923076923,
                  _id: "67399b7b94a05a36d2af6479",
                },
              ],
            },
            _id: "67399b7b94a05a36d2af6474",
          },
          {
            skill: "Team Management",
            skillWeight: 7.777777777777778,
            skillScore: "69.52",
            microSkills: {
              analyzed_skill: "Team Management",
              top_micro_skills: [
                {
                  skill: "Leadership",
                  weight: 8.333333333333334,
                  _id: "67399b7b94a05a36d2af647b",
                },
                {
                  skill: "Performance Management",
                  weight: 8,
                  _id: "67399b7b94a05a36d2af647c",
                },
                {
                  skill: "Team Coordination",
                  weight: 8,
                  _id: "67399b7b94a05a36d2af647d",
                },
                {
                  skill: "Team Motivation",
                  weight: 7.6,
                  _id: "67399b7b94a05a36d2af647e",
                },
                {
                  skill: "Performance Evaluation",
                  weight: 7.6,
                  _id: "67399b7b94a05a36d2af647f",
                },
              ],
            },
            _id: "67399b7b94a05a36d2af647a",
          },
          {
            skill: "Consulting",
            skillWeight: 9,
            skillScore: "81.90",
            microSkills: {
              analyzed_skill: "Consulting",
              top_micro_skills: [
                {
                  skill: "Client Interaction",
                  weight: 9,
                  _id: "67399b7b94a05a36d2af6481",
                },
                {
                  skill: "Problem Solving",
                  weight: 8.5,
                  _id: "67399b7b94a05a36d2af6482",
                },
                {
                  skill: "Analytical Thinking",
                  weight: 8,
                  _id: "67399b7b94a05a36d2af6483",
                },
                {
                  skill: "Presentation Skills",
                  weight: 7.5,
                  _id: "67399b7b94a05a36d2af6484",
                },
              ],
            },
            _id: "67399b7b94a05a36d2af6480",
          },
          {
            skill: "Project Management",
            skillWeight: 6.625,
            skillScore: "57.88",
            microSkills: {
              analyzed_skill: "Project Management",
              top_micro_skills: [
                {
                  skill: "Stakeholder Engagement",
                  weight: 7,
                  _id: "67399b7b94a05a36d2af6486",
                },
                {
                  skill: "Risk Management",
                  weight: 7,
                  _id: "67399b7b94a05a36d2af6487",
                },
                {
                  skill: "Time Management",
                  weight: 6.5,
                  _id: "67399b7b94a05a36d2af6488",
                },
                {
                  skill: "Stakeholder Management",
                  weight: 6.4,
                  _id: "67399b7b94a05a36d2af6489",
                },
                {
                  skill: "Agile Methodologies",
                  weight: 6.333333333333333,
                  _id: "67399b7b94a05a36d2af648a",
                },
              ],
            },
            _id: "67399b7b94a05a36d2af6485",
          },
        ],
        focusArea: ["Analytical Skills", "Presentation Skills"],
        _id: "67399b7b94a05a36d2af635a",
      },
    ],
    _id: "67399b7b94a05a36d2af624a",
  },
];


const Semester_Details: FC = () => {
  const [selectedSemester, setSelectedSemester] =
    useState<string>("Semester 1");
  const [semsterDetials, setSemesterDetails] =
    useState<SemesterData[]>(semesterData);
 const [selectedSubject, setSelectedSubject] = useState<string>(() => {
   const initialSemester = semsterDetials.find(
     (s) => s.semester === selectedSemester
   );
   return initialSemester?.subjectDetails[0]?.subject ;
 });
  // const [selectedSubject, setSelectedSubject] = useState<string>(semesterdata["semester 1"].);
  // const [selectedSubject, setSelectedSubject] = useState<string>(
  //   semesterdata["semester 1"][0]?.subject || ""
  // );

  console.log(selectedSubject);

 const handleSelect = (semester: string) => {
   setSelectedSemester(semester);

   const selectedSemesterDetails = semsterDetials.find(
     (s) => s.semester === semester
   );
   setSelectedSubject(
     selectedSemesterDetails?.subjectDetails[0]?.subject || ""
   );
 };
  const cumulativeSemesters = semesters.map((data, index) => {
    const cumulativeCoverage = semesters
      .slice(0, index + 1)
      .reduce((acc, cur) => acc + parseFloat(cur.coverage), 0)
      .toFixed(2); // Ensure two decimal places
    return { ...data, cumulativeCoverage };
  });

  console.log(cumulativeSemesters);

  return (
    <div className="w-full h-full ">
      <h1 className="py-3 text-lg font-bold text-gray-800 md:text-2xl">
        Semester Details
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger className="py-1 mx-2 text-xl font-bold text-gray-700 rounded-full ">
              <FaRegQuestionCircle />
            </TooltipTrigger>
            <TooltipContent className="p-3 bg-black border border-gray-400 rounded-md ">
              <p className="text-white"> Semester Details</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </h1>
      <div>
        <div className="flex flex-col items-center ">
          {/* Semesters with horizontal line */}
          <div className="relative flex items-center justify-between w-full -m-1 border border-gray-300 shadow-lg md:m-0 md:py-4 md:px-16 rounded-xl">
            {/* Connecting Line */}
            <div className="absolute h-1 bg-green-300 -z-10 right-6 left-6 md:right-24 md:left-28 top-[35%] md:top-[40%]"></div>

            {cumulativeSemesters.map((data, index) => (
              <div
                key={data.semester}
                className="relative z-10 flex flex-col items-center -mx-4 space-y-2 md:m-0 "
              >
                {/* Progress (Above the button) */}
                {index !== cumulativeSemesters.length - 1 ? (
                  <span className="absolute flex-wrap px-1 text-sm font-medium text-center text-green-600 bg-white border-2 border-green-500 md:px-4 w-fit left-10 md:top-3 md:left-28 top-1 rounded-xl">
                    {data.cumulativeCoverage}
                  </span>
                ) : null}

                {/* Hidden Radio Input */}
                <input
                  type="radio"
                  id={`semester-${data.semester}`}
                  name="semester"
                  checked={selectedSemester === data.semester}
                  onChange={() => handleSelect(data.semester)}
                  className="hidden"
                />

                {/* Styled Button (Radio) */}
                <label
                  htmlFor={`semester-${data.semester}`}
                  className={`md:w-8 md:h-8 w-4 h-4 rounded-full flex items-center shadow-lg drop-shadow-[0_4px_10px_rgba(72,220,132,2)] justify-center border-4 ${
                    selectedSemester === data.semester
                      ? " border-green-600 border-8 bg-white"
                      : "border-green-300 bg-white"
                  } transition-all cursor-pointer`}
                ></label>

                {/* Semester Name (Below the button) */}
                <p className="inline-flex text-xs md:text-sm md:font-semibold">
                  {data.semester}
                </p>
              </div>
            ))}
          </div>
          <h1 className="w-full py-4 text-xl font-semibold text-gray-800 text-start">
            {selectedSemester}
          </h1>

          {/* Selected Semester Content */}
          <div className="w-full h-full mt-3 rounded-lg shadow-xl">
            {semsterDetials?.find((s) => s.semester === selectedSemester) ? (
              <>
                <div  className="flex flex-col justify-between w-full h-[70%] md:flex-row">
                  <Card key={selectedSemester} className=" border-r rounded-r-none md:w-[20%] ">
                    {semsterDetials.map((data) => {
                      if (data.semester === selectedSemester) {
                        return (
                          <div className="flex flex-row items-center w-full h-full overflow-x-auto overflow-y-auto md:flex-col scrollableContent ">
                            {data.subjectDetails.map((data, index) => (
                              <h1
                                key={data._id}
                                onClick={() => setSelectedSubject(data.subject)}
                                className={`md:text-xl text-base  w-full  h-fit px-2 py-4  rounded-md text-gray-700   cursor-pointer${
                                  selectedSubject === data.subject
                                    ? " bg-gray-100 text-gray-900 font-bold "
                                    : ""
                                }`}
                              >
                                {data.subject}
                              </h1>
                            ))}
                          </div>
                        );
                      }
                    })}
                  </Card>
                  <Card className=" border-r rounded-none md:w-[45%] ">
                    <div className="flex justify-between px-4 py-4 ">
                      <h1 className="text-lg font-bold text-gray-800 ">
                        Skill level
                      </h1>
                      <Dialog>
                        <DialogTrigger className="text-lg font-bold text-gray-800 underline">
                          See All
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[40%] ">
                          <DialogHeader>
                            <DialogTitle className="text-xl font-bold text-gray-800 ">
                              Skills
                            </DialogTitle>
                            <DialogDescription>
                              {semsterDetials.map((data) => {
                                if (data.semester === selectedSemester) {
                                  return (
                                    <div className="flex flex-row items-center justify-between w-full h-full gap-4 overflow-x-auto md:flex-col">
                                      {data.subjectDetails.map(
                                        (data, index) => {
                                          if (
                                            data.subject === selectedSubject
                                          ) {
                                            return (
                                              <div className="flex flex-col w-full h-full ">
                                                <div className="flex justify-between w-full px-4 my-2">
                                                  <h1 className="text-gray-700 ">
                                                    Skill Name
                                                  </h1>
                                                  <h1 className="text-gray-700 ">
                                                    Skill Weightage
                                                  </h1>
                                                </div>
                                                <div className="w-full h-full px-4 overflow-y-auto max-h-96 scrollableContent">
                                                  {data.skillDetails.map(
                                                    (skill) => (
                                                      <div className="flex justify-between w-full my-3">
                                                        <h1 className="text-lg font-semibold text-gray-800 ">
                                                          {skill.skill}
                                                        </h1>
                                                        <h1 className="text-lg font-semibold text-gray-700 ">
                                                          {skill.skillWeight.toFixed(
                                                            8
                                                          )}
                                                        </h1>
                                                      </div>
                                                    )
                                                  )}
                                                </div>
                                              </div>
                                            );
                                          }
                                        }
                                      )}
                                    </div>
                                  );
                                }
                              })}
                            </DialogDescription>
                          </DialogHeader>
                        </DialogContent>
                      </Dialog>
                    </div>
                    {semsterDetials.map((data) => {
                      if (data.semester === selectedSemester) {
                        return (
                          <div className="flex flex-row items-center justify-between w-full gap-4  h-fit md:flex-col ">
                            {data.subjectDetails.map((data, index) => {
                              if (data.subject === selectedSubject) {
                                return (
                                  <div className="flex flex-col w-full md:gap-3 gap-6 px-2 overflow-y-auto max-h-[500px] justify-center align-baseline md:flex-row md:flex-wrap scrollableContent md:px-2">
                                    {data.skillDetails.map((skill) => {
                                      return (
                                        <>
                                          <Dialog>
                                            <DialogTrigger className="lg:w-[30%]  w-full   mt-3 rounded-md ">
                                              <Card className="flex flex-col items-start justify-between w-full h-full gap-2 p-4 border-2 rounded-md border-gray-200">
                                                <RiPieChart2Line className="w-8 h-8 font-semibold" />
                                                <h1 className="text-start">
                                                  {skill.skill}
                                                </h1>
                                                <div className="flex flex-col w-full gap-2 py-3 min-h-32">
                                                  <div className="flex flex-col w-full h-full gap-2">
                                                    <div className="w-full h-full ">
                                                      <Progress
                                                        className="h-3 bg-gray-200 "
                                                        value={(
                                                          skill.skillWeight *
                                                          100
                                                        ).toFixed(2)}
                                                      />
                                                      <div className="flex flex-row justify-between ">
                                                        <p>Skill Weight </p>
                                                        <p>
                                                          {skill.skillWeight.toFixed(
                                                            2
                                                          )}
                                                        </p>
                                                      </div>
                                                    </div>
                                                    <div className="w-full h-full ">
                                                      <Progress
                                                        className="h-3 bg-gray-200 "
                                                        value={skill.skillScore}
                                                      />
                                                      <div className="flex flex-row justify-between">
                                                        <p>Skill Score </p>
                                                        <p>
                                                          {skill.skillScore}
                                                        </p>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </Card>
                                            </DialogTrigger>
                                            <DialogContent className="w-[80%] md:w-full">
                                              <DialogHeader>
                                                <DialogTitle>
                                                  Top Micro Skills
                                                </DialogTitle>
                                                <DialogDescription>
                                                  <div className="w-full h-full p-4">
                                                    <div className="flex justify-between w-full">
                                                      <h1>Skill Name</h1>
                                                      <h1>Skill Weightage</h1>
                                                    </div>
                                                    <div className="w-full h-full overflow-y-auto scrollableContent">
                                                      {skill.microSkills.top_micro_skills.map(
                                                        (microSkill) => (
                                                          <div className="flex justify-between w-full my-3">
                                                            <h1 className="text-lg font-semibold text-gray-800">
                                                              {microSkill.skill}
                                                            </h1>
                                                            <h1 className="text-lg font-semibold text-gray-700">
                                                              {microSkill.weight.toFixed(
                                                                8
                                                              )}
                                                            </h1>
                                                          </div>
                                                        )
                                                      )}
                                                    </div>
                                                  </div>
                                                </DialogDescription>
                                              </DialogHeader>
                                            </DialogContent>
                                          </Dialog>
                                        </>
                                      );
                                    })}
                                  </div>
                                );
                              }
                            })}
                          </div>
                        );
                      }
                    })}
                  </Card>
                  <Card className=" border-r rounded-l-none md:w-[35%]">
                    <div className="flex items-center w-full h-1/2">
                      <div className="w-1/2 ">
                        <MissingareaGraph selectedSem={selectedSemester} />
                      </div>
                      <div className="w-1/2 ">
                        <h1 className="text-3xl font-bold">Focus Area</h1>
                        <p className="">
                          Focus on the below skills mentioned for the selected
                          semester.
                        </p>
                      </div>
                    </div>
                  </Card>
                </div>
              </>
            ) : (
              <p className="text-gray-500">
                No semester selected.
                {selectedSemester}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Semester_Details;
