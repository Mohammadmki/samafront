import { api } from "@/config/api";
import { ClientError } from "@/utils/ClientrrorHandler";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function DelSchoolModal({setshow,id}) {

    const router=useRouter()

    const delHandler=async()=>{
        const res=await api.delete(`school/delete/${id}`).catch((err)=>ClientError(err))
        console.log(res)
        if(res.status==200){
            setshow(false)
            toast.success("مدرسه حذف شد")
            router.refresh()
        }
    }

    return (
            <div className="flex justify-center items-center fixed top-0 right-0 z-[999] backdrop-brightness-50  text-black w-full h-full ">
<div className="bg-white p-4 rounded-lg w-fit">
    <p>آیا از حذف این مدرسه اطمینان دارید؟</p>
 <div className=" grid grid-cols-2 gap-x-1.5 mt-8">
    <button onClick={delHandler} className="transition-all duration-200 ease-in-out hover:bg-red-50 cursor-pointer text-center w-full rounded-lg py-1 border-[1px] border-red-500 text-red-500">
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