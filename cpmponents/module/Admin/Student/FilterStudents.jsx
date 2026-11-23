'use client'
import { grade } from "@/constans/school";
import { active, registerSteps } from "@/constans/status";
import DateSelect from "@/ui/DateSelect";
import Input from "@/ui/Input";
import Option from "@/ui/Option";
import { SlidersHorizontalIcon, X } from "@phosphor-icons/react";
import {  usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function FilterStudents() {

    const [isFiltersExpanded,setisFiltersExpanded]=useState(false)
    const [hasActiveFilters ,sethasActiveFilters ]=useState(true)

const params=useSearchParams()



const [search,setsearch]=useState('full_name')

    const [filter,setfilter]=useState({
        from_grade:params.get('from_grade') ||""
        ,to_grade:params.get("to_grade") ||"",
        nationalcode:params.get("nationalcode") ||"",
        full_name:params.get("full_name") ||"",
        status:params.get("status") ||"",
        active:params.get('active') ||""

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
  router.push(newUrl);
}, [filter]);

useEffect(() => {
  // اول Query جدید بر اساس params فعلی بساز
  const query = new URLSearchParams(params.toString());

  // دو فیلد جستجو رو حذف کن
  query.delete("full_name");
  query.delete("nationalcode");

  // URL جدید بساز از query اصلاح‌شده
  const newUrl = `${pathname}?${query.toString()}`;
  router.replace(newUrl); // بهتر از push چون history نمی‌سازد

  // پاک کردن مقادیر از state هم‌زمان
  setfilter((prev) => ({
    ...prev,
    full_name: "",
    nationalcode: "",
  }));
}, [search]);

    return (
           <div className="max-w-7xl mx-auto px-2 sm:py-3 md:py-6 sm:px-6 lg:px-8">
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
                
                   <Input data={filter} setData={setfilter} name={search} placeholder="جست و جو..." />
                    </div>
                    <div className="relative">
                      <select
    onChange={(e)=>setsearch(e.target.value)}
                        className="appearance-none px-2 py-1.5 pl-0 sm:pl-7 sm:text-base text-xs border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-neutral-900 cursor-pointer "
                      >
                        <option value="full_name">نام دانش‌آموز</option>
                        <option value="nationalcode">کد ملی</option>
                      </select>
                    </div>
                  </div>
                </div>
    
                {/* Status and Date Filters */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-3">
                  {/* Status Filter */}
                 <Option data={filter} setData={setfilter} name={"active"} placeholder={''} options={active } title={"وضعیت"}  />
                  <Option data={filter} setData={setfilter} name={"status"} title={"وضعیت ثبت نام"} options={registerSteps} placeholder={""} />
                  <div className="w-full grid grid-cols-2 col-span-full gap-x-4">

                  <Option data={filter} setData={setfilter} name={"from_grade"} placeholder={''} options={grade} title={"از پایه تحصیلی"}  />
               <Option data={filter} setData={setfilter} name={"to_grade"} placeholder={''} options={grade} title={"تا پایه تحصیلی"}  />
                  </div>
               
    
                  {/* Clear Filters Button */}
                  <div className="flex items-end col-span-full">
                    {params.size>0 && (
                      <button
                    onClick={()=>router.push(pathname,{scroll:false})}
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