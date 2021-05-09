import React, { Component } from "react";
import Header from "../../bases/Header";
import Sidebar from "../../bases/Sidebar";

export class About extends Component {
  render() {
    return (
      <div id="wrapper">
        <div className="navbar-nav">
          <Sidebar />
        </div>
        <div className="d-flex flex-column content_area">
          <header>
            <Header />
          </header>
          <div className="main_content border-top h-100  d-flex justify-content-center align-items-center text-center">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-12">
                  <div className="card border-0">
                    <h4 className="card-title font-weight-bold">
                      About the <span>Application V.1.0</span>
                    </h4>
                    <p className="text mb-0">
                      &copy; 2021 All rights reserved by
                      <a href="https://www.tridigital.com.bd/ghost-kitchen-bangladesh">
                        {" "}
                        Ghost Kitchen Bangladesh
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
