"use client"

import { api } from "@/config/api";
import FormInput from "@/ui/FormInput";
import { ClientError } from "@/utils/ClientrrorHandler";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

export default function Admin({admins}) {

    const [phone,setphone]=useState()

    const router=useRouter()

    const deleteHandler=async({user})=>{
        const res=await api.post('settings/delete-admin',{phone:user.phone}).catch((err)=>ClientError(err))

        if(res.status==200){

            toast.success("کاربر از لیست برداشته شد")
            router.refresh()
        }

    }

    const addHandler=async()=>{
             const res=await api.post('settings/add-admin',{phone:phone}).catch((err)=>ClientError(err))
   
            
        if(res.status==200){

            toast.success("کاربر به لیست اضافه شد")
            router.refresh()
        }

            }

    return (
        <div className="bg-white p-6 rounded-xl shadow-sm border border-neutral-200 overflow-hidden mt-4 text-black">

            <p className="mb-4">لیست ادمین ها</p>
            <div className="flex flex-row gap-4 items-end my-2">
            <FormInput data={phone} setData={setphone} placeholder="شماره تلفن را وارد کنید"  />
           <button onClick={addHandler}  className="text-white bg-blue-600  px-2 w-full md:w-fit  text-center py-2 rounded-lg text-nowrap">
                افزودن کاربر
              </button>
            </div>


        {admins.map((i)=>(
            <div key={i.id} className="flex flex-row justify-between w-full p-2 border-2 border-neutral-300 rounded-lg">
                <p>{i.phone}</p>
                <button onClick={()=>deleteHandler({user:i})} className="text-red-500 cursor-pointer">
                    برداشتن ادمین
                </button>
            </div>
        ))}

        </div>
    );
}