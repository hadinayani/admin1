import Menu from "./menu";
import SiteTitle from "./siteTitle";

export default function AddProduct() {
    return (
        <main className="main-content-wrapper">
            <SiteTitle title="Add New Product" />


            <div className="container">

                <div className="row ">
                    <div className="col-md-12">
                        <div className="d-md-flex justify-content-between align-items-center">

                            <div>
                                <h2>Add New Product</h2>

                                <ol class="breadcrumb">
                                    <li class="breadcrumb-item">Products / Add New Product</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-body">
                                <form>
                                    <div className="row mb-3">
                                        <div className="col-md-6 mb-2">
                                            <label className="form-label">Product Name</label>
                                            <input type="text" className="form-control" id="pname" name="pname" placeholder="Product Name" required />
                                        </div>
                                        <div className="col-md-6">
                                            <label className="form-label">Select Product Category</label>
                                            <select className="form-select" id="category" name="category" required>
                                                <option value="">Select Category</option>
                                               
                                            </select>
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col-12">
                                            <label className="form-label">Description</label>
                                            <textarea className="form-control" rows={3}>

                                            </textarea>
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col-md-4 mb-2">
                                            <label className="form-label">Price</label>
                                            <input type="number" className="form-control" id="price" name="price" placeholder="Price" required />
                                        </div>
                                        <div className="col-md-4 mb-2">
                                            <label className="form-label">Quantity</label>
                                            <input type="text" className="form-control" id="quantity" name="quantity" placeholder="Quantity" required />
                                        </div>
                                        <div className="col-md-4 mb-2">
                                            <label className="form-label">Weight</label>
                                            <input type="text" className="form-control" id="weight" name="weight" placeholder="Weight" required />
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        
                                        <div className="col-md-4 mb-2">
                                            <label className="form-label">Photo</label>
                                            <input type="file" className="form-control" id="photo" name="photo" required />
                                        </div>

                                        <div className="col-md-4 d-grid ">
                                            <button type="submit" className="btn btn-primary">Add New Product</button> <br />
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