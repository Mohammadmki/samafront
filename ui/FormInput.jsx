export default function FormInput({error,label,placeholder="",setData,data,name,type}) {
    const setHandler=(e)=>{
       if(typeof data=='object'){
          setData((prev)=>({...prev,[name]:e.target.value}))
       }else{
          setData(e.target.value)
       }
    }
      return (
          <div className="w-full flex flex-col">
        {label&&  <label htmlFor={name} className="mb-1  text-neutral-700 mb-2">
          {label}
          </label>}
          <input value={typeof data=='object'?data[name]:data} onChange={setHandler} type={type||'text'}  name={name} id={name} className={` transition-all duration-200 ease-in-out bg-white rounded-lg sm:rounded-lg placeholder:text-sm placeholder:text-neutral-400 p-1.5 sm:p-1.5 border-[1px]  focus:border-blue-600 ${error&&error[name]?'border-red-500':'border-neutral-200'}`} placeholder={placeholder} />
        <p className=" text-red-500 text-sm mx-2">{error&&error[name]&&error[name]}</p>
         </div>
      );
  }