import { api } from "@/config/api";
import StudentCard from "@/ui/StudentCard";
import { ServerErrorHadnler } from "@/utils/ServerErrorHandler";
import { PlusCircleIcon, PlusIcon } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import { Fragment } from "react";


export const dynamic = "force-dynamic";
export default async function page() {

  const res=await api.get("/student").catch(err=>ServerErrorHadnler(err))

    return (
        <div className="min-h-screen w-full px-4 py-8 text-black">
         <h1 className="sm:text-xl text-lg text-center">
            دانش آموزان من
         </h1>
         <p className="text-center text-[10px] sm:text-sm my-1.5 sm:my-3 text-neutral-600">
         دانش‌آموزان ثبت‌شده برای استفاده از سرویس حمل و نقل مدرسه
         </p>
         <div className="flex flex-col gap-6">

         {res.data.students&&res.data.students.length&& res.data.students.map((i)=>(
            <Fragment key={i.id}>

             <StudentCard  item={i} />
            </Fragment>
            ))}
            </div>
            <Link href={'/AddSudent'} className="transition-all duration-200 ease-in-out flex flex-col border-2 text-neutral-600 hover:text-blue-600 gap-y-3 border-dashed hover:border-blue-600 border-neutral-600 rounded-lg items-center justify-center p-6 mt-6 ">
               
                    <PlusIcon className="w-8 h-8" />
                    <p>افزودن دانش آموز</p> 
              
            </Link>
        </div>
    );
}