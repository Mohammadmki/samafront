'use client'

import { useState } from "react";
import DelModal from "./DelModal";

export default function DelStudent({id}) {

    const [show,setshow]=useState(false)


    return (
        <>
            <button onClick={()=>setshow(true)} className="text-black cursor-pointer">
                حذف
            </button>

        {show&&   <DelModal id={id} setshow={setshow} />}
        </>
    );
}