import React, { useState } from 'react';



const Home = ()=>{

    const [username,setUserName] = useState("");

   return(
     
<div className="card">
  <div className="card-body">
    <h5 className="card-title">Welcome {username} </h5>
    <button ckassName="btn btn-primary">Logout</button>
  </div>
</div>
    );
}

export default Home;
