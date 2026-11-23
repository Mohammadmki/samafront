import toast from "react-hot-toast"

export const ClientError=async(err,seterr)=>{

    if(err.response.status==400){

      if(err?.response?.data?.errors){
       toast.error("فرم نامعتبر")
        seterr(err.response.data.errors)
      }
      if(err?.response?.data?.message){
        if(seterr){
          seterr(null)
        }
        toast.error(err.response.data.message)
      }
    }else if(err.response.status!=500){
     
       toast.error(err.response.data.message)
    }
        if(err.response.status==401){
          window.location.href='/'
        }
    return err
}