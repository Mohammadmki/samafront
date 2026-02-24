import { PlusIcon } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

export default function Titlepage({Icon,title,desc,add,link}) {
    return (
          <div className="bg-white border-b border-neutral-200">
                   <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
                     <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                       <div>
                         <div className="flex items-center gap-3 mb-2">
                           <div className="sm:w-10 sm:h-10 w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center">
                             <Icon  className="w-5 h-5 text-blue-600" />
                           </div>
                           <h1 className="sm:text-2xl text-lg text-neutral-900">{title}</h1>
                         </div>
                         <p className="sm:text-sm text-xs text-neutral-600">{desc}</p>
                       </div>
                       <Link href={link} className="bg-blue-600 text-white px-6 py-2 sm:py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 shadow-sm flex items-center justify-center gap-2 whitespace-nowrap">
                         <PlusIcon className="w-5 h-5 " />
                         <span className="sm:text-base text-sm">{add}</span>
                       </Link>
                     </div>
                   </div>
                   </div>
    );
}