'use client'

import { api } from "@/config/api";
import { active } from "@/constans/status";
import Option from "@/ui/Option";
import { ClientError } from "@/utils/ClientrrorHandler";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

export default function ChangeStatus({id,role}) {
    const [show,setshow]=useState(false)
    const [status,setshtatus]=useState({status:""})
    const [loading,setLoadint]=useState(false)

    const router=useRouter()

   const addHandler=async()=>{

    let res;
    setLoadint(true)
if(role&&role=="deriver"){
     res=await api.put(`deriver/${id}/active`,{active:status.status}).catch(err=>ClientError(err)).finally(()=>setLoadint(false))
}else{
     res=await api.put(`student/change-status/${id}`,{active:status.status}).catch(err=>ClientError(err)).finally(()=>setLoadint(false))
    }
    if(res.status==200){
    toast.success(res.data.message)
    setshow(false)
    router.refresh()
   }
}

    return (
        <>
         <button onClick={()=>setshow(true)} className="border border-blue-600 rounded-lg transition-all duration-200 ease-in-out hover:bg-blue-50  text-blue-600 px-2 text-nowrap text-sm">
تغییر وضعیت
             </button>

{show&&
    <div className="flex justify-center items-center fixed top-0 right-0 z-[999] backdrop-brightness-50  text-black w-full h-full ">
<div className="bg-white p-4 rounded-lg w-80 ">
    <p>تغییر وضعیت به</p>
    <Option data={status} setData={setshtatus} name={"status"} placeholder={"وضعیت را انتخاب کنید"} options={active} />
 <div className=" grid grid-cols-2 gap-x-1.5 mt-8">
    <button disabled={loading} onClick={addHandler} className="transition-all duration-200 ease-in-out hover:bg-blue-50 cursor-pointer text-center w-full rounded-lg py-1 border border-blue-600 text-blue-600 disabled:opacity-50">
        تایید
    </button>
      <button  onClick={()=>setshow(false)} className="transition-all duration-200 ease-in-out hover:bg-neutral-100 cursor-pointer text-center w-full rounded-lg py-1 border-[1px] border-neutral-400 text-neutral-600   ">
        انصراف
    </button>
 </div>
</div>
            </div>}
                 </>
    );
}