import DateSelect from "@/ui/DateSelect";
import FormInput from "@/ui/FormInput";
import Map from "@/ui/Map";

import Option from "@/ui/Option";
import TextareaInput from "@/ui/TextareaInput";


export default function Information({setStep,student,setStudent}) {
    const options = [
        { value: 'shahid_beheshti', label: 'دبستان شهید بهشتی' },
        { value: 'ferdowsi', label: 'دبستان فردوسی' },
        { value: 'motahhari', label: 'دبستان مطهری' },
        { value: 'khayyam', label: 'دبستان خیام' },
        { value: 'saadi', label: 'دبستان سعدی' },
      ];
      const educationLevels = [
        {
          value: 'PRIMARY',
          label: 'ابتدایی',
          grades: [
            { value: 1, label: 'اول' },
            { value: 2, label: 'دوم' },
            { value: 3, label: 'سوم' },
            { value: 4, label: 'چهارم' },
            { value: 5, label: 'پنجم' },
            { value: 6, label: 'ششم' },
          ],
        },
        {
          value: 'MIDDLE_SCHOOL',
          label: 'متوسطه اول',
          grades: [
            { value: 7, label: 'هفتم' },
            { value: 8, label: 'هشتم' },
            { value: 9, label: 'نهم' },
          ],
        },
        {
          value: 'HIGH_SCHOOL',
          label: 'متوسطه دوم',
          grades: [
            { value: 10, label: 'دهم' },
            { value: 11, label: 'یازدهم' },
            { value: 12, label: 'دوازدهم' },
          ],
        },
      ];

      const selectLoc=(value)=>{
        setStudent((prev)=>({...prev,lat:value.lat,lng:value.lng}))
      }

    return (
        <div className="bg-neutral-50 p-4 sm:p-8 max-w-3xl mx-auto  rounded-xl shadow-sm border border-neutral-200  text-black">
            <h1 className="text-2xl font-medium">
                اطلاعات دانش آموز
            </h1>
            <h2 className="text-sm text-neutral-500 mt-2 mb-5 font-extralight">
            لطفاً تمام فیلدها را با دقت تکمیل نمایید
            </h2>
            <div className="border-b-[1px] border-neutral-300 pb-10 grid grid-cols-1 gap-y-3">
           <h3 className="mb-2.5 text-lg">
            مدرسه و نوبت تحصیلی
           </h3>
           <Option options={educationLevels} data={student} name={"educationLevels"} placeholder={"مقطع تحصیلی ران انتخاب کنید"} title={"مقطع تحصیلی"}  setData={setStudent}  />
            <Option options={options} disabeld={!student.educationLevels} disabeltitle={"لطفا ابتدا مقطع تحصیلی را انتخاب کنید"} data={student} setData={setStudent} name={'schoolId'} title={"نام مدرسه"} placeholder={"مدرسه را انتخاب کنید"}  />
            
            <label className="block text-neutral-700 mb-2">
            نوبت تحصیلی
          </label>
          <div className="grid grid-cols-2 gap-x-3">
            <button onClick={()=>setStudent((prev)=>({...prev,schoolShift:1}))} className={`w-full border-2  py-2 rounded-lg  ${student.schoolShift==1?'text-blue-600 border-blue-500':' text-neutral-600 border-neutral-300 hover:border-neutral-400 hover:text-neutral-700'} cursor-pointer transition-all duration-200 ease-in-out`}>
                صبح
            </button>
            <button onClick={()=>setStudent((prev)=>({...prev,schoolShift:2}))} className={`w-full border-2  py-2 rounded-lg  ${student.schoolShift==2?' text-blue-600 border-blue-500':'text-neutral-600 border-neutral-300 hover:border-neutral-400 hover:text-neutral-700'} cursor-pointer transition-all duration-200 ease-in-out`}>
                عصر
            </button>
          </div>
          
            </div>
            <div className="border-b-[1px] border-neutral-300 py-10 grid grid-cols-1 gap-y-8">
            <h3 className="mb-2.5 text-lg">
            اطلاعات شخصی دانش آموز
           </h3>
           <FormInput data={student} setData={setStudent} label={"نام و نام خانوادگی دانش آموز"} name={"studentFullName"} placeholder="نام کامل دانش آموز"  />
            <FormInput data={student} setData={setStudent} label={"کد ملی دانش آموز"} placeholder="کد ملی ده رقمی دانش آموز را وارد کنید" name={'studentNationalId'} />
            <Option disabeltitle={"لطفا ابتدا مقطع تحصیلی را انتخاب کنید"} disabeld={!student.educationLevels} name={"studentGrade"} data={student} setData={setStudent} title={"پایه تحصیلی"} placeholder={"پایه تحصیلی دانش آموز را انتخاب کنید"} options={student.educationLevels? educationLevels.find((i)=>i.value==student.educationLevels).grades:[]} />
           <DateSelect data={student} setdata={setStudent}  name={'studentBirthDate'} title={"تاریخ تولد دانش آموز"} placeholder={" تاریخ تولد را انتخاب کنید"} />
          <TextareaInput name={"address"} data={student} setData={setStudent} label={"آدرس"} placeholder=" آدرس محل سکونت شامل خیابان، کوچه"  />
           <Map value={{lat:student.lat,lng:student.lng}} onChange={selectLoc} />
            </div>
             <div className="border-b-[1px] border-neutral-300 py-10 grid grid-cols-1 gap-y-8">
            <h3 className="mb-2.5 text-lg">
           اطلاعات ولی و اولیا
           </h3>
           <FormInput data={student} setData={setStudent} label={"نام و نام خانوادگی ولی (پدر یا مادر)"} placeholder="نام و نام خانوادگی ولی" name={"guardianFullName"}  />
                 <FormInput data={student} setData={setStudent} label={"کدملی ولی "} placeholder=" کدملی ولی" name={"guardianFullName"}  />
          <FormInput data={student} setData={setStudent} label={"شماره تماس پدر"} type={"number"} placeholder="00000000000" name={"fatherPhone"} />
                    <FormInput data={student} setData={setStudent} label={"شماره تماس مادر"} type={"number"} placeholder="00000000000" name={"motherPhone"} />
            </div>
            <button className="w-full bg-blue-600 text-white py-2 rounded-lg">مرحله بعد</button>

        </div>
    );
}