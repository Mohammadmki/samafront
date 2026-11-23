import { api } from "@/config/api";
import { paymentStatus } from "@/constans/payment";
import { grade, shiftSchool } from "@/constans/school";
import PaymentCard from "@/ui/PaymentCard";
import { dateformat, formatPersianDate } from "@/utils/date";
import { formatCurrency } from "@/utils/Format";
import { ServerErrorHadnler } from "@/utils/ServerErrorHandler";
import { UserIcon } from "@phosphor-icons/react";
import { Calendar, CircleWavyCheckIcon, Clock, ClockAfternoonIcon, CreditCard, Phone, User, UserCircleCheckIcon, UserCircleIcon, UsersIcon } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import { Fragment } from "react";

export default async function page({params}) {


const {id}= await params


const res=await api.get(`student/find/${id}`).catch((err)=>ServerErrorHadnler(err))

const payments=await api.get(`peyment/student/${id}`).catch((err)=>ServerErrorHadnler(err))

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
                  !!res.data.student.active
                    ? 'bg-green-100 text-green-700'
                    : 'bg-neutral-200 text-neutral-700'
                }`}
              >
                {!!res.data.student.active ? 'فعال' : 'غیرفعال'}
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
                  <p className="text-neutral-900">{formatPersianDate(res.data.student.birthdate)}</p>
                </div>
                <div>
                  <label className="text-sm text-neutral-600 mb-1 block">پایه تحصیلی</label>
                  <p className="text-neutral-900">{grade.find((i)=>i.value==res.data.student.grade).label}</p>
                </div>
                {/* <div>
                  <label className="text-sm text-neutral-600 mb-1 block">شناسه دانش‌آموز</label>
                  <p className="text-neutral-900 font-mono" dir="ltr">{mockStudent.id}</p>
                </div> */}
                <div>
                  <label className="text-sm text-neutral-600 mb-1 block">تاریخ ثبت‌نام</label>
                  <p className="text-neutral-900">{new Date(res.data.student.updatedAt).toLocaleDateString("fa-IR")}</p>
                </div>
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
                  <p className="text-neutral-900">{shiftSchool.find((i)=>i.value==res.data.student.school_shift).label}</p>
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
            <div className="bg-white rounded-xl shadow-sm border border-neutral-200 p-6 sticky top-6">
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
          </div>
        </div>

        {/* Payment Receipts Section */}
        <div className="mt-6">
          <div className="bg-white rounded-xl shadow-sm border border-neutral-200 py-6 max-md:px-3">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center ms-2 ">
                <CreditCard className="w-5 h-5 text-blue-600" />
              </div>
              <h2 className="text-neutral-900">سوابق پرداخت</h2>
            </div>

            {/* Desktop Table */}
            <div className="hidden md:block overflow-x-auto max-h-72">
              <table className="w-full text-center">
                <thead className="sticky top-0 ">
                  <tr className="border-b border-neutral-200 bg-white md:text-sm lg:text-base">
                    <th className=" py-3 px-4 text-neutral-700">تاریخ</th>
                    <th className=" py-3 px-4 text-neutral-700">نوع پرداخت</th>
                    <th className=" py-3 px-4 text-neutral-700">وضعیت</th>
                    <th className=" py-3 px-4 text-neutral-700">مبلغ</th>
                    <th className=" py-3 px-4 text-neutral-700">عملیات</th>
                  </tr>
                </thead>
                <tbody>
                  {payments.data.payments.reverse().map((payment) => (
                    <tr key={payment.id} className="border-b border-neutral-100 hover:bg-neutral-50 transition-colors md:text-sm lg:text-base">
                   
                      <td className="py-4 px-4 text-neutral-700 flex items-center text-center">
                     
                        {new Date(payment.createdAt).toLocaleDateString("fa-IR")}
                      </td>
                      <td className="py-4 px-4 text-neutral-700">
                    {payment.title}
                      </td>
                      <td className=" text-neutral-900">
                        <span className={` ${paymentStatus.find((i)=>i.value==payment.status).style} rounded-full text-white py-1 px-1`}>

                        {paymentStatus.find((i)=>i.value==payment.status).label}
                        </span>
                        </td>
                      <td className="py-4 px-4 text-neutral-900">{formatCurrency(payment.amount)}</td>
                      
                         <td className="py-4 px-4 text-blue-600 justify-center items-center font-semibold flex flex-row gap-x-4" dir="ltr">
                       {payment.status !== 'paid'&& <Link className="text-blue-600 font-semibold" href={'/'}>پرداخت</Link>}
                     <Link className="text-blue-600 font-semibold" href={`/Panel/${id}/${payment.id}`}>مشاهده</Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
                 <div className="md:hidden space-y-4 ">
              {payments.data.payments.map((payment) => (
                <Fragment key={payment.id}>

           <PaymentCard payment={payment} />
                </Fragment>
              ))}
            </div>
            </div>
            </div>
       

            </div>
             </div>
    );
}