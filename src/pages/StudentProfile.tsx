import { Card } from "@/components/ui/card";
import { FC, useState } from "react";
import { Container } from "react-bootstrap";
import userProflie from "../assets/userprofile.png";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { FaRegCalendarAlt, FaRegQuestionCircle } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { IoIosAddCircleOutline } from "react-icons/io";
import { Separator } from "@/components/ui/separator";
import { Controller, useForm } from "react-hook-form";
import { MdList, MdOutlineVerifiedUser } from "react-icons/md";
import { PiBuildingApartmentThin } from "react-icons/pi";
import  "../App.css";
import { Link } from "react-router-dom";
import Leaderboard from "@/studentProfile/Leaderboard";
import { IoPhonePortraitOutline } from "react-icons/io5";

interface ExperienceType {
  companyName: string;
  position: string;
  startDate: string;
  endDate: string | null;
  workType: string;
  currentlyPursuing: boolean;
}

interface Certificate {
  certificateName: string;
  issuerAuthority: string;
  issueDate: string;
  validTillDate: string | null;
}

interface ProjectType{
  projectTitle: string;
  projectDescription: string;
  skillsUsed: string;
  projectLink: string;
  teamSize: number;
}

const sampleProject: ProjectType = {
    projectTitle: 'Financial Statement Analysis Tool',
    projectDescription: 'A tool for analyzing balance sheets, profit & loss statements, and cash flow.',
    skillsUsed: 'Excel, Financial Modeling, Data Analysis',
    projectLink: 'https://www.example.com/financial-analysis-tool',
    teamSize: 2,}

const sampleExp: ExperienceType = {
  companyName: "Google",
  position: "Software Engineer",
  startDate: "2022-01-01",
  endDate: null,
  workType: "Full Time",
  currentlyPursuing: true,
}

const sampleCertificate: Certificate = {
  certificateName: "Bachelor of Science in Computer Science",
  issuerAuthority: "University of California, Berkeley",
  issueDate: "2020-01-01",
  validTillDate: null,
};

const StudentProfile: FC = () => {
  const [experince, setExperince] = useState<ExperienceType[]>([sampleExp]);
  const [Certificate, setCertificate] = useState<Certificate[]>([sampleCertificate]);
  const [projects, setProjects] = useState<ProjectType[]>([sampleProject]);
  const {
    register,
    handleSubmit,
    watch,
    control,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm<ExperienceType>();

  const {
    register: registerProject,
    handleSubmit: handleSubmitProject,
    formState: {errors: projectErrors}
  }=useForm<ProjectType>();
  
  const {
    register: registerCertificate,
    handleSubmit: handleSubmitCertificate,
    formState: {
      errors: certificateErrors,
      isSubmitSuccessful: isSubmitSuccessfulCertificate,
    },
  } = useForm<Certificate>();

  const currentlyPursuing = watch("currentlyPursuing");

  const onSubmit = (data: ExperienceType) => {
    console.log("Form Data Submitted:", data);
    experince.push(data);
  };

  const onSubmitCertificate = (data: Certificate) => {
    console.log("Certificate Data Submitted:", data);
    Certificate.push(data);
  };
  
  const onSubmitProject = (data: ProjectType) => {
    console.log("Project Data Submitted:", data);
    projects.push(data);
  };

  
  const calculateDuration = (startDate: string, endDate: string | null) => {
  const start = new Date(startDate);
  const end = endDate ? new Date(endDate) : new Date();  // Use current date if endDate is null

  let years = end.getFullYear() - start.getFullYear();
  let months = end.getMonth() - start.getMonth();

  // If months is negative, adjust the years and months
  if (months < 0) {
    years--;
    months += 12;
  }

  return `${years} year, ${months} month${months !== 1 ? 's' : ''}`;
};


  return (
    <Container className="h-full   w-[85%] mx-auto hover:shadow-inner flex flex-col md:flex-row gap-6 py-8">
      <div className="md:w-[70%]  flex flex-col gap-8 ">
        <Card className="flex items-center justify-between w-full p-4 shadow-xl h-fit">
          <div className="flex items-center justify-start h-full gap-6 md:w-1/2 ">
            <img src={userProflie} className="w-20 h-20 rounded-full" alt="" />
            <div>
              <h1 className="text-xl font-bold">Vijay Kulkarni</h1>
              <p className="text-sm text-gray-500">B.Com</p>
            </div>
          </div>
          <div className="flex items-center justify-end h-full md:w-1/2">
            <Button
              variant={"ghost"}
              className="text-white whitespace-pre-wrap bg-purple-500 h-fit w-fit md:whitespace-nowrap"
            >
              Generate Resume
            </Button>
          </div>
        </Card>
        <h1 className="text-2xl font-semibold text-gray-800 ">
          General Details
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger className="py-1 mx-2 text-xl font-bold text-gray-700 rounded-full ">
                <FaRegQuestionCircle />
              </TooltipTrigger>
              <TooltipContent className="p-3 bg-black border border-gray-400 rounded-md ">
                <p className="text-white"> General Details</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </h1>
        <Card className="flex flex-wrap items-center justify-between w-full p-4 shadow-xl h-fit">
          <div className="flex items-center justify-start gap-6 p-4 md:w-1/2 h-fit">
            <div className="flex items-center justify-center">
              
            <TfiEmail className="w-10 h-10 p-2 text-2xl font-semibold text-gray-400 bg-gray-200 rounded-lg" />
               </div>
            <div>
              <h3 className="font-semibold ">vkvk@getmail.com</h3>
              <p className="text-sm text-gray-500">Email ID</p>
            </div>
          </div>
          <div className="flex items-center justify-start gap-6 p-4 md:w-1/2 h-fit">
            <div className="flex items-center justify-center">
              
            <IoPhonePortraitOutline className="w-10 h-10 p-2 text-2xl font-semibold text-gray-400 bg-gray-200 rounded-lg" />
              </div>
            <div>
              <h3 className="font-semibold ">1234567890</h3>
              <p className="text-sm text-gray-500">Mobile Number</p>
            </div>
          </div>
          <div className="flex items-center justify-start gap-6 p-4 md:w-1/2 h-fit">
            <div className="flex items-center justify-center">

            <FaRegCalendarAlt className="w-10 h-10 p-2 text-2xl font-semibold text-gray-400 bg-gray-200 rounded-lg" />
            </div>
            <div>
              <h3 className="font-semibold ">November 17, 2024</h3>
              <p className="text-sm text-gray-500">EDate of Birth</p>
            </div>
          </div>
          <div className="flex items-center justify-start gap-6 p-4 md:w-1/2 h-fit">
            <div className="flex items-center justify-center">
            <MdList className="w-10 h-10 p-2 text-2xl font-semibold text-gray-400 bg-gray-200 rounded-lg" />
            </div>
            <div>
              <h3 className="font-semibold ">10 </h3>
              <p className="text-sm text-gray-500">No of Skills</p>
            </div>
          </div>
        </Card>
        <div className="flex flex-col w-full gap-6 min-h-64 md:flex-row ">
          <div className="flex flex-col items-start justify-around w-full min-h-64 md:w-1/2">
            <div className="flex justify-between w-full">
              <h1 className="font-bold text-gray-800 whitespace-nowrap ">
                Work Experience
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger className="py-1 mx-2 text-xl font-bold text-gray-700 rounded-full ">
                      <FaRegQuestionCircle />
                    </TooltipTrigger>
                    <TooltipContent className="p-3 bg-black border border-gray-400 rounded-md ">
                      <p className="text-white"> Work Experience</p>
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
                      Add Experience
                    </DialogTitle>
                    <Separator className="my-2 " />
                  </DialogHeader>
                  <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="py-4 space-y-4"
                  >
                    <p className="text-sm text-gray-500">
                      Fill all the details to add your experience details.
                    </p>
                    <div className="space-y-2">
                      <Label htmlFor="company">Company Name</Label>

                      <Input
                        id="company"
                        placeholder="Enter Company Name"
                        {...register("companyName", {
                          required: "Company Name is required",
                        })}
                        className="w-full p-2 border rounded"
                      />
                      {errors.companyName && (
                        <p className="text-sm text-red-500">
                          {errors.companyName.message}
                        </p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="position">Position</Label>
                      <Input
                        id="position"
                        placeholder="Enter Position"
                        {...register("position", {
                          required: "Position is required",
                        })}
                        className="w-full p-2 border rounded"
                      />
                      {errors.position && (
                        <p className="text-sm text-red-500">
                          {errors.position.message}
                        </p>
                      )}
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="startDate">Start Date</Label>
                        <Input
                          id="startDate"
                          type="date"
                          {...register("startDate", {
                            required: "Start Date is required",
                          })}
                          className="w-full pr-12 border rounded appearance-none"
                        />
                        {errors.startDate && (
                          <p className="text-sm text-red-500">
                            {errors.startDate.message}
                          </p>
                        )}
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="endDate">End Date</Label>
                        <Input
                          id="endDate"
                          type="date"
                          {...register("endDate")}
                          className="w-full p-2 border rounded"
                          disabled={currentlyPursuing}
                        />
                      </div>
                    </div>
                    <div className="flex flex-wrap items-center justify-between md:flex-col md:items-start">
                      <Label htmlFor="workType" className="inline-flex py-2">
                        Work-Type
                      </Label>
                      <select
                        id="workType"
                        {...register("workType", {
                          required: "Work Type is required",
                        })}
                        className="inline-flex w-1/2 p-2 border rounded md:w-full md:text-lg"
                      >
                        <optgroup className="w-1/3 text-sm " label="Work Type">
                          <option className="w-1/3 text-sm " value="full-time">
                            Full Time
                          </option>
                          <option className="w-1/3 text-sm " value="part-time">
                            Part Time
                          </option>
                          <option className="w-1/3 text-sm " value="contract">
                            Contract
                          </option>
                          <option className="w-1/3 text-sm " value="internship">
                            Internship
                          </option>
                        </optgroup>
                      </select>
                      {errors.workType && (
                        <p className="text-sm text-red-500">
                          {errors.workType.message}
                        </p>
                      )}
                    </div>
                    <div className="flex items-center space-x-2">
                      <Controller
                        name="currentlyPursuing"
                        control={control}
                        defaultValue={false}
                        render={({ field }) => (
                          <input
                            id="pursuing"
                            type="checkbox"
                            checked={field.value}
                            onChange={(e) => field.onChange(e.target.checked)}
                            className="w-4 h-4"
                          />
                        )}
                      />
                      <label htmlFor="pursuing" className="text-sm font-normal">
                        Currently pursuing.
                      </label>
                    </div>

                    <DialogFooter className="flex justify-between w-full gap-4">
                      <DialogClose asChild>
                        <Button
                          onClick={() =>
                            reset({
                              companyName: "",
                              position: "",
                              startDate: "",
                              endDate: "",
                              workType: "",
                              currentlyPursuing: false,
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
            <div className="w-full overflow-y-auto border border-gray-200 rounded-lg shadow-xl min-h-80 max-h-80 scrollableContent">
              {experince.length > 0
                ? experince.map((experince, index) => {
                    const duration = calculateDuration(
                      experince.startDate,
                      experince.endDate
                    );
                    return (
                      <div
                        key={index}
                        className="flex items-center justify-start gap-6 p-4 md:w-1/2 h-fit"
                      >
                        <div className="flex items-center justify-center">
                          <PiBuildingApartmentThin className="w-10 h-10 p-2 text-2xl font-semibold text-gray-400 bg-gray-200 rounded-lg" />
                        </div>
                        <div>
                          <h3 className="font-semibold ">
                            {experince.position}
                          </h3>
                          <p className="text-sm text-gray-500">
                            {experince.companyName}

                            {!experince.currentlyPursuing
                              ? `to ${experince.endDate} `
                              : ` / present`}
                          </p>
                        </div>
                      </div>
                    );
                  })
                : null}
            </div>
          </div>
          <div className="flex flex-col items-start justify-around w-full md:w-1/2 min-h-96">
            <div className="flex justify-between w-full ">
              <h1 className="font-bold text-gray-800 whitespace-nowrap ">
                Certificates Earned
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger className="py-1 mx-2 text-xl font-bold text-gray-700 rounded-full ">
                      <FaRegQuestionCircle />
                    </TooltipTrigger>
                    <TooltipContent className="p-3 bg-black border border-gray-400 rounded-md ">
                      <p className="text-white"> Certificates Earned</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </h1>
              <Dialog>
                <DialogTrigger asChild>
                  <IoIosAddCircleOutline className="w-6 h-6 font-semibold" />
                </DialogTrigger>
                <DialogContent className="">
                  <DialogHeader>
                    <DialogTitle className="w-full my-2 text-lg font-semibold h-fit whitespace-nowrap">
                      Add Certification
                    </DialogTitle>
                    <Separator className="my-2 " />
                  </DialogHeader>
                  <form
                    onSubmit={handleSubmitCertificate(onSubmitCertificate)}
                    className="py-4 space-y-4"
                  >
                    <p className="text-sm text-gray-500">
                      Fill all the details to add your certificates.
                    </p>
                    <div className="space-y-2">
                      <Label htmlFor="certificateName">Certificate Name</Label>
                      <Input
                        {...registerCertificate("certificateName", {
                          required: "Certificate Name is required",
                        })}
                        id="certificateName"
                        placeholder="Enter Certificate Name"
                      />
                      {certificateErrors.certificateName && (
                        <p className="text-sm text-red-500">
                          {certificateErrors.certificateName.message}
                        </p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="issuerAuthority">Issuer Authority</Label>
                      <Input
                        {...registerCertificate("issuerAuthority", {
                          required: "Issuer Authority is required",
                        })}
                        id="issuerAuthority"
                        placeholder="Enter Issuer Authority"
                      />
                      {certificateErrors.issuerAuthority && (
                        <p className="text-sm text-red-500">
                          {certificateErrors.issuerAuthority.message}
                        </p>
                      )}
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="issueDate">Issue Date</Label>
                        <Input
                          id="issueDate"
                          placeholder="dd-mm-yyyy"
                          type="date"
                          {...registerCertificate("issueDate", {
                            required: "Issue Date is required",
                          })}
                        />
                        {certificateErrors.issueDate && (
                          <p className="text-sm text-red-500">
                            {certificateErrors.issueDate.message}
                          </p>
                        )}
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="validTillDate">Valid Till Date</Label>
                        <Input
                          id="validTillDate"
                          placeholder="dd-mm-yyyy"
                          type="date"
                          {...registerCertificate("validTillDate", {
                            required: "Validity Date is required",
                          })}
                        />
                        {certificateErrors.validTillDate && (
                          <p className="text-sm text-red-500">
                            {certificateErrors.validTillDate.message}
                          </p>
                        )}
                      </div>
                    </div>
                    <DialogFooter className="flex justify-between w-full gap-4">
                      <DialogClose asChild>
                        <Button
                          onClick={() =>
                            reset({
                              companyName: "",
                              position: "",
                              startDate: "",
                              endDate: "",
                              workType: "",
                              currentlyPursuing: false,
                            })
                          }
                          className="bg-purple-500 md:w-1/2 hover:bg-purple-600"
                          type="button"
                        >
                          Cancel
                        </Button>
                      </DialogClose>
                      <DialogClose asChild>
                        <Button
                          type="submit"
                          className="bg-purple-500 md:w-1/2 hover:bg-purple-600"
                        >
                          Add
                        </Button>
                      </DialogClose>
                    </DialogFooter>
                  </form>
                </DialogContent>
              </Dialog>
            </div>
            <div className="w-full overflow-x-hidden overflow-y-auto border border-gray-200 rounded-lg shadow-xl min-h-80 scrollableContent max-h-96">
              {Certificate.length > 0
                ? Certificate.map((certificate, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-start gap-4 p-4 md:w-1/2 h-fit"
                    >
                      <div className="flex items-center justify-center ">
                        <MdOutlineVerifiedUser className="w-10 h-10 p-2 text-2xl font-semibold text-gray-400 bg-gray-200 rounded-lg min-w-12" />
                      </div>
                      <div className="flex flex-col ">
                      <h3 
                        className="font-semibold whitespace-nowrap ">
                          {certificate.certificateName.slice(0, 36).concat("...")}
                        </h3>
                        <p className="text-sm text-gray-500">
                          {certificate.issuerAuthority}
                        </p>
                      </div>
                    </div>
                  ))
                : null}
            </div>
          </div>
        </div>
        <div className="flex justify-between w-full">
          <h1 className="text-2xl font-semibold text-gray-800 ">
            Projects
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger className="py-1 mx-2 text-xl font-bold text-gray-700 rounded-full ">
                  <FaRegQuestionCircle />
                </TooltipTrigger>
                <TooltipContent className="p-3 bg-black border border-gray-400 rounded-md ">
                  <p className="text-white"> Projects</p>
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
                  Add Project
                </DialogTitle>
                <Separator className="my-2 " />
              </DialogHeader>
              <form
                onSubmit={handleSubmitProject(onSubmitProject)}
                className="py-4 space-y-4"
              >
                <p className="text-sm text-gray-500">
                  Fill all the details to add your project.
                </p>
                <div className="space-y-2">
                  <Label htmlFor="projectTitle">Project Title</Label>

                  <Input
                    id="projectTitle"
                    placeholder="Enter Project Title"
                    {...registerProject("projectTitle", {
                      required: "Company Name is required",
                    })}
                    className="w-full p-2 border rounded"
                  />
                  {projectErrors.projectTitle && (
                    <p className="text-sm text-red-500">
                      {projectErrors.projectTitle.message}
                    </p>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="projectDescription">
                    Project Description
                  </Label>
                  <Input
                    id="projectDescription"
                    placeholder="Enter Project Description"
                    {...registerProject("projectDescription", {
                      required: "Project Description is required",
                    })}
                    className="w-full p-2 border rounded"
                  />
                  {projectErrors.projectDescription && (
                    <p className="text-sm text-red-500">
                      {projectErrors.projectDescription.message}
                    </p>
                  )}
                </div>
                <div className="">
                  <div className="space-y-2">
                    <Label htmlFor="skillsUsed">Skills Used</Label>
                    <Input
                      id="skillsUsed"
                      type="text"
                      {...registerProject("skillsUsed", {
                        required: "Skills used is required",
                      })}
                      placeholder="eg: html,css,javascript"
                      className="w-full p-2 border rounded appearance-none"
                    />
                    {projectErrors.skillsUsed && (
                      <p className="text-sm text-red-500">
                        {projectErrors.skillsUsed.message}
                      </p>
                    )}
                  </div>
                </div>
                <div className="">
                  <div className="space-y-2">
                    <Label htmlFor="projectLink">Project Link</Label>
                    <Input
                      id="projectLink"
                      type="text"
                      {...registerProject("projectLink", {
                        required: "Skills used is required",
                      })}
                      placeholder="eg: https://github.com/"
                      className="w-full p-2 border rounded appearance-none"
                    />
                    {projectErrors.projectLink && (
                      <p className="text-sm text-red-500">
                        {projectErrors.projectLink.message}
                      </p>
                    )}
                  </div>
                </div>
                <div className="">
                  <div className="space-y-2">
                    <Label htmlFor="teamSize">Team Size</Label>
                    <Input
                      id="teamSize"
                      type="number"
                      {...registerProject("teamSize", {
                        required: "Skills used is required",
                      })}
                      placeholder="eg: 2"
                      className="w-full p-2 border rounded appearance-none"
                    />
                    {projectErrors.teamSize && (
                      <p className="text-sm text-red-500">
                        {projectErrors.teamSize.message}
                      </p>
                    )}
                  </div>
                </div>

                <DialogFooter className="flex justify-between w-full gap-4">
                  <DialogClose asChild>
                    <Button
                      onClick={() =>
                        reset({
                          companyName: "",
                          position: "",
                          startDate: "",
                          endDate: "",
                          workType: "",
                          currentlyPursuing: false,
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

        <Card className="w-full p-6 overflow-y-auto border border-gray-200 shadow-xl rounded-2xl min-h-80 scrollableContent max-h-96">
          {projects.length > 0
            ? projects.map((project, index) => (
                <div key={index} className="flex flex-col gap-4 py-2 border-b">
                  <h1 className="text-lg font-bold">{project.projectTitle}</h1>

                  <p>{project.projectDescription}</p>
                  <div className="flex ">
                    <p className="mr-2 text-gray-700 whitespace-nowrap">
                      Project Soure link
                    </p>
                    <Link
                      to={project.projectLink}
                      className="text-purple-500 underline "
                    >
                      {project.projectLink}
                    </Link>
                  </div>
                </div>
              ))
            : null}
        </Card>
      </div>
      <div className="md:w-[30%]  flex flex-col gap-8">
        <Leaderboard />
      </div>
    </Container>
  );
};

export default StudentProfile;
