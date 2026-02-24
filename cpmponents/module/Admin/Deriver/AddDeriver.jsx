'use client'

import FormInput from "@/ui/FormInput";
import Input from "@/ui/Input";
import Option from "@/ui/Option";
import { useState } from "react";

export default function AddDeriver() {

    const [data,setdata]=useState({
        school:"",
        car:""
    })

     const options = [
        { value: 'shahid_beheshti', label: 'دبستان شهید بهشتی' },
        { value: 'ferdowsi', label: 'دبستان فردوسی' },
        { value: 'motahhari', label: 'دبستان مطهری' },
        { value: 'khayyam', label: 'دبستان خیام' },
        { value: 'saadi', label: 'دبستان سعدی' },
      ];

    return (
        <div className="bg-neutral-50 p-6 md:p-8 mx-auto  rounded-xl shadow-sm border border-neutral-200  text-black">
            <h1 className="text-2xl font-medium">
                اطلاعات راننده
            </h1>
               <h2 className="text-sm text-neutral-500 mt-2 mb-5 font-extralight">
            لطفاً تمام فیلدها را با دقت تکمیل نمایید
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-3 gap-y-5">

            <FormInput data={data} setData={setdata} label={"نام"} placeholder="نام کامل خود را وارد کنید" name={"name"}  />
           <FormInput data={data} setData={setdata} label={"شماره تلفن"} placeholder="شماره تلفن خود را وارد کنید" name={"phone"} type={"number"}  />
         <div>
<p className="mb-1 px-2 sm:text-base text-sm">
    شماره پلاک
</p>
<div className="flex flex-row items-center gap-x-2">
<div className="w-fit max-w-18">

           <FormInput data={data} setData={setdata} label={""} placeholder="45" name={"nationalId"} type={"number"}  />
</div>
      <select

                    className="appearance-none px-2 py-1.5 pl-0 sm:pl-7 sm:text-base text-xs border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-neutral-900 cursor-pointer w-fit "
                  >
                    <option value="name">ب</option>
                    <option value="father">ص</option>
                    <option value="mother">ج</option>
                    
                  </select>
                  <div className="max-w-28">

                  <FormInput data={data} setData={setdata} label={""} placeholder="525" name={"nationalId"} type={"text"}  />
                  </div>
                  <div className="max-w-20">

                  <FormInput data={data} setData={setdata} label={""} placeholder="ایران 47" name={"nationalId"} type={"text"} />
                  </div>
</div>
         </div>
           <FormInput data={data} setData={setdata} label={"شماره پرونده"} placeholder="شماره پرونده خود را وارد کنید" name={"nationalId"} type={"number"}  />
                  <Option data={data} setData={setdata} name={"sachool"} placeholder={"نام مدرسه را انتخاب کنید"} title={"نام مدرسه"} options={options} />
                            <Option data={data} setData={setdata} name={"car"} placeholder={"نوع خودرو را انتخاب کنید"} title={"نوع خودرو"} options={[{value:"1",label:"سواری"},{value:"2",label:"ون"}]} />
            <FormInput  data={data} setData={setdata} label={"شماره حساب"} placeholder="شماره حساب خود را وارد کنید" name={"nationalId"} type={"number"} />
                     <FormInput  data={data} setData={setdata} label={"شماره کارت"} placeholder="شماره کارت خود را وارد کنید" name={"nationalId"} type={"number"} />
            </div>
       <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg mt-5 w-full">
        ثبت راننده
       </button>
        </div>
    );
}