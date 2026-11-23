import { api } from "@/config/api";
import { educationLevel } from "@/constans/school";
import DeletedSchool from "@/cpmponents/module/Admin/School/DeletedSchool";
import Titlepage from "@/ui/Titlepage";
import { ServerErrorHadnler } from "@/utils/ServerErrorHandler";
import { BuildingOfficeIcon, EyeIcon, PlusIcon } from "@phosphor-icons/react/dist/ssr";
import { navigate, navigateToSeededRoute } from "next/dist/client/components/segment-cache/navigation";
import Link from "next/link";

export default async function page() {

    const res=await api.get('school').catch(err=>ServerErrorHadnler(err))

    return (
        <div>
          <Titlepage link={"/Admin/School/Add"} Icon={BuildingOfficeIcon } title={"لیست مدرسه ها"} desc={"مدیریت و مشاهده اطلاعات مدرسه ها"} add={"افزودن مدرسه جدید"} />
                       <div className="p-4 px-2 hidden md:block">
         <div className=" bg-white rounded-xl shadow-sm border border-neutral-200 overflow-hidden">
         <table className="w-full">

      
                  <thead className="bg-neutral-50 border-b border-neutral-200">
                    <tr>
                      <th className="px-1.5 py-4 text-center text-sm text-neutral-700">نام </th>
                      <th className="px-1.5 py-4 text-center text-sm text-neutral-700">نام مدیر</th>
                    <th className="px-1.5 py-4 text-center text-sm text-neutral-700">دوره تحصیلی</th>
                   <th className="px-1.5 py-4 text-center text-sm text-neutral-700">عملیات</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-neutral-200">
                 {res.data.schools.length>0&&res.data.schools.map((school)=>(
                      <tr key={school.id} className="hover:bg-blue-50/50 transition-colors duration-150">
                      
                     <td className="px-6 py-4">
                            <p className="text-neutral-900 text-center">{school.name}</p>
                        </td>
                             <td className="px-6 py-4">
                            <p className="text-neutral-900 text-center">{school.management_name}</p>
                        </td>
                        <td className="px-6 py-4">
                            <p className="text-neutral-900 text-center">{educationLevel.find((i)=>i.value==school.education_level).label}</p>
                        </td>         
                       <td className="px-6 py-4 flex flex-row gap-x-2 justify-center items-center">
                          <DeletedSchool id={school.id} />
                            <Link href={`/Admin/School/${school.id}/Edit`} className="text-blue-600 text-center">ویرایش</Link>
                            <Link href={`/Admin/School/${school.id}`} className="text-blue-600 text-center">مشاهده</Link>
                       </td>
                        </tr>
                 ))}
                    </tbody>
                     </table>
                       </div>
                         </div>
                               <div className="md:hidden space-y-4 p-1.5 ">
  
          {res.data.schools.length>0&&res.data.schools.map((student) => (
                  <div key={student.id} className="bg-white rounded-xl shadow-sm border border-neutral-200 p-2">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <h3 className="text-neutral-900 mb-1">{student.name}</h3>
                        <p className="text-sm text-neutral-600">{student.management_name}</p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-3">
                       
                      <p className="text-sm text-neutral-600"> دوره تحصیلی: {educationLevel.find((i)=>i.value==student.education_level).label} </p>
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