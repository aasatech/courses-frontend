'use client'
import Carousel from "./components/Carousel";
import { AchievementsSection } from "./components/achievements/AchievementsSection";
import { SectionThree } from "./components/sectionThree/SectionThree";
import { SectionFour } from "./components/sectionFour/SectionFour";
import { SectionSix } from "./components/sectionSix/SectionSix";
import { SectionInstructor } from "./components/sectionInstructor/SectionInstructor";
import { SectionFAQ } from "./components/sectionFAQ/SectionFAQ";
import { SectionFinal } from "./components/sectionFinal/SectionFinal";
import { Footer } from "./components/footer/Footer";
import { SectionFive } from "./components/sectionFive/SectionFive";

export default function Home() {
  return (
    <div>
      <Carousel/>
      {/* <AchievementsSection/>
      <SectionThree />
      <SectionFour /> */}

      <SectionFive />

      {/* <SectionSix/>
      <SectionInstructor/> */}
      {/* <SectionFAQ/> */}
      {/* <SectionFinal/>
      <Footer/> */}
    </div>
  );
}
