'use client'

import { api } from "@/config/api"
import { Palte } from "@/constans/deriver"
import Input from "@/ui/Input"
import Option from "@/ui/Option"
import { ClientError } from "@/utils/ClientrrorHandler"
import { PlusIcon, X } from "@phosphor-icons/react"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import toast from "react-hot-toast"

export default function AddService({studentId}) {
    const [show,setshow]=useState(false)
  const [filter,setfilter]=useState({full_name:""})
    const [student,setshtudent]=useState([])

    const [Deriver,setderiver]=useState([])

const router=useRouter()

  
    
    const addstudent=async(deriver_id)=>{
     const res=await api.put(`student/add-deriver/${studentId}`,{deriver_id}).catch((err)=>ClientError(err))

     if(res.status==200){
      toast.success("راننده افزوده شد")
    setshow(false)
      router.refresh()
     }

    }

    useEffect(()=>{
      const gestudent=async()=>{
        const res=await api.get(`/deriver${filter.full_name&&`?full_name=${filter.full_name}`}`)
        if(res.status==200){
          setderiver(res.data.derivers)
          
        }
      }
      gestudent()
    },[filter])


    return (
        <>
        <button onClick={()=>setshow(true)} className="w-full bg-blue-600 rounded-lg flex flex-row items-center justify-center py-1.5 gap-x-1.5">
            <PlusIcon weight="bold" className="text-xl" />
            افزدن راننده
        </button>
      {show&&<div className="w-full fixed z-[999]  h-[100vh] pb-4 top-0 right-0 bg-white mx-auto overflow-y-auto text-black  overflow-auto pt-28 md:pt-36 overflow-hidden">
        <X onClick={()=>setshow(false)} className="text-xl cursor-pointer text-neutral-800 top:28 md:top-36 left-2 absolute" />
                        <div>
                            <p className="p-2">افزودن  راننده سرویس:</p>
            
                            <div className="flex flex-row items-center px-2 gap-x-2 mb-4">
                            <div className="flex-1">
                            <Input data={filter} setData={setfilter} name={"full_name"} placeholder="جستجوی دانش آموز"  />
                                </div> 

                            </div>
                        </div>
                       <div className="overflow-auto w-full h-full">

                  
                            <table className="w-full lg:text-base text-sm  ">

      
                  <thead className="bg-neutral-50 border-b border-neutral-200 ">
                    <tr>
                      <th className="px-6 py-4 max-lg:px-4 max-lg:py-3 text-center  text-sm text-neutral-700">نام </th>
                        <th className="px-6 py-4 max-lg:px-2 max-lg:py-3  text-sm text-neutral-700 text-center">آدرس</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-neutral-200 px-2">
                 {Deriver.map((deriver)=>(
                      <tr onClick={()=>addstudent(deriver.id)} key={deriver.id} className="hover:bg-blue-50/50 transition-colors duration-150 cursor-pointer">
                          <td className="px-6 py-4 max-lg:px-4 max-lg:py-3 w-fit">
                            <div className="w-fit">
                              <p className="text-neutral-900">{deriver.full_name}</p>
                              <p className="text-sm text-neutral-500" dir="rtl">{deriver.plate_city_code+"_"+deriver.plate_part2+Palte.find(i=>i.value==deriver.plate_letter).label+deriver.plate_part1}</p>
                            </div>
                          </td>
                         <td className="text-center text-black text-sm  px-2">
                            <p className="w-full text-nowrap truncate">
 {deriver.address}
                            </p>
                         </td>
                        </tr>
                 ))}
                    </tbody>
                     </table>
                       </div>
                            </div>}
                       </>
    );
}