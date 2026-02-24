"use client"

import DateSelect from "@/ui/DateSelect";
import Titlepage from "@/ui/Titlepage";
import { CalendarBlankIcon, CarProfileIcon, EyeIcon, FileSearchIcon, PlusIcon, SlidersHorizontalIcon, UsersIcon, X } from "@phosphor-icons/react/dist/ssr";
import { useState } from "react";

export default function page() {

    const hasActiveFilters=false

    const [date,setdate]=useState()
const [isFiltersExpanded,setisFiltersExpanded]=useState(false)
  

const mockDrivers = [
  {
    id: '1',
    name: 'محمد رضایی',
    plateNumber: '12الف345-67',
    isActive: true,
     nationalId: '0012345678',
    lastPaymentStatus: 'paid',
    schools: ['دبستان شهید بهشتی', 'دبستان خیام'],
    homeAddress: 'تهران، خیابان آزادی، کوچه ۱۲، پلاک ۴۵',
    registrationDate: '1405/10/15',
    car:"سمند"
    
  },
  {
    id: '2',
     nationalId: '0012345678',
    name: 'حسین محمدی',
    plateNumber: '45ب678-21',
    isActive: false,
    lastPaymentStatus: 'unpaid',
    schools: ['دبیرستان فرزانگان'],
    homeAddress: 'تهران، شهران، خیابان کوهسار، پلاک ۸',
    registrationDate: '1405/10/20',
    car:"پراید",
     nationalId: '0012345678',
  },
  {
    id: '3',
    name: 'علی حسینی',
    plateNumber: '78ج901-34',
    isActive: true,
    lastPaymentStatus: 'pending',
    schools: ['دبستان سعدی', 'دبستان مطهری', 'دبستان فردوسی'],
    homeAddress: 'تهران، صادقیه، خیابان ستارخان، پلاک ۲۲',
    registrationDate: '1405/11/01',
    car:"پژو 405",
     nationalId: '0012345678',
  },
  {
    id: '4',
    name: 'رضا کریمی',
    plateNumber: '11د222-89',
    isActive: false,
    lastPaymentStatus: 'unpaid',
    schools: ['دبستان طلوع'],
    homeAddress: 'تهران، نارمک، خیابان گلبرگ غربی، پلاک ۹',
    registrationDate: '1405/11/05',
     car:"پژو 405",
      nationalId: '0012345678',
  },
  {
    id: '5',
    name: 'امیر اکبری',
     nationalId: '0012345678',
    plateNumber: '33ه444-55',
    isActive: true,
    lastPaymentStatus: 'paid',
    schools: ['دبیرستان شهید بهشتی', 'دبیرستان فرزانگان'],
    homeAddress: 'تهران، تهرانپارس، خیابان جشنواره، پلاک ۱۷',
    registrationDate: '1405/09/12',
     car:"پژو 405"
  }
];

    return (
        <div>
          <Titlepage link={"/Admin/Deriver/Add"} Icon={CarProfileIcon } add={"افزودن راننده"} desc={"مدیریت و مشاهده اطلاعات رانندگان سرویس مدرسه"} title={"لیست رانندگان"} />
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
                    <option value="name">نام راننده</option>
                    <option value="father">مدرسه</option>
                    <option value="mother">پلاک</option>
                    <option value="nationalId">کد ملی</option>
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
                  <option value="awaiting-signature">غیر فعال</option>

                </select>
              
              </div>

              {/* Date From */}
              <div className="relative grid grid-cols-2 gap-2">
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
        <div className="p-4 px-2 hidden md:block">
         <div className=" bg-white rounded-xl shadow-sm border border-neutral-200 overflow-hidden">
         <table className="w-full">

      
                  <thead className="bg-neutral-50 border-b border-neutral-200">
                    <tr>
                      <th className="px-1.5 py-4 text-right text-sm text-neutral-700">نام </th>
                      <th className="px-1.5 py-4 text-right text-sm text-neutral-700">شماره پلاک</th>
                    <th className="px-1.5 py-4 text-right text-sm text-neutral-700">ماشین</th>
                      <th className="px-1.5 py-4 text-right text-sm text-neutral-700">وضعیت فعال بودن</th>
                      <th className="px-1.5 py-4 text-right text-sm text-neutral-700">وضعیت اخرین پرداخت</th>
                   <th className="px-1.5 py-4 text-right text-sm text-neutral-700">فعالیت</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-neutral-200">
                 {mockDrivers.map((student)=>(
                      <tr key={student.id} className="hover:bg-blue-50/50 transition-colors duration-150">
                          <td className="px-6 py-4">
                            <div>
                              <p className="text-neutral-900">{student.name}</p>
                              <p className="text-sm text-neutral-500 text-center" dir="ltr">{student.nationalId}</p>
                            </div>
                          </td>
                     <td className="px-6 py-4">
                            <p className="text-neutral-900 text-center">{student.plateNumber}</p>
                        </td>
                          <td className="px-6 py-4">
                            <p className="text-neutral-900 text-center">{student.car}</p>
                        </td>
                          <td className="px-6 py-4 justify-center items-center ">
                            <span className={`inline-flex px-3 py-1 rounded-full text-sm bg-green-500 text-green-300`}>
                           فعال
                            </span>
                          </td>
                          <td className="px-6 py-4 flex justify-center items-center  ">
                            <span className={`inline-flex px-3 py-1 rounded-full text-sm bg-green-500 text-green-300`}>
                              پرداخت شده
                            </span>
                          </td>
                     
                       <td className="px-6 py-4">
                            <p className="text-blue-600 text-center">مشاهده</p>
                        </td>
                        </tr>
                 ))}
                    </tbody>
                     </table>
                       </div>
                         </div>
                         <div className="md:hidden space-y-4 p-1.5 ">
  
          {mockDrivers.map((student) => (
  <div key={student.id} className="bg-white rounded-xl shadow-sm border border-neutral-200 p-2">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <h3 className="text-neutral-900 mb-1">{student.name}</h3>
                        <p className="text-sm text-neutral-600">{student.car} • {student.plateNumber}</p>
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