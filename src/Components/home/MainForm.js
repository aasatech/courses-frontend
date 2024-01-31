import React, { useEffect, useState } from "react";
import { SessionOne } from "./componensts/SessionOne";
import { SessionTwo } from "./componensts/SessionTwo";
import { AchievementsSection } from "./achievements/AchievementsSection";
import { SectionThree } from "./sectionThree/SectionThree";
import { SectionFour } from "./sectionFour/SectionFour";
import { SectionFAQ } from "./sectionFAQ/SectionFAQ";
import { SectionSix } from "./sectionSix/SectionSix";
import { SectionFinal } from "./sectionFinal/SectionFinal";
import { SectionInstructor } from "./sectionInstructor/SectionInstructor";
import AOS from "aos"
import "aos/dist/aos.css"
import { SectionFive } from "./sectionFive/SectionFive";

export default function () {
  useEffect(() => {
    AOS.init({ once: true })
    AOS.refresh()
  }, [])
  return (
    <div>
      <SessionOne />
      <AchievementsSection />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <SectionSix />
      <SectionInstructor />
      <SectionFAQ />
      <SessionTwo />
      <SectionFinal />
    </div>

  )
}
