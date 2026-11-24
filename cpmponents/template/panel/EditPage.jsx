'use client'

import { useEffect, useState } from "react";

import dynamic from 'next/dynamic';

const Information = dynamic(
    () => import('@/cpmponents/module/student/Information'),
    {
      ssr: false,
      loading: () => <p>در حال بارگذاری...</p>,
    }
  );

  const ContractSigned = dynamic(
    () => import('./ContractSigned'),
    {
      ssr: false,
      loading: () => <p>در حال بارگذاری...</p>,
    }
  );

export default function EditPage({data}) {

const [studentid,setstudentid]=useState('')
const [PaidId,setPaidId]=useState(null)
const [step,setStep]=useState("info_completed")
const [student,setStudent]=useState({
 school_shift:''
 ,full_name :'',
  guardian_fullname :''
       ,guardian_nationalcode :''
       ,grade :''
       ,address :''
       ,lat :''
       ,lng :''
       ,nationalcode :''
       ,school_id :''
       ,birthdate :''
       ,father_phone :''
       ,mother_phone:'',
})

useEffect(()=>{
  if(data) {

  setStudent(data)

  setStep(data.status)
  }


},[data])


    return (
      <div className="p-6 md:p-8 ">
 {data&&data.status=='deleted'?
    <div className="bg-neutral-50 p-4 sm:p-8 max-w-3xl mx-auto  rounded-xl shadow-sm border border-neutral-200  text-black">

      <p className="text-center">
        دانش آموز حذف شده !
      </p>
      </div>
      :
      <>
      {step=="info_completed"&&<Information setstudentid={setstudentid} setStep={setStep} setStudent={setStudent} student={student} />}
      {step=="contract_signed"&&<ContractSigned setPaidId={setPaidId} setstep={setStep} studentid={studentid} />}
      </>
 
  
      }
      </div>
    );
}