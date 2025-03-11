import SiteTitle from "./siteTitle";
import $ from "jquery";
import "datatables.net";
import { Link } from "react-router";
import axios from 'axios';
import { useEffect, useState } from "react";
import { getBase, getImageBase } from "./common";
import { showError, showMessagem, showNetworkError } from "./message";


export default function Products() {

    // create state array
    let [product, setProducts] = useState([]);

    useEffect(() => {

        let api = getBase() + "product.php";

        if (product.length === 0) {
            axios({
                url: api,
                method: 'get',
                responseType: 'json',
            }).then((response) => {
                let error = response.data[0]['error'];
                if (error === 'no') {
                    let total = response.data[1]['total'];
                    if (total === 0) {
                        showError("No product found");
                    }
                    else {
                        response.data.splice(0, 2);
                        setProducts(response.data);
                    }
                }
            }).catch((error) => {
                showNetworkError(error);
            })
        }
        else {
            $("#myTable").DataTable();
        }
    });

    let displayData = function (item) {
        return (
            <tr>

                <td><span className="text-reset">{item.id}</span></td>
                <td><span className="text-reset">{item.title}</span></td>
                <td>

                    <span className="text-reset">{item.categorytitle}</span>
                </td>
                <td>
                    <a href={getImageBase() + "product/" + item.photo} data-fancybox="gallery" data-caption={item.title}>
                        <img src={getImageBase() + "product/" + item.photo} alt={item.title} style={{ "maxWidth": "80px" }} />
                    </a>
                </td>
                <td>
                    <span className="text-reset">&#8377; {item.price}</span>
                </td>
                <td>
                    <span className="text-reset">{item.stock}</span>
                </td>
                <td>
                    {(item.islive === '1') ? <span className="badge bg-light-primary text-dark-primary">Published</span> : <span className="badge bg-light-danger text-dark-danger">Unpublished</span>}
                    {/* <span className="badge bg-light-primary text-dark-primary">Published</span> */}
                </td>
                <td>
                    <Link to={"/products/view/" + item.id} className="btn btn-light btn-sm"><i class="fa-solid fa-eye"></i> View</Link>

                    <Link to="/products/edit" className="btn btn-warning btn-sm ms-1"><i class="fa-solid fa-pen-to-square"></i> Edit</Link>
                    
                    <button className="btn btn-danger btn-sm ms-1"><i class="fa-solid fa-trash"></i> Delete</button>
                </td>
            </tr>
        )
    }
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
                                                <th>ID</th>
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
                                            {product.map((i) => displayData(i))}

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