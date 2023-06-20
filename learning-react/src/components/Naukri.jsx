import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import NaukriCompo from './NaukriCompo';

const Naukri = () => {
    const [data,setData]=useState([]);
    console.log(data[0])
    useEffect(()=>{
        fetch(`https://suraj-996.github.io/Naukri.com-API/api.json`)
        .then((res)=>res.json())
        .then((data)=>setData(data.content));
    },[])
    return (
        <div>
             <h1 style={{textAlign:"center",fontSize:"50px"}}>Naukri Details</h1>
            {
                data.map((e)=>(
                    <NaukriCompo title={e.job_title} area={e.functional_area} role={e.role} category={e.role_category} skills={e.key_skills} salary={e.job_salary} experience={e.job_experience_required} location={e.location} />
                )) 
            }
        </div>
    )
}

export default Naukri

// functional_area
// : 
// "IT Software - Application Programming , Maintenance"
// industry
// : 
// null
// job_experience_required
// : 
// "5 - 10 yrs"
// job_salary
// : 
// " 3,00,000 - 8,00,000 PA. "
// job_title
// : 
// " Looking for Linux Architect (with Infra Design Experience)"
// key_skills
// : 
// " Linux Administration| linux admin| linux administrator| linux system administrator| linux system engineer"
// location
// : 
// "Mumbai"
// role
// : 
// "Solution Architect / Enterprise Architect"
// role_category
// : 
// "System Design/Implementation/ERP/CRM"
// timestamp
// : 
// "2019-07-05 20:36:02 +0000"
// uniq_id
// : 
// "0016ad26201ccc07ec3395e5defea2b0"