'use client'
import { api } from "@/config/api";
import { educationLevel, grade, shiftSchool } from "@/constans/school";
import FormInput from "@/ui/FormInput";
import Map from "@/ui/Map";
import Option from "@/ui/Option";
import TextareaInput from "@/ui/TextareaInput";
import { ClientError } from "@/utils/ClientrrorHandler";
import { setLocation } from "@/utils/setLocation";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function AddSchool({school,id}) {

    const [error,setError]=useState(null)
    const [loading,setLoading]=useState(false)
    const [data,setdata]=useState({
        name:"",
        management_name:"",
        address:'',
        lat:"",
        lng:"",
        shift:"",
education_level:'',
to_grade:"",
from_grade:""
    })

    useEffect(()=>{
        if(!school) return
        setdata(school)
    },[school])

    const router=useRouter()

    const LocationHandler=(value)=>{
        setLocation(value,setdata)
    }

    const addHandler=async()=>{
setLoading(true)
        const res=await api.post("school/add",{...data}).catch(err=>ClientError(err,setError)).then((res)=>{
            setLoading(false)
        return res
        })
        
        if(res.status==200){
            toast.success("مدرسه با موفقیت ایجاد شد")
            router.push('/Admin/School')
        }
    }
      const updateHandler=async()=>{
setLoading(true)
        const res=await api.put(`school/update/${id}`,{...data}).catch(err=>ClientError(err,setError)).then((res)=>{
            setLoading(false)
        return res
        })
        
        if(res.status==200){
            toast.success("مدرسه با موفقیت ویرایش شد")
            router.push('/Admin/School')
        }
    }

    useEffect(()=>{
        if(data.education_level=="Preschool"){
            setdata((prev)=>({...prev,from_grade:"Preschool",to_grade:"Preschool"}))
        }
    },[data.education_level])

    return (
         <div className="bg-neutral-50 p-6 md:p-8 mx-auto  rounded-xl shadow-sm border border-neutral-200  text-black">
            <h1 className="text-2xl font-medium mb-4">
                اطلاعات مدرسه
            </h1>
         <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-3 gap-y-4">
            <FormInput error={error} label="نام مدرسه" data={data} name={"name"} setData={setdata}  />
            <FormInput error={error} label="نام مدیر" data={data} name={"management_name"} setData={setdata}   />
            <Option error={error} data={data} setData={setdata} name={"shift"} placeholder={"شیفت مدرسه را انتخاب کنید"} title={"شیفت"} options={shiftSchool}  />
            <Option error={error} data={data} setData={setdata} name={"education_level"} placeholder={"دوره تحصیلی مدرسه را انتخاب کنید"} title={"دوره تحصیلی"} options={educationLevel}  />
                  <Option error={error} data={data} disabeld={data.education_level=="Preschool"} disabeltitle={"پیش دبستانی"} setData={setdata} name={"from_grade"} placeholder={"پایه را انتخاب کنید"} title={"از پایه"} options={grade}  />
             <Option error={error} data={data} setData={setdata} disabeld={data.education_level=="Preschool"} disabeltitle={"پیش دبستانی"} name={"to_grade"} placeholder={"پایه را انتخاب کنید"} title={"تا پایه"} options={grade}  />
             <div className="col-span-full gap-y-4 flex flex-col">

             <TextareaInput error={error} data={data} setData={setdata} label={"آدرس"} name={"address"} placeholder="آدرس کامل را وارد کنید" />
            
             </div>
            <div className="col-span-full">

             <Map value={data}  onChange={LocationHandler} />
            </div>
            


         </div>
        {!school&& <button onClick={addHandler} disabled={loading} className={`${loading?"opacity-50":''} bg-blue-600 text-white py-1.5 text-center w-full mt-4 rounded-lg`}>
            افزودن مدرسه
         </button>}
      {school&&<button onClick={updateHandler} disabled={loading} className={`${loading?"opacity-50":''} bg-blue-600 text-white py-1.5 text-center w-full mt-4 rounded-lg`}>
            ویرایش مدرسه
         </button>}
        </div>
    );
}