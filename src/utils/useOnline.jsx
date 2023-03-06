import { useState,useEffect } from "react";

const useOnline = () => {

    const[isOnline,setIsOnline] = useState(true);
 
    //esa nahi karna hai, functions ko useEffect ke andar hi define karna hai
    // const handleOnline = ()=>{
    //     return (
    //         setIsOnline(true)
    //     );
    // }

    // const handleOffline = ()=>{
    //     return (
    //         setIsOnline(false)
    //     );
    // }

    useEffect(()=>{
        const handleOnline = ()=>{
            return (
                setIsOnline(true)
            );
        }
        const handleOffline = ()=>{
            return (
                setIsOnline(false)
            );
        }
    
        window.addEventListener("online",handleOnline);
        window.addEventListener("offline",handleOffline);

        return ()=>{
            window.removeEventListener("online",handleOnline);
            window.removeEventListener("offline",handleOffline);
        }
    },[])


return isOnline;
}

export default useOnline;