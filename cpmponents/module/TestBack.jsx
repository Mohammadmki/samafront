'use client'

import { api } from "@/config/api";
import { useEffect } from "react";

export default function TestBack() {
    useEffect(()=>{
        const ge=async()=>{
               const res=await api.get("/student").catch(err=>console.log(err.response))
  console.log(res)
        }
        ge()
    },[])
   
    return (
        <div>
            Enter
        </div>
    );
}