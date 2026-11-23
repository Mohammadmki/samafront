import { api } from "@/config/api";
import { cartype, Palte } from "@/constans/deriver";
import AddStudent from "@/cpmponents/module/Admin/Deriver/AddStudent";
import DeriverStudents from "@/cpmponents/module/deriver/DeriverStudents";
import ChangeStatusStudent from "@/cpmponents/module/student/ChangeStatusStudent";
import { ServerErrorHadnler } from "@/utils/ServerErrorHandler";
import { EyeIcon, PencilSimpleLineIcon, User } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

export default async function page({params}) {

   const {id}=await params


   const res=await api.get(`deriver/${id}`).catch(err=>ServerErrorHadnler(err))
   if(res.status!=500&&res.status!=200) return(<div className="text-black bg-white flex-1 rounded-xl shadow-sm border border-neutral-200 p-6 text-center my-5"> <p>{res.message}</p></div>
   )


    return (
        <div className="p-6 ">
            <div className="flex flex-col-reverse md:flex-row gap-3">
         <div className="bg-white flex-1 rounded-xl shadow-sm border border-neutral-200 p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                      <User className="w-5 h-5 text-blue-600" />
                    </div>
                    <h2 className="text-neutral-900">اطلاعات شخصی</h2>
                  </div>
    
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="text-sm text-neutral-600 mb-1 block">نام و نام خانوادگی</label>
                  <p className="text-neutral-900">{res.data.deriver.full_name}</p>
                </div>
                <div>
                  <label className="text-sm text-neutral-600 mb-1 block">شماره پرونده</label>
                  <p className="text-neutral-900 font-mono text-end" dir="ltr">{res.data.deriver.file_number}</p>
                </div>
                <div>
                  <label className="text-sm text-neutral-600 mb-1 block"> نوع ماشین</label>
                  <p className="text-neutral-900">{cartype.find(i=>i.value==res.data.deriver.car_type).label}</p>
                </div>
                <div>
                  <label className="text-sm text-neutral-600 mb-1 block">شماره پلاک</label>
                  <p className="text-neutral-900">{res.data.deriver.plate_city_code+"_"+res.data.deriver.plate_part2+Palte.find(i=>i.value==res.data.deriver.plate_letter).label+res.data.deriver.plate_part1}</p>
                </div>
                {/* <div>
                  <label className="text-sm text-neutral-600 mb-1 block">شناسه دانش‌آموز</label>
                  <p className="text-neutral-900 font-mono" dir="ltr">{mockStudent.id}</p>
                </div> */}
              </div>
                </div>
                  <div className="bg-white  rounded-xl shadow-sm border border-neutral-200 p-4 grid-cols-3 grid h-fit gap-x-2">
                 <Link className='text-center w-full px-2' href={`/Admin/Deriver/${res.data.deriver.id}/Edit`} className="text-orange-400 border border-orange-400 rounded-md px-2 py-1 transition-all duration-200 ease-in-out hover:bg-orange-50">
                    ویرایش
                 </Link>
                   <button className="text-red-500 border border-red-5text-red-500 rounded-md px-2 py-1 transition-all duration-200 ease-in-out hover:bg-red-50">
                    حذف
                 </button>
                 <ChangeStatusStudent role={"deriver"} id={id} />
                </div>
                    </div>
               <DeriverStudents deriver_id={res.data.deriver.id} />
                       </div>
            
    );
}