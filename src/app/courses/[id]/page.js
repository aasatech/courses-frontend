import CourseDetail from "@/Components/courses/CourseDetail";
import React from "react";


const sampleData = {
    1: {
        name: '1',
        image: "https://docs.material-tailwind.com/demo.mp4",
        description: "Your browser does not support the video tag.",
        prcing: "Course Pricing",
    },
    2: {
        name: '2',
        image: "https://docs.material-tailwind.com/demo.mp4",
        description: "Your browser does not support the video tag.",
        prcing: "Course Pricing 1",
    }
};


const page = async ({ params }) => {
    // const course = await fetchCouse(params.id)
    return <CourseDetail data={sampleData[params.id]} />;
};
export default page;
