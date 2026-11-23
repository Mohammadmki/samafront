import { api } from "@/config/api";
import { grade, shiftSchool } from "@/constans/school";
import PaymentList from "@/cpmponents/module/panel/PaymentList";
import ChangeStatusStudent from "@/cpmponents/module/student/ChangeStatusStudent";
import DeleteStudent from "@/cpmponents/module/student/DeleteStudent";
import DeriverInfo from "@/cpmponents/module/student/DeriverInfo";
import { ServerErrorHadnler } from "@/utils/ServerErrorHandler";
import { Phone, User, UsersIcon } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

export default async function page({params}) {
   
  
  const {id}= await params
  
  
  const res=await api.get(`student/find/${id}`).catch((err)=>ServerErrorHadnler(err))
  
      if(res.status!=200) return(
      <p>{res.meesage}</p>
    )

       

     const mockStudent = {
  id: 'STU-2026-001',
  name: 'محمد رضایی',
  nationalId: '0123456789',
  dateOfBirth: '1393/05/15',
  grade: 'ششم ابتدایی',
  school: 'دبستان شهید بهشتی',
  shift: 'صبح',
  address: 'تهران، خیابان ولیعصر، کوچه هفتم، پلاک 12',
  guardianName: 'علی رضایی',
  guardianNationalId: '9876543210',
  fatherPhone: '09123456789',
  motherPhone: '09121234567',
  registrationDate: '1405/10/01',
  status: 'active',
};

    return (
   <div className="p-3">
         <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-6">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <h1 className="text-neutral-900 mb-1">پروفایل دانش‌آموز</h1>
              <p className="text-neutral-600">جزئیات و سوابق پرداخت</p>
            </div>
            <div className="flex items-center gap-2">
              <span
                className={`px-3 py-1 rounded-full text-sm ${
                  res.data.student.active
                    ? 'bg-green-100 text-green-700'
                    : 'bg-neutral-300 text-neutral-700'
                }`}
              >
                {res.data.student.active? 'فعال' : 'غیرفعال'}
              </span>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Student Info */}
          <div className="lg:col-span-2 space-y-6">
            {/* Personal Information Card */}
            <div className="bg-white rounded-xl shadow-sm border border-neutral-200 p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                  <User className="w-5 h-5 text-blue-600" />
                </div>
                <h2 className="text-neutral-900">اطلاعات شخصی</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="text-sm text-neutral-600 mb-1 block">نام و نام خانوادگی</label>
                  <p className="text-neutral-900">{res.data.student.full_name}</p>
                </div>
                <div>
                  <label className="text-sm text-neutral-600 mb-1 block">کد ملی</label>
                  <p className="text-neutral-900 font-mono text-end" dir="ltr">{res.data.student.nationalcode}</p>
                </div>
                <div>
                  <label className="text-sm text-neutral-600 mb-1 block">تاریخ تولد</label>
                  <p className="text-neutral-900">{mockStudent.dateOfBirth}</p>
                </div>
                <div>
                  <label className="text-sm text-neutral-600 mb-1 block">پایه تحصیلی</label>
                  <p className="text-neutral-900">{grade.find(i=>i.value==res.data.student.grade).label}</p>
                </div>
                {/* <div>
                  <label className="text-sm text-neutral-600 mb-1 block">شناسه دانش‌آموز</label>
                  <p className="text-neutral-900 font-mono" dir="ltr">{mockStudent.id}</p>
                </div> */}
              </div>
            </div>

            {/* School Information Card */}
            <div className="bg-white rounded-xl shadow-sm border border-neutral-200 p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                
                </div>
                <h2 className="text-neutral-900">اطلاعات مدرسه</h2>
              </div>
        
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="text-sm text-neutral-600 mb-1 block">نام مدرسه</label>
                  <p className="text-neutral-900">{res.data.student.school_name}</p>
                </div>
                <div>
                  <label className="text-sm text-neutral-600 mb-1 block">شیفت تحصیلی</label>
                  <p className="text-neutral-900">{shiftSchool.find(i=>i.value==res.data.student.school_shift).label}</p>
                </div>
              </div>
            </div>

            {/* Address & Contact Card */}
            <div className="bg-white rounded-xl shadow-sm border border-neutral-200 p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
           
                </div>
                <h2 className="text-neutral-900">آدرس و تماس</h2>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="text-sm text-neutral-600 mb-1 block">آدرس منزل</label>
                  <p className="text-neutral-900">{res.data.student.address}</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-sm text-neutral-600 mb-1 block flex items-center gap-2">
                      <Phone className="w-4 h-4" />
                      شماره تماس پدر
                    </label>
                    <p className="text-neutral-900 font-mono text-end" dir="ltr">{res.data.student.father_phone}</p>
                  </div>
                  <div>
                    <label className="text-sm text-neutral-600 mb-1 block flex items-center gap-2">
                      <Phone className="w-4 h-4" />
                      شماره تماس مادر
                    </label>
                    <p className="text-neutral-900 font-mono text-end" dir="ltr">{res.data.student.mother_phone}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Guardian Info */}
          <div className="lg:col-span-1">
                                 <div className="bg-white rounded-xl shadow-sm border border-neutral-200 p-4  mb-4">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                  <UsersIcon className="w-5 h-5 text-blue-600" />
                </div>
                <h2 className="text-neutral-900">عملیات</h2>
              </div>

              <div className="grid grid-cols-3 gap-x-2">
          <DeleteStudent />
             <Link href={"/Admin/Students/1/Edit"} className="border py-1 border-orange-400 rounded-lg transition-all duration-200 ease-in-out hover:bg-orange-50  text-orange-400 text-center">
              ویرایش
             </Link>
            <ChangeStatusStudent id={res.data.student.id} />
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-sm border border-neutral-200 p-6  ">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                  <UsersIcon className="w-5 h-5 text-blue-600" />
                </div>
                <h2 className="text-neutral-900">ولی دانش‌آموز</h2>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="text-sm text-neutral-600 mb-1 block">نام ولی</label>
                  <p className="text-neutral-900">{res.data.student.guardian_fullname}</p>
                </div>
                <div>
                  <label className="text-sm text-neutral-600 mb-1 block">کد ملی ولی</label>
                  <p className="text-neutral-900 font-mono text-end" dir="ltr">{res.data.student.guardian_nationalcode}</p>
                </div>
              </div>
            </div>
  <DeriverInfo student={res.data.student} />
             
          </div>
        </div>

        {/* Payment Receipts Section */}
    <PaymentList  student_id={res.data.student.id} />
       

            </div>
             </div>
    );
}