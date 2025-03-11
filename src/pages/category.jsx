import SiteTitle from "./siteTitle";
import $, { error } from "jquery";
import "datatables.net";
import { Link } from "react-router";
import { getBase, getImageBase } from "./common";
import axios from "axios";
import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import { showError, showMessage, showNetworkError } from "./message";

export default function Category() {

    // create state array

    let [category, setCategories] = useState([]);
    useEffect(() => {
        if (category.length === 0) {
            let api = getBase() + "category.php";

            axios({
                url: api,
                method: 'get',
                responseType: 'json',
            }).then((response) => {
                console.log(response.data);
                let e = response.data[0]['error'];
                if (e === 'no') {
                    let total = response.data[1]['total'];
                    if (total === 0) {
                        alert("No category found. Plz add category");
                    }
                    else {
                        response.data.splice(0, 2);
                        setCategories(response.data);
                    }
                }
            }).catch((e) => {
                showNetworkError(e);
            })
        }
        else {
            $("#myTable").DataTable();
        }
    });
    let deleteCategory = function (iID) {
        // alert(iID);
        let api = getBase() + "delete_category.php?id=" + iID;
        axios({
            url: api,
            method: 'get',
            responseType: 'json',
        }).then((response) => {
            console.log(response.data);
            let error = response.data[0]['error'];
            if (error !== 'no') {
                showError(error);
            }
            else {
                let temp = category.filter((item) => {
                    if(item.id !== iID){
                        return item 
                    }
             
                });
                // console.log(temp);
                setCategories(temp);
                showMessage(response.data[1]['message']);
            }
        }).catch((error) => {
            showNetworkError(error);
        })
    }

    let Display = function (i) {
        return (
            <tr>

                <td>{i.id}</td>
                <td><span className="text-reset">{i.title}</span></td>
                <td>
                    <a href={getImageBase() + "category/" + i.photo} data-fancybox="gallery" data-caption={i.title} >
                        <img src={getImageBase() + "category/" + i.photo} alt={i.title} style={{ "maxWidth": "80px" }} />
                    </a>
                </td>
                <td>
                    {(i.islive === '1') ? <span className="badge bg-light-primary text-dark-primary">Published</span> : <span className="badge bg-light-danger text-dark-danger">Unpublished</span>}
                </td>
                <td>
                    <Link to={"/category/edit/"+ i.id} className="btn btn-warning btn-sm ms-1"><i class="fa-solid fa-pen-to-square"></i> Edit</Link>
                    <button className="btn btn-danger btn-sm ms-1" onClick={() => deleteCategory(i.id)}><i class="fa-solid fa-trash"></i> Delete</button>
                </td>
            </tr>

        );
    }

   

    return (
        <>
            <main className="main-content-wrapper">
                <SiteTitle title="View Categories" />
                <div className="container">
                    <ToastContainer />
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
                                        <table id="myTable" className="table table-centered table-hover mb-0 text-nowrap table-borderless table-with-checkbox">
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
                                                {category.map((i) => Display(i))}
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

    );
}