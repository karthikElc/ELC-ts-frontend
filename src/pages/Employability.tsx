import { FC } from "react";
import EmployabilityIndex from "../Employability/EmployabilityIndex";

import CareerPathJobListing from "@/Employability/CareerPathJobListing";
import { Container } from "react-bootstrap";

const Employability: FC = () => {
  return (
    <Container className="min-h-dvh  w-[85%] mx-auto  flex flex-col gap-16 ">
      <div className="rounded-b-lg ">
        <EmployabilityIndex />
      </div>

      <div className="w-full h-full rounded-b-lg shadow-xl shadow-b-2">
        <CareerPathJobListing />
      </div>
      <div>{/* <CareerPathJobListing /> */}</div>
    </Container>
  );
};

export default Employability;
