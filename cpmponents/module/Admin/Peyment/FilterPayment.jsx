'use client'
import { paymentStatus } from "@/constans/payment";
import { grade } from "@/constans/school";
import { active, registerSteps } from "@/constans/status";
import DateSelect from "@/ui/DateSelect";
import Input from "@/ui/Input";
import Option from "@/ui/Option";
import { SlidersHorizontalIcon, X } from "@phosphor-icons/react";
import {  usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function FilterPatment() {

    const [isFiltersExpanded,setisFiltersExpanded]=useState(false)
    const [hasActiveFilters ,sethasActiveFilters ]=useState(true)

const params=useSearchParams()



const [search,setsearch]=useState('full_name')

    const [filter,setfilter]=useState({
         title:"",
         status:"",
         fromdate:"",
         todate:""
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

const celarHandler=()=>{
    setfilter({      title:"",
         status:"",
         fromdate:"",
         todate:""})
    router.push(pathname,{scroll:false})
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
                    <div className="relative flex-1">
                
                   <Input data={filter} setData={setfilter} name={"title"} placeholder="جست و جو..." />
                    </div>
                    <div className="relative">
                   
                    </div>
                  </div>
                </div>
    
                {/* Status and Date Filters */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-3">
                  {/* Status Filter */}
                  <Option data={filter} setData={setfilter} name={"status"} title={"وضعیت پرداخت"} options={paymentStatus} placeholder={""} /> 
                  {/* Clear Filters Button */}
                  <div className="flex items-end col-span-full">
                    {params.size>0 && (
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