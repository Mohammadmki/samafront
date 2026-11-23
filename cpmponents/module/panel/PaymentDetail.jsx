import { ArrowRightIcon, CalendarBlankIcon, CircleWavyCheckIcon, CoinsIcon, CreditCardIcon, FileTextIcon, HashIcon, UploadIcon, User, XCircleIcon } from "@phosphor-icons/react/dist/ssr";
import EditStatusPeyment from "../Admin/Peyment/EditStatusPeyment";
import { paymentStatus } from "@/constans/payment";
import { formatCurrency } from "@/utils/Format";

export default function PaymentDetail({peyment,student}) {

    return (
   <div className="min-h-screen bg-neutral-50 pb-24 md:pb-8 relative" dir="rtl">
      {/* Header */}
      


      <div className="max-w-3xl mx-auto px-4 py-6 space-y-4">
        {/* Status Badge Card */}
        <div className="bg-white rounded-xl shadow-sm border border-neutral-200 p-6">
          <div className="flex items-center justify-center">
            <div className={`inline-flex items-center gap-2 px-6 py-3 rounded-full ${paymentStatus.find((i)=>i.value==peyment.status).style}`}>
              <span className="text-lg">{paymentStatus.find((i)=>i.value==peyment.status).label}</span>
            </div>
          </div>
        </div>

       <EditStatusPeyment payment={peyment} />

        {/* Receipt Information Card */}
        <div className="bg-white rounded-xl shadow-sm border border-neutral-200 p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
              <FileTextIcon className="w-5 h-5 text-blue-600" />
            </div>
            <h2 className="text-neutral-900">اطلاعات رسید</h2>
          </div>

          <div className="space-y-5">
            {/* Student Name */}
            <div className="flex items-start gap-3">
              <User className="w-5 h-5 text-neutral-500 mt-1 flex-shrink-0" />
              <div className="flex-1">
                <p className="text-sm text-neutral-600 mb-1">نام دانش‌آموز</p>
                <p className="text-neutral-900">{student.full_name}</p>
              </div>
            </div>

            {/* Receipt Title */}
            <div className="flex items-start gap-3">
              <FileTextIcon className="w-5 h-5 text-neutral-500 mt-1 flex-shrink-0" />
              <div className="flex-1">
                <p className="text-sm text-neutral-600 mb-1">عنوان رسید</p>
                <p className="text-neutral-900">{peyment.title}</p>
              </div>
            </div>

            {/* Payment Type */}
            <div className="flex items-start gap-3">
              <CreditCardIcon className="w-5 h-5 text-neutral-500 mt-1 flex-shrink-0" />
              <div className="flex-1">
                <p className="text-sm text-neutral-600 mb-1">نام مدرسه</p>
                <p className="text-neutral-900">{student.school_name}</p>
              </div>
            </div>

            {/* Amount - Highlighted */}
            <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 -mx-2">
              <div className="flex items-center gap-3">
                <CoinsIcon className="w-6 h-6 text-blue-600 flex-shrink-0" />
                <div className="flex-1">
                  <p className="text-sm text-blue-700 mb-1">مبلغ قابل پرداخت</p>
                  <p className="text-2xl text-blue-900 font-semibold">{formatCurrency(peyment.amount)}</p>
                </div>
              </div>
            </div>

            {/* Due Date */}

              <div className="flex items-start gap-3">
                <CalendarBlankIcon className="w-5 h-5 text-neutral-500 mt-1 flex-shrink-0" />
                <div className="flex-1">
                  <p className="text-sm text-neutral-600 mb-1">تاریخ</p>
                  <p className="text-neutral-900">{new Date(peyment.createdAt).toLocaleDateString("fa-IR")}</p>
                </div>
              </div>


            {/* Receipt Number */}
            {/* <div className="flex items-start gap-3">
              <HashIcon className="w-5 h-5 text-neutral-500 mt-1 flex-shrink-0" />
              <div className="flex-1">
                <p className="text-sm text-neutral-600 mb-1">شماره رسید</p>
                <p className="text-neutral-900 font-mono" dir="ltr">{Payment.receiptNumber}</p>
              </div>
            </div> */}
          </div>
        </div>

        {/* Description Section */}
        <div className="bg-white rounded-xl shadow-sm border border-neutral-200 p-6">
          <h3 className="text-neutral-900 mb-3">توضیحات</h3>
          <p className="text-neutral-700 leading-relaxed">{peyment.description}</p>
        </div>

        {/* Payment Result Section - Conditional */}
        {/* {Payment.status === 'paid' && Payment.trackingNumber && (
          <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl shadow-sm border border-green-200 p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                <CircleWavyCheckIcon className="w-7 h-7 text-green-600" />
              </div>
              <div>
                <h3 className="text-green-900">پرداخت موفق</h3>
                <p className="text-sm text-green-700">تراکنش با موفقیت انجام شد</p>
              </div>
            </div>

            <div className="space-y-4 bg-white/60 backdrop-blur rounded-lg p-4">
          
              <div className="flex items-center justify-between">
                <span className="text-sm text-neutral-600">کد پیگیری</span>
                <span className="text-neutral-900 font-mono" dir="ltr">{Payment.trackingNumber}</span>
              </div>

       
              <div className="flex items-center justify-between">
                <span className="text-sm text-neutral-600">تاریخ و زمان پرداخت</span>
                <span className="text-neutral-900">
                  {Payment.paymentDate} - {Payment.paymentTime}
                </span>
              </div>

        
              <div className="flex items-center justify-between">
                <span className="text-sm text-neutral-600">روش پرداخت</span>
                <span className="text-neutral-900">{Payment.paymentMethod}</span>
              </div>
            </div>
          </div>
        )} */}

        {/* Action Buttons - For Pending Payments */}
        {/* {Payment.status === 'pending' && (
          <div className="space-y-3">
            <button className="w-full bg-blue-600 text-white py-4 px-6 rounded-xl hover:bg-blue-700 transition-colors duration-200 shadow-sm flex items-center justify-center gap-3">
              <CreditCardIcon className="w-5 h-5" />
              <span>پرداخت آنلاین</span>
            </button>
            
            <button className="w-full bg-white text-neutral-700 py-4 px-6 rounded-xl hover:bg-neutral-50 transition-colors duration-200 border border-neutral-300 flex items-center justify-center gap-3">
              <UploadIcon className="w-5 h-5" />
              <span>ارسال فیش پرداخت</span>
            </button>
          </div>
        )} */}

        {/* Failed Payment Message */}
        {/* {Payment.status === 'failed' && (
          <div className="bg-red-50 rounded-xl shadow-sm border border-red-200 p-6">
            <div className="flex items-start gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                <XCircleIcon className="w-6 h-6 text-red-600" />
              </div>
              <div>
                <h3 className="text-red-900 mb-1">پرداخت ناموفق</h3>
                <p className="text-sm text-red-700">تراکنش با خطا مواجه شد. لطفاً مجدداً تلاش کنید.</p>
              </div>
            </div>

            <button className="w-full bg-red-600 text-white py-3 px-6 rounded-lg hover:bg-red-700 transition-colors duration-200 shadow-sm">
              تلاش مجدد
            </button>
          </div>
        )} */}
       {(peyment.status=="failed"||peyment.status=="pending")&& <button className="w-full bg-blue-600 py-2 rounded-lg lg:text-lg max-sm:text-sm">
        پرداخت
      </button>}
      </div>

      {/* Fixed Bottom Action Bar - Mobile Only */}
      {/* {Payment.status === 'pending' && (
        <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-neutral-200 p-4 shadow-lg">
          <button className="w-full bg-blue-600 text-white py-4 px-6 rounded-xl hover:bg-blue-700 transition-colors duration-200 shadow-sm flex items-center justify-center gap-3">
            <CreditCardIcon className="w-5 h-5" />
            <span>پرداخت آنلاین</span>
          </button>
        </div>
      )} */}
      
    </div>
    );
}