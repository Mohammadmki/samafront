import { api } from "@/config/api";
import EditPage from "@/cpmponents/template/panel/EditPage";
import { ServerErrorHadnler } from "@/utils/ServerErrorHandler";

export default async function page({params}) {

    const {id}= await params


    const res=await api.get(`student/find/${id}`).catch((err)=>ServerErrorHadnler(err))

    return (
     <EditPage data={res.data.student} />
    );
}