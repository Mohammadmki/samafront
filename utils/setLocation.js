export const setLocation=(value,setdata)=>{
    setdata((prev)=>({...prev,lat:value.lat,lng:value.lng}))
}