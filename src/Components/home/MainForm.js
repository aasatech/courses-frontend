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
import { NavbarHomePage } from "./Novbar/Novbar";
import { usePathname } from "next/navigation";

export default function () {
  useEffect(() => {
    AOS.init({ once: true })
    AOS.refresh()
  }, [])

  const pathname = usePathname();
  return (
    <div className="overflow-hidden">
      {pathname === '/' &&
        <NavbarHomePage />
      }
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
