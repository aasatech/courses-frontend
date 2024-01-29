import React, {useEffect} from "react";
import { MdArrowOutward } from "react-icons/md";
import { GoArrowDownLeft } from "react-icons/go";

export const SessionTwo = () =>{

    return (
        <div className="w-full py-10 ">
            
                
            <div className=" grid grid-cols-3 gap-4">

                <div className="w-full">
                    <div
                        className="relative top-5 left-[210px] items-center justify-center h-[100px] w-[100px] rounded-full overflow-hidden object-cover"
                        >
                        <img
                            src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHVzZXIlMjBwcm9maWxlfGVufDB8fDB8fHww"
                            fill
                            className="object-cover w-full h-full border-2 border-white"
                            style={{
                            borderRadius: "50%",
                            }}
                        />
                    </div>
                    <div
                        className="flex relative top-[40px] left-[290px] items-center justify-center h-[140px] w-[140px] rounded-full overflow-hidden object-cover"
                        >
                        <img
                            src="https://media.istockphoto.com/id/1311315541/photo/headshot-portrait-of-smiling-businessman-posing-in-office.webp?s=170667a&w=0&k=20&c=r7s-FSwf6caTo3W2TnjCeujMzWRYkwu3_uUt2QYaNTc="
                            fill
                            className="object-cover w-full h-full border-2 border-white"
                            style={{
                            borderRadius: "50%",
                            }}
                        />
                    </div>
                    <div
                        className="flex relative top-[70px] left-[200px] right-10 items-center justify-center h-[80px] w-[80px] rounded-full overflow-hidden object-cover"
                        >
                        <img
                            src="https://media.istockphoto.com/id/1211061995/photo/young-character-actor-headshot.jpg?s=2048x2048&w=is&k=20&c=54kun4cksi9wAD-3_6Vr4a-6dyAeSo6P3gHtP9iGZKA="
                            fill
                            className="object-cover w-full h-full border-2 border-white"
                            style={{
                            borderRadius: "50%",
                            }}
                        />
                    </div>
                </div>

                {/* text */}

                <div className="w-full  text-center items-center justify-center ">
                {/* sm:text-zinc-500 md:text-black lg:text-pink-600 xl:text-orange-800  */}
                <div data-aos="fade-up"
                        data-aos-anchor-placement="top-bottom">
                    <div className=" flex items-center justify-center">
                        <img src='https://eduquest.itech-theme.com/wp-content/uploads/2023/08/dot.png' />
                        <h1 className="ml-1 lg:text-xl font-bold text-pink-600">Student Feedback</h1>
                    </div>

                    <h1 className="lg:text-2xl font-bold">Student are Says</h1>
                    <h1 className="lg:text-2xl font-bold">EduQues
                        <span className="text-pink-600 underline"> About Courses</span>
                    </h1> 
                </div>

                    <div data-aos="fade-up"
                        data-aos-anchor-placement="top-bottom">
                        <div className=" md:h-[380px] md:w-[600px] bg-sky-950 rounded-lg py-10 px-10 my-10">

                            <div className="flex justify-evenly items-center ">

                                <div>
                                    <p className="text-lg font-bold text-white py-4 text-left">
                                    "Sam is somebody you need as a steward of your brand. He's able to craft 
                                    compelling brand narratives that bring a company's vision to life. We care about safety big time - and 
                                    so do site visitors. With a Shared Hosting account, LMS site.."
                                    </p>
                                    <div className="flex items-center py-5">
                                    <div className="flex  items-center justify-center h-20 w-20 rounded-full overflow-hidden relative">
                                        <img
                                        src="https://media.istockphoto.com/id/1300512215/photo/headshot-portrait-of-smiling-ethnic-businessman-in-office.jpg?s=612x612&w=0&k=20&c=QjebAlXBgee05B3rcLDAtOaMtmdLjtZ5Yg9IJoiy-VY="
                                        alt="profile"
                                        fill
                                        className="object-cover w-full h-full rounded-full border-2 border-white"
                                        />
                                    </div>
                                    <div className="ml-4 text-left">
                                        <h1 className="text-white">Ronals Rechart</h1>
                                        <h1 className="text-white">Developer</h1>
                                    </div>
                                </div>
                                </div>
                                
                                <div className="pl-10 space-y-5">
                                    <div className="h-[50px] w-[50px] rounded-full bg-white bg-opacity-20 flex hover:bg-pink-600  items-center justify-center z-0">
                                    <MdArrowOutward className="text-white z-50" />
                                    </div>

                                    <div className="h-[50px] w-[50px] rounded-full bg-white bg-opacity-20 flex hover:bg-pink-600  items-center justify-center">
                                    <GoArrowDownLeft className="text-white" />
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
                    
                </div>

                <div className="w-full">
                    <div
                        className="flex relative top-[60px] left-[250px] items-center justify-center h-[110px] w-[110px] rounded-full overflow-hidden object-cover"
                        >
                        <img
                            src="https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg"
                            fill
                            className="object-cover w-full h-full border-2 border-white"
                            style={{
                            borderRadius: "50%",
                            }}
                        />
                    </div>
                    <div
                        className="flex relative top-[150px] left-[150px] items-center justify-center h-[100px] w-[100px] rounded-full overflow-hidden object-cover"
                        >
                        <img
                            src="https://media.istockphoto.com/id/1311084168/photo/overjoyed-pretty-asian-woman-look-at-camera-with-sincere-laughter.jpg?s=2048x2048&w=is&k=20&c=WVJmGWutzcAz-oWOLFUZfZ3zbRZKZOSXo8mPLTrEMZY="
                            fill
                            className="object-cover w-full h-full border-2 border-white"
                            style={{
                            borderRadius: "50%",
                            }}
                        />
                    </div>
                    <div
                        className="flex relative top-[210px] left-[280px] items-center justify-center h-[80px] w-[80px] rounded-full overflow-hidden object-cover"
                        >
                        <img
                            src="https://media.istockphoto.com/id/1388253782/photo/positive-successful-millennial-business-professional-man-head-shot-portrait.jpg?s=2048x2048&w=is&k=20&c=0HU1oQGXlO4nrrMKKzAK4Jmu6XDLvXhTGjKScvrNIZw="
                            fill
                            className="object-cover w-full h-full border-2 border-white"
                            style={{
                            borderRadius: "50%",
                            }}
                        />
                    </div>
                </div>
                
            </div>
        </div>
    )
}