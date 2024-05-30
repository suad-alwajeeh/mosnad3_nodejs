
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useEffect, useState } from "react";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { login } from '../models/authModel';
export default function Login() {
    const userInfo = localStorage.getItem("userData");
    const [ReqError, setReqError] = useState("");
    const [ReqErrors, setReqErrors] = useState("");

    const navigate = useNavigate();
    //form validation
    const YupForm = Yup.object().shape({
        password: Yup.string()
            .required("This value is required")
            .min(8, "Proivde atleast 8 chars"),
        //email: Yup.string().required("Email required").email("Enter valid Email "),
        email: Yup.string().required("Email required").min(6, "Enter valid Email "),
    });
    const resolverForm = { resolver: yupResolver(YupForm) };
    const { register, handleSubmit, formState } = useForm(resolverForm);
    const { errors } = formState;

    const onRHFSubmit = async (data, e) => {

        await login({
            username: data.email,
            password: data.password,
            expiresInMins: 30,
        })
            .then((res) => {
                 setReqError("");
                 localStorage.setItem("userData","res.data.token")
                 localStorage.setItem("userData",res.data.token)
                 navigate("/dashboard");
 
            })
            .catch((err) => {
                const statusCode = err.status;
                console.log(err, statusCode);
                switch (statusCode) {
                    case 500:
                        setReqError("server error");
                        break;
                    case 400:
                        setReqError(" there is an error in your data");
                        break;
                   
                    default:
                        break;
                }});
    };
    return (

        <div class="container my-5">
            <div class="row justify-content-center my-5">
                <div class="col-md-4 col-sm-12  border py-3 px-4 pt-2">
                    {ReqError && <p style={{ color: "red" }}>{`Error: ${ReqError}`}</p>}
                    <form onSubmit={handleSubmit(onRHFSubmit)}>
                        <div class="row">
                            <div class="col-12">
                                <div class="h2 text-primary fw-bold border-bottom">

                                    LOGIN
                                </div>
                                <div class="h6 text-grey">

                                    Welcome Back...


                                </div>
                            </div>
                            <div class="col-12 my-1">
                                <label  >User Email</label>
                                <div>
                                    <input
                                        type="text"
                                        name="email"
                                        placeholder="Email Address"
                                        className={`form-control ${errors.email ? "is-invalid" : ""
                                            }`}
                                        {...register("email", {})}
                                    />
                                </div>
                                <>
                                    {errors.email?.message}
                                    <div className="text-danger">{ReqErrors?.email}</div></>



                            </div>
                            <div class="col-12 my-1">
                                <label >User Password</label>
                                <div  >

                                    <input
                                        type="password"
                                        name="password"
                                        placeholder="Password"
                                        className={`form-control ${errors.password ? "is-invalid" : ""
                                            }`}
                                        {...register("password", {})}
                                    />
                                    <div className="invalid-feedback">
                                        {errors.password?.message}
                                    </div>
                                    <div className="invalid-feedback">
                                        {ReqErrors?.password}
                                    </div>
                                </div>

                            </div>
                            <div class="col-12">
                                <button type="submit" class="btn btn-primary w-100">Login</button>
                                <div class="d-flex justify-content-start">
                                    <div class="text-grey mx-1">you dont have account,</div>

                                    <Link to={`/register`} class="text-primary">register</Link>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

