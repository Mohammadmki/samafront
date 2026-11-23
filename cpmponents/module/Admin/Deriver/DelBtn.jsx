'use client'

import { useState } from "react";
import DelDeriverModal from "./DelDeriverModal";

export default function DelBtn({id}) {
    const [show,setshow]=useState(false)
    return (
        <>
     <button onClick={()=>setshow(true)} className="text-blue-600 text-center cursor-pointer">حذف</button>
     {show&&<DelDeriverModal id={id} setshow={setshow} />}
        </>
    );
}