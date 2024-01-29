import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from "react";
import { MdArrowOutward } from "react-icons/md";
import { GoArrowDownLeft } from "react-icons/go";

export const SessionTwo = () => {

    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    return (
        <section className="w-full py-10 ">
            <div className=" gap-4 flex">

                <div className="hidden md:block w-1/4">
                    <div
                        className="flex  relative top-10 left-[120px] items-center justify-center h-[100px] w-[100px] rounded-full overflow-hidden object-cover"
                    >
                        <img
                        src='https://eduquest.itech-theme.com/wp-content/uploads/2023/08/student-3.png'
                        />
                    </div>
                    <div
                        className="flex  relative top-[25px] left-[200px] items-center justify-center h-[140px] w-[140px] rounded-full overflow-hidden object-cover"
                    >
                        <img
                            src='https://eduquest.itech-theme.com/wp-content/uploads/2023/08/student-4.png'
                        />
                    </div>
                    <div
                        className="flex  relative top-[70px] left-[150px] right-10 items-center justify-center h-[80px] w-[80px] rounded-full overflow-hidden object-cover"
                    >
                        <img
                        src='https://eduquest.itech-theme.com/wp-content/uploads/2023/08/student-5.png'
                        />
                    </div>
                </div>

                <div className="w-full flex flex-col items-center justify-center  ">
                    <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" className="relative">
                        <div className='text-center'>
                            <div className="flex items-center justify-center">
                                <img src='https://eduquest.itech-theme.com/wp-content/uploads/2023/08/dot.png' />
                                <h1 className="ml-1 lg:text-xl font-bold text-pink-600">Student Feedback</h1>
                            </div>
                            <h1 className="lg:text-4xl relative tracking-normal text-[48px] max-2xl:text-[30px] font-extrabold leading-[1.5] z-10">Student Says</h1>
                            <h1 className="lg:text-4xl text-[48px] max-2xl:text-[30px] font-extrabold leading-[1.5] tracking-normal z-10">EduQuest
                                <span className="text-pink-600 underline tracking-normal "> About Courses</span>
                            </h1>
                        </div>
                    </div>

                    <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" 
                        className="relative lg:w-[800px] md:h-[380px] md:w-[600px] bg-green-900 rounded-lg py-10 px-10 my-10">
                        <div className="flex md:flex-col flex:block justify-evenly items-center ">
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
                                <div className=" h-[50px] w-[50px] rounded-full bg-white bg-opacity-20 flex hover:bg-pink-600  items-center justify-center z-0">
                                    <MdArrowOutward className="text-white z-50" />
                                </div>
                                <div className="h-[50px] w-[50px] rounded-full bg-white bg-opacity-20 flex hover:bg-pink-600  items-center justify-center">
                                    <GoArrowDownLeft className="text-white" />
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>

                <div className="w-1/4 hidden md:block">
                    <div
                        className="flex  relative top-[60px] right-0 items-center justify-center h-[110px] w-[110px] rounded-full overflow-hidden object-cover "
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
                        className="flex  relative top-[150px] right-[60px] items-center justify-center h-[100px] w-[100px] rounded-full overflow-hidden object-cover"
                    >
                        <img
                            src="https://eduquest.itech-theme.com/wp-content/uploads/2023/08/student-7.png"
                        />
                    </div>
                    <div
                        className="flex  relative top-[210px] right-[10px] items-center justify-center h-[80px] w-[80px] rounded-full overflow-hidden object-cover"
                    >
                        <img
                            src="https://eduquest.itech-theme.com/wp-content/uploads/2023/08/student-6.png"
                        />
                    </div>
                </div>

            </div>
        </section>
    )
}