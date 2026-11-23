'use client'

import { useState } from "react";
import DelModal from "./DelModal";

export default function DeleteStudent() {

    const [show,setShow]=useState(false)

    return (
        <>
          <button onClick={()=>setShow(true)} className="py-1 border border-red-500 rounded-lg transition-all duration-200 ease-in-out hover:bg-red-50  text-red-500">
              حذف
             </button>
             {show&&<DelModal setshow={setShow} />}
        </>
    );
}