import React from 'react'

//Local imports   
import "./Profile.css"

function Profile({image, job, name}) {
   
   return (
      <div className="profile">
         <div className="profile-img-wrapper">
            <img src={image} alt={name} className="w-100"/>
         </div>
         <div className="profile-body">
            <h2 className="profile-name">{name}</h2>
            <div className="profile-job"><p>{job}</p></div>
         </div>
      </div>
   )
}

export default Profile
