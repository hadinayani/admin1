import Menu from "./menu";
import SiteTitle from "./siteTitle";

export default function AddCategory() {
    return (
        <main className="main-content-wrapper">
                <SiteTitle title="Add New Category" />

                {/* container */}
                <div className="container">
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
                                
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="card">
                                <div className="card-body">
                                    <form>
                                        <div className="mb-3">
                                            <label htmlFor="title" className="form-label">Category Name</label>
                                            <input type="text" className="form-control" id="title" name="title" placeholder="Category Name" required />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="detail" className="form-label">Description</label>
                                            <textarea className="form-control" id="detail" name="detail" rows={3} required defaultValue={""} />
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label">Active</label>
                                            <div>
                                                <div className="form-check form-check-inline">
                                                    <input className="form-check-input" type="radio" id="isliveYes" name="islive" defaultValue="yes" required />
                                                    <label className="form-check-label" htmlFor="isliveYes">Yes</label>
                                                </div>
                                                <div className="form-check form-check-inline">
                                                    <input className="form-check-input" type="radio" id="isliveNo" name="islive" defaultValue="no" required />
                                                    <label className="form-check-label" htmlFor="isliveNo">No</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="photo" className="form-label">Photo</label>
                                            <input className="form-control" type="file" id="photo" name="photo" required />
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