import FeatherIcon from "feather-icons-react";
import React, { Component } from "react";
import audio from "../../../assets/audio/bell.mp3";

class HardwareTest extends Component {
  playAudio = () => {
    new Audio(audio).play();
  };

  render() {
    return (
      <div className="row">
        <div className="col-md-8">
          <div className="card p-3">
            <h5 className="card-title hardware_sub_title">Test Hardwares</h5>
            <button
              type="submit"
              className="btn btn-default pushOrderBtn"
              onClick={this.playAudio}
            >
              <span className="sound_btn">
                <FeatherIcon icon="pause-circle" size="15" />
              </span>
              <span className="sound_text ml-1">Sound</span>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default HardwareTest;
