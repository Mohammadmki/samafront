'use client'

import PaymentCard from "@/ui/PaymentCard";
import { CircleWavyCheckIcon, Clock, CreditCardIcon } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import Addpeyment from "../Admin/Peyment/Addpeyment";
import { Fragment, useEffect, useState } from "react";
import { api } from "@/config/api";
import { paymentStatus } from "@/constans/payment";
import { formatCurrency } from "@/utils/Format";
import Cookies from 'js-cookie';
import Pagination from "@/ui/pagination";

export default function PaymentList({student_id,payments,paginates}) {

  const [payment,setPayment]=useState([])
  const [paginate,setPaginate]=useState("")

  useEffect(()=>{
    const getpeyment=async()=>{
      if(payments){
        setPayment(payments)
       setPaginate(paginates)
    
      }else{
      const res=await api.get(`/peyment${student_id?`/student/${student_id}`:""}`)
      if(res.status==200){
        setPayment(res.data.payments)
        setPaginate(res.data.pagination)
      }
    }
    }
    getpeyment()
  },[payments])
  
    return (
     <div className="mt-6">
          <div className="bg-white rounded-xl shadow-sm border border-neutral-200 py-6 max-md:px-3">
  
            <div className="flex flex-col md:flex-row md:justify-between gap-3 mb-3 ">
                <div className="flex gap-3 items-center ">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center ms-2  ">
                <CreditCardIcon className="w-5 h-5 text-blue-600" />
              </div>
              <h2 className="text-neutral-900">سوابق پرداخت</h2>
               </div>
           <div className="px-2">
           {student_id&&<Addpeyment student_id={student_id} />}
           </div>
            </div>

            {/* Desktop Table */}
            <div className="hidden md:block overflow-x-auto max-h-72">
              <table className="w-full text-center">
                <thead className="  ">
                  <tr className="border-b border-neutral-200 bg-white md:text-sm lg:text-base">
                     <th className=" py-3 px-4 text-neutral-700">عنوان</th>
                    <th className=" py-3 px-4 text-neutral-700">تاریخ</th>
                    <th className=" py-3 px-4 text-neutral-700">مبلغ</th>
                    <th className=" py-3 px-4 text-neutral-700">وضعیت</th>
                    <th className=" py-3 px-4 text-neutral-700">عملیات</th>
                  </tr>
                </thead>
                <tbody>
                  {payment.reverse().map((payment) => (
                    <tr key={payment.id} className="border-b border-neutral-100 hover:bg-neutral-50 transition-colors md:text-sm lg:text-base">
                   
                      <td className="py-4 px-4 text-neutral-700">{payment.title}</td>

                      <td className="py-4 px-4 text-neutral-700  text-center">
                        {new Date(payment.createdAt).toLocaleDateString("fa-IR")}
                      </td>

                      <td className="py-4 px-4 text-neutral-700">{formatCurrency(payment.amount)}</td>
                      <td className="py-4 px-4">
                        <span
                          className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm ${paymentStatus.find(i=>i.value==payment.status).style}`}
                        >
                          {
                            paymentStatus.find(i=>i.value==payment.status).label
                          }
                        </span>
                      </td>
                         <td className="py-4 px-4 text-blue-600 justify-center items-center font-semibold flex flex-row gap-x-4" dir="ltr">
      
                     <Link  className="text-blue-600 font-semibold" href={`/${Cookies.get("role")=="admin"?"Admin":"Panel"}${Cookies.get("role")=="admin"?"/Students/":"/"}${payment.student_id}/${payment.id}`}>مشاهده</Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
                 <div className="md:hidden space-y-4 ">
              {payment.map((payment) => (
                <Fragment key={payment.id}>

           <PaymentCard payment={payment} />
                </Fragment>
              ))}
            </div>
                {paginate&& <Pagination paginate={paginate} />}
            </div>
            </div>
    );
}