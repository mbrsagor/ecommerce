import React, { useState } from "react";
import { useEffect } from "react";
import ReactColor from "./ColorPicker";

import Preview from "./Preview";
import PreviewWidget from "./PreviewWidget";

function TestForm() {
  const [bgColor, setBgColor] = useState("#f05a22");
  const [textColor, setTextColor] = useState("#ffffff");

  const [mfile, setFile] = useState("");
  const [imagePreviewUrl, setImagePreviewUrl] = useState([]);

  const [widgetTitle, setWidgetTitle] = useState("Hey there, 👋");
  const [widgetMessage, setWidgetMessage] = useState("Order online now!");

  const bgColorChange = (e) => {
    setBgColor(e.target.value);
  };

  const textColorChange = (e) => {
    setTextColor(e.target.value);
  };

  const brandingStyleColor = {
    background: bgColor,
    color: textColor,
    transition: " all 0.3s",
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const formData = {
      textColor,
      bgColor,
      mfile,
      imagePreviewUrl,
    };

    localStorage.setItem("formData", JSON.stringify(formData));

    console.log("Data submited", formData);
  };

  const handleImageChange = (e) => {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      setFile(file);
      setImagePreviewUrl(reader.result);
    };

    reader.readAsDataURL(file);
  };

  // console.log("File: ", mfile);
  // console.log("imagePreviewUrl: ", imagePreviewUrl);

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6">
          <form
            action=""
            className="card card-body shadow-sm"
            onSubmit={submitHandler}
          >
            <div className="form-group">
              <label htmlFor="">Cover Photo</label>
              <input
                type="file"
                className="form-control"
                onChange={handleImageChange}
              />
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <ReactColor
                    title="Base Color"
                    color={bgColor}
                    onChange={bgColorChange}
                    name="baseC"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <ReactColor
                    title="Text Color"
                    color={textColor}
                    onChange={textColorChange}
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
                onChange={(e) => setWidgetTitle(e.target.value)}
                value={widgetTitle}
              />
            </div>

            <div className="form-group">
              <label htmlFor="">Message</label>
              <input
                type="text"
                className="form-control"
                onChange={(e) => setWidgetMessage(e.target.value)}
                value={widgetMessage}
              />
            </div>

            <button className="btn btn-primary w-100">Save</button>
          </form>
        </div>
        <div className="col-6">
          <div className="preview-container">
            <h5>Preview</h5>
            <Preview
              imagePreviewUrl={imagePreviewUrl}
              bgColor={bgColor}
              brandingStyleColor={brandingStyleColor}
            />
          </div>

          <div className="preview-container mt-4">
            <h5>Preview Widget</h5>
            <PreviewWidget
              widgetTitle={widgetTitle}
              widgetMessage={widgetMessage}
              brandingStyleColor={brandingStyleColor}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TestForm;
