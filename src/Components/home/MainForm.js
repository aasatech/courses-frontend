// import { Slider } from "@/Components/Slider";
import React, {useState} from "react";
import { SessionOne } from "./componensts/SessionOne";
import { SessionTwo } from "./componensts/SessionTwo";
import { AchievementsSection } from "./achievements/AchievementsSection";
import { SectionThree } from "./sectionThree/SectionThree";
import { SectionFour } from "./sectionFour/SectionFour";
import { SectionFAQ } from "./sectionFAQ/SectionFAQ";
import { SectionSix } from "./sectionSix/SectionSix";
import { SectionFinal } from "./sectionFinal/SectionFinal";
import { SectionInstructor } from "./sectionInstructor/SectionInstructor";

export default function () {

  return (
    <div>
      <SessionOne />
      <AchievementsSection/>
      <SectionThree/>
      <SectionFour/>
      <SectionSix/>
      <SectionInstructor/>
      <SectionFAQ/>
      <SessionTwo />
      <SectionFinal/>  
    </div>

  )
}