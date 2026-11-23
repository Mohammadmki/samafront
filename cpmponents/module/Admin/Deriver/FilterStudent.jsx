import { api } from "@/config/api";
import FormInput from "@/ui/FormInput";
import Input from "@/ui/Input";
import Option from "@/ui/Option";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function FilterStudent() {

    const [schools,setSchools]=useState([])

    const [filter,setFilter]=useState({school_id:"",full_name:""})

    const router=useRouter()

    const pathname=usePathname()

    useEffect(()=>{

        const query=new URLSearchParams()
  // هر فیلتر که مقدار داشته باشد را اضافه کن
  Object.keys(filter).forEach((key) => {
    if (filter[key]!="") {
      query.append(key, filter[key]);
    }
  });

  // URL جدید بساز
  const newQueryString = query.toString();

  const newUrl = newQueryString ? `${pathname}?${newQueryString}` : pathname;

  // به router push و query را در URL ست کن
  router.push(newUrl,{scroll:false});
    },[filter])

    useEffect(()=>{
        const fetchschool=async()=>{
            const res=await api.get('school')
            if(res.status==200){
                res.data.schools.map((i)=>{
                    setSchools((prev)=>[...prev,{value:i.id,label:i.name}])
                })
            }
        }
        fetchschool()
    },[])

    return (
        <div className="flex flex-col gap-y-3 mb-4">
          <Option data={filter} setData={setFilter} name={"school_id"} placeholder={"انتخاب مدرسه"} options={schools} />
       <FormInput  data={filter} setData={setFilter} name={"full_name"} placeholder="جست و جو بر اساس نام"  />
        </div>
    );
}