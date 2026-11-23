export default function TextareaInput({error,label,placeholder="",setData,data,name,type}) {
   const setHandler = (e) => {
    const el = e.target;

    // auto resize
    el.style.height = "auto";
    el.style.height = el.scrollHeight + "px";

    if (typeof data === "object") {
      setData((prev) => ({ ...prev, [name]: el.value }));
    } else {
      setData(el.value);
    }
  };
      return (
          <div className="w-full flex flex-col">
        {label&&  <label htmlFor={name} className="  text-neutral-700 mb-2">
          {label}
          </label>}
          <textarea value={typeof data=='object'?data[name]:data} onChange={setHandler} type={'text'}  name={name} id={name} className={`overflow-hidden transition-all duration-200 ease-in-out bg-white rounded-lg sm:rounded-lg placeholder:text-sm placeholder:text-neutral-400 p-1.5 sm:p-1.5 border-[1px] ${error&&error[name]?'border-red-500':'border-neutral-200'} focus:border-blue-600 min-h-28`} placeholder={placeholder} />
         <p className='text-red-500 text-sm mx-2 mt-1'>{error&&error[name]&&error[name]}</p>
         </div>
      );
  }