'use client'

import { active } from "@/constans/status";
import Input from "@/ui/Input";
import Option from "@/ui/Option";
import { SlidersHorizontalIcon, X } from "@phosphor-icons/react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function FilteDeriver() {

       const [isFiltersExpanded,setisFiltersExpanded]=useState(false)
  const [hasActiveFilters ,sethasActiveFilters ]=useState(true)
 const params=useSearchParams()
 
 
 
 const [search,setsearch]=useState('full_name')
  const [filter,setfilter]=useState({
        plate:params.get("plate")||'',
        full_name:params.get("full_name")||"",
        file_number:params.get("file_number")||''
    })

     const router=useRouter()
    
    const pathname=usePathname()
    
    useEffect(() => {
          const query = new URLSearchParams();
      // هر فیلتر که مقدار داشته باشد را اضافه کن
      Object.keys(filter).forEach((key) => {
        if (filter[key]!="") {
          query.append(key, filter[key]);
        }
      });
    
      // URL جدید بساز
      const newQueryString = query.toString();
    
      const newUrl = newQueryString ? `${pathname}?${newQueryString}` : pathname;
    
      // به router push و query را در URL ست کن
      router.push(newUrl,{scroll:false});
    }, [filter]);
    
    useEffect(() => {
      // اول Query جدید بر اساس params فعلی بساز
      const query = new URLSearchParams(params.toString());
    
      // دو فیلد جستجو رو حذف کن
      query.delete("full_name");
      query.delete("plate");
       query.delete("file_number");

      const newUrl = `${pathname}?${query.toString()}`;
      router.replace(newUrl,{scroll:false}); 
    
      setfilter((prev) => ({
        ...prev,
        full_name: "",
        plate: "",
        file_number:""
      }));
    }, [search]);

    const celarHandler=()=>{
      router.replace(pathname)
      setfilter({
        plate:params.get("plate")||'',
        full_name:params.get("full_name")||"",
        file_number:params.get("file_number")||''
      })
    }
    

    return (
          <div className="max-w-7xl mx-auto px-2 sm:py-3 md:py-6 sm:px-6 lg:px-8 text-black">
             {/* Filter Section */}
             <div className="bg-white rounded-xl shadow-sm border border-neutral-200 p-4 sm:p-6 mb-6">
               {/* Mobile Filter Toggle */}
               <button
     onClick={()=>setisFiltersExpanded((prev)=>!prev)}
                 className="md:hidden w-full flex items-center justify-between mb-4 pb-4 border-b border-neutral-200"
               >
                 <div className="flex items-center gap-2">
                   <SlidersHorizontalIcon className="w-5 h-5 text-neutral-600" />
                   <span className="text-neutral-900">فیلترها</span>
                   {hasActiveFilters && (
                     <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full">فعال</span>
                   )}
                 </div>
     
               
          
               </button>
     
               <div className={`space-y-4 ${!isFiltersExpanded ? 'hidden md:block' : ''}`}>
                 {/* Search Bar with Select */}
                 <div className="flex flex-col sm:flex-row gap-1">
                   <div className="flex-1 flex gap-2">
                 <Input data={filter} setData={setfilter} name={search} placeholder="جستوجو..."  />
                     <div className="relative">
                       <select
           onChange={(e)=>setsearch(e.target.value)}
                         className="appearance-none px-2 py-1.5 pl-0 sm:pl-7 sm:text-base text-xs border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-neutral-900 cursor-pointer "
                       >
                         <option value="full_name">نام راننده</option>
                         <option value="file_number">شماره پرونده</option>
                       </select>
                      
                     </div>
                   </div>
                 </div>
     
                 {/* Status and Date Filters */}
                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3"> 
                   {/* Clear Filters Button */}
                   <div className="flex items-end col-span-full">
                     {hasActiveFilters && (
                       <button
                     onClick={celarHandler}
                         className="w-full px-4 py-2.5 text-neutral-700 hover:bg-neutral-100 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2 border border-neutral-300"
                       >
                         <X className="w-4 h-4" />
                         <span>پاک کردن فیلترها</span>
                       </button>
                     )}
                   </div>
                 </div>
               </div>
             </div>
             </div>
    );
}