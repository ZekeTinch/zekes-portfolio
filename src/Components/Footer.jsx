export default function Footer() {
    return (
        <div className="sticky-bottom d-flex justify-content-center pb-2">
            <a href="https://github.com/ZekeTinch?tab=repositories" className="me-2">
                <div className="card p-1">
                    <img className="image" src="https://seeklogo.com/images/G/github-logo-7880D80B8D-seeklogo.com.png"></img>
                </div>
            </a>
            <a href="https://www.linkedin.com/in/zeke-tinch-190970325/" className="me-2">
                <div className="card p-1">
                    <img className="image" src="https://cdn-icons-png.flaticon.com/512/61/61109.png"></img>
                </div>
            </a>
            <a href="https://stackoverflow.com/users/27372048/zeke-tinch" className="me-2">
                <div className="card p-1">
                    <img className="image" src="https://cdn-icons-png.flaticon.com/512/2111/2111690.png"></img>
                </div>
            </a>
        </div>
    )
}