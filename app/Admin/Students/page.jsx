"use client"

import DateSelect from "@/ui/DateSelect";
import Titlepage from "@/ui/Titlepage";
import { PencilIcon } from "@phosphor-icons/react";
import { CalendarBlankIcon, EyeIcon, FileSearchIcon, PlusIcon, SlidersHorizontalIcon, UsersIcon, X } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import { useState } from "react";

export default function page() {

    const hasActiveFilters=false

    const [date,setdate]=useState()
const [isFiltersExpanded,setisFiltersExpanded]=useState(false)
  

    const mockStudents = [
  {
    id: '1',
    name: 'محمد رضایی',
    fatherName: 'علی رضایی',
    motherName: 'فاطمه احمدی',
    nationalId: '0012345678',
    grade: 'پایه هشتم',
    school: '  دبیرستان شهید بهشتی',
    status: 'active',
    paymentStatus: 'paid',
    registrationDate: '1405/10/15'
  },
  {
    id: '2',
    name: 'زهرا محمدی',
    fatherName: 'حسین محمدی',
    motherName: 'مریم کریمی',
    nationalId: '0012345679',
    grade: 'پایه نهم',
    school: 'دبیرستان فرزانگان',
    status: 'awaiting-signature',
    paymentStatus: 'pending',
    registrationDate: '1405/10/20'
  },
  {
    id: '3',
    name: 'علی حسینی',
    fatherName: 'رضا حسینی',
    motherName: 'سارا رضایی',
    nationalId: '0012345680',
    grade: 'پایه هفتم',
    school: 'دبیرستان شهید بهشتی',
    status: 'awaiting-payment',
    paymentStatus: 'unpaid',
    registrationDate: '1405/11/01'
  },
  {
    id: '4',
    name: 'فاطمه کریمی',
    fatherName: 'محمد کریمی',
    motherName: 'نرگس احمدی',
    nationalId: '0012345681',
    grade: 'پایه ششم',
    school: 'دبستان طلوع',
    status: 'incomplete',
    paymentStatus: 'unpaid',
    registrationDate: '1405/11/05'
  },
  {
    id: '5',
    name: 'حسین اکبری',
    fatherName: 'احمد اکبری',
    motherName: 'زهرا محمدی',
    nationalId: '0012345682',
    grade: 'پایه دهم',
    school: 'دبیرستان فرزانگان',
    status: 'active',
    paymentStatus: 'paid',
    registrationDate: '1405/09/12'
  }
];

    return (
        <div>
         <Titlepage link={"/AddSudent"} Icon={UsersIcon} add={"افزودن دانش آموز"} desc={"مدیریت و مشاهده اطلاعات دانش‌آموزان سرویس مدرسه "} />
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
            
                  <input
                    type="text"
                   
                  
                    placeholder="جستجو..."
                    className="w-full pr-10 pl-4 py-1 sm:py-1.5 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder:text-neutral-500 text-black px-2"
                  />
                </div>
                <div className="relative">
                  <select

                    className="appearance-none px-2 py-1.5 pl-0 sm:pl-7 sm:text-base text-xs border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-neutral-900 cursor-pointer "
                  >
                    <option value="name">نام دانش‌آموز</option>
                    <option value="father">نام پدر</option>
                    <option value="mother">نام مادر</option>
                    <option value="nationalId">کد ملی</option>
                      <option value="mother">عنوان فیش</option>
                  </select>
                 
                </div>
              </div>
            </div>

            {/* Status and Date Filters */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {/* Status Filter */}
              <div className="relative">
                <label className="block text-sm text-neutral-700 mb-1.5">وضعیت</label>
                <select
         
                  className="appearance-none w-full px-4 py-2.5 pl-10 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-neutral-900 cursor-pointer"
                >
                  <option value="all">همه</option>
                  <option value="active">فعال</option>
                  <option value="awaiting-signature">در انتظار امضا</option>
                  <option value="awaiting-payment">در انتظار پیش‌پرداخت</option>
                  <option value="incomplete">تکمیل نشده</option>
                </select>
              
              </div>

              {/* Date From */}
              <div className="relative grid grid-cols-2 gap-2 w-full col-span-2">
              <DateSelect title={"از تاریخ"} placeholder={" از تاریخ مد نظر"} name={"date"} data={date} setdata={setdate} />
            <DateSelect title={"تا تاریخ"} placeholder={" تا تاریخ مد نظر"} name={"date"} data={date} setdata={setdate} />
              </div>

              {/* Date To */}
           

              {/* Clear Filters Button */}
              <div className="flex items-end">
                {hasActiveFilters && (
                  <button
                
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
        <div className="p-4 hidden lg:block">

      
         <div className=" bg-white rounded-xl shadow-sm border border-neutral-200 overflow-hidden">

       
         <table className="w-full">

      
                  <thead className="bg-neutral-50 border-b border-neutral-200">
                    <tr>
                      <th className="px-6 py-4 text-right text-sm text-neutral-700">نام دانش‌آموز</th>
                      <th className="px-6 py-4 text-right text-sm text-neutral-700">پایه تحصیلی</th>
                      <th className="px-6 py-4 text-right text-sm text-neutral-700">مدرسه</th>
                      <th className="px-6 py-4 text-right text-sm text-neutral-700">وضعیت فعال بودن</th>
                      <th className="px-6 py-4 text-right text-sm text-neutral-700">وضعیت پرداخت</th>
                      <th className="px-6 py-4 text-right text-sm text-neutral-700">تاریخ ثبت</th>
                      <th className="px-6 py-4 text-right text-sm text-neutral-700">عملیات</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-neutral-200">
                 {mockStudents.map((student)=>(
                      <tr key={student.id} className="hover:bg-blue-50/50 transition-colors duration-150">
                          <td className="px-6 py-4">
                            <div>
                              <p className="text-neutral-900">{student.name}</p>
                              <p className="text-sm text-neutral-500" dir="ltr">{student.nationalId}</p>
                            </div>
                          </td>
                          <td className="px-6 py-4 text-neutral-700">{student.grade}</td>
                          <td className="px-6 py-4 text-neutral-700">{student.school}</td>
                          <td className="px-6 py-4">
                            <span className={`inline-flex px-3 py-1 rounded-full text-sm bg-green-500 text-green-300`}>
                           فعال
                            </span>
                          </td>
                          <td className="px-6 py-4">
                            <span className={`inline-flex px-3 py-1 rounded-full text-sm bg-green-500 text-green-300`}>
                              پرداخت شده
                            </span>
                          </td>
                          <td className="px-6 py-4 text-neutral-700">{student.registrationDate}</td>
                          <td className="px-6 py-4">
                            <div className="flex items-center gap-2">
                              <Link href={`/Admin/Students/${student.id}`} className="p-2 hover:bg-blue-100 rounded-lg transition-colors duration-150 group" title="مشاهده">
                                <EyeIcon className="w-4 h-4 text-neutral-600 group-hover:text-blue-600" />
                              </Link>
                              <button className="p-2 hover:bg-blue-100 rounded-lg transition-colors duration-150 group text-black" title="ویرایش">
                       <PencilIcon /> 
                              </button>
                            </div>
                          </td>
                        </tr>
                 ))}
                    </tbody>
                     </table>
                       </div>
                         </div>
                         <div className="lg:hidden space-y-4 p-1.5 ">
  
          {mockStudents.map((student) => (
  <div key={student.id} className="bg-white rounded-xl shadow-sm border border-neutral-200 p-2">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <h3 className="text-neutral-900 mb-1">{student.name}</h3>
                        <p className="text-sm text-neutral-600">{student.school} • {student.grade}</p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-3">
                      <span className={`inline-flex px-3 py-1 rounded-full text-sm bg-green-500 text-green-300`}>
                        فعال
                      </span>
                      <span className={`inline-flex px-3 py-1 rounded-full text-sm bg-green-500 text-green-300`}>
                        پرداخت شده
                      </span>
                    </div>

                    <Link href={`/Admin/Students/${student.id}`} className="flex items-center justify-between pt-3 border-t border-neutral-200">
                      <span className="text-sm text-neutral-600">تاریخ ثبت: {student.registrationDate}</span>
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