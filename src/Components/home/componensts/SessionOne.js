import React, {useState} from "react";
// import { Text } from "./componensts/Text";
// import { Textlarg } from "./componensts/Textlarg";
// import { Button } from "./componensts/Button";
// import { Carousel } from "./componensts/Carousel";
import { Text } from "./Text";
import { Textlarg } from "./Textlarg";
import { Button } from "./Button";
import { Carousel } from "./Carousel";
import { FaFacebookF,FaLinkedinIn } from "react-icons/fa";
import { TfiTwitter,TfiInstagram } from "react-icons/tfi";

export const SessionOne = () => {

    const [activeIndex, setActiveIndex] = useState(0);
    const images = [
        "https://media.istockphoto.com/id/1399145579/photo/lovely-pretty-asian-preteen-girl-doing-a-homework-at-desk.jpg?s=2048x2048&w=is&k=20&c=5eHgU_UR5bSMqSkCbKhl_uFVE1rxDS8n1WATde4mGMU=",
        "https://media.istockphoto.com/id/1615624309/photo/a-kind-asian-female-teacher-helps-a-young-adorable-girl-read-a-book-and-do-homework.jpg?s=2048x2048&w=is&k=20&c=dQcgtNZOdx-o8ovLkIhSA3PHZLWpR1FNRMN2pkJXdgE="
    ];

    const handlePrevClick = () => {
        setActiveIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));

        console.log('prevIndex',activeIndex);
    };

    const handleNextClick = () => {
        setActiveIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

  return (
    <div
        className="min-h-[850] h-1/2 md:h-3/4 lg:h-full xl:min-h-[850] xl:max-h-[850] bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1651352076676-58a34812f3d2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}
        >

        {<div class="flex justify-evenly items-center max-lg:flex-col py-20 ">

          <div className="md:w-32 lg:w-48 space-y-5">

            <div className="flex items-center text-white font-bold">{`0${activeIndex + 1}`}

              {<div class="ml-2 h-0.5 w-7 bg-pink-700 "></div>}
              
            </div>

            <div className="flex items-center text-white font-bold">{`0${activeIndex + 1}`}
              {<div class="ml-2 h-0.5 w-7 bg-pink-700 "></div>}
            </div>
            
          </div>

            <div className=" w-[600px] max-lg:flex-col">

                <Text />
                <Textlarg />

                <div className="flex space-x-4 ">
                <Button lable={"Explore More"} className={'bg-pink-700 hover:bg-transparent text-white font-semibold hover:text-white py-3 px-4 border border-pink-700 hover:border-pink rounded'}/>
                <Button lable={"Explore More"} className={'hover:transparent text-white font-semibold hover:text-pink-700 py-3 px-4 border border-white-500 hover:border-pink-700 rounded'}/>
                </div>
                
            </div>

            <div className="flex ">
                <div className="py-10 w-[516px] lg:w-100 xl:w-400 items-start z-0">
                    <Carousel images={images} prev={handlePrevClick} next={handleNextClick} activeIndex={activeIndex}/>
                </div> 

                <div className="text-white text-1xl space-y-4 pt-[50px] ml-5">
                <FaFacebookF className="hover:text-pink-700"/>
                <TfiTwitter className="hover:text-pink-700"/>
                <FaLinkedinIn className="hover:text-pink-700" />
                <TfiInstagram className="hover:text-pink-700"/>
                
                    <div className="transform rotate-90 origin-left items-center text-white font-bold">Let's Keep In Touch</div>

                    <div class="flex ml-2 h-7 w-0.5 bg-pink-700"></div>
                
                </div>
            </div>

            <div className="absolute top-[170px] right-[650px] z-10">
              <img src="https://eduquest.itech-theme.com/wp-content/uploads/2023/08/shape.png"/>
              
            </div>
            <div > 
              <img 
              className="absolute bottom-20 right-10"
              src="https://eduquest.itech-theme.com/wp-content/uploads/2023/08/star-3.png"/>
            </div>
                           
        </div>}
      </div>
  )
}