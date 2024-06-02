
import React from 'react'
import {Navigate } from 'react-router-dom';
import {jwtDecode} from'jwt-decode';
import Swal from 'sweetalert2'
// import { relativeTimeRounding } from 'moment';
function ProtectedRoutesD({children}) {
    const token = localStorage.getItem('UserToken');
    if(!token){
        
        return <Navigate to='/login' replace/>
    }else{
        const decoded = jwtDecode(token);
        if(!decoded.isDoctor===true)
            {
                Swal.fire({
                    icon: "error",
                    title: "Youe are not allowed",
                    
                   
                  });
                    

                        return  <Navigate to="/SecretariaHome" />;
                    
                   
                   
            }
         console.log(decoded);

    }
 
 return children;
  
}

export default ProtectedRoutesD