import Menu from "./menu";
import SiteTitle from "./siteTitle";
import $ from "jquery";
import "datatables.net";
import { Link } from "react-router";

export default function Category() {
    return (
        <>
         <main className="main-content-wrapper">
                <SiteTitle title="View Categories" />
                <div className="container">
                    <div className="row mb-8">
                        <div className="col-md-12">
                            <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-4">

                                <div>
                                    <h2>Categories</h2>


                                    <ol class="breadcrumb">
                                        <li class="breadcrumb-item">Categories / View Categories</li>
                                    </ol>

                                </div>

                                <div>
                                    <Link to="/category/add" className="btn btn-info">Add New Category</Link>
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
                                                    <th>Photo</th>
                                                    <th>Status</th>
                                                    <th>Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>

                                                    <td>1</td>
                                                    <td><span className="text-reset">Category Name</span></td>
                                                    <td>
                                                        <a href="" data-fancybox="gallery" data-caption="Sample Title">
                                                            <img src="/category image" alt="this is category" />
                                                        </a>
                                                    </td>
                                                    <td>
                                                        <span className="badge bg-light-primary text-dark-primary">Published</span>
                                                    </td>
                                                    <td>
                                                        <Link to="/category/edit" className="btn btn-warning btn-sm ms-1"><i class="fa-solid fa-pen-to-square"></i> Edit</Link>
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
        </>
        
        // <div className="main-wrapper">
            
            
           
        // </div>

    );
}