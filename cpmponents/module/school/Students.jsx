import { api } from "@/config/api";
import { ClientError } from "@/utils/ClientrrorHandler";
import { useEffect, useState } from "react";

export default function Students() {

    const [loading,setLoading]=useState(true)

    const getstudents=async()=>{
const res=await api.get('student').catch((err)=>ClientError(err)).then(res=>{
    setLoading(false)
    return res
})
console.log(res)
    }
    useEffect(()=>{
        getstudents()
    },[])

    return (
        <div className="w-full min-h-96 py-6">
            {loading&&<p className="text-center">در حال بارگذاری...</p>}
        </div>
    );
}