import { api } from "@/config/api";
import AddDeriver from "@/cpmponents/module/Admin/Deriver/AddDeriver";
import { ServerErrorHadnler } from "@/utils/ServerErrorHandler";

export default async function page({params}) {

  const {id}=await params

  const res=await api.get(`deriver/${id}`).catch(err=>ServerErrorHadnler(err))


  if(res.status!=500&&res.status!=200) return <p>{res.message}</p>




    return (
       <AddDeriver data={res.data.deriver}  />
    );
}