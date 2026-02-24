import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian"
import persian_fa from "react-date-object/locales/persian_fa"
import { CalendarDotsIcon } from "@phosphor-icons/react";

export default function DateSelect({placeholder,data,setdata,name,title}) {

    const changeHandler=(value)=>{
        console.log(value)
        setdata((prev)=>({...prev,[name]:value}))
    }
    console.log(data)

    return (
        <div className="flex flex-col w-full">
            {title&& <label htmlFor={name} className="mb-1  text-neutral-700 mb-2">{title}</label>}
           <DatePicker
           locale={persian_fa}
           calendar={persian}
          
             render={(value, openCalendar) => (
    <div className="relative w-full">
        
      <CalendarDotsIcon 
        className="w-5 h-5 text-neutral-400 absolute end-3 top-1/2 -translate-y-1/2 cursor-pointer"
        onClick={openCalendar}
      />
      <input
        value={value}
        onFocus={openCalendar}
        readOnly
        placeholder={placeholder}
        className="w-full pe-10 transition-all duration-200 bg-white rounded-lg p-2 border border-neutral-200 focus:border-blue-600 outline-none placeholder:text-sm  text-black"
      />

    </div>
  )}
           onChange={changeHandler}
        inputClass="w-full transition-all duration-200 ease-in-out bg-white rounded-lg sm:rounded-lg placeholder:text-sm placeholder:text-neutral-400 p-1.5 sm:p-1.5 border-[1px] border-neutral-200 focus:border-blue-600"
           className="w-full"
           
           />
        </div>
    );
}