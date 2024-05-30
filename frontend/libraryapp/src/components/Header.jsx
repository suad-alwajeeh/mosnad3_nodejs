import React from 'react'
import { Link,useNavigate } from "react-router-dom";
import { logout } from '../models/authModel';

export default function Header(){
  const navigate = useNavigate();

  const user_logout = async () => {
      await logout( )
          .then((res) => {
               navigate("/login");

          })
          .catch((err) =>  {});
  };
    return <nav class="navbar navbar-expand-lg bg-dark">
    <div class="container-fluid">
      <Link  class="navbar-brand text-white" to={`dashboard`}>SUAD org.</Link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll"
        aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarScroll">
        <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll"  >

        </ul>
        <form class="d-flex" role="search">
          <button class="btn btn-outline-light" onClick={user_logout}  >logout</button>
        </form>
      </div>
    </div>
  </nav>
} 