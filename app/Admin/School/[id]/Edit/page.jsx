import { api } from "@/config/api";
import AddSchool from "@/cpmponents/module/Admin/School/AddSchool";
import { ServerErrorHadnler } from "@/utils/ServerErrorHandler";

export default async function page({params}) {

    const {id}= await params

    const res=await api.get(`school/${id}`).catch(err=>ServerErrorHadnler(err))


    return (
      <AddSchool id={id} school={res.data.data} />
    );
}