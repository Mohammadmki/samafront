import StudentCard from "@/ui/StudentCard";
import { PlusCircleIcon, PlusIcon } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import { Fragment } from "react";

export default function page() {

    const students=[
        {
          id: "1",
          name: "سارا محمدی",
          grade: "پایه چهارم",
          school: "دبستان دخترانه شهید بهشتی",
        isActive: true,
          lastPaymentStatus: 1,
          registerStep:4
        },
        {
            id: "2",
            name: "علی رضایی",
            grade: "پایه ششم",
            school: "دبستان پسرانه فردوسی",
            isActive: false,
            lastPaymentStatus: 2,
            registerStep:2
          },
          {
            id: "3",
            name: "مریم احمدی",
            grade: "پایه پنجم",
            school: "دبستان دخترانه شهید بهشتی",
            isActive: false,
            lastPaymentStatus: 3,
            registerStep:3
          },
        {
            id: "4",
            name: "سارا محمدی",
            grade: "پایه چهارم",
            school: "دبستان دخترانه شهید بهشتی",
          isActive: true,
            lastPaymentStatus:2,
            registerStep:4
          },
          {
            id: "5",
            name: "سارا محمدی",
            grade: "پایه چهارم",
            school: "دبستان دخترانه شهید بهشتی",
          isActive: true,
            lastPaymentStatus: 3,
            registerStep:4
          },
      
    
      ]

    return (
        <div className="min-h-screen w-full px-4 py-8 text-black">
         <h1 className="sm:text-xl text-lg text-center">
            دانش آموزان من
         </h1>
         <p className="text-center text-[10px] sm:text-sm my-1.5 sm:my-3 text-neutral-600">
         دانش‌آموزان ثبت‌شده برای استفاده از سرویس حمل و نقل مدرسه
         </p>
         <div className="flex flex-col gap-6">

         {students.map((i)=>(
            <Fragment key={i.id}>

             <StudentCard  item={i} />
            </Fragment>
            ))}
            </div>
            <Link href={'/'} className="transition-all duration-200 ease-in-out flex flex-col border-2 text-neutral-600 hover:text-blue-600 gap-y-3 border-dashed hover:border-blue-600 border-neutral-600 rounded-lg items-center justify-center p-6 mt-6 ">
               
                    <PlusIcon className="w-8 h-8" />
                    <p>افزودن دانش آموز</p> 
              
            </Link>
        </div>
    );
}