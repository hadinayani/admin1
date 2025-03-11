import { Link, useParams } from "react-router";
import Menu from "./menu";
import SiteTitle from "./siteTitle";
import { useEffect , useState } from "react";
import { getBase, getImageBase } from "./common";
import axios from "axios";
import { showError, showNetworkError } from "./message";



export default function EditCategory() {

    let [title,setTitle] = useState('');
    let [photo,setPhoto] = useState(''); //used to store user select photo
    let [isLive,setIsLive] = useState('');
    let [oldPhoto,setOldPhoto] = useState(''); //used to store old photo

    let { id } = useParams();

    useEffect(() => {
        let api = getBase() + "category.php?id=" + id;
        axios({
            url: api,
            responseType: 'json',
            method: 'get',
        }).then((response) => {
            console.log(response.data)
            let error = response.data[0]['error'];
            let total = response.data[1]['total'];

            if(error !== 'no'){
                showError(error);
            }
            else{
                if(total === 0)
                    showError('no Category found');
                else{
                    setTitle(response.data[2]['title']);
                    setIsLive(response.data[2]['islive']);
                    setOldPhoto(response.data[2]["photo"]);
                }
            }
        }).catch((error) => showNetworkError(error))
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
                                <Link to="/category" className="btn btn-info">Back</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-2">
                        <span>Existing Photo</span>
                        <img src={getImageBase() +"category/" + oldPhoto} alt="categoryname" />
                    </div>
                    <div className="col-10">
                        <div className="card">
                            <div className="card-body">
                                <form>
                                    <div className="mb-3">
                                        <label htmlFor="title" className="form-label">Category Name</label>
                                        <input type="text" className="form-control" id="title" name="title" placeholder="Category Name" required value={title}/>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="detail" className="form-label">Description</label>
                                        <textarea className="form-control" id="detail" name="detail" rows={3} required defaultValue={""} />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Active</label>
                                        <div>
                                            <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" id="isliveYes" name="islive" defaultValue="yes" required checked={(isLive === '1')} />
                                                <label className="form-check-label" htmlFor="isliveYes">Yes</label>
                                            </div>
                                            <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" id="isliveNo" name="islive"  required checked={(isLive === '0')}  />
                                                <label className="form-check-label" htmlFor="isliveNo">No</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="photo" className="form-label">Photo</label>
                                        <input className="form-control" type="file" id="photo" name="photo" required />
                                    </div>
                                    <div className="d-flex justify-content-end">
                                        <button type="submit" className="btn btn-info">Update</button>
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