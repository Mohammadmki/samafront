'use client'
import FormInput from "@/ui/FormInput";
import Map from "@/ui/Map";
import TextareaInput from "@/ui/TextareaInput";
import { useState } from "react";

export default function AddSchool() {

    const [data,setdata]=useState({
        name:"",
        management:""
    })

    return (
         <div className="bg-neutral-50 p-6 md:p-8 mx-auto  rounded-xl shadow-sm border border-neutral-200  text-black">
            <h1 className="text-2xl font-medium mb-4">
                اطلاعات مدرسه
            </h1>
         <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-3 gap-y-4">
            <FormInput label="نام مدرسه" data={data} name={"name"} setData={setdata}  />
            <FormInput label="نام مدیر" data={data} name={"management"} setData={setdata}   />
             <div className="col-span-full">

             <TextareaInput data={data} setData={setdata} label={"آدرس"} name={"address"} placeholder="آدرس کامل را وارد کنید" />
            
             </div>
            <div className="col-span-full">

             <Map  />
            </div>
            

         </div>
        </div>
    );
}