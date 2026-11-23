'use client'

import { api } from "@/config/api";
import DateSelect from "@/ui/DateSelect";
import FormInput from "@/ui/FormInput";
import Input from "@/ui/Input";
import TextareaInput from "@/ui/TextareaInput";
import { ClientError } from "@/utils/ClientrrorHandler";
import { XIcon } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

export default function Addpeyment({student_id}) {

    const [open, setOpen] = useState(false);

    const [loading,setLoading]=useState(false)
    const [error,setError]=useState(null)
    const [data,setdata]=useState({
        title:"",
        student_id:student_id,
        amount:"",
        description:"",
        traffic_percent:""
    })

    const router=useRouter()

    const addHandler=async()=>{
        setLoading(true)
        const res=await api.post('/peyment/add',{...data}).catch((err)=>ClientError(err,setError)).finally(()=>setLoading(false))

        if(res.status==200){
            toast.success("فیش اضافه شد")
            window.location.reload()
            setOpen(false)
        }
    }

    return (
        <>
               <button onClick={()=>setOpen(true)} className="text-white bg-blue-600  px-2 w-full md:w-fit  text-center py-2 rounded-lg">
                افزودن فیش جدید
              </button>
              <div className={` ${open ? "block" : "hidden"} fixed z-[999] top-0 right-0 flex justify-center items-center w-full h-full backdrop-brightness-50 text-black overflow-y-auto`}>
                <div className="bg-white w-full md:w-2xl h-fit p-4 rounded-lg flex flex-col gap-y-2.5 relative overflow-y-auto">
                <XIcon className="absolute top-2 right-2 cursor-pointer" onClick={() => setOpen(false)} />
                    <p className="text-lg text-black text-center">افزودن فیش</p>
                    <div className="grid grid-cols-2 gap-x-2">
                      <FormInput placeholder="عنوان" className="w-full border border-neutral-300 rounded-lg p-2 mt-4" data={data} setData={setdata} name={"title"} label={"عنوان فیش"}  />
                    <FormInput placeholder="درصد ترافیک" className="w-full border border-neutral-300 rounded-lg p-2 mt-4" data={data} setData={setdata} name={"traffic_percent"} label={"درصد ترافیک را وارد کنید"}  />
                    </div>
 <FormInput placeholder="مبلغ" className="w-full border border-neutral-300 rounded-lg p-2 mt-4" data={data} setData={setdata} type={"number"} name={"amount"} label={"مبلغ را وارد کنید"}  />
                    <TextareaInput placeholder="توضیحات" className="w-full h-24 mt-4 border border-neutral-300 rounded-lg p-2" data={data} setData={setdata} name={"description"} label={"توضیحات"} type={"text"} />
                <button disabled={loading} onClick={addHandler} className="w-full text-center rounded-lg py-2 bg-blue-600 text-white mt-2  disabled:opacity-50">
                    ثبت فیش
                </button>
                </div>
              </div>
        </>
    );
}