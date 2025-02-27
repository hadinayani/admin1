import Menu from "./menu"
import SiteTitle from "./siteTitle"
export default function Dashboard() {
    return (
        <main className="main-content-wrapper">
                <SiteTitle title="Admin Dashboard" />
                <div className="table-responsive-xl mb-6 mb-lg-0">
                    <div className="row flex-nowrap pb-3 pb-lg-0">
                        <div className="col-lg-4 col-12 mb-6">
                            {/* card */}
                            <div className="card h-100 card-lg">
                                {/* card body */}
                                <div className="card-body p-6">
                                    {/* heading */}
                                    <div className="d-flex justify-content-between align-items-center mb-6">
                                        <div>
                                            <h4 className="mb-0 fs-5">Earnings</h4>
                                        </div>
                                        <div className="icon-shape icon-md bg-light-danger text-dark-danger rounded-circle">
                                            <i className="bi bi-currency-dollar fs-5" />
                                        </div>
                                    </div>
                                    {/* project number */}
                                    <div className="lh-1">
                                        <h1 className="mb-2 fw-bold fs-2">$93,438.78</h1>
                                        <span>Monthly revenue</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-12 mb-6">
                            {/* card */}
                            <div className="card h-100 card-lg">
                                {/* card body */}
                                <div className="card-body p-6">
                                    {/* heading */}
                                    <div className="d-flex justify-content-between align-items-center mb-6">
                                        <div>
                                            <h4 className="mb-0 fs-5">Orders</h4>
                                        </div>
                                        <div className="icon-shape icon-md bg-light-warning text-dark-warning rounded-circle">
                                            <i className="bi bi-cart fs-5" />
                                        </div>
                                    </div>
                                    {/* project number */}
                                    <div className="lh-1">
                                        <h1 className="mb-2 fw-bold fs-2">42,339</h1>
                                        <span>
                                            <span className="text-dark me-1">35+</span>
                                            New Sales
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-12 mb-6">
                            {/* card */}
                            <div className="card h-100 card-lg">
                                {/* card body */}
                                <div className="card-body p-6">
                                    {/* heading */}
                                    <div className="d-flex justify-content-between align-items-center mb-6">
                                        <div>
                                            <h4 className="mb-0 fs-5">Customer</h4>
                                        </div>
                                        <div className="icon-shape icon-md bg-light-info text-dark-info rounded-circle">
                                            <i className="bi bi-people fs-5" />
                                        </div>
                                    </div>
                                    {/* project number */}
                                    <div className="lh-1">
                                        <h1 className="mb-2 fw-bold fs-2">39,354</h1>
                                        <span>
                                            <span className="text-dark me-1">30+</span>
                                            new in 2 days
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
    )
}