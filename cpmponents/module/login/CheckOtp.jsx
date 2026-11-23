import { api } from "@/config/api";
import Input from "@/ui/Input";
import { ClientError } from "@/utils/ClientrrorHandler";
import { BuildingsIcon } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import Cookies from 'js-cookie';

export default function CheckOtp({setstep,data,setdata,sendCode}) {

    const [timeLeft, setTimeLeft] = useState(120); // 2 دقیقه = 120 ثانیه
const [error,setError]=useState(null)

const router=useRouter()

    useEffect(() => {
      if (timeLeft <= 0) return;
  
      const interval = setInterval(() => {
        setTimeLeft(prev => prev - 1);
      }, 1000);
  
      return () => clearInterval(interval);
    }, [timeLeft]);
  
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
  
    const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;
  
    const checkHandler=async()=>{
      const res= await api.post('auth/check-otp',data).catch((err)=>ClientError(err,setError))

      
      if(res.status==200){
        console.log(res)
       toast.success('شما با موفقیت وارد شدید')

       Cookies.set("access_token",res.data.token,{expires:365})
Cookies.set("role",res.data.user.role,{expires:365})
       if(res.data.user.role=="admin"){
        router.push("/Admin")
       }
router.push('/Panel')       
      }
    }
 
    const codeHnadler=async()=>{
      const res=await sendCode()

      console.log(res)
      if(res){
        setTimeLeft(120)
      }
    }


    return (
        <div className="bg-white text-black rounded-xl shadow-sm sm:p-8 p-4  flex flex-col justify-center items-center w-2xs sm:w-md">
                  <BuildingsIcon weight="fill" className="sm:w-16 sm:h-16 w-12 h-12 sm:mb-4 mb-1 text-blue-600" /> 
                  <p className="sm:text-xl text-lg  font-medium">شرکت سما سیر رانان</p>
                  <p className="text-xs  text-neutral-400 my-2 font-extralight">کد ارسال شده به شماره {data.phone} را وارد نمیایید</p>
 <Input error={error} data={data} setData={setdata} placeholder="کد تایید را وارد نمایید" name={'otp'}  type={'number'}  />
<div className="grid grid-cols-2 w-full gap-x-2">
<button onClick={checkHandler} className="text-white bg-blue-600 w-full sm:text-base text-sm  rounded-lg py-1 sm:py-1.5 mt-4">
            ورود
         </button>
         <button onClick={()=>setstep(1)} className="text-black bg-neutral-200 w-full sm:text-base text-sm  rounded-lg py-1 sm:py-1.5 mt-4">
            تغییر شماره
         </button>

</div>
{timeLeft>0?
<p className="transition-all duration-200 ease-in-out sm:mt-4 mt-2 sm:text-xs text-[10px] text-neutral-500 font-light ">
    {minutes}:{formattedSeconds}
</p>
:
<button onClick={codeHnadler} className="transition-all duration-200 ease-in-out sm:mt-4 mt-2 text-xs  text-neutral-500 font-light hover:text-blue-600">
   ارسال مجدد کد
</button>
}
        </div>
    );
}