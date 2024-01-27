// import { Slider } from "@/Components/Slider";
import React, {useState} from "react";
import { SessionOne } from "./componensts/SessionOne";
import { SessionTwo } from "./componensts/SessionTwo";
import { AchievementsSection } from "./achievements/AchievementsSection";

export default function () {

  return (
    <div>
      
      <SessionOne />
      <AchievementsSection/>

      <SessionTwo />
        
    </div>

  )
}