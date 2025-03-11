import Menu from "./menu";
import SiteTitle from "./siteTitle";
import $ from "jquery";
import "datatables.net";
import axios from 'axios';
import { getBase, getImageBase } from "./common";
import { ToastContainer } from "react-toastify";
import { showError, showNetworkError, showMessage } from "./message";
import { useEffect, useState } from "react";

export default function Users() {

    let [user, setUsers] = useState([]);
    let api = getBase() + "users.php";

    useEffect(() => {

        if (user.length === 0) {
            axios({
                url: api,
                responseType: 'json',
                method: 'get',
            }).then((response) => {
                console.log(response.data);

                let error = response.data[0]['error'];
                let total = response.data[1]['total'];

                if (error === 'no') {
                    if (total === 0) {
                        showError("No users found");
                    } else {
                        response.data.splice(0, 2);
                        setUsers(response.data);
                    }
                }
            })
        }
        else {
            $("#myTable").DataTable();
        }
    })

    let displayUsers = (user) => {
        return (
            <tr>


                <td><span className="text-reset">{user.id}</span></td>
                <td>
                    <span className="text-reset">Customer Name</span>
                </td>

                <td>
                    <span className="text-reset">{user.email}</span>
                </td>
                <td>
                    <span className="text-reset">{user.mobile}</span>
                </td>

            </tr>
        )
    }

    return (
        <main className="main-content-wrapper">
            <SiteTitle title="Users" />
            <div className="container">
                <div className="row mb-8">
                    <div className="col-md-12">
                        <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-4">

                            <div>
                                <h2>Users List</h2>

                            </div>

                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-12 col-12 mb-5">

                        <div className="card h-100 card-lg">


                            <div className="card-body p-0">

                                <div className="table-responsive">
                                    <table className="table table-centered table-hover mb-0 text-nowrap table-borderless table-with-checkbox" id="myTable">
                                        <thead className="bg-light">
                                            <tr>
                                                <th>ID</th>
                                                <th>Name</th>
                                                <th>Email</th>
                                                <th>Phone</th>

                                            </tr>
                                        </thead>
                                        <tbody>
                                        {user.map((i)=> displayUsers(i))}

                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>

    );
}