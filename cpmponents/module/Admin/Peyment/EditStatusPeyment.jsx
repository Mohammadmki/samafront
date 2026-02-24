'use client'

import { usePathname } from "next/navigation";
import { useState } from "react";

export default function EditStatusPeyment() {

    const [open, setOpen] = useState(false);

   
    const pathname = usePathname();

    return (
        <div className={`${pathname.includes('Admin') ? 'hidden' : 'block'} `}>
       <button className=" mb-4 bottom-0 right-0 bg-red-500 z-50 w-full h-10 rounded-lg ">
        حذف فیش
       </button>
         <div className="bg-white rounded-xl shadow-sm border border-neutral-200 p-6 ">
                 <div className="flex items-center justify-center ">
                   <div onClick={()=>setOpen((prev)=>!prev)} className={`inline-flex items-center gap-2 px-6 py-3 rounded-full text-blue-600 bg-blue-100 `}>
                   
                     <span className="text-lg">تغییر وضعیت پرداخت</span>
                   </div>
                
                 </div>
                    <div className={`flex flex-col gap-4 text-black  bg-neutral-100 py-3 rounded-lg overflow-hidden transition-all duration-300 ease-in-out ${open ? 'block' : 'hidden'} mt-2` }>
                     <button className="transition-all duration-200 ease-in-out hover:text-blue-600 hover:bg-neutral-200 py-1">
                       پرداخت شده
                     </button>
                     <button className="transition-all duration-200 ease-in-out hover:text-blue-600 hover:bg-neutral-200 py-1">
                       پرداخت نشده
                     </button>
                     <button className="transition-all duration-200 ease-in-out hover:text-blue-600 hover:bg-neutral-300 py-1">
                       پرداخت ناموفق
                     </button>
                   </div>
               </div>
                </div>
    );
}