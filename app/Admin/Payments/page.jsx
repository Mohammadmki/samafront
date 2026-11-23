import { api } from "@/config/api";
import FilterPayment from "@/cpmponents/module/Admin/Peyment/FilterPayment";
import PaymentList from "@/cpmponents/module/panel/PaymentList";
import Titlepage from "@/ui/Titlepage";
import { ServerErrorHadnler } from "@/utils/ServerErrorHandler";
import { MoneyIcon } from "@phosphor-icons/react/dist/ssr";

export default async function page({searchParams}) {

      const query=await searchParams

  const queryString = new URLSearchParams(query).toString();

    const res=await api.get(`/peyment?${queryString}`).catch((err)=>ServerErrorHadnler(err))

    return (
        <div>

<Titlepage title={"لیست فیش ها"} desc={"مدیریت شهریه های دانش آموزان"} Icon={MoneyIcon}  />
          <FilterPayment />

          <PaymentList payments={res.data.peyments} paginates={res.data.pagination} />



        </div>
    );
}