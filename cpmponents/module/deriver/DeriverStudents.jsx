'use client'

import Link from "next/link";
import AddStudent from "../Admin/Deriver/AddStudent";
import { useEffect, useState } from "react";
import { api } from "@/config/api";
import { EyeIcon } from "@phosphor-icons/react";
import { useParams, usePathname, useSearchParams } from "next/navigation";
import FilterStudent from "../Admin/Deriver/FilterStudent";
import { grade } from "@/constans/school";


export default function DeriverStudents({deriver_id}) {

    const [loading,setLoading]=useState(false)
const [students,setStudents]=useState([])

const pathName=usePathname()

const params=useSearchParams()


    const getStudent=async()=>{
        const query=new URLSearchParams(params)

        setLoading(true)
        const res=await api.get(`/deriver/${deriver_id}/students`).finally(()=>setLoading(false))
console.log(res)
        if(res.status==200){
    setStudents(res.data.students)
}
    }

    useEffect(()=>{
        getStudent()
    },[params])


    console.log(grade,students[0])



    return (
         <div className="bg-white mt-6 flex-1 rounded-xl shadow-sm border border-neutral-200 p-6">
                        <div className="text-lg flex flex-row justify-between w-full mb-6">
                        <p className="text-black text-lg ">لیست دانش آموزان این راننده:</p>
                      <AddStudent deriver_id={deriver_id} />
                        </div>
                      {students&&students.length>0&&pathName.includes('Admin')&&<FilterStudent />}
       {students&&students.length>0? <> {students.map((i)=>( <div key={i.div}  className="bg-white rounded-xl shadow-sm border border-neutral-200 p-2 ">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <h3 className="text-neutral-900 mb-1">{i.full_name}</h3>
                        <p className="text-sm text-neutral-600">  {i.school_name} • {grade.find((item)=>item.value==i.grade).label}</p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-3">
                      <span className={`inline-flex px-3 py-1 rounded-full text-sm ${i.active?" bg-green-500 text-green-300":"bg-red-500 text-red-300"} `}>
                       {i.active?"فعال":"غیر فعال"}
                      </span>
                    </div>

                    <Link href={`/Admin/Students/1`} className="flex items-center justify-between pt-3 border-t border-neutral-200">
                      <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 text-sm flex items-center gap-2">
                        <EyeIcon className="w-4 h-4" />
                        <span>مشاهده جزئیات</span>
                      </button>
                    </Link>
                  </div>))}
                  </>
                  :
                  <>
                  {loading?

                      <p className="text-black text-center">درحال بارگزاری...</p>
                      :
                         <p className="text-black text-center"> در حال حاضر دانش آموزی ثبت نشده </p>
                  }
                  </>
                  }
                    </div>
    );
}