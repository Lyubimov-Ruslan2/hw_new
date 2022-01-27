import React from "react";
import "./AddMovie.styles.css";
import arrow from "../../img/Arrowforgenre.svg";

class DeleteMovie extends React.PureComponent {
  render() {
    return (
      <>
        {this.props.trigger ? (
          <div className="POPUP">
            <div className="POPUP-INFO-Delete">
              <button onClick={this.props.handler} className="cls-btn">
                x
              </button>
              <h1>Delete Movie</h1>
              <p>Are you sure you want to delete this movie?</p>
              <div className="btns-for-add">
                <button className="btns-2">Confirm</button>
              </div>
            </div>
          </div>
        ) : null}
      </>
    );
  }
}

export default DeleteMovie;
