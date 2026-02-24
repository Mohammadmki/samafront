'use client'

import CheckOtp from "@/cpmponents/module/login/CheckOtp";
import SendOtp from "@/cpmponents/module/login/SendOtp";
import Input from "@/ui/Input";
import { BuildingsIcon } from "@phosphor-icons/react";
import { useState } from "react";

export default function page() {

  const [step,setStep]=useState(1)


    return (
      <div className="w-full h-screen flex justify-center items-center ">
        {step==1&& <SendOtp setstep={setStep} />}
        {step==2&&<CheckOtp setstep={setStep} />}
      </div>
    );
}