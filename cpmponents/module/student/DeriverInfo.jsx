'use client'

import { UsersIcon } from "@phosphor-icons/react";
import AddService from "../Admin/Deriver/AddService";
import { useEffect, useState } from "react";
import { api } from "@/config/api";
import { Palte } from "@/constans/deriver";
import { ClientError } from "@/utils/ClientrrorHandler";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function DeriverInfo({student}) {

  const [deriver,setderiver]=useState(null)

  const [Loading,setLoading]=useState(false)

  const router=useRouter()

  const removeHandler=async()=>{
    setLoading(true)
    const res=await api.put(`/student/redmove-deriver/${student.id}`).catch(err=>ClientError(err)).finally(()=>setLoading(false))

    if(res.status==200){
      toast.success(res.data.message)
      setderiver(null)
      router.refresh()
    }
  }

  useEffect(()=>{
    if(!student.deriver_id) return
    const getDeriver=async()=>{
      setLoading(true)
    const res=await api.get(`deriver/${student.deriver_id}`).finally(()=>setLoading(false))
    if(res.status==200){
      setderiver(res.data.deriver)
    }
    }
    getDeriver()
  },[student])


    return (
        <>
               {!student.deriver_id&&    <div className="bg-white rounded-xl shadow-sm border border-neutral-200 p-6 sticky top-6 mt-4">
                          <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                              <UsersIcon className="w-5 h-5 text-blue-600" />
                            </div>
                            <h2 className="text-neutral-900">راننده سرویس</h2>
                          </div>
                         <AddService studentId={student.id} />
                        </div>}
                        {student.deriver_id&&deriver? 
                                  <div className="bg-white rounded-xl shadow-sm border border-neutral-200 p-6 sticky top-6 mt-4">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                  <UsersIcon className="w-5 h-5 text-blue-600" />
                </div>
                <h2 className="text-neutral-900">راننده سرویس</h2>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="text-sm text-neutral-600 mb-1 block">نام </label>
                  <p className="text-neutral-900">{deriver.full_name}</p>
                </div>
                <div>
                  <label className="text-sm text-neutral-600 mb-1 block">شماره پلاک راننده</label>
                  <p className="text-neutral-900 font-mono text-start" dir="rtl">{deriver.plate_city_code+"_"+deriver.plate_part2+Palte.find(i=>i.value==deriver.plate_letter).label+deriver.plate_part1}</p>
                </div>
              </div>
              <button disabled={Loading} onClick={removeHandler} className="disabled:opacity-50 cursor-pointer bg-blue-600 text-white rounded-lg w-full py-1 mt-4">
                برداشتن راننده
              </button>
            </div>
:
<>
{Loading?
  <p className="text-black text-center">
  درحال بارگزاری 
</p>
:
<p className="text-black text-center">
{student.deriver_id&&"مشکل در دریافت اطلاعات"}
</p>
}
  </>
}
        </>
    );
}