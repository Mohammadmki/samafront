
import { api } from "@/config/api";
import { cartype, Palte } from "@/constans/deriver";
import DelBtn from "@/cpmponents/module/Admin/Deriver/DelBtn";
import FilteDeriver from "@/cpmponents/module/Admin/Deriver/FilteDeriver";
import Pagination from "@/ui/pagination";

import Titlepage from "@/ui/Titlepage";
import { ServerErrorHadnler } from "@/utils/ServerErrorHandler";
import { CalendarBlankIcon, CarProfileIcon, EyeIcon, FileSearchIcon, PlusIcon, SlidersHorizontalIcon, UsersIcon, X } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import { Toaster } from "react-hot-toast";


export default async function page({searchParams}) {


  const query=await searchParams

  const queryString = new URLSearchParams(query).toString();

const res=await api.get(`deriver?${queryString}`).catch((err)=>ServerErrorHadnler(err))
console.log(res)
    return (
        <div>
          <Toaster />
          <Titlepage link={"/Admin/Deriver/Add"} Icon={CarProfileIcon } add={"افزودن راننده"} desc={"مدیریت و مشاهده اطلاعات رانندگان سرویس مدرسه"} title={"لیست رانندگان"} />
 <FilteDeriver />      
        <div className="p-4 px-2 hidden md:block">
         <div className=" bg-white rounded-xl shadow-sm border border-neutral-200 overflow-hidden">
          <Pagination paginate={res.data} />
         <table className="w-full">

      
                  <thead className="bg-neutral-50 border-b border-neutral-200">
                    <tr>
                      <th className="px-1.5 py-4 text-center text-sm text-neutral-700">نام </th>
<th className="px-1.5 py-4 text-center text-sm text-neutral-700">نام پدر </th>
                    <th className="px-1.5 py-4 text-center text-sm text-neutral-700">ماشین</th>
                      <th className="px-1.5 py-4 text-center text-sm text-neutral-700"> شماره پرونده </th>
                      <th className="px-1.5 py-4 text-center text-sm text-neutral-700">وضعیت</th>
                   <th className="px-1.5 py-4 text-center text-sm text-neutral-700">فعالیت</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-neutral-200 ">
                 {res.data.derivers.map((deriver)=>(
                      <tr key={deriver.id} className="hover:bg-blue-50/50 transition-colors duration-150">
                          <td className="px-6 py-4">
                            <div>
                              <p className="text-neutral-900">{deriver.full_name}</p>
                              <p className="text-sm text-neutral-500 text-center" dir="rtl">{deriver.plate_city_code+"_"+deriver.plate_part2+Palte.find(i=>i.value==deriver.plate_letter).label+deriver.plate_part1}</p>
                            </div>
                          </td>
                           <td className="px-6 py-4 text-center">
                            <p className="text-neutral-900 text-center">{deriver.futher_name}</p>
                        </td>
                          <td className="px-6 py-4">
                            <p className="text-neutral-900 text-center">{cartype.find(i=>i.value==deriver.car_type).label}</p>
                        </td>
                          <td className="px-6 py-4   text-black text-center">
                          {deriver.file_number&&deriver.file_number}
                          </td>
                          <td className="px-6 py-4  text-center ">
                            <p className={`inline-flex  px-3 py-1 rounded-full text-sm ${deriver.active?"bg-green-500 text-green-300":"bg-red-500 text-red-100"} text-center`}>
                          {deriver.active?"فعال":"غیر فعال"}
                            </p>
                          </td>
                     
                       <td className="px-6 py-4 ">
                        <div className="flex flex-row justify-center items-center gap-x-4">

                            <Link href={`/Admin/Deriver/${deriver.id}`} className="text-blue-600 text-center">مشاهده</Link>
                             <Link href={`/Admin/Deriver/${deriver.id}/Edit`} className="text-blue-600 text-center cursor-pointer">ویرایش</Link>
                             <DelBtn id={deriver.id} />
                        </div>
                        </td>
                        </tr>
                 ))}
                    </tbody>
                     </table>
                       </div>
                         </div>
                         <div className="md:hidden space-y-4 p-1.5 ">
  
          {res.data.derivers.map((deriver) => (
  <div key={deriver.id} className="bg-white rounded-xl shadow-sm border border-neutral-200 p-2">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <h3 className="text-neutral-900 mb-1">{deriver.full_name}</h3>
                      <h3 className="text-sm text-neutral-600">{deriver.futher_name} • {deriver.file_number}</h3>
                        <p className="text-sm text-neutral-600">{cartype.find(i=>i.value==deriver.car_type).label} • {deriver.plate_city_code+"_"+deriver.plate_part2+Palte.find(i=>i.value==deriver.plate_letter).label+deriver.plate_part1}</p>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-3">
                      <span className={`inline-flex px-3 py-1 rounded-full text-sm ${deriver.active?"bg-green-500 text-green-300":"bg-red-500 text-red-100"}`}>
                          {deriver.active?"فعال":"غیر فعال"}
                      </span>
                    </div>

                    <div className="flex items-center justify-between pt-3 border-t border-neutral-200">
                      <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 text-sm flex items-center gap-2">
                        <EyeIcon className="w-4 h-4" />
                        <span>مشاهده جزئیات</span>
                      </button>
                    </div>
                  </div>
         
        ))}
            
        </div>
   
                
        </div>
    );
}