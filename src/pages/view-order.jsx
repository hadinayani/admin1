import Menu from "./menu";
import SiteTitle from "./siteTitle";
import $ from "jquery";
import "datatables.net";
import { Link } from "react-router";

export default function ViewOrder() {
    return (
        <main className="main-content-wrapper">
            <SiteTitle title="View Order" />
            <div className="container">
                <div className="row mb-8">
                    <div className="col-md-12">
                        <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-4">

                            <div>
                                <h2>Order</h2>

                            </div>

                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-header text-bg-light d-flex justify-content-between">
                                <h3 className="mb-0">
                                    Order ID -123
                                </h3>
                                <h3 className="mb-0">
                                    Date :- 12-2-2025
                                    {/* <Link to="/orders/print" className="btn btn-success">Print</Link> */}
                                </h3>
                                <Link to="/orders" className="btn btn-info">Back</Link>
                            </div>
                            <div className="card-body">
                                <table className="table table-responsive table-bordered mb-3">
                                    <tbody ><tr>
                                        <th className="text-black">ID</th>
                                        <td>123</td>
                                        <th className="text-black">Date</th>
                                        <td>12-2-2025</td>
                                    </tr>
                                        <tr>
                                            <th className="text-black">Customer</th>
                                            <td>c name</td>
                                            <th className="text-black">Amount</th>
                                            <td>10000</td>
                                        </tr>
                                        <tr>
                                            <th className="text-black">Address </th>
                                            <td>Waghawadi</td>
                                            <th className="text-black">Order Status</th>
                                            <td>Delivered</td>

                                        </tr>

                                        <tr>
                                            <th className="text-black">No Of Item</th>
                                            <td>10</td>
                                        </tr>
                                    </tbody></table>
                                <h3 className="mb-3">items</h3>
                                <table className="table table-bordered ">
                                    <thead>
                                        <tr>
                                            <th className="text-black">NO</th>
                                            <th className="text-black">Name</th>
                                            <th className='text-end text-black'>Quantity</th>
                                            <th className='text-end text-black'>Price</th>

                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>123</td>
                                            <td>P name</td>
                                            <td className="text-end">10</td>
                                            <td className="text-end">100</td>
                                        </tr>
                                    </tbody>
                                    <tfoot>
                                        <tr>
                                            <th colSpan={5} className="text-end">Total : 1000 </th>
                                        </tr>
                                    </tfoot>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}