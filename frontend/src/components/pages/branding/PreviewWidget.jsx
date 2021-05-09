import React from "react";

function PreviewWidget({ widgetTitle, widgetMessage, brandingStyleColor }) {
  return (
    <>
      <div className="preview-widget">
        <div className={`order-popup`}>
          <div className="popup-header d-flex justify-content-between">
            <h5 className="text-dark mb-2">{widgetTitle}</h5>
            <button className="btn btn-sm btn-default btnClose">
              <span> &times; </span>
            </button>
          </div>

          <p className="desc text-muted">{widgetMessage}</p>

          <div className="popup-footer d-flex justify-content-between align-items-center">
            <button className="btn" style={brandingStyleColor}>
              Order Now
            </button>

            <small className="poweredBy">
              Powered by <span>Onnow </span>
            </small>
          </div>
        </div>
        <button className="btn btn-primary floating-btn border-0">
          <img src={window.location.origin + "/icon/Icon.png"} alt="" />
        </button>
      </div>
    </>
  );
}

export default PreviewWidget;
