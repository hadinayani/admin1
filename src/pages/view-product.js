import Menu from "./menu";
import SiteTitle from "./siteTitle";

export default function ViewProduct() {
    return (
        <main className="main-content-wrapper">
            <SiteTitle title="View Product" />


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
                                <h3 className="mb-0">Iphone 16 pro max </h3>
                                <a to="/product" className="btn btn-info">Back</a>
                            </div>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-3">
                                        <p>Photo</p>
                                        <img src="products" alt="photo" className="img-fluid" />
                                    </div>
                                    <div className="col-9">
                                        <table className="table table-sm table-bordered table-striped">
                                            <tbody><tr>
                                                <td width="25%" className="fw-bold">Id</td>
                                                <td>123</td>
                                            </tr>
                                                <tr>
                                                    <td width="25%" className="fw-bold">Category</td>
                                                    <td>C Name</td>
                                                </tr>
                                                <tr>
                                                    <td width="25%" className="fw-bold">Price</td>
                                                    <td>p Price</td>
                                                </tr>
                                                <tr>
                                                    <td width="25%" className="fw-bold">Weight</td>
                                                    <td>P Weight</td>
                                                </tr>
                                                <tr>
                                                    <td width="25%" className="fw-bold">Stock</td>
                                                    <td>P Stock</td>
                                                </tr>
                                                <tr>
                                                    <td width="25%" className="fw-bold">Detail</td>
                                                    <td>P Details</td>
                                                </tr>
                                                <tr>
                                                    <td width="25%" className="fw-bold">is Live</td>
                                                    <td>Yes/No</td>
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