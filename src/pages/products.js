import Menu from "./menu";
import SiteTitle from "./siteTitle";
import $ from "jquery";
import "datatables.net";
import { Link } from "react-router";

export default function Products() {
    return (
        <main className="main-content-wrapper">
            <SiteTitle title="View Products" />
            <div className="container">
                <div className="row mb-8">
                    <div className="col-md-12">
                        <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-4">

                            <div>
                                <h2>Products</h2>


                                <ol class="breadcrumb">
                                    <li class="breadcrumb-item">Products / View Products</li>
                                </ol>

                            </div>

                            <div>
                                <Link to="/products/add" className="btn btn-info">Add New Product</Link>
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
                                                <th>Product Name</th>
                                                <th>Category Name</th>
                                                <th>Image</th>
                                                <th>Price</th>
                                                <th>Stock</th>
                                                <th>Status</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>


                                                <td><span className="text-reset">P Name</span></td>
                                                <td>
                                                    {/* <a href="" data-fancybox="gallery" data-caption="Sample Title">
                                                            <img src="/category image" alt="this is category" />
                                                        </a> */}
                                                    <span className="text-reset">C Name</span>
                                                </td>
                                                <td>
                                                    <a href="" data-fancybox="gallery" data-caption="Sample Title">
                                                        <img src="/category image" alt="this is category" />
                                                    </a>
                                                </td>
                                                <td>
                                                    <span className="text-reset">&#8377; 123</span>
                                                </td>
                                                <td>
                                                    <span className="text-reset">10</span>
                                                </td>
                                                <td>
                                                    <span className="badge bg-light-primary text-dark-primary">Published</span>
                                                </td>
                                                <td>
                                                    <Link to="/products/view" className="btn btn-light btn-sm"><i class="fa-solid fa-eye"></i> View</Link>
                                                    <Link to="/products/edit" className="btn btn-warning btn-sm ms-1"><i class="fa-solid fa-pen-to-square"></i> Edit</Link>
                                                    <button className="btn btn-danger btn-sm ms-1"><i class="fa-solid fa-trash"></i> Delete</button>
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