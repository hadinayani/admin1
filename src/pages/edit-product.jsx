import SiteTitle from './siteTitle';
import { useEffect, useState } from "react";
import { showError, showMessage, showNetworkError } from "./message";
import { useParams } from "react-router-dom";
import axios from "axios";
import { ToastContainer } from "react-toastify";


export default function EditProduct() {

    let { id } = useParams();

    let [title, setTitle] = useState('');
    let [photo, setPhoto] = useState('');
    let [detail, setDetail] = useState('');
    let [price, setPrice] = useState('');
    let [quantity, setQuantity] = useState('');
    let [weight, setWeight] = useState('');
    let [category, setCategory] = useState('');

    let [categories, setCategories] = useState([]); // used to store category from api
    let [isFetched, setIsFetched] = useState(false);

    let fetchCategories = function () {
        if (categories.length === 0) {

            let apiAddress = "http://localhost:5000/category";
            axios({
                url:apiAddress,
                method:'get',
                responseType:'json',
                headers:'application/json'
            }).then((response) => {
                let error = response.data[0]['error'];
                let total = response.data[1]['total'];

                if (error === 'yes') {
                    showError(error);
                } else {
                    if (total === 0) {
                        showError("No category found");

                    }
                    else{
                        // console.log(response.data)
                        setCategories(response.data);
                    }
                }
            }).catch((error) => {
                showNetworkError(error);
            })
            
        }
    }

    useEffect(() => {
        if (isFetched === false) {
            let api = "http://localhost:5000/products?id=" + id;

            axios({
                url: api,
                responseType: 'json',
                method: 'get',
                header: 'application/json'
            }).then((response) => {
                console.log(response.data);
                let error = response.data[0]['error'];
                let total = response.data[1]['total'];

                if (error === 'yes') {
                    showError(error);
                } else {
                    if (total === 0) {
                        showError("No product found");

                    }
                    else {
                        setTitle(response.data[2]['name']);
                        setCategory(response.data[2]['categoryid']);
                        setPhoto(response.data[2]['photo']);
                        setDetail(response.data[2]['description']);
                        setPrice(response.data[2]['price']);
                        setQuantity(response.data[2]['stock']);
                        setWeight(response.data[2]['weight']);
                        fetchCategories();
                        setIsFetched(true);
                    }
                }
            }).catch((error) => {
                showNetworkError(error);
            })
        }
    })


    return (

        <main className="main-content-wrapper">
            <SiteTitle title="Edit Product" />


            <div className="container">

                <div className="row ">
                    <div className="col-md-12">
                        <div className="d-md-flex justify-content-between align-items-center">

                            <div>
                                <h2>Edit Product</h2>

                                <ol class="breadcrumb">
                                    <li class="breadcrumb-item">Products / Edit Product</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-2">
                        <img src="/images/Kaju_katli.jpg" alt="product photo" className="img-fluid" />
                    </div>
                    <div className="col-10">
                        <div className="card">
                            <div className="card-body">
                                <form>
                                    <div className="row mb-3">
                                        <div className="col-md-6 mb-2">
                                            <label className="form-label">Product Name</label>
                                            <input type="text" className="form-control" id="pname" name="pname" placeholder="Product Name" required value={title} />
                                        </div>
                                        <div className="col-md-6">
                                            <label className="form-label">Select Product Category</label>
                                            <select className="form-select" id="category" name="category" required>
                                                {categories.map((item) => {
                                                    if (item.id == category)
                                                        return (<option value={item.id} selected>{item.name}</option>)
                                                    else
                                                        return (<option value={item.id}>{item.name}</option>)

                                                   
                                                })}
                                            </select>
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col-12">
                                            <label className="form-label">Description</label>
                                            <textarea className="form-control" rows={3} value={detail}>

                                            </textarea>
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col-md-4 mb-2">
                                            <label className="form-label">Price</label>
                                            <input type="number" className="form-control" id="price" name="price" placeholder="Price" required value={price} />
                                        </div>
                                        <div className="col-md-4 mb-2">
                                            <label className="form-label">Quantity</label>
                                            <input type="number" className="form-control" id="quantity" name="quantity" placeholder="Quantity" required value={quantity} />
                                        </div>
                                        <div className="col-md-4 mb-2">
                                            <label className="form-label">Weight</label>
                                            <input type="text" className="form-control" id="weight" name="weight" placeholder="Weight" required value={weight} />
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col-md-4 mb-2">
                                            <label className="form-label">Photo</label>
                                            <input type="file" className="form-control" id="photo" name="photo" required />
                                        </div>

                                        <div className="col-md-4 d-grid">
                                            <button type="submit" className="btn btn-primary">Update Product</button> <br />
                                            <button type="reset" className="btn btn-light" >Clear All</button>
                                        </div>
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