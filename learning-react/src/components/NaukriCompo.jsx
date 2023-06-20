import React from 'react'
import "./naukri.css";
const NaukriCompo = ({title,area,role,category,skills,salary,experience,location,}) => {
  return (
    <div>
       
        <div className='naukri'>
            <h3>Title - {title==null?"Not Available at the moment":title }</h3>
            <p>Location - {location==null?"Not Available at the moment":location}</p>
            <p>Role - {role==null?"Not Available at the moment":role}</p>
            <p>Skills - {skills==null?"Not Available at the moment":skills}</p>
            <p>Salary - {salary==null?"Not Available at the moment":salary}</p>
            <p>Area - {area==null?"Not Available at the moment":area}</p>
            <p>Category - {category==null?"Not Available at the moment":category}</p>
            <p>Experience - {experience==null?"Not Available at the moment":experience}</p>
        </div>
    </div>
  )
}

export default NaukriCompo

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