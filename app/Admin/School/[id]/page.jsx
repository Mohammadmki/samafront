import { api } from "@/config/api";
import DataSchool from "@/cpmponents/module/school/DataSchool";
import { ServerErrorHadnler } from "@/utils/ServerErrorHandler";
import { BuildingOfficeIcon } from "@phosphor-icons/react/dist/ssr";

export default async function page({params}) {

    const {id}= await params
  
      const res=await api.get(`school/${id}`).catch(err=>ServerErrorHadnler(err))
  
  

    return (
        <div className="p-4">
       <div className="bg-white rounded-xl shadow-sm border border-neutral-200 p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-11 h-11 rounded-full bg-blue-100 flex items-center justify-center">
                <BuildingOfficeIcon className="text-3xl text-blue-700" />
                </div>
                <h2 className="text-neutral-900">اطلاعات مدرسه</h2>
              </div>
        
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="text-sm text-neutral-600 mb-1 block">نام مدرسه</label>
                  <p className="text-neutral-900">{res.data.data.name}</p>
                </div>
                <div>
                  <label className="text-sm text-neutral-600 mb-1 block">نام مدیر</label>
                  <p className="text-neutral-900">{res.data.data.management_name}</p>
                </div>
              </div>
            </div>
            <DataSchool />
        </div>
    );
}