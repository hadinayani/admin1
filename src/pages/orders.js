import Menu from "./menu";
import SiteTitle from "./siteTitle";
import $ from "jquery";
import "datatables.net";

export default function Orders() {
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
                                                <th>Status</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>


                                                <td><span className="text-reset">123</span></td>
                                                <td>
                                                    {/* <a href="" data-fancybox="gallery" data-caption="Sample Title">
                                                        <img src="/category image" alt="this is category" />
                                                    </a> */}
                                                    <span className="text-reset">Customer Name</span>
                                                </td>

                                                <td>
                                                    <span className="text-reset">12-2-2025</span>
                                                </td>
                                                <td>
                                                    <span className="text-reset">10000</span>
                                                </td>
                                                <td>
                                                    <span className="badge bg-light-primary text-dark-primary">Delivered</span>
                                                </td>
                                                <td>
                                                    <button className="btn btn-light btn-sm"><i class="fa-solid fa-eye"></i> Detail</button>
                                                </td>
                                            </tr>

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