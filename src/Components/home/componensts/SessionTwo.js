import React from "react";
import { MdArrowOutward } from "react-icons/md";
import { GoArrowDownLeft } from "react-icons/go";

export const SessionTwo = () =>{
    return (
        <div className="py-10">
            <div className=" text-center items-center justify-center ">
                
                <div className="flex items-center justify-center">
                    <div className="h-3 w-3 bg-rose-500 rounded-full"></div>
                    <h1 className="text-xl font-bold text-pink-600">Student Feedback</h1>
                </div>

                <h1 className="text-2xl font-bold">Student are Says</h1>
                <h1 className="text-2xl font-bold">EduQues<span className="text-pink-600"> About Courses</span>
                </h1> 
            </div>
                
            <div className="flex items-center justify-center">

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-[500px] w-[600px] bg-sky-950 rounded-lg p-6">
            <div className="col-span-1 lg:col-span-1">
                <p className="text-lg font-bold text-white py-4 text-left">
                "Sam is somebody you need as a steward of your brand. He's able to craft compelling brand narratives that bring a company's vision to life. We care about safety big time - and so do site visitors. With a Shared Hosting account, LMS site..."
                </p>
                <div className="flex items-center">
                <div className="flex items-center justify-center h-12 w-12 rounded-full overflow-hidden relative">
                    <img
                    src="https://media.istockphoto.com/id/1300512215/photo/headshot-portrait-of-smiling-ethnic-businessman-in-office.jpg?s=612x612&w=0&k=20&c=QjebAlXBgee05B3rcLDAtOaMtmdLjtZ5Yg9IJoiy-VY="
                    alt="profile"
                    fill
                    className="object-cover w-full h-full rounded-full"
                    />
                </div>
                <div className="ml-4">
                    <h1 className="text-white">Ronals Rechart</h1>
                    <h1 className="text-white">Developer</h1>
                </div>
                </div>
            </div>
            <div className="col-span-1 lg:col-span-1 lg:row-span-">
                <div className="h-[50px] w-[50px] rounded-full bg-white opacity-10 flex hover:bg-pink-600  items-center justify-center">
                
                <MdArrowOutward className="text-white" />
                </div>

                <div className="h-[50px] w-[50px] rounded-full bg-white opacity-10 flex hover:bg-pink-600  items-center justify-center">
                
                <GoArrowDownLeft className="text-white" />
                </div>

            </div>
            </div>
                <div
                    className="flex items-center justify-center h-[100px] w-[100px] rounded-full overflow-hidden relative"
                    >
                    <img
                        src="https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg"
                        fill
                        className="object-cover w-full h-full"
                        style={{
                        borderRadius: "50%",
                        }}
                    />
                </div>
            </div>
        </div>
    )
}