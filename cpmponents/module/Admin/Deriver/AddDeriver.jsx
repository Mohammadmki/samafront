'use client'

import { api } from "@/config/api";
import { cartype, Palte } from "@/constans/deriver";
import FormInput from "@/ui/FormInput";
import Option from "@/ui/Option";
import TextareaInput from "@/ui/TextareaInput";
import { ClientError } from "@/utils/ClientrrorHandler";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import dynamic from 'next/dynamic';

const Map = dynamic(
    () => import('@/ui/Map'),
    {
      ssr: false,
      loading: () => <p>در حال بارگذاری...</p>,
    }
  );

export default function AddDeriver({data}) {

const [loading,setLoading]=useState(false)

    const [deriver,setDeriver]=useState({
        full_name:"",
        phone:"",
        plate_part1:"",
        plate_letter:"",
        plate_part2:"",
        plate_city_code:"",
        file_number:"",
        car_type:"",
        account_number:"",
        card_number:"",
        futher_name:"",
        address:"",
        lat:null,
        lng:null
    })

    useEffect(()=>{
      if(data){
          setDeriver(data)
      }
    },[data])

    const [error,setError]=useState(null)

    const pathname=usePathname()

    const router=useRouter()

    const addHandler=async()=>{
        setLoading(true)
        const res=await api.post("/deriver/add",{...deriver}).catch(err=>ClientError(err,setError)).finally(()=>setLoading(false))
   if(res.status==200){
    toast.success("راننده با موفقیت اضافه شد")
if(pathname.includes('Admin')){
    router.push("/Admin/Deriver")
}else{
    router.push('Panel')
}
   }
    }

         const selectLoc=(value)=>{
        setDeriver((prev)=>({...prev,lat:value.lat,lng:value.lng}))
      }


      const updateHandler=async()=>{
        if(!data) return

        const res=await api.put(`/deriver/update/${data.id}`,{...deriver}).catch(err=>ClientError(err,setError))

        if(res.status==200){
            toast.success("راننده با موفقیت ویرایش شد")
            router.back()
        }

      }

    return (
        <div className="bg-neutral-50 p-6 md:p-8 mx-auto  rounded-xl shadow-sm border border-neutral-200  text-black">
            <h1 className="text-2xl font-medium">
                اطلاعات راننده
            </h1>
               <h2 className="text-sm text-neutral-500 mt-2 mb-5 font-extralight">
            لطفاً تمام فیلدها را با دقت تکمیل نمایید
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-3 gap-y-5">

            <FormInput error={error} data={deriver} setData={setDeriver} label={"نام"} placeholder="نام کامل خود را وارد کنید" name={"full_name"}  />
            <FormInput error={error} data={deriver} setData={setDeriver} label={"نام پدر"} placeholder="نام پدر را وارد کنید" name={"futher_name"}  />
           <FormInput error={error} data={deriver} setData={setDeriver} label={"شماره تلفن"} placeholder="شماره تلفن خود را وارد کنید" name={"phone"} type={"number"}  />
         <div>
<p className="mb-1 px-2 sm:text-base text-sm">
    شماره پلاک
</p>
<div className="flex flex-row items-center gap-x-2">
<div className="w-fit max-w-18">

           <FormInput error={error} data={deriver} setData={setDeriver} label={""} placeholder="45" name={"plate_part1"} type={"number"}  />
</div>
   <Option error={error} data={deriver} setData={setDeriver} name={"plate_letter"} placeholder={"ب"} options={Palte}  />
                  <div className="max-w-28">

                  <FormInput error={error} data={deriver} setData={setDeriver} label={""} placeholder="525" name={"plate_part2"} type={"number"}  />
                  </div>
                  <div className="max-w-20">

                  <FormInput error={error} data={deriver} setData={setDeriver} label={""} placeholder="ایران 47" name={"plate_city_code"} type={"number"} />
                  </div>
</div>
         </div>
          {pathname.includes("Admin")&& <FormInput error={error} data={deriver} setData={setDeriver} label={"شماره پرونده"} placeholder="شماره پرونده خود را وارد کنید" name={"file_number"} type={"number"}  />}
                            <Option error={error} data={deriver} setData={setDeriver} name={"car_type"} placeholder={"نوع خودرو را انتخاب کنید"} title={"نوع خودرو"} options={cartype} />
            <FormInput error={error}  data={deriver} setData={setDeriver} label={"شماره حساب"} placeholder="شماره حساب خود را وارد کنید" name={"account_number"} type={"number"} />
                     <FormInput error={error}  data={deriver} setData={setDeriver} label={"شماره کارت"} placeholder="شماره کارت خود را وارد کنید" name={"card_number"} type={"number"} />
         <div className="col-span-full">
            <TextareaInput data={deriver} setData={setDeriver} error={error} label={"آدرس"} name={"address"} placeholder="آدرس کامل خود را وارد کنید" />

          <Map value={deriver} onChange={selectLoc} />
         </div>
            </div>
 {!data&&      <button disabled={loading} onClick={addHandler} className="bg-blue-500 disabled:opacity-50 hover:bg-blue-600 text-white py-2 px-4 rounded-lg mt-5 w-full">
        ثبت راننده
       </button>}
       {data&&  <button disabled={loading} onClick={updateHandler} className="bg-blue-500 disabled:opacity-50 hover:bg-blue-600 text-white py-2 px-4 rounded-lg mt-5 w-full">
        ثبت راننده
       </button>}
        </div>
    );
}