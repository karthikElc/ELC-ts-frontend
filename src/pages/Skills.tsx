import Semester_Details from "@/Skills/Semester_Details"
import Skill_Map from "@/Skills/Skill_Map"
import Skill_Recommendation from "@/Skills/Skill_Recommendation"
import Subject_Progression from "@/Skills/Subject_Progression"
import { FC } from "react"
import { Container } from "react-bootstrap"

const Skills: FC = () => {
  return (
    <Container className="min-h-dvh  w-[95%] mx-auto  flex flex-col gap-16 ">
      <div>
        <Subject_Progression />
      </div>
      <div>
        <Skill_Map />
      </div>
      <div>
        <Semester_Details/>
      </div>
      <div>
        <Skill_Recommendation/>
      </div>
    </Container>
  );
}

export default Skills