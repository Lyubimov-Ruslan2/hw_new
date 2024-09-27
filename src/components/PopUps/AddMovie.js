import React from "react";
import "./AddMovie.styles.css";
import arrow from "../../img/Arrowforgenre.svg";

class AddMovie extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidUpdate() {
    console.log("Add button was clicked");
  }

  render() {
    return (
      <>
        {this.props.trigger ? (
          <div className="POPUP">
            <div className="POPUP-INFO">
              <button onClick={this.props.handler} className="cls-btn">
                x
              </button>
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
                  <label htmlFor="form-rating">Rating</label>
                  <input
                    className="form-rating"
                    type="number"
                    min="0"
                    max="10"
                  />
                </div>
                <div>
                  <label htmlFor="form-genre">Genre</label>
                  <div className="custom-select">
                    <select>
                      <option value="crime">Crime</option>
                      <option value="documentary">Documentary</option>
                      <option value="horror">Horror</option>
                      <option value="comedy">Comedy</option>
                    </select>
                    <img className="arrow-genre" src={arrow} alt="arrow" />
                  </div>
                </div>
                <div>
                  <label htmlFor="form-movie-runtime">Runtime</label>
                  <input
                    className="form-movie-runtime"
                    type="text"
                    placeholder="minutes"
                  />
                </div>
                <div>
                  <label htmlFor="form-movie-overview">overview</label>
                  <textarea
                    className="form-movie-overview"
                    placeholder="Movie description"
                  />
                </div>
              </div>
              <div className="btns-for-add">
                <button className="btns-1">reset</button>
                <button className="btns-2">submit</button>
              </div>
            </div>
          </div>
        ) : null}
      </>
    );
  }
}

export default AddMovie;
