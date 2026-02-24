import Input from "@/ui/Input";
import { BuildingsIcon } from "@phosphor-icons/react";
import { useEffect, useState } from "react";

export default function CheckOtp({setstep}) {

    const [code,setCode]=useState('')

    const [timeLeft, setTimeLeft] = useState(120); // 2 دقیقه = 120 ثانیه

    useEffect(() => {
      if (timeLeft <= 0) return;
  
      const interval = setInterval(() => {
        setTimeLeft(prev => prev - 1);
      }, 1000);
  
      return () => clearInterval(interval);
    }, [timeLeft]);
  
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
  
    // ثانیه تک رقمی → صفر جلوش بذار
    const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;
  

    return (
        <div className="bg-white text-black rounded-xl shadow-sm sm:p-8 p-4  flex flex-col justify-center items-center w-2xs sm:w-md">
                  <BuildingsIcon weight="fill" className="sm:w-16 sm:h-16 w-12 h-12 sm:mb-4 mb-1 text-blue-600" /> 
                  <p className="sm:text-xl text-lg  font-medium">شرکت سما سیر رانان</p>
                  <p className="text-xs  text-neutral-400 my-2 font-extralight">کد ارسال شده به شماره 09014288308 را وارد نمیایید</p>
 <Input data={code} setData={setCode} placeholder="کد تایید را وارد نمایید" name={'code'}  type={'number'}  />
<div className="grid grid-cols-2 w-full gap-x-2">
<button onClick={()=>setstep(2)} className="text-white bg-blue-600 w-full sm:text-base text-sm  rounded-lg py-1 sm:py-1.5 mt-4">
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
<button className="transition-all duration-200 ease-in-out sm:mt-4 mt-2 text-xs  text-neutral-500 font-light hover:text-blue-600">
   ارسال مجدد کد
</button>
}
        </div>
    );
}