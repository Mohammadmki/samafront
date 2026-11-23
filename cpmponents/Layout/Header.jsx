'use client';

import { adminLinks } from "@/constans/NavLinks";
import { BusIcon, GearIcon } from "@phosphor-icons/react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import Cookies from 'js-cookie';

export default function Header() {
  const router=useRouter()
          const pathname=usePathname()
      const role=Cookies.get("role")
if(pathname.includes("Login")) return

const exitHandler=()=>{
  Cookies.remove("access_token")
  Cookies.remove("role")
  router.push("/Login")
}

    return (
     <header  className="sticky w-full top-0 z-10  bg-white border-b border-neutral-200 shadow-sm text-black " dir="rtl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center gap-3 cursor-pointer">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <BusIcon className="w-6 h-6 text-white" />
              </div>
              <div className="">
                <h1 className="sm:text-xl text-base text-neutral-900 font-medium">شرکت سماسیر رانان</h1>
                <p className="sm:text-sm text-xs text-neutral-600">سیستم مدیریت حمل و نقل</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="flex items-center gap-1">

              {role=='admin'&&
              <Link className="transition-colors duration-200 bg-blue-200 text-blue-600 rounded-lg sm:px-4 px-2 py-1.5 sm:py-2.5" href={'/Admin/Settings'}>
              <GearIcon className="sm:text-xl text-lg  text-blue-600 " weight="fill" /> 
              </Link>
              }
 {role?
 <>
 {
  role=="admin"?
   <button
     onClick={exitHandler}
       className={`sm:px-4 px-2 py-1 sm:py-2 rounded-lg sm:text-base text-sm transition-colors duration-200 bg-blue-200 text-blue-600`}
       >
          خروج
    </button>
  :
   <Link
    href={"/Panel"}
       className={`sm:px-4 px-2 py-1 sm:py-2 rounded-lg sm:text-base text-sm transition-colors duration-200 bg-blue-200 text-blue-600`}
       >
          پنل کاربری
    </Link>
 }</>
 :
                <Link
                  href={"/Login"}
                  className={`sm:px-4 px-2 py-1 sm:py-2 rounded-lg sm:text-base text-sm transition-colors duration-200 bg-blue-200 text-blue-600`}
                >
                  ورود
                </Link>}

            </nav>

            {/* Mobile Menu Button */}

          </div>
        </div>
           <div className="bg-neutral-50 border-b border-neutral-200 sticky top-16 z-40" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          {/* Desktop Navigation */}
          <nav className="flex items-center gap-1.5 sm:gap-2 py-1.5 md:py-3">
            {
               Cookies.get('role')=="admin"&& adminLinks.map((link,index)=>(
                <Link
           key={index}
                  href={
                    link.href
                  }
                  className={`flex font-semibold text-xs sm:text-base  items-center gap-1 sm:gap-2 px-1 md:px-4 py-1 md:py-2.5 rounded-lg  transition-all duration-200 whitespace-nowrap ${pathname.includes(link.href) ? "text-blue-600" : "bg-transparent text-neutral-500 hover:bg-neutral-200"}`}
                >
             <link.Icon weight="bold" className={`sm:w-6 sm:h-6 h-4 w-4  ${pathname.includes(link.href) ? "text-blue-600" : "bg-transparent text-neutral-500 hover:bg-neutral-200"}`} />
                  <span>{link.label}</span>
                </Link>
                ))
}    
          </nav>

          {/* Mobile Navigation - Scrollable Tabs */}
      
        </div>
      </div>
    </div>
      </header>

    );
}