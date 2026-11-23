import Cookies from 'js-cookie';



export const getClientCookie=async()=>{
     if (typeof window === "undefined") {
        return null; // اگر در سرور ایمپورت شود، بلافاصله برمی‌گردد
    }
    const cookie=Cookies.get("access_token")
     return cookie

    
}