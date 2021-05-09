import FeatherIcon from "feather-icons-react";
import React, { Component } from "react";
import PreviewWidget from "./PreviewWidget";
import Preview from "./Preview";
import ReactColor from "./ColorPicker";
import axios from "axios";
import { brandingURL } from "../../../constants";
class BrandingFrom extends Component {
  state = {
    activeBrand: null,
    bgColor: "#f05a22",
    textColor: "#ffffff",
    file: "",
    imagePreviewUrl: [],
    title: "Hey there, 👋",
    widgetMessage: "Order online now!",
  };

  submitHandler = (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("base_color", this.state.bgColor);
    formData.append("text_color", this.state.textColor);
    if (this.state.file?.name) formData.append("cover_photo", this.state.file);
    formData.append("title", this.state.title);
    formData.append("message", this.state.widgetMessage);

    let method = axios.post;
    let url = brandingURL;
    if (this.state.activeBrand) {
      url += `${this.state.activeBrand.id}/`;
      method = axios.patch;
    }
    method(url, formData)
      .then((res) => {
        console.log(res.data);
        this.assignBrandInfo(res.data);
        alert("Brand Information Saved");
      })
      .catch((e) => {
        console.log(e);
      });
  };

  assignBrandInfo(brand) {
    if (brand) {
      this.setState({
        activeBrand: brand,
        bgColor: brand.base_color,
        textColor: brand.text_color,
        file: brand.cover_photo,
        title: brand.title,
        widgetMessage: brand.message,
        imagePreviewUrl: brand.cover_photo,
      });
    }
  }

  handleImageChange = (e) => {
    e.preventDefault();
    let reader = new FileReader();
    let file = e.target.files[0];
    reader.onloadend = () => {
      this.setState({ file: file });
      this.setState({ imagePreviewUrl: reader.result });
    };
    reader.readAsDataURL(file);
  };
  componentDidMount() {
    axios
      .get(brandingURL)
      .then((res) => {
        this.assignBrandInfo(res.data[0]);
      })
      .catch((e) => {
        console.log(e);
      });
    this.subdomain = window.location.host.split(".")[0];
  }

  render() {
    const brandingStyleColor = {
      background: this.state.bgColor,
      color: this.state.textColor,
      transition: " all 0.3s",
    };

    return (
      <>
        <div className="branding-wrap container-fluid ">
          <div className="row">
            <div className="col-6">
              <form
                action=""
                className="card card-body "
                onSubmit={this.submitHandler}
              >
                <div className="form-group">
                  <label htmlFor="">Cover Photo</label>
                  <input
                    type="file"
                    className="form-control"
                    onChange={this.handleImageChange}
                  />
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <ReactColor
                        title="Base Color"
                        color={this.state.bgColor}
                        onChange={(e) =>
                          this.setState({ bgColor: e.target.value })
                        }
                        name="baseC"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <ReactColor
                        title="Text Color"
                        color={this.state.textColor}
                        onChange={(e) =>
                          this.setState({ textColor: e.target.value })
                        }
                        name="baseT"
                      />
                    </div>
                  </div>
                </div>

                <h6 className="text-muted mt-3">Ordering widget</h6>

                <div className="form-group">
                  <label htmlFor="">Title</label>
                  <input
                    type="text"
                    className="form-control"
                    onChange={(e) => this.setState({ title: e.target.value })}
                    value={this.state.title}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="">Message</label>
                  <input
                    type="text"
                    className="form-control"
                    onChange={(e) =>
                      this.setState({ widgetMessage: e.target.value })
                    }
                    value={this.state.widgetMessage}
                  />
                </div>

                <button className="btn btn-primary btn-lg w-100 text-uppercase">
                  <small>Save</small>
                </button>
              </form>
            </div>
            <div className="col-6">
              <div className="preview-container">
                <h5>Preview</h5>
                <Preview
                  imagePreviewUrl={this.state.imagePreviewUrl}
                  bgColor={this.state.bgColor}
                  brandingStyleColor={brandingStyleColor}
                />
              </div>

              <div className="preview-container mt-4">
                <h5>Preview Widget</h5>
                <PreviewWidget
                  title={this.state.title}
                  widgetMessage={this.state.widgetMessage}
                  brandingStyleColor={brandingStyleColor}
                />
              </div>
            </div>
          </div>
        </div>
        {/* //////////////////////// */}
        {/* <div className="container-fluid">
          <div className="row">
            <div className="col-md-6">
              <div className="customization_form">
                <form>
                  <div className="form-group">
                    <label htmlFor="cover_photo" className="mr-2">
                      Cover Photo
                    </label>
                    <div className="file-upload-wrapper">
                      <input type="file" className="form-control" multiple="" />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="base_color" className="mr-2">
                          Base Color
                        </label>
                        <div className="color-field">
                          <input
                            name="base_color"
                            value="#f05a22"
                            id="base_color"
                            type="color"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="text_color" className="mr-2">
                          Text Color
                        </label>
                        <div className="color-field">
                          <input
                            name="text_color"
                            className="input_color"
                            value="#666666"
                            id="base_color"
                            type="color"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <p>
                        Warning low contrast. <a href="/">Find out more</a>
                      </p>
                    </div>
                  </div>
                  <h4 className="mt-4">Ordering widget</h4>
                  <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input
                      placeholder="Hey there, 👋"
                      type="text"
                      name="title"
                      className="form-control"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <input
                      type="text"
                      placeholder="Order online now!"
                      name="message"
                      className="form-control"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="icon_image">Message</label>
                    <input
                      type="file"
                      name="icon_image"
                      className="form-control"
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn btn-primary btn-discount"
                  >
                    Save
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div> */}
      </>
    );
  }
}

export default BrandingFrom;
