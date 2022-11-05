import "./Styles/Header.css";

export default function Header() {

    return <div className="header flex-space-between">

        <div className="header-logo flex-align-center">

            <div className="header-logo-img">
                <img src="https://res.cloudinary.com/nakulsharma15/image/upload/v1667582669/Assets/Screenshot__350_-removebg-preview-removebg-preview_1_1_dxnrge.png" alt="th-logo" />
            </div>

            <h1>TaskHead</h1>
        </div>

        <a className="header-link">GitHub</a>

    </div>

}