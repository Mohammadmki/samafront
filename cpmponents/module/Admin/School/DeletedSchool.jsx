'use client'

import { useState } from "react";
import DelSchoolModal from "./DelSchoolModal";

export default function DeletedSchool({id}) {


    const [show,setshow]=useState(false)

    return (
        <>
        <button onClick={()=>setshow(true)}  className="text-blue-600 text-center cursor-pointer">حذف</button>
        {show&&<DelSchoolModal id={id} setshow={setshow} />}
        </>
    );
}