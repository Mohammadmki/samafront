

import DelStudent from "@/cpmponents/module/student/DelStudent";
import Titlepage from "@/ui/Titlepage";

import Link from "next/link";
import { EyeIcon, PencilIcon, UsersIcon } from "@phosphor-icons/react/dist/ssr";
import FilterStudents from "@/cpmponents/module/Admin/Student/FilterStudents";
import { api } from "@/config/api";
import { ServerErrorHadnler } from "@/utils/ServerErrorHandler";
import { grade } from "@/constans/school";
import { active, peymanetStatus } from "@/constans/status";
import Pagination from "@/ui/pagination";

export default async function page({searchParams}) {

const query=await searchParams

  const queryString = new URLSearchParams(query).toString();

  const res=await api.get(`/student?${queryString}`).catch(err=>ServerErrorHadnler(err))


    return (
        <div className="text-black">
         <Titlepage link={"/AddSudent"} Icon={UsersIcon} add={"افزودن دانش آموز"} title={"لیست دانش آموزان"} desc={"مدیریت و مشاهده اطلاعات دانش‌آموزان سرویس مدرسه "} />
     <FilterStudents />
       
        <div className="p-4 hidden lg:block ">

      
         <div className=" bg-white rounded-xl shadow-sm border border-neutral-200 overflow-hidden relative pb-10">
          <Pagination paginate={res.data} />

         <table className="w-full  relative ">

      
                  <thead className="bg-neutral-50 border-b border-neutral-200 ">
                    <tr>
                      <th className="px-6 py-4 text-right text-sm text-neutral-700">نام دانش‌آموز</th>
                      <th className="px-6 py-4 text-right text-sm text-neutral-700">پایه تحصیلی</th>
                      <th className="px-6 py-4 text-right text-sm text-neutral-700">مدرسه</th>
                      <th className="px-6 py-4 text-right text-sm text-neutral-700">وضعیت فعال بودن</th>
                      <th className="px-6 py-4 text-right text-sm text-neutral-700">وضعیت پرداخت</th>
                      <th className="px-6 py-4 text-right text-sm text-neutral-700">عملیات</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-neutral-200 ">
                 {res.data.students.length>0?res.data.students.map((student)=>(
                      <tr key={student.id} className="hover:bg-blue-50/50 transition-colors duration-150">
                          <td className="px-6 py-4">
                            <div>
                              <p className="text-neutral-900">{student.full_name}</p>
                              <p className="text-sm text-neutral-500" dir="ltr">{student.nationalcode}</p>
                            </div>
                          </td>
                          <td className="px-6 py-4 text-neutral-700">{grade.find(i=>i.value==student.grade).label}</td>
                          <td className="px-6 py-4 text-neutral-700">{student.school_name}</td>
                          <td className="px-6 py-4">
                            <span className={`inline-flex px-3 py-1 rounded-full text-sm ${student.active?"bg-green-500 text-green-300":"bg-red-500 text-red-200"}`}>
                          {active.find(i=>i.value===student.active).label}
                            </span>
                          </td>
                          <td className="px-6 py-4">
                            <span className={`inline-flex px-3 py-1 rounded-full text-sm ${peymanetStatus.find(i=>i.value==student.last_payment_status).colors}`}>
                 {peymanetStatus.find(i=>i.value==student.last_payment_status).label}
                            </span>
                          </td>
                        
                          <td className="px-6 py-4">
                            <div className="flex items-center gap-2">
                              <Link href={`/Admin/Students/${student.id}`} className="p-2 hover:bg-blue-100 rounded-lg transition-colors duration-150 group" title="مشاهده">
                                <EyeIcon className="w-4 h-4 text-neutral-600 group-hover:text-blue-600" />
                              </Link>
                              <Link href={`/Admin/Students/${student.id}/Edit`} className="p-2 hover:bg-blue-100 rounded-lg transition-colors duration-150 group text-black" title="ویرایش">
                       <PencilIcon /> 
                              </Link>
                              <DelStudent id={student.id} />
                            </div>
                          </td>
                        </tr>
                 )):
                 <tr className="absolute -bottom-8 -translate-x-1/2 left-1/2">
                  دانش آموزی یافت نشد
                 </tr>
                 }
                    </tbody>
                     </table>
                       </div>
                         </div>
                         <div className="lg:hidden space-y-4 p-1.5 ">
  
          {res.data.students.map((student) => (
  <div key={student.id} className="bg-white rounded-xl shadow-sm border border-neutral-200 p-2">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <h3 className="text-neutral-900 mb-1">{student.full_name}</h3>
                        <p className="text-sm text-neutral-600">{student.school_name} • پایه {grade.find(i=>i.value==student.grade).label}</p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-3">
                      <span className={`inline-flex px-3 py-1 rounded-full text-sm ${student.active?"bg-green-500 text-green-300":"bg-red-500 text-red-200"}`}>
                            {active.find(i=>i.value===student.active).label}
                      </span>
                      <span className={`inline-flex px-3 py-1 rounded-full text-sm ${peymanetStatus.find(i=>i.value==student.last_payment_status).colors}`}>
                            {peymanetStatus.find(i=>i.value==student.last_payment_status).label}
                      </span>
                    </div>

                    <Link href={`/Admin/Students/${student.id}`} className="flex items-center justify-end pt-3 border-t border-neutral-200">
                      <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 text-sm flex items-center gap-2">
                        <EyeIcon className="w-4 h-4" />
                        <span>مشاهده جزئیات</span>
                      </button>
                    </Link>
                  </div>
         
        ))}
        </div>
   
                
            
        </div>
    );
}