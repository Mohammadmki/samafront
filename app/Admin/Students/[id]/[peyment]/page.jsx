import { api } from "@/config/api";
import PaymentDetail from "@/cpmponents/module/panel/PaymentDetail";
import { ServerErrorHadnler } from "@/utils/ServerErrorHandler";

export default async function page({params}) {

  const {peyment,id}=await params

  

  const student=await api.get(`/student/find/${id}`)


  const res=await api.get(`/peyment/${peyment}`).catch((err)=>ServerErrorHadnler(err))

    return (
      <PaymentDetail student={student.data.student} peyment={res.data.data} />
    );
}