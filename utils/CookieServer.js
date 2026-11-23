

export const GetServerCookie=async()=>{
     if (typeof window != "undefined") {
        return null; // اگر در سرور ایمپورت شود، بلافاصله برمی‌گردد
    }
    
   const { cookies } = await import("next/headers"); 
   const cookieStore = await cookies()
  const sessionToken =  cookieStore.get('access_token')??null;
  if(!sessionToken) return null
  return sessionToken.value

}