'use client'

import DateSelect from "@/ui/DateSelect";
import FormInput from "@/ui/FormInput";
import Input from "@/ui/Input";
import TextareaInput from "@/ui/TextareaInput";
import { XIcon } from "@phosphor-icons/react";
import { useState } from "react";

export default function Addpeyment() {

    const [open, setOpen] = useState(false);

    const [data,setdata]=useState()


    return (
        <>
               <button onClick={()=>setOpen(true)} className="text-white bg-blue-600  px-2 w-full md:w-fit  text-center py-2 rounded-lg">
                افزودن فیش جدید
              </button>
              <div className={` ${open ? "block" : "hidden"} fixed z-50 top-0 right-0 flex justify-center items-center w-full h-full backdrop-brightness-50 text-black`}>
                <div className="bg-white w-[95%] md:w-[650px] h-fit p-4 rounded-lg flex flex-col gap-y-2.5 relative overflow-scroll">
                <XIcon className="absolute top-2 right-2 cursor-pointer" onClick={() => setOpen(false)} />
                    <p className="text-lg text-black text-center">افزودن فیش</p>
                    <div className="grid grid-cols-2 gap-x-2">
                      <FormInput placeholder="نام" className="w-full border border-neutral-300 rounded-lg p-2 mt-4" data={data} setData={setdata} name={"amount"} label={"نام فیش"}  />
 <FormInput placeholder="درصد ترافیک" className="w-full border border-neutral-300 rounded-lg p-2 mt-4" data={data} setData={setdata} type={"number"} name={"amount"} label={"درصد ترافیک را وارد کنید"}  />
                    </div>
                    <div className="grid grid-cols-2 gap-x-2">
                <DateSelect title={"از تاریخ"} data={data} setdata={setdata} name={"date"}  />
                              <DateSelect title={"تا تاریخ"} data={data} setdata={setdata} name={"date"}  />
                    </div>
                    <TextareaInput placeholder="توضیحات" className="w-full h-24 mt-4 border border-neutral-300 rounded-lg p-2" data={data} setData={setdata} name={"desc"} label={"توضیحات"} type={"text"} />
                
                <button className="w-full text-center rounded-lg py-2 bg-blue-600 text-white mt-2 ">
                    ثبت فیش
                </button>
                </div>
              </div>
        </>
    );
}