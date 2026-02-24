'use client';

import { adminLinks } from "@/constans/NavLinks";
import { BusIcon } from "@phosphor-icons/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
          const pathname=usePathname()
    return (
        
  
        
      
     <header style={{zIndex:998}} className="sticky top-0 z-50 bg-white border-b border-neutral-200 shadow-sm text-black " dir="rtl">
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
 
                <Link
                  href={"/Login"}
                  className={`sm:px-4 px-2 py-1 sm:py-2 rounded-lg sm:text-base text-sm transition-colors duration-200 bg-blue-200 text-blue-600`}
                >
                  ورود
                </Link>

            </nav>

            {/* Mobile Menu Button */}

          </div>
        </div>
           <div className="bg-neutral-50 border-b border-neutral-200 sticky top-16 z-40" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          {/* Desktop Navigation */}
          <nav className="flex items-center gap-2 py-1.5 md:py-3">
            {
                adminLinks.map((link)=>(
      
          
                <Link
           
                  href={
                    link.href
                  }
                  className={`flex font-semibold text-xs sm:text-base  items-center gap-2 px-2 md:px-4 py-1 md:py-2.5 rounded-lg  transition-all duration-200 whitespace-nowrap ${pathname.includes(link.href) ? "text-blue-600" : "bg-transparent text-neutral-500 hover:bg-neutral-200"}`}
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