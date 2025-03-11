import { useEffect, useState } from "react";
import SiteTitle from "./siteTitle";
import { Link, useParams } from "react-router";
import { getBase,getImageBase } from "./common";
import { showError,showMessage,showNetworkError } from "./message";
import axios from "axios";

export default function ViewProduct() {

    // get id using useParams
    let { id } = useParams();
    let [product, setProduct] = useState(null);
    let api = getBase() + "product.php?productid=" + id;

    if (product === null) {
        axios({
            url: api,
            method: 'get',
            responseType: 'json',
        }).then((response) => {
            let error = response.data[0]['error'];
            let total = response.data[1]['total'];
            if (error === 'no') {
                if (total === 0) {
                    showError("No product detail found");
                }
                else {
                    response.data.splice(0, 2);
                    setProduct(response.data[0]);
                }
            }
        }).catch((error) => {
            showNetworkError(error);
        })
    }

    return (
        (product === null)?"":<main className="main-content-wrapper">
        <SiteTitle title= {product.title.toUpperCase()} />


        <div className="container">

            <div className="row ">
                <div className="col-md-12">
                    <div className="d-md-flex justify-content-between align-items-center">

                        <div>
                            <h2>View Product</h2>

                            <ol class="breadcrumb">
                                <li class="breadcrumb-item">Products / View Product</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card-header text-bg-light d-flex justify-content-between">
                            <h3 className="mb-0">{product.title.toUpperCase()} </h3>
                            <Link to="/products" className="btn btn-info">Back</Link>
                        </div>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-3">
                                    <p>Photo</p>
                                    <img src={getImageBase() + "product/" + product.photo} alt="photo" className="img-fluid" />
                                </div>
                                <div className="col-9">
                                    <table className="table table-sm table-bordered table-striped">
                                        <tbody><tr>
                                            <td width="25%" className="fw-bold">Id</td>
                                            <td>{product.id}</td>
                                        </tr>
                                            <tr>
                                                <td width="25%" className="fw-bold">Category</td>
                                                <td>{product.categorytitle.toUpperCase()}</td>
                                            </tr>
                                            <tr>
                                                <td width="25%" className="fw-bold">Price</td>
                                                <td>{product.price}</td>
                                            </tr>
                                            <tr>
                                                <td width="25%" className="fw-bold">Weight</td>
                                                <td>{product.weight}t</td>
                                            </tr>
                                            <tr>
                                                <td width="25%" className="fw-bold">Stock</td>
                                                <td>{product.stock}</td>
                                            </tr>
                                            <tr>
                                                <td width="25%" className="fw-bold">Detail</td>
                                                <td>{product.detail}</td>
                                            </tr>
                                            <tr>
                                                <td width="25%" className="fw-bold">is Live</td>
                                                <td>
                                                    {(product.islive === '1')?"Yes":"no"}
                                                </td>
                                            </tr>
                                        </tbody></table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>

    );
}