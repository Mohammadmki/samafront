import { getClientCookie } from "@/utils/CookieClient";
import { GetServerCookie } from "@/utils/CookieServer";
import axios from "axios";


export const api =axios.create({
    baseURL:process.env.NEXT_PUBLIC_API_BASE_URL,
    headers:{
        'Content-Type':"application/json",
        
        
    }
})

api.interceptors.request.use(async(res)=>{
let cookie=null;
    if(typeof window !="undefined"){
        cookie = await getClientCookie()
    }else{
        cookie= await GetServerCookie()
    }
   if(cookie){
    res.headers={
        'Authorization':cookie
    }
   }

   return res

})




