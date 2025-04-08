import { Link, useParams } from "react-router";
import Menu from "./menu";
import SiteTitle from "./siteTitle";
import { useEffect, useState } from "react";
import { getBase, getImageBase } from "./common";
import axios from "axios";
import { showError, showNetworkError } from "./message";



export default function EditCategory() {

    let [title, setTitle] = useState('');
    let [photo, setPhoto] = useState(''); //used to store user select photo
    let [isLive, setIsLive] = useState('');
    let [oldPhoto, setOldPhoto] = useState(''); //used to store old photo

    let { id } = useParams();

    useEffect(() =>{
        
        let api = "http://localhost:5000/category?id=" + id;
        axios({
            url:api,
            method:'get',
            responseType:'json',
            headers:'application/json'
        }).then((response) => {
            console.log(response.data);
            let error = response.data[0]['error'];
            let total = response.data[1]['total'];

            if(error === 'yes'){
                showError(error);
            }else{
                if(total === 0)
                    showError('No Category Found');
                else
                {
                    
                    setTitle(response.data[2]['name']);
                    // setPhoto(response.data[3]['images']);
                }
            }
        })
    })

    return (
        <main className="main-content-wrapper">
            <SiteTitle title="Edit Category Name" />
            <div className="container">
                

                <div className="row ">
                    <div className="col-md-12">
                        <div className="d-md-flex justify-content-between align-items-center">

                            <div>
                                <h2>Edit Category</h2>

                                <ol class="breadcrumb">
                                    <li class="breadcrumb-item">Categories / Edit  Category</li>
                                </ol>
                            </div>
                            <div>
                                <Link to="/category" className="btn btn-primary">Back</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-2">
                        <span>Existing Photo</span>
                        <img src="/images/kites.png" alt="categoryname" style={{ "maxWidth": "160px" }} />
                    </div>
                    <div className="col-10">
                        <div className="card">
                            <div className="card-body">
                                <form>
                                    <div className="mb-3">
                                        <label htmlFor="title" className="form-label">Category Name</label>
                                        <input type="text" className="form-control" id="title" name="title" placeholder="Category Name" required value={title} />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="photo" className="form-label">Photo</label>
                                        <input className="form-control" type="file" id="photo" name="photo" required />
                                    </div>
                                    <div className="d-flex justify-content-end">
                                        <button type="submit" className="btn btn-primary">Update</button>
                                        <button type="reset" className="btn btn-light text-black ms-1">Clear All</button>
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
