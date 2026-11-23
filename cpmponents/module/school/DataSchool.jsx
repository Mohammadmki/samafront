'use client'

import { useState } from "react";
import Students from "./Students";
import Derivers from "./Derivers";

export default function DataSchool() {

    const [list,setList]=useState('student')

    return (
        <div className="bg-white text-neutral-600 rounded-xl shadow-sm border border-neutral-200 p-2 mt-4">
          <div className="w-full py-2 grid grid-cols-2 ">
<button onClick={()=>setList('student')} className={`transition-all duration-300 ease-in-out ${list=='student'?'text-blue-500':''} border-e border-neutral-500 cursor-pointer`}>
    لیست دانش آموزان
</button>
<button onClick={()=>setList('deriver')} className={`transition-all duration-300 ease-in-out ${list=='deriver'?'text-blue-500':''} border-e border-neutral-500 cursor-pointer`}>
    لیست رانندگان
</button  >
          </div>
        {list=='student'&&<Students />}
        {list=="deriver"&&<Derivers />}
        </div>
    );
}