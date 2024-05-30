import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <div class="container my-5">
        <div class="row justify-content-center my-5">
            <div class="col-md-8 col-sm-12  border py-3 px-4">
              welcome on board
              <div className='text-center'>
              <Link className='btn btn-primary m-1'  to={`/dashboard`} >dashboard</Link> 
              <Link className='btn btn-primary m-1'  to={`/register`} >Register</Link> 
              <Link className='btn btn-primary m-1'  to={`/login`} >Login</Link> 
                 </div>
              </div>
            </div>
     </div>
    )
}