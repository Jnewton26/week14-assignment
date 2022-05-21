import React from "react";

export default class NavBar extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-secondary container-fluid">
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav container-fluid">
                        <a className="nav-item nav-link" href="#">Home</a>
                        <a className="nav-item nav-link" href="./src/components/form.js">Login</a>
                        <a className="nav-item nav-link" href="./src/components/create.js">Create Account</a>
                        <a className="nav-item nav-link active" href="./src/components/create.js">Rent/Buy</a>
                    </div>
                </div>
            </nav>
        );
    }
}
