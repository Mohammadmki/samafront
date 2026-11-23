'use client'

import { EyeIcon, PencilIcon, X } from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import DelStudent from "../../student/DelStudent";
import Input from "@/ui/Input";
import Option from "@/ui/Option";
import Link from "next/link";
import { api } from "@/config/api";
import { grade } from "@/constans/school";
import { ClientError } from "@/utils/ClientrrorHandler";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import FormInput from "@/ui/FormInput";

export default function AddStudent({deriver_id}) {

  const [loading,setLoading]=useState(false)
    const [show,setshow]=useState(false)
    const [students,setshtudent]=useState([])
    const [school,setScool]=useState([])
     const [filter,setFilter]=useState({
      full_name:"",
      school_id:""
     })

    const router=useRouter()


    useEffect(()=>{
     const fetchSchool=async()=>{
      const res=await api.get('school')
      if(res.status==200){

        res.data.schools.map((i)=>{
          setScool((prev)=>([...prev,{label:i.name,value:i.id}]))
        })
      }
     }
     fetchSchool()
    },[])

    useEffect(()=>{

      const query=new URLSearchParams()

      Object.keys(filter).forEach((key) => {
    if (filter[key]!="") {
      query.append(key, filter[key]);
    }
  })

      const fetchStudent=async()=>{
        setLoading(true)
        const res=await api.get(`student?${query.toString()}`).finally(()=>setLoading(false))
        if(res.status==200){
         
          setshtudent(res.data.students)
          setshow(false)
        } 
      }
      fetchStudent()
    },[filter])

 
    const addstudent=async(selectstudent)=>{
    
const res=await api.put(`student/add-deriver/${selectstudent.id}`,{deriver_id}).catch((err)=>ClientError(err))


if(res.status==200){
 
  toast.success(res.data.message)
router.refresh()

}

    }

    return (
        <>
      <button onClick={()=>setshow(true)} className="bg-blue-600 text-white px-2 py-1 rounded-lg">
                        افزودن دانش آموز
                       </button>
                      {show&& <div className="w-full fixed z-[999]  h-full top-0 right-0 bg-white mx-auto overflow-y-auto text-black overflow-x-hidden ">
           <X className="text-xl text-neutral-700 absolute left-2 top-2" onClick={()=>setshow(false)} />
                        <div>
                            <p className="p-2">افزودن دانش آموز:</p>
            
                          
                        </div>
                        <div>
                          <FormInput data={filter} setData={setFilter} name={"full_name"} placeholder="جست و جو بر اساس نام ..." />
                          <Option data={filter} setData={setFilter} name={"school_id"} placeholder={"انتخاب مدرسه"} options={school} />
                        </div>
                      {students.length>0? 
                      <div className="md:hidden flex flex-col gap-y-3 p-3 ">
                        {
                        
                         students.map((student)=>(
                                          <div onClick={()=>addstudent(student)}  className="bg-white rounded-xl shadow-sm border border-neutral-200 p-2">
                                            <div className="flex items-start justify-between mb-3">
                                              <div className="flex-1">
                                                <h3 className="text-neutral-900 mb-1 text-sm">{student.full_name}</h3>
                                                <p className="text-sm text-neutral-600">  {student.school_name} • {grade.find(i=>i.value==student.grade).label}</p>
                                              </div>
                                            </div>
                                             <p className="text-xs truncate line-clamp-1 overflow-hidden">
                                                {student.address}
                                             </p>
                                         <button onClick={()=>addstudent(student)} className="bg-blue-600 text-white w-full mt-3 rounded-lg py-1 text-sm ">انتخاب</button>
                        
                                         
                                          </div>
                         ))
                         }
                      </div>
:
loading?
<p className="text-black text-center md:hidden">درحال بارگذاری ...</p>
:
<p className="text-black text-center md:hidden">مشکل در دریافت اطلاعات</p>
}
{students.length>0?

                            <table className="w-full lg:text-base text-sm  max-md:hidden">

      
                  <thead className="bg-neutral-50 border-b border-neutral-200 ">
                    <tr>
                      <th className="px-6 py-4 max-lg:px-2 max-lg:py-3 text-right text-sm text-neutral-700">نام دانش‌آموز</th>
                      <th className="px-6 py-4 max-lg:px-2 max-lg:py-3 text-right text-sm text-neutral-700">پایه تحصیلی</th>
                      <th className="px-6 py-4 max-lg:px-2 max-lg:py-3 text-right text-sm text-neutral-700">مدرسه</th>
                        <th className="px-6 py-4 max-lg:px-2 max-lg:py-3 text-right text-sm text-neutral-700">آدرس</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-neutral-200">
                 {students.map((student)=>(
                      <tr onClick={()=>addstudent(student)} key={student.id} className="hover:bg-blue-50/50 transition-colors duration-150 cursor-pointer">
                      
                          <td className="px-6 py-4 max-lg:px-2 max-lg:py-3">
                            <div>
                              <p className="text-neutral-900">{student.full_name}</p>
                              <p className="text-sm text-neutral-500" >{student.nationalcode}</p>
                            </div>
                          </td>
                          <td className="px-6 py-4 max-lg:px-2 max-lg:py-3 text-neutral-700">{grade.find(i=>i.value==student.grade).label}</td>
                          <td className="px-6 py-4 max-lg:px-2 max-lg:py-3 text-neutral-700">{student.school_name}</td>
                         <td className="text-center text-black text-sm  ">
                            <p className="w-full line-clamp-1 text-nowrap truncate">

                       {student.address}
                            </p>
                         </td>
                        </tr>
                 ))}
                    </tbody>
                     </table>:
                     loading?
                     <p className="text-black text-center max-md:hidden">درحال بارگذاری ...</p>
                     :
                        <p className="text-black text-center max-md:hidden">مشکل در دریافت اطلاعات</p>
                     }
                       </div>}
                   
        </>

    );
}