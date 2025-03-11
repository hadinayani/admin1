import SiteTitle from "./siteTitle";
import $ from "jquery";
import "datatables.net";
import axios from 'axios';
import { getBase, getImageBase } from "./common";
import { showError, showNetworkError, showMessage } from "./message";
import { useEffect, useState } from "react";
import { Link } from "react-router";

export default function Orders() {

    let [order, setOrders] = useState([]);
    let api = getBase() + "orders.php";

    useEffect(() => {
        if (order.length === 0) {
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
                        showMessage("No Orders Found");
                    } else {

                        response.data.splice(0, 2);
                        setOrders(response.data);
                    }
                }
            }).catch((error) => {
                showError(error);
            })
        }
        else {
            $('#myTable').DataTable();
        }
    })

    let displayOrders = function (item) {
        return (
            <tr>


                <td><span className="text-reset">{item.id}</span></td>
                <td>
                    <span className="text-reset">{item.fullname}</span>
                </td>

                <td>
                    <span className="text-reset">{item.billdate}</span>
                </td>
                <td>
                    <span className="text-reset">{item.amount}</span>
                </td>
                <td>
                    <Link to={"/orders/view/" + item.id} className="btn btn-light btn-sm"><i class="fa-solid fa-eye"></i> Detail</Link>
                </td>
            </tr>

        )
    }

    return (
        <main className="main-content-wrapper">
            <SiteTitle title="View Orders" />
            <div className="container">
                <div className="row mb-8">
                    <div className="col-md-12">
                        <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-4">

                            <div>
                                <h2>Orders</h2>

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
                                                <th>Date</th>
                                                <th>Amount</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {order.map((item) => displayOrders(item))}
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