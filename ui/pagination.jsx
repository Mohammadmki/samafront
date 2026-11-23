'use client'

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Pagination({paginate}) {

    const [search,setsearch]=useState(paginate.currentPage)

    const router=useRouter()
    
    const pathname=usePathname()
    
       const searchParams = useSearchParams();
    
    useEffect(()=>{
        const query=new URLSearchParams(searchParams.toString())
        query.set("page",search)
        router.push(`${pathname}?${query.toString()}`,{scroll:false})
    },[search])

    const nextPage=()=>{
        

        setsearch(paginate.currentPage+1,)

    }
        const pervPage=()=>{
        
        setsearch(paginate.currentPage-1)

    }

    return (
        <div className=" flex flex-row justify-between w-full text-neutral-500 font-semibold text-sm px-4 mt-4 ">
           <p>
            صفحه {paginate.currentPage} از  {paginate.totalPages}
           </p>
        <div className="flex flex-row gap-x-1 text-base">
                <button disabled={paginate.currentPage==paginate.totalPages}  onClick={nextPage}   className="cursor-pointer disabled:opacity-50">
             
                 {"<"}
            </button>
          
            <p>
                 {paginate.totalPages} - {paginate.currentPage}
            </p>
             <button disabled={paginate.currentPage==1} onClick={pervPage}   className="cursor-pointer disabled:opacity-50">
                  {">"}
            </button>
        </div>

        </div>
    );
}