'use client'

import { api } from "@/config/api";
import { paymentStatus } from "@/constans/payment";
import { ClientError } from "@/utils/ClientrrorHandler";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

export default function EditStatusPeyment({payment}) {

    const [open, setOpen] = useState(false);

    const router=useRouter()
   
    const pathname = usePathname();


    const changeHandler=async(status)=>{

        const loadingToast = toast.loading("در حال انجام عملیات...");

      const res=await api.put(`/peyment/change-status/${payment.id}`,{status,student_id:payment.student_id}).catch(err=>ClientError(err)).finally(()=>toast.dismiss(loadingToast))

      if(res.status==200){
        toast.success(res.data.message)
        setOpen(false)
router.refresh()
      }

    }

    const deleteHandler = async()=>{
            const loadingToast = toast.loading("در حال انجام عملیات...");
      const res=await api.delete(`/peyment/delete/${payment.id}`).catch((err)=>ClientError(err)).finally(()=>toast.dismiss(loadingToast))

      if(res.status==200){
        toast.success("فیش حذف شد")
        router.back()
      }

    }

    return (
        <div className={`${pathname.includes('Admin') ?  "block" : "hidden"} `}>
         <div className="bg-white rounded-xl  shadow-sm border border-neutral-200 p-6 ">
                 <div className="flex items-center justify-center ">
                   <div onClick={()=>setOpen((prev)=>!prev)} className={`inline-flex items-center gap-2 px-6 py-3 rounded-full text-blue-600 bg-blue-100 `}>
                   
                     <span className="text-lg cursor-pointer">تغییر وضعیت پرداخت</span>
                   </div>
                
                 </div>
                    <div className={`flex flex-col gap-4 text-black  bg-neutral-100 py-3 rounded-lg overflow-hidden transition-all duration-300 ease-in-out ${open ? 'block' : 'hidden'} mt-2` }>
                    {paymentStatus.map((i,index)=>(
                         <button onClick={()=>changeHandler(i.value)} disabled={i.value=='gateway'} key={index} className="transition-all disabled:hidden duration-200 ease-in-out hover:text-blue-600 hover:bg-neutral-300 py-1">
                      {i.label}
                     </button>
                    ))}
                         <button onClick={deleteHandler} className="transition-all disabled:hidden duration-200 ease-in-out hover:text-blue-600 hover:bg-neutral-300 py-1">
                     حذف فیش
                     </button>
                   </div>
               </div>
                </div>
    );
}