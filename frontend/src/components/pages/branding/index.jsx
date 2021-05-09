import React, { Component } from "react";
import Header from "../../bases/Header";
import PageTitle from "../../bases/PageTitle";
import Sidebar from "../../bases/Sidebar";
import BrandingFrom from "./BrandingFrom";
import TestForm from "./TestForm";

import "../../../css/branding.scss";

class Branding extends Component {
  componentDidMount() {
    document.title = "Branding | onnow";
  }

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
          <div className="main_content">
            <div className="container-fluid border_top">
              <PageTitle page_title="Platform customization" />
              <p>
                Change the appearance of your ordering platform and make it look
                like your brand.
              </p>
            </div>

            {/* <TestForm /> */}

            <BrandingFrom />
          </div>
        </div>
      </div>
    );
  }
}

export default Branding;

// http://prntscr.com/123wcd5
