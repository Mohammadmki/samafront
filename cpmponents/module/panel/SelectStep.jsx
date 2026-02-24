export default function SelectStep({step,setstep}) {

    const steps=[
        {name:"تکمیل اطلاعات",number:1},
        {name:"امضای قرار داد",number:2},
{name:"پرداخت پیش پرداخت",number:3},
    ]

    return (
     
              <div className="bg-neutral-50 rounded-lg shadow-sm border border-neutral-200 p-2 sm:p-6 grid grid-cols-3  gap-x-1.5 sm:gap-x-3 justify-around mb-4 ">
          {steps.map((i)=>(
            <div className={`transition-all duration-200 ease-in-out flex flex-col items-center ${step==i.number?"text-blue-600":"text-neutral-500"} `} key={i.number}>
                <p className={`transition-all duration-200 ease-in-out   border-[1px] ${step==i.number?"border-blue-600":"border-neutral-300"}  rounded-full w-fit sm:text-xl text-lg sm:py-4 px-4 py-2 sm:px-6 mb-2`}>{i.number}</p>
                <p className="sm:text-base text-sm">{i.name}</p>
            </div>
          ))}
              </div>
     
    );
}