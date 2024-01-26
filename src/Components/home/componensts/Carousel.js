import React, { useState } from "react";

export const Carousel = ({activeIndex,prev,next,images}) => {

    // const [activeIndex, setActiveIndex] = useState(0);
    // const images = [
    //     "https://media.istockphoto.com/id/1399145579/photo/lovely-pretty-asian-preteen-girl-doing-a-homework-at-desk.jpg?s=2048x2048&w=is&k=20&c=5eHgU_UR5bSMqSkCbKhl_uFVE1rxDS8n1WATde4mGMU=",
    //     "https://media.istockphoto.com/id/1615624309/photo/a-kind-asian-female-teacher-helps-a-young-adorable-girl-read-a-book-and-do-homework.jpg?s=2048x2048&w=is&k=20&c=dQcgtNZOdx-o8ovLkIhSA3PHZLWpR1FNRMN2pkJXdgE="
    // ];

    // const handlePrevClick = () => {
    //     setActiveIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    // };

    // const handleNextClick = () => {
    //     setActiveIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    // };
    
    return (
        <div className="w-full">
          <div className="relative w-full h-[530px] overflow-hidden rounded-lg">
      
            {images.map((url, index) => (
              <img
                key={index}
                src={url}
                alt={`Carousel Item ${index + 1}`}
                className={`absolute w-full h-full transition-opacity duration-700 object-cover ease-in-out ${index === activeIndex ? "opacity-100" : "opacity-0"}`}
              />
            ))}
      
          </div>

          <div className="flex justify-start pt-10 pl-5">
            
            <button onClick={next} className=" cursor-pointer text-white hover:text-pink-700 font-bold pr-20 font-">
              Next
            </button>
            <button onClick={prev} className=" cursor-pointer text-white hover:text-pink-700 font-bold">
              Prev
            </button>

          </div>

        </div>
      );
}



 //     <div id="controls-carousel" className="relative w-full" data-carousel="static">
  
    //     <div className="relative h-[200px] w-full overflow-hidden rounded-lg md:h-96">
    
    //         <div className=" duration-700 ease-in-out" data-carousel-item>
    //             <img className=" absolute block w-full h-96 "
    //             src="https://images.unsplash.com/photo-1610484826967-09c5720778c7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHN0dWR5aW5nfGVufDB8fDB8fHww" 
    //             // className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" 
    //             alt="..." />
    //         </div>
    
    //         <div className=" duration-700 ease-in-out" data-carousel-item="active">
    //             <img 
    //             className=" absolute block w-full h-96 "
    //             src="https://media.istockphoto.com/id/1615624309/photo/a-kind-asian-female-teacher-helps-a-young-adorable-girl-read-a-book-and-do-homework.jpg?s=2048x2048&w=is&k=20&c=dQcgtNZOdx-o8ovLkIhSA3PHZLWpR1FNRMN2pkJXdgE=" 
    //             // className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" 
    //             alt="..." />
    //         </div>
    
    //         <div className=" duration-700 ease-in-out" data-carousel-item>
    //             <img 
    //             className=" absolute block w-full h-96 "
    //             src="https://media.istockphoto.com/id/1615624309/photo/a-kind-asian-female-teacher-helps-a-young-adorable-girl-read-a-book-and-do-homework.jpg?s=2048x2048&w=is&k=20&c=dQcgtNZOdx-o8ovLkIhSA3PHZLWpR1FNRMN2pkJXdgE=" 
    //             // className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" 
    //             alt="..." />
    //         </div>
    //     </div>

    //     <button type="button" className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
    //         <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
    //             <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
    //                 <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
    //             </svg>
    //             <span className="sr-only">Previous</span>
    //         </span>
    //     </button>
    //     <button type="button" className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
    //         <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
    //             <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
    //                 <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
    //             </svg>
    //             <span className="sr-only">Next</span>
    //         </span>
    //     </button>
    // </div>