import { peymanetStatus, registerSteps } from "@/constans/status";
import { BackpackIcon, CheckCircleIcon, MoneyIcon, MoneyWavyIcon, PencilSimpleLineIcon } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";


export default function StudentCard({item}) {
    return (
        <Link href={"/Panel/1"} className="transition-all duration-200 ease-in-out w-full p-6 border-[1px] border-neutral-300 text-black rounded-xl hover:shadow-lg relative bg-white">
            <p className=" text-lg sm:text-xl">{item.name}</p>
            <p className="text-neutral-500 mt-0.5 sm:text-base text-sm">{item.grade}</p>
            <p className="text-neutral-500 sm:text-sm text-xs my-1.5 flex flex-row items-center gap-x-1" ><BackpackIcon className="w-4 h-4 " />{item.school}</p>
            {item.isActive&&   <div className="text-neutral-500 text-sm flex flex-row items-center gap-x-2">
               <p className="flex flex-row items-center gap-x-1 sm:text-base text-xs">
<MoneyWavyIcon className="w-4 h-4 rotate-90 " />
                آخرین فیش:
                </p>
                <p className={`text-[8px] sm:text-[10px] text-white rounded-lg py-0.5 px-2 ${item.lastPaymentStatus==1?'bg-green-500':item.lastPaymentStatus==2?'bg-amber-500':'bg-red-600'}`}>

                 {peymanetStatus[item.lastPaymentStatus]}
                </p>
                 </div>}
            {!item.isActive&&     <div className="sm:text-sm text-xs bg-blue-50 rounded-lg border-[1px] border-blue-200 p-2 sm:p-4">
                    <p className="mb-2">
                        مراحل فعال سازی :
                    </p>
                    {registerSteps.map((i)=>(
                        <div className="flex flex-row items-center gap-x-2 my-0.5 px-1.5">
                           {item.registerStep>i.id?<CheckCircleIcon className=" w-3 h-3 sm:w-4 sm:h-4 text-green-600" />: <div className={`rounded-full w-2 h-2 sm:w-3 sm:h-3 ms-[1px] border-[1px] border-neutral-500 ${item.registerStep==i.id?'bg-blue-600 border-transparent':''}`} ></div>}
                           <p className={`${item.registerStep==i.id?'text-blue-600':item.registerStep>i.id?'text-green-600':'text-neutral-500'}`}>
                           {i.title}
                            </p>
                        </div>
                    ))}
                 </div>}
                 <div className="mt-6 text-blue-600">

                     <Link className="flex flex-row items-center gap-x-1" href={'/Panel/1/Edit'}>
                     <PencilSimpleLineIcon />
                    {item.isActive?"ویرایش":"تکمیل ثبت نام و ویرایش"}
                     </Link>
                 </div>
                 <p className={`absolute top-0 end-0 text-xs py-0.5 px-2 rounded-lg m-6 ${item.isActive?"bg-green-500 text-white":'bg-neutral-300 text-black'} `}>{item.isActive?"فعال":"غیر فعال"}</p>
        </Link>
    );
}