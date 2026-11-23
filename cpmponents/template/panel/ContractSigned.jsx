'use client'

import { api } from "@/config/api";
import { useRouter } from "next/navigation";
import Cookies from 'js-cookie';

export default function ContractSigned({studentid,setstep,setPaidId}) {

    const router=useRouter()

       const role=Cookies.get("role")

    const nextstephandler=async()=>{
        const res= await api.post('student/prepaid',{studentId:studentid})

        if(res.status==200){
setstep('prepaid_done')

if(role=="user"){
    router.push(`/Panel/${studentid}`)
}else{
    router.push("/Admin/Students")
}

        }
    }

    return (
        <div className="bg-neutral-50 pb-8 p-4 sm:p-8 max-w-3xl mx-auto  rounded-xl shadow-sm border border-neutral-200  text-black h-dvh">
    <p className="text-center py-3"> در صورت تأیید و پذیرش مفاد توافق‌نامه روی دکمه زیر کلیلک کنید</p>
         <iframe
      src={`${process.env.NEXT_PUBLIC_API_BASE_URL}uploads/form.pdf#toolbar=0&navpanes=0&scrollbar=0`}
      width="100%"
      height="100%"
      style={{ border: "none" }}
    />
  <button onClick={nextstephandler}  className="w-full bg-blue-600 text-white py-2 rounded-lg">قبول شرایط و مرحله بعد</button>
        </div>

    );
}