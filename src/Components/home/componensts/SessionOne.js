import React, {useEffect, useState} from 'react';
import {Text} from './Text';
import {Textlarg} from './Textlarg';
import {Button} from './Button';
import {Carousel} from './Carousel';
import {FaFacebookF, FaLinkedinIn} from 'react-icons/fa';
import {TfiTwitter, TfiInstagram} from 'react-icons/tfi';
import AOS from 'aos';
import 'aos/dist/aos.css';

export const SessionOne = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const images = [
    'https://eduquest.itech-theme.com/wp-content/uploads/2023/08/hero.jpg',
    'https://media.istockphoto.com/id/1399145579/photo/lovely-pretty-asian-preteen-girl-doing-a-homework-at-desk.jpg?s=2048x2048&w=is&k=20&c=5eHgU_UR5bSMqSkCbKhl_uFVE1rxDS8n1WATde4mGMU=',
  ];

  const handlePrevClick = () => {
    setActiveIndex(prevIndex => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNextClick = () => {
    setActiveIndex(prevIndex => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center relative"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1651352076676-58a34812f3d2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      }}>
      <div className="container mx-auto p-6 w-full">
        <div className="md:flex justify-evenly items-center max-md:flex-row md:items-center py-20">
          <div data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="300" data-aos-offset="0">
            <div className="absolute left-0 md:w-24 lg:w-32 space-y-5">
              <div className="flex items-center text-white font-bold">
                {`0${activeIndex + 1}`}
                <div className="ml-2 h-0.5 w-7 bg-[#ff3158] "></div>
              </div>
              <div className="flex items-center text-white font-bold">
                {`0${activeIndex + 1}`}
                <div className="ml-2 h-0.5 w-7 bg-[#ff3158] "></div>
              </div>
            </div>
          </div>

          <div data-aos="fade-up" data-aos-anchor-placement="center-bottom">
            <div className="w-full md:w-1/2 lg:w-full">
              <img className="h-7 w-7" src="https://eduquest.itech-theme.com/wp-content/uploads/2023/08/star.png" />
              <img
                className="absolute left-[620px] top-[180px]"
                src="https://eduquest.itech-theme.com/wp-content/uploads/2023/08/star.png"
              />
              <Text />
              <Textlarg />
              <div className="flex space-x-4">
                <div data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                  <Button
                    lable={'Explore More'}
                    className={
                      'bg-[#ff3158] hover:bg-transparent text-white font-semibold hover:text-white py-3 px-4 border border-[#ff3158] hover:border-pink rounded'
                    }
                  />
                </div>

                <div data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                  <Button
                    lable={'Explore More'}
                    className={
                      'hover:transparent text-white font-semibold hover:text-[#ff3158] py-3 px-4 border border-white-500 hover:border-[#ff3158] rounded'
                    }
                  />
                </div>
              </div>
            </div>
          </div>

          <div data-aos="fade-left" className="w-full md:w-2/3 lg:w-1/2 mt-8 md:mt-0">
            <div className="flex">
              <div className="py-10 w-full xl:w-full lg:w-full">
                <Carousel images={images} prev={handlePrevClick} next={handleNextClick} activeIndex={activeIndex} />
              </div>
              <div className="text-white text-1xl space-y-4 pt-[50px] ml-5">
                <FaFacebookF className="hover:text-[#ff3158]" />
                <TfiTwitter className="hover:text-[#ff3158]" />
                <FaLinkedinIn className="hover:text-[#ff3158]" />
                <TfiInstagram className="hover:text-[#ff3158]" />
                <div className="transform rotate-90 origin-left items-center text-white font-bold">
                  Let's Keep In Touch
                </div>
                <div className="flex ml-2 h-7 w-0.5 bg-[#ff3158]"></div>

                <div>
                  <img
                    className="absolute bottom-20 right-10"
                    src="https://eduquest.itech-theme.com/wp-content/uploads/2023/08/star-3.png"
                    alt="star"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="absolute top-[170px] right-[650px] z-10">
            <img src="https://eduquest.itech-theme.com/wp-content/uploads/2023/08/shape.png" alt="shape" />
          </div>
        </div>
      </div>
    </div>
  );
};
