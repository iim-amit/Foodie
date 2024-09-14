import React from 'react';
import { NavLink } from 'react-router-dom';


const Error =()=>{
 return <>
    <div className='setStyle2'>
     <h1>404 Error Page</h1>
     <p>Sorrry, This page doesn't exit</p>
     <NavLink to= "/"> Go Back </NavLink>
    </div>
 </>
};

export default Error;