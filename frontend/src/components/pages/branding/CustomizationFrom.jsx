import React, { Component } from "react";

class CustomizationFrom extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6">
            <div className="customization_form">
              <form>
                <div className="form-group">
                  <label className="d-block" htmlFor="cover_photo">
                    Cover Photo
                  </label>
                  <div className="file-upload-wrapper">
                    <input
                      type="file"
                      className="form-control"
                      multiple=""
                    ></input>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="d-block" htmlFor="base_color">
                        Cover Photo
                      </label>
                      <div className="color-field">
                        <input
                          name="base_color"
                          className="input_color"
                          value="#f05a22"
                          id="base_color"
                          type="color"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="text_color">Text color</label>
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
                <h4>Ordering widget</h4>
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
                <button type="submit" className="btn btn-primary">
                  Save
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CustomizationFrom;
