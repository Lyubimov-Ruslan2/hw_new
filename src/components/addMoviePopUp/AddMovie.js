import React from "react";
import "./AddMovie.styles.css";

class AddMovie extends React.Component {
  render() {
    return (
      <>
        <div className="POPUP">
          <div className="POPUP-INFO">
            <button className="cls-btn">x</button>
            <h1>ADD MOVIE</h1>
            <div className="form">
              <div>
                <label htmlFor="form-title">Title</label>
                <input className="form-title" type="text" />
              </div>
              <div>
                <label htmlFor="form-release-date">Release Date</label>
                <input className="form-release-date" type="date" />
              </div>
              <div>
                <label htmlFor="form-movie-url">Movie URL</label>
                <input
                  className="form-movie-url"
                  type="text"
                  placeholder="https://"
                />
              </div>
              <div>
                <label htmlFor="form-movie-url">Movie URL</label>
                <input
                  className="form-movie-url"
                  type="text"
                  placeholder="https://"
                />{" "}
              </div>
              <div>
                <label htmlFor="form-rating">Rating</label>
                <input className="form-rating" type="number" min="0" max="10" />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default AddMovie;
