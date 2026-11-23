export const peymanetStatus=[
{value:"nopay",label:"فیشی وجود ندارد",colors:"bg-blue-500 text-blue-100"},
{value:"pending",label:"در انتظار پرداخت",colors:"bg-yellow-400 text-yellow-100"},
{value:"paid",label:"پرداخت شده",colors:"bg-green-500 text-green-300"},
{value:"gateway",label:"پرداخت با درگاه",colors:"bg-green-500 text-green-300"},
{value: "driver", label: "پرداخت به راننده",colors:"bg-green-500 text-green-300"},
{value: "card_to_card", label: "کارت به کارت",colors:"bg-green-500 text-green-300"},
{value:"failed",label:"پرداخت رد شده",colors:"bg-red-500 text-red-200"},
]
export const registerSteps=[
    {value:"info_completed",label:"تکمیل اطلاعات",step:1},
    {value:"contract_signed",label:'امضای قرار داد',step:2},
    {value:"prepaid_done",label:" پیش پرداخت",step:3},
    {value:"compelete",label:"تکمیل ثبت نام",step:4},
    {value:"deleted",label:"حذف شده",step:null},

]

export const active=[
    {value:0,label:"غیر فعال"},
    {value:1,label:"فعال"},
]