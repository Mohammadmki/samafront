import { api } from "@/config/api";
import PaymentDetail from "@/cpmponents/module/panel/PaymentDetail";

export default async function page({params}) {

  const {payment,id}=await params

  const res=await api.get(`peyment/${payment}`)

  const student=await api.get(`student/find/${id}`)
console.log(student)
    return (
      <PaymentDetail peyment={res.data.data} student={student.data.student}  />
    );
}