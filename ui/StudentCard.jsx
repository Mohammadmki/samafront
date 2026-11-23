import { grade } from "@/constans/school";
import { peymanetStatus, registerSteps } from "@/constans/status";
import { BackpackIcon, CheckCircleIcon, MoneyIcon, MoneyWavyIcon, PencilSimpleLineIcon } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";


export default function StudentCard({item}) {
    return (
        <div className="transition-all duration-200 ease-in-out w-full p-6 border-[1px] border-neutral-300 text-black rounded-xl hover:shadow-lg relative bg-white">


        <Link href={`/Panel/${item.id}`} >
            <p className=" text-lg sm:text-xl">{item.full_name}</p>
            <p className="text-neutral-500 mt-0.5 sm:text-base text-sm">{grade.find(i=>i.value==item.grade).label}</p>
            <p className="text-neutral-500 sm:text-sm text-xs my-1.5 flex flex-row items-center gap-x-1" ><BackpackIcon className="w-4 h-4 " />{item.school_name}</p>
            <div className="text-neutral-500 mb-2 text-sm flex flex-row items-center gap-x-2">
               <p className="flex flex-row items-center gap-x-1 sm:text-base text-xs">
<MoneyWavyIcon className="w-4 h-4 rotate-90 " />
                وضعیت آخرین فیش:
                </p>
                <p className={`text-[8px] sm:text-[10px] text-white rounded-lg py-0.5 px-2 ${peymanetStatus.find(i=>i.value==item.last_payment_status).colors} `}>

                 {peymanetStatus.find(i=>i.value==item.last_payment_status).label}
                </p>
                 </div>
         <div className="sm:text-sm text-xs bg-blue-50 rounded-lg border-[1px] border-blue-200 p-2 sm:p-4">
                    <p className="mb-2">
                        مراحل فعال سازی :
                    </p>
                    {registerSteps.map((step)=>(
                        <div className={`flex flex-row items-center gap-x-2 my-0.5 px-1.5 ${step.value=='deleted'||step.value=="compelete"?"hidden":""}`}>
                           {item.status==step.value?<CheckCircleIcon className=" w-3 h-3 sm:w-4 sm:h-4 text-green-600" />: <div className={`rounded-full w-2 h-2 sm:w-3 sm:h-3 ms-[1px] border-[1px] border-neutral-500 `} ></div>}
                           <p className={`${item.status ==step.value?'text-green-600':'text-neutral-500'}`}>
                           {step.label}
                            </p>
                        </div>
                    ))}
                 </div>
                   </Link>
                 <div className="mt-6 text-blue-600">

                     <Link className="flex flex-row items-center gap-x-1" href={'/Panel/1/Edit'}>
                     <PencilSimpleLineIcon />
                    {item.isActive?"ویرایش":"تکمیل ثبت نام و ویرایش"}
                     </Link>
                 </div>
                 <p className={`absolute top-0 end-0 text-xs py-0.5 px-2 rounded-lg m-6 ${item.isActive?"bg-green-500 text-white":'bg-neutral-300 text-black'} `}>{item.isActive?"فعال":"غیر فعال"}</p>
      
                </div>
    );
}