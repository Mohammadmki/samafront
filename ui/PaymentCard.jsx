import { ClockAfternoonIcon, UserCircleCheckIcon } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

export default function PaymentCard({payment}) {
    return (
        <>
    
            <div key={payment.id} className="border border-neutral-200 rounded-lg p-4 pb-0 ">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <p className="text-neutral-900 mb-1">{payment.type}</p>
                      <p className="text-sm text-neutral-600 font-mono" dir="ltr">{payment.receiptNumber}</p>
                    </div>
                    <span
                      className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm ${
                        payment.status === 'paid'
                          ? 'bg-green-100 text-green-700'
                          : 'bg-amber-100 text-amber-700'
                      }`}
                    >
                      {payment.status === 'paid' ? (
                        <>
                          <UserCircleCheckIcon className="w-4 h-4" />
                          پرداخت شده
                        </>
                      ) : (
                        <>
                          <ClockAfternoonIcon className="w-4 h-4" />
                          در انتظار
                        </>
                      )}
                    </span>
                  </div>

                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-neutral-600">تاریخ:</span>
                      <span className="text-neutral-900">{payment.date}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-neutral-600">مبلغ:</span>
                      <span className="text-neutral-900">2،000،000 </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-neutral-600">روش پرداخت:</span>
                      <span className="text-neutral-900">{payment.paymentMethod}</span>
                    </div>
                    <div className="grid grid-cols-2">

                    <Link className="w-full text-blue-600 font-bold text-center py-1.5 border-t border-e border-neutral-200 block" href={'/'}>پرداخت</Link>
                     <Link className="w-full text-blue-600 font-bold text-center py-1.5 border-t border-t-neutral-200 block" href={'/Panel/2/1'}>مشاهده</Link>
                    </div>
                  </div>
                </div>
                
                </>
    );
}