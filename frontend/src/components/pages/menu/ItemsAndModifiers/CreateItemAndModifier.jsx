import React, { Component } from "react";
import { Link } from "react-router-dom";
import Header from "../../../bases/Header";
import Sidebar from "../../../bases/Sidebar";
// import MyDropzone from "../../drop_zone"

class CreateItemAndModifier extends Component {
  state = {
    isModifierShow: false,
  };

  componentDidMount() {
    document.title = "Create - items & Modifires | onnow";
  }

  showItem = () => {
    this.setState({ isModifierShow: false });
  };

  showModifier = () => {
    this.setState({ isModifierShow: true });
  };

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
              <h5 className="my-3">
                {this.state.isModifierShow !== true
                  ? "Create Item"
                  : "Create Modifier"}
              </h5>
              <div className="card p-3">
                <div className="row mt-2">
                  <div className="col-md-6">
                    <div className="row">
                      <div className="col-md-12">
                        <label>Name</label>
                        <input id="name" className="form-control" type="text" />
                      </div>
                      <div className="col-md-12 mt-3">
                        <label>
                          SKU (Stock Keeping Unit) <span>optional</span>
                        </label>
                        <input id="name" className="form-control" type="text" />
                      </div>
                    </div>
                    <div className="row mt-3">
                      <div className="col-md-4 menuCreateMOdifire">
                        <label>Type</label>
                        <div className="btn-container p-0">
                          <button
                            className={`btn btn-sm mr-1 ${
                              this.state.isModifierShow === false &&
                              "btn-primary "
                            }`}
                            onClick={this.showItem}
                          >
                            Item
                          </button>
                          <button
                            className={`btn btn-sm ${
                              this.state.isModifierShow === true &&
                              "btn-primary "
                            }`}
                            onClick={this.showModifier}
                          >
                            Modifier
                          </button>
                        </div>
                      </div>
                      <div className="col-md-8">
                        <label>Price</label>
                        <input
                          id="price"
                          placeholder="MRP"
                          className="form-control"
                          type="text"
                        />
                      </div>
                    </div>

                    {this.state.isModifierShow !== true && (
                      <div className="row mt-3 description-view">
                        <div className="col-md-12">
                          <label>Description</label>
                          <textarea
                            id="description"
                            className="form-control"
                            rows="3"
                          />
                        </div>
                      </div>
                    )}

                    <div className="row mt-3 ">
                      <div className="col">
                        <Link to="/menu/items-modifiers">
                          <button className="btn btn-primary btn-md mr-2">
                            Save
                          </button>
                        </Link>
                        <Link to="/menu/items-modifiers">
                          <button className="btn btn-light btn-md">
                            Cancel
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>

                  {this.state.isModifierShow !== true && (
                    <div className="col-md-3 mt-3">
                      <div className="image-upload mt-3">
                        <label htmlFor="file-input">
                          <img src="https://res.cloudinary.com/mbrsagor/image/upload/v1619261415/image_upload_vrxpld.png" />
                        </label>
                        <input id="file-input" type="file" />
                      </div>
                      <p className="file_upload_instruction">
                        <span>
                          550 x 440 pixels minimum size 5 MB maximum weight
                        </span>
                      </p>

                      {/* <MyDropzone /> */}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateItemAndModifier;
