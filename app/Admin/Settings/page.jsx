import { api } from "@/config/api";
import Admin from "@/cpmponents/module/Admin/Settings/AddAdmin";
import UploadFile from "@/cpmponents/module/Admin/Settings/UploadFile";
import Titlepage from "@/ui/Titlepage";
import { ServerErrorHadnler } from "@/utils/ServerErrorHandler";
import { GearIcon } from "@phosphor-icons/react/dist/ssr";
import { Adamina } from "next/font/google";

export default async function page() {

const res=await api.get("settings/admins").catch(err=>ServerErrorHadnler(err))

console.log(res)

    return (
        <div>
           <Titlepage Icon={GearIcon} title={"مدیریت"} desc={"مدیریت ادمین ها و قرار داد"} />
        <div className="bg-white p-6 rounded-xl shadow-sm border border-neutral-200 overflow-hidden mt-4">
         <UploadFile />

         <Admin admins={res.data.admins} />
        </div>
        </div>
    );
}