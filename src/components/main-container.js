import React from "react";
import Form from "./form";
import NavBar from "./navbar";
import Create from "./create";
import '../App.css'


export default class MainContainer extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <NavBar />
                    </div>
                </div>
                <div className="row"></div>
            </div>
        )
    }
}