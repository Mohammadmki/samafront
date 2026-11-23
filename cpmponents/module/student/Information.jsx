import { api } from "@/config/api";
import { grade } from "@/constans/school";
import DateSelect from "@/ui/DateSelect";
import FormInput from "@/ui/FormInput";
import Map from "@/ui/Map";

import Option from "@/ui/Option";
import TextareaInput from "@/ui/TextareaInput";
import { ClientError } from "@/utils/ClientrrorHandler";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";


export default function Information({setStep,student,setStudent,setstudentid}) {
  
  const [error,setError]=useState(null)
  const [school,setSchool]=useState([])
  const [selectedSchool,setselectedSchool]=useState(null)

  const router=useRouter()

  const AddHandler=async()=>{
    const res=await api.post('student/add',{...student}).catch(err=>ClientError(err,setError))
    if(res.status==200){
    toast.success("دانش آموز با موفقیت ایجاد شد")
   console.log(res)
   setstudentid(res.data.student)
    setStep("contract_signed")
   }
  }

  useEffect(()=>{
    if(!student.school_id) return
    setselectedSchool(()=>school.find(i=>i.value==student.school_id))

    if(selectedSchool&&selectedSchool.schoolShift!='morning_evening'){
    
    }

  },[student.school_id])


  const getschools=async()=>{

    if(!student.grade) return
    setSchool([])
    

    const schools=await api.get(`/school?grade=${student.grade}`).catch(err=>ClientError(err))

    if(schools.status==200){
      schools.data.schools.map(i=>{
        setSchool((prev)=>([...prev,{label:i.name,value:i.id,...i}]))
      })
    }

  }


useEffect(()=>{
  getschools()
},[student.grade])

      const selectLoc=(value)=>{
        setStudent((prev)=>({...prev,lat:value.lat,lng:value.lng}))
      }

    return (
        <div className="bg-neutral-50 p-4 sm:p-8 max-w-3xl mx-auto  rounded-xl shadow-sm border border-neutral-200  text-black">
            <h1 className="text-2xl font-medium">
                اطلاعات دانش آموز
            </h1>
            <h2 className="text-sm text-neutral-500 mt-2 mb-5 font-extralight">
            لطفاً تمام فیلدها را با دقت تکمیل نمایید
            </h2>
            <div className="border-b-[1px] border-neutral-300 pb-10 grid grid-cols-1 gap-y-3">
           <h3 className="mb-2.5 text-lg">
            مدرسه و نوبت تحصیلی
           </h3>
           <Option error={error} options={grade} data={student} name={"grade"} placeholder={"پایه تحصیلی ران انتخاب کنید"} title={"مقطع تحصیلی"}  setData={setStudent}  />
            <Option error={error} options={school} disabeld={!student.grade} disabeltitle={"لطفا ابتدا پایه تحصیلی را انتخاب کنید"} data={student} setData={setStudent} name={'school_id'} title={"نام مدرسه"} placeholder={"مدرسه را انتخاب کنید"}  />
            
            <label className="block text-neutral-700 mb-2">
            نوبت تحصیلی
          </label>
     {  <div className="grid grid-cols-2 gap-x-3">
         {selectedSchool&&student.school_id&&(selectedSchool.shift === "morning" || selectedSchool.shift === "morning_evening")&&   <button onClick={()=>setStudent((prev)=>({...prev,school_shift:"morning"}))} className={`w-full border-2  py-2 rounded-lg  ${student.school_shift=="morning"?'text-blue-600 border-blue-500':' text-neutral-600 border-neutral-300 hover:border-neutral-400 hover:text-neutral-700'} cursor-pointer transition-all duration-200 ease-in-out`}>
                صبح
            </button>}
    {selectedSchool&&student.school_id&&(selectedSchool.shift === "afternoon" || selectedSchool.shift === "morning_evening")&&  <button onClick={()=>setStudent((prev)=>({...prev,school_shift:"afternoon"}))} className={`w-full border-2  py-2 rounded-lg  ${student.school_shift=="afternoon"?' text-blue-600 border-blue-500':'text-neutral-600 border-neutral-300 hover:border-neutral-400 hover:text-neutral-700'} cursor-pointer transition-all duration-200 ease-in-out`}>
                عصر
            </button>}
          </div>}
          
            </div>
            <div className="border-b-[1px] border-neutral-300 py-10 grid grid-cols-1 gap-y-8">
            <h3 className="mb-2.5 text-lg">
            اطلاعات شخصی دانش آموز
           </h3>
           <FormInput error={error} data={student} setData={setStudent} label={"نام و نام خانوادگی دانش آموز"} name={"full_name"} placeholder="نام کامل دانش آموز"  />
            <FormInput error={error} data={student} setData={setStudent} label={"کد ملی دانش آموز"} placeholder="کد ملی ده رقمی دانش آموز را وارد کنید" name={'nationalcode'} />
           <DateSelect error={error} data={student} setdata={setStudent}  name={'birthdate'} title={"تاریخ تولد دانش آموز"} placeholder={" تاریخ تولد را انتخاب کنید"} />
          <TextareaInput error={error} name={"address"} data={student} setData={setStudent} label={"آدرس"} placeholder=" آدرس محل سکونت شامل خیابان، کوچه"  />
           <Map value={{lat:student.lat,lng:student.lng}} onChange={selectLoc} />
            </div>
             <div className="border-b-[1px] border-neutral-300 py-10 grid grid-cols-1 gap-y-8">
            <h3 className="mb-2.5 text-lg">
           اطلاعات ولی و اولیا
           </h3>
           <FormInput error={error} data={student} setData={setStudent} label={"نام و نام خانوادگی ولی (پدر یا مادر)"} placeholder="نام و نام خانوادگی ولی" name={"guardian_fullname"}  />
                 <FormInput error={error} data={student} setData={setStudent} label={"کدملی ولی "} placeholder=" کدملی ولی" name={"guardian_nationalcode"}  />
          <FormInput error={error} data={student} setData={setStudent} label={"شماره تماس پدر"} type={"number"} placeholder="00000000000" name={"father_phone"} />
                    <FormInput error={error} data={student} setData={setStudent} label={"شماره تماس مادر"} type={"number"} placeholder="00000000000" name={"mother_phone"} />
            </div>
            <button onClick={AddHandler} className="w-full bg-blue-600 text-white py-2 rounded-lg">مرحله بعد</button>

        </div>
    );
}