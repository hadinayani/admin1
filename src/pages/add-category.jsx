
import SiteTitle from "./siteTitle";
import { useState } from "react";
import axios from "axios";
import { ToastContainer } from "react-toastify";
import { showError, showMessage, showNetworkError } from "./message";
import { getBase, getImageBase } from "./common";
import { useNavigate, Link } from "react-router";


export default function AddCategory() {

    // create satate variable
    let [title, setTitle] = useState('');
    let [islive, setIslive] = useState('');
    let [photo, setPhoto] = useState('');

    let navigate = useNavigate();

    let saveCategory = function (i) {
        console.log(title, islive, photo);
        let api = getBase() + "insert_category.php";

        let form = new FormData();
        form.append("title", title);
        form.append("islive", islive);
        form.append("photo", photo);

        axios({
            method: 'post',
            url: api,
            responseType: 'json',
            data: form
        }).then((response) => {
            let error = response.data[0]['error'];
            let save = response.data[1]['success'];
            if (error === 'no') {
                if (save === 'yes') {
                    showMessage(response.data[2]['message']);
                    setTimeout(() => {
                        navigate('/category');
                    }, 2000);
                }
                else {
                    showError(response.data[2]['messsage']);
                    
                }

            }
            else {
                showError(error);
            }
        }).catch((error) => showNetworkError(error));

        i.preventDefault();
    }

    return (
        <main className="main-content-wrapper">
            <SiteTitle title="Add New Category" />

            {/* container */}
            <div className="container">
                <ToastContainer />
                {/* row */}
                <div className="row ">
                    <div className="col-md-12">
                        <div className="d-md-flex justify-content-between align-items-center">
                            {/* page header */}
                            <div>
                                <h2>Add New Category</h2>

                                {/* breacrumb */}
                                <ol class="breadcrumb">
                                    <li class="breadcrumb-item">Categories / Add New Category</li>
                                </ol>
                            </div>
                            <div>
                            <Link to="/category" className="btn btn-info">Back</Link>
                        </div>
                        </div>
                        
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-body">
                                <form onSubmit={saveCategory}>
                                    <div className="mb-3">
                                        <label htmlFor="title" className="form-label">Category Name</label>
                                        <input type="text" className="form-control" id="title" name="title" placeholder="Category Name" required value={title} onChange={(t) => setTitle(t.target.value)} />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="detail" className="form-label">Description</label>
                                        <textarea className="form-control" id="detail" name="detail" rows={3} required />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Active</label>
                                        <div>
                                            <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" id="isliveYes" name="islive" defaultValue="yes" required value="1" onChange={(y) => setIslive(y.target.value)} />
                                                <label className="form-check-label" htmlFor="isliveYes">Yes</label>
                                            </div>
                                            <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" id="isliveNo" name="islive" defaultValue="no" required value="2" onChange={(n) => setIslive(n.target.value)} />
                                                <label className="form-check-label" htmlFor="isliveNo">No</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="photo" className="form-label">Photo</label>
                                        <input className="form-control" type="file" id="photo" name="photo" required onChange={(p) => setPhoto(p.target.files[0])} />
                                    </div>
                                    <div className="d-flex justify-content-end">
                                        <button type="submit" className="btn btn-info">Add New Category</button>
                                        <button type="reset" className="btn btn-dark ms-1">Clear All</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}