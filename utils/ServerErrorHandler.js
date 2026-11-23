import { redirect } from "next/navigation"


export const ServerErrorHadnler=(err,Router)=>{

    console.log(err)

    if(err?.response?.status==401){
       
        redirect("/Login")
    }

    if(err?.response?.status!=500){
          return{
            status:err?.response?.status,
            message:err.response.data.message  
        }
    }

 
    

    return err.response
}