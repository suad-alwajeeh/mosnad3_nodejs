
import React from 'react'
import { Link } from 'react-router-dom'

export default function Register() {
    return (
        <div class="container my-5">
        <div class="row justify-content-center my-5">
            <div class="col-md-8 col-sm-12  border py-3 px-4">
                <form action=" "  method="post">
                    <div class="row">
                        <div class="col-12">
                            <div class="h2 text-primary fw-bold border-bottom">

                                Rigister
                            </div>
                            <div class="h6 text-grey">

                                enter your data,please...


                            </div>
                        </div>
                        <div class="col-sm-12 col-md-6 my-1">
                            <label for="email">User Name</label>
                            <div>
                                <input type="text" oninput="" class="form-control" name="name" required id="" />
                            </div>
                            <div class="text-dark">
                                *the name is required
                            </div>
                        </div>
                        <div class="col-sm-12 col-md-6 my-1">
                            <label for="email">User Email</label>
                            <div>
                                <input type="email" class="form-control" name="email" required id="" />
                            </div>
                            <div class="text-dark">
                                *the email is required
                            </div>
                        </div>

                        <div class="col-sm-12 col-md-12 my-1">
                            <label for="email">User Mobile</label>
                            <div>
                                <input type="text" class="form-control" name="mobile" required id="" />
                            </div>
                            <div class="text-dark">
                                *the mobile is required
                            </div>
                        </div>
                        <div class="col-sm-12 col-md-6 my-1">
                            <label for="email">Password</label>
                            <div>
                                <input type="text" class="form-control" name="password" required id="" />
                            </div>
                            <div class="text-dark">
                                *the Password is required
                            </div>
                        </div>
                        <div class="col-sm-12 col-md-6 my-1">
                            <label for="email">Password Confirme</label>
                            <div>
                                <input type="password" class="form-control" name="password_confirm" required id="" />
                            </div>
                            <div class="text-dark">
                                *the password confirm is required
                            </div>
                        </div>

                        <div class="col-12 my-1">
                            <button type="submit" class="btn btn-primary w-100">Register</button>
                            <div class="d-flex justify-content-start">
                                <div class="text-grey mx-1">do you  have account,</div>

                                <Link to={`/login`} class="text-primary">login</Link>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
    )
}

