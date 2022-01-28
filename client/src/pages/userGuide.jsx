import React from "react";
import guide from '../assets/userGuide.mp4';

const UserGuide=()=>{
    return(
        <div>
            <video width="100%" height="100%" controls src={guide}/>
        </div>
    )
}

export default UserGuide;