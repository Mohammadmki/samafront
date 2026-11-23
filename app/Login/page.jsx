'use client'

import { api } from "@/config/api";
import CheckOtp from "@/cpmponents/module/login/CheckOtp";
import SendOtp from "@/cpmponents/module/login/SendOtp";
import { ClientError } from "@/utils/ClientrrorHandler";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

export default function page() {

  const [step,setStep]=useState(1)
  const [error,setError]=useState(null)

  const [data,setdata]=useState({
    phone:null,
    otp:null
  })

  useEffect(()=>{
    if(!error) return

    toast.error(Object.values(error)[0])

  },[error])

  const sendCode=async()=>{

    const res=await api.post('auth/sent-otp',{phone:data.phone}).catch(err=>ClientError(err,setError))

if (res.status==200){
  toast.success("کد پیامکی ارسال شد")
  setStep(2)
  return true
}

 
}

    return (
      <div className="w-full h-screen flex justify-center items-center ">
         <Toaster />
        {step==1&& <SendOtp sendCode={sendCode} data={data} setdata={setdata} setstep={setStep} />}
        {step==2&&<CheckOtp sendCode={sendCode} setstep={setStep} data={data} setdata={setdata} />}
      </div>
    );
}