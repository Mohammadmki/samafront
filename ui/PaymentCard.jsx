import { paymentStatus } from "@/constans/payment";
import { formatCurrency } from "@/utils/Format";
import { ClockAfternoonIcon, UserCircleCheckIcon } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import Cookies from 'js-cookie';
export default function PaymentCard({payment}) {

    return (
        <>

    
            <div key={payment.id} className="border border-neutral-200 rounded-lg p-4 pb-0 ">
                  <div className="flex items-start justify-between mb-3">
                    <p className="text-black">{payment.title}</p>

                  </div>

                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-neutral-600">تاریخ:</span>
                      <span className="text-neutral-900"> {new Date(payment.createdAt).toLocaleDateString("fa-IR")}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-neutral-600">مبلغ:</span>
                      <span className="text-neutral-900">{formatCurrency(payment.amount)} </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-neutral-600">روش پرداخت:</span>
                      <span className="text-neutral-900">{ paymentStatus.find(i=>i.value==payment.status).label}</span>
                    </div>
                    <div className="grid grid-cols-2">

                    <Link className="w-full text-blue-600 font-bold text-center py-1.5 border-t border-e border-neutral-200 block" href={'/'}>پرداخت</Link>
                     <Link className="w-full text-blue-600 font-bold text-center py-1.5 border-t border-t-neutral-200 block" href={`/${Cookies.get("role")=="admin"?"Admin":"Panel"}${Cookies.get("role")=="admin"?"/Students":"/"}${payment.student_id}/${payment.id}`}>مشاهده</Link>
                    </div>
                  </div>
                </div>
                
                </>
    );
}