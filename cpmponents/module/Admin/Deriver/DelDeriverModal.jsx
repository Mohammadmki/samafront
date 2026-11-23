import { api } from "@/config/api";
import { ClientError } from "@/utils/ClientrrorHandler";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

export default function DelDeriverModal({setshow,id}) {
   
    const router=useRouter()

    const [loading,setLoading]=useState(false)

    const delHandler=async()=>{
        setLoading(true)
        const res=await api.delete(`deriver/delete/${id}`).catch((err)=>ClientError(err)).finally(()=>setLoading(false))
       if(res.status==200){
        toast.success("راننده حذف شد")
        router.refresh()
      setshow(false)
    }
    }

    return (
            <div className="flex justify-center items-center fixed top-0 right-0 z-[999] backdrop-brightness-50  text-black w-full h-full ">
<div className="bg-white p-4 rounded-lg w-fit">
    <p>آیا از حذف راننده اطمینان دارید؟</p>
 <div className=" grid grid-cols-2 gap-x-1.5 mt-8">
    <button disabled={loading} onClick={delHandler} className="transition-all disabled:opacity-50 duration-200 ease-in-out hover:bg-red-50 cursor-pointer text-center w-full rounded-lg py-1 border-[1px] border-red-500 text-red-500">
        حذف
    </button>
      <button onClick={()=>setshow(false)} className="transition-all duration-200 ease-in-out hover:bg-neutral-100 cursor-pointer text-center w-full rounded-lg py-1 border-[1px] border-neutral-400 text-neutral-600">
        انصراف
    </button>
 </div>
</div>
            </div>
    );
}