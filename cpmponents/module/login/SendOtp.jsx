
import { api } from "@/config/api";
import Input from "@/ui/Input";
import { ClientError } from "@/utils/ClientrrorHandler";
import { BuildingsIcon } from "@phosphor-icons/react";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";



export default function SendOtp({setstep,setdata,data,sendCode}) {

  const [error,seterror]=useState(null)


    return (
        <div className="bg-white text-black rounded-xl shadow-sm sm:p-8 p-4  flex flex-col justify-center items-center w-2xs sm:w-md">

        <BuildingsIcon weight="fill" className="sm:w-16 sm:h-16 w-10 h-10 mb-1 sm:mb-4 text-blue-600" /> 
      <p className="sm:text-xl text-base  font-medium mb-2">شرکت سما سیر رانان</p>
   <Input error={error} name={"phone"} type={"number"} label={"شماره موبایل"} placeholder="09XXXXXXXX" data={data} setData={setdata} />
         <button onClick={sendCode} className="text-white bg-blue-600 w-full rounded-lg py-1.5  sm:text-base text-sm mt-4">
          ارسال کد تایید
         </button>
    </div>
    );
}