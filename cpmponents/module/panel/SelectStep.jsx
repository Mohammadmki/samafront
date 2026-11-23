import { studentregister } from "@/constans/registerStep";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function SelectStep({step,setstep}) {





    return (
     
              <div className="bg-neutral-50 rounded-lg shadow-sm border border-neutral-200 p-2 sm:p-6 grid grid-cols-3  gap-x-1.5 sm:gap-x-3 justify-around mb-4 ">
          {studentregister.map((i,index)=>(
            <div className={`transition-all duration-200 ease-in-out flex flex-col items-center ${step==i.value?"text-blue-600":"text-neutral-500"} `}  key={index}>
                <p className={`transition-all duration-200 ease-in-out   border-[1px] ${step==i.value?"border-blue-600":"border-neutral-300"}  rounded-full w-fit sm:text-xl text-lg sm:py-4 px-4 py-2 sm:px-6 mb-2`}>{index+1}</p>
                <p className="sm:text-base text-sm">{i.label}</p>
            </div>
          ))}
              </div>
     
    );
}