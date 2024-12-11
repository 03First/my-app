import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <div className="row">
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            <Link className="nav-link" to="/select-room">เลือกห้องพัก</Link>
                            <Link className="nav-link" to="/room-details">รายละเอียดห้องพัก</Link>
                            <a className="nav-link disabled" aria-disabled="true">จองห้องพัก</a>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
