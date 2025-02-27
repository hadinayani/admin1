import SiteTitle from "./siteTitle"
import Menu from "./menu"
export default function ChangePassword() {
    return (
        <main className="main-content-wrapper">
            <SiteTitle title="Change Password" />
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-header text-bg-light">
                                <h4 className="mb-0">Change password</h4>
                            </div>
                            <div className="card-body">
                                <form>
                                    <div className="mb-3">
                                        <label htmlFor="currentPassword" className="form-label">Current Password</label>
                                        <input type="password" className="form-control" id="currentPassword" placeholder="Enter current password" required />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="newPassword" className="form-label">New Password</label>
                                        <input type="password" className="form-control" id="newPassword" placeholder="Enter new password" required />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="confirmPassword" className="form-label">Confirm New Password</label>
                                        <input type="password" className="form-control" id="confirmPassword" placeholder="Confirm new password" required />
                                    </div>
                                    <div className="text-end">
                                        <button type="submit" className="btn btn-primary me-2">Change Password</button>
                                        <button type="reset" className="btn btn-light">Clear all</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>

    )
}