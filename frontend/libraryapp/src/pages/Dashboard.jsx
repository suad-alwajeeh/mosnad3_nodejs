import React from 'react'
import CategoriesList from '../components/Categories'
import Header from '../components/Header'
import { useNavigate } from 'react-router-dom'

export default function Dashboard() {
   
    return (
        <>
            <Header />
            <div class="container-fluid py-3 ">
                <div class="row ">
                    <div class="col-sm-12">
                        <div class="card">
                            <div class="card-body">
                                <h4 class="card-title">welcom back user name...</h4>
                                <p class="card-text">you can use this system to loan your favorite books 🫶🏻🥳</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-12 text-center">
                        <CategoriesList />
                        <div class="container my-4">
                            <table class="table table-bordered border-dark">
                                <thead>
                                    <th>#</th>
                                    <th>Book</th>
                                    <th>Auther</th>
                                    <th>Category</th>
                                    <th>Action</th>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td class="fw-bold">Book Number1</td>
                                        <td class="">Book auther</td>
                                        <td> <span class=" badge bg-info">Technology</span></td>
                                        <td>
                                            <button type="button" class="btn btn-primary"> loan now
                                            </button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div ></>
    )
}