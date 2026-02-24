import Titlepage from "@/ui/Titlepage";
import { BuildingOfficeIcon, EyeIcon, PlusIcon } from "@phosphor-icons/react/dist/ssr";

export default function page() {

    const schools=[{
        id:1,
        name:"مدرسه شهید بهشتی",
        managementName:"ممد ملکی",
        countStudent:400
    }]

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
                    <th className="px-1.5 py-4 text-center text-sm text-neutral-700">تعداد دانش اموزان</th>
                   <th className="px-1.5 py-4 text-center text-sm text-neutral-700">عملیات</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-neutral-200">
                 {schools.map((student)=>(
                      <tr key={student.id} className="hover:bg-blue-50/50 transition-colors duration-150">
                      
                     <td className="px-6 py-4">
                            <p className="text-neutral-900 text-center">{student.name}</p>
                        </td>
                             <td className="px-6 py-4">
                            <p className="text-neutral-900 text-center">{student.managementName}</p>
                        </td>
                        <td className="px-6 py-4">
                            <p className="text-neutral-900 text-center">{student.countStudent}</p>
                        </td>
                        
                         
                     
                       <td className="px-6 py-4">
                            <p className="text-blue-600 text-center">حذف</p>
                              <p className="text-blue-600 text-center">ویرایش</p>
                        </td>
                        </tr>
                 ))}
                    </tbody>
                     </table>
                       </div>
                         </div>
                               <div className="md:hidden space-y-4 p-1.5 ">
  
          {schools.map((student) => (
  <div key={student.id} className="bg-white rounded-xl shadow-sm border border-neutral-200 p-2">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <h3 className="text-neutral-900 mb-1">{student.name}</h3>
                        <p className="text-sm text-neutral-600">{student.managementName}</p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-3">
                       
                      <p className="text-sm text-neutral-600"> تعداد دانش آموزان: {student.countStudent} </p>
                    </div>

                    <div className="flex items-center justify-between pt-3 border-t border-neutral-200">
                      <span className="text-sm text-neutral-600">تاریخ ثبت: {student.registrationDate}</span>
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