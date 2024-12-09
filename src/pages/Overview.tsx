import Academic from "@/Overview/Academic_N_ Skills"
import Knowledge_N_Market from "@/Overview/Knowledge_N_Market";
import Overview_EmployabilityMeter from "@/Overview/Overview_EmployabilityMeter";
import { FC } from "react"
import { Container } from "react-bootstrap";
// import from "../Employability/employability.css"

const Overview:FC = () => {
  return (
    <div className="sm:w-[95%] mx-auto min-h-dvh rounded-md   py-4 px-2 overflow-y-auto">
      <div className="w-full h-full mt-8">
        <Academic />
      </div>
      <div className="sm:w-[50%] w-full h-3/4 mx-auto sm:mt-20">
        <Overview_EmployabilityMeter />
        {/* <GaugeChart /> */}
      </div>
      <div className="w-full h-full px-4 mt-8">
    <Knowledge_N_Market/>
      </div>
    </div>
  );
}

export default Overview