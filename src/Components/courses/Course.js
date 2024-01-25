'use client'
import React, { useEffect, useState } from 'react'
import Card from './Card'
import CardInfor from './CardInfor'
import { courses as course } from '@/actions/courses'
import { categories as category } from '@/actions/categoies'
import { tags as tag } from '@/actions/tags'

const Course = () => {
    const [courses, setCourses] = useState([])
    const [categories, setCategories] = useState([])
    const [tags, setTags] = useState([])
    const [selectCategory, setSelectCategory] = useState([])
    const [selectTag, setSelectTag] = useState([])
    const [data, setData] = useState([])
    // const []

    useEffect(()=>{
        const fetchCourses = async() => {
            try{
                const response = await course();
                setCourses(response.results)       
                // console.log("course",response)       
           
            } catch(error){
                console.log("error", error)
            }
        }
        const fetchCategories = async() => {
            try{
                const response = await category();
                setCategories(response)
                // console.log("categories", response)
                
            } catch(error) {
                console.log("error", error)
            }
        }
        const fetchTags = async()=>{
            try{
                const response = await tag();
                setTags(response.results)
                // console.log("tags",response)
            } catch (error) {
                console.log("error", error)
            }
        }
        fetchCourses()
        fetchCategories()
        fetchTags()
    },[])

    useEffect(()=>{       
        setData(courses)
    },[courses])

    useEffect(()=>{

        setData(courses.filter((value) => selectCategory.includes(value.category_id)))

    },[selectCategory])
    
    const handleChangeCategory = (e, id) =>{
        const {checked} = e.target;
        // console.log("id", id)
        if(checked){
            setSelectCategory((pre) => [...pre, id]);
           
        
        } else {
            setSelectCategory((pre) => pre.filter((cate) => cate !== id))
        }
    }


    const handleChangeTag = (e, id)=>{
        const {checked} = e.target;
        if(checked){
            setSelectTag((pre)=> [...pre, id]);
        } else {
            setSelectTag((pre)=> pre.filter((tag)=>tag !== id))
        }
    }

    // console.log("select", selectCategory)




    // data.filter((value)=>categories.includes(value.category_id))
    


    // console.log("select category", selectCategory)

   


  return (
    <div>
        <div className='grid grid-cols-4 gap-10 px-52 mt-14'>
            <div>
                <div>
                    <CardInfor data={categories} label="categories" onChange={handleChangeCategory} />
                </div>
               <div className='mt-5'>
                    <CardInfor data={tags} label="tags" onChange={handleChangeTag} />
               </div>
            </div>
            <div className='col-span-3'>
               <div className='grid grid-cols-3 gap-4'>
                  {
                    data?.map((course, index)=><Card course={course} key={index} />)
                  }
               </div>
            </div>
        </div>
    </div>
  )
}

export default Course