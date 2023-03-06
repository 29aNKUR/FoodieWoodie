import { useState } from "react";



const useAuth = () => {
    const[status,setStatus] = useState(true);

    function authorise(){
        if(status){
            setStatus(true);
        }
        else{
            setStatus(false);
        }

    useEffect(()=>{
        authorise();
    },[]
    )
  }
    return status;
}

export default useAuth;