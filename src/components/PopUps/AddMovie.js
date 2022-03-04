import React from "react";
import "./AddMovie.styles.css";
import arrow from "../../img/Arrowforgenre.svg";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import { addMovie } from "../../Redux/thunk/AsyncData";

const addMovieSchema = Yup.object().shape({
  addTitle: Yup.string().required("*Required"),
  addReleaseDate: Yup.string().required("*Required"),
  addUrl: Yup.string().url("*Please, enter correct URL!").required("*Required"),
  addRating: Yup.number().required("*Required"),
  addRuntime: Yup.number().required("*Required"),
  addOverview: Yup.string().required("*Required"),
});

const AddMovie = (props) => {
  const dispatch = useDispatch();

  return (
    <>
      {props.trigger ? (
        <div className="POPUP">
          <div className="POPUP-INFO">
            <button onClick={props.handler} className="cls-btn">
              x
            </button>
            <h1>ADD MOVIE</h1>
            <Formik
              initialValues={{
                addTitle: "",
                addReleaseDate: "",
                addUrl: "",
                addRating: "",
                addGenre: [],
                addRuntime: "",
                addOverview: "",
              }}
              enableReinitialize={true}
              validationSchema={addMovieSchema}
              onSubmit={(value, { resetForm }) => {
                dispatch(addMovie(value));
                resetForm();
              }}
            >
              {({ values, touched, errors, isSubmitting }) => (
                <Form>
                  <div className="form">
                    <div>
                      <label htmlFor="addTitle">Title</label>
                      <Field
                        title="Title"
                        name="addTitle"
                        placeholder="Title"
                        type="text"
                      />
                      {errors.addTitle && touched.addTitle && (
                        <ErrorMessage name="addTitle">
                          {(errors) => (
                            <div style={{ color: "yellow" }}>{errors}</div>
                          )}
                        </ErrorMessage>
                      )}
                    </div>
                    <div>
                      <label htmlFor="addReleaseDate">Release Date</label>
                      <Field
                        title="Release Date"
                        id="add_release_date"
                        type="date"
                        name="addReleaseDate"
                      />
                      {errors.addReleaseDate && touched.addReleaseDate && (
                        <ErrorMessage name="addReleaseDate">
                          {(errors) => (
                            <div style={{ color: "yellow" }}>{errors}</div>
                          )}
                        </ErrorMessage>
                      )}
                    </div>
                    <div>
                      <label htmlFor="addUrl">Movie URL</label>
                      <Field
                        title="Movie URL"
                        id="modal_url"
                        placeholder="https://"
                        type="text"
                        name="addUrl"
                      />
                      {errors.addUrl && touched.addUrl && (
                        <ErrorMessage name="addUrl">
                          {(errors) => (
                            <div style={{ color: "yellow" }}>{errors}</div>
                          )}
                        </ErrorMessage>
                      )}
                    </div>
                    <div>
                      <label htmlFor="addRating">Rating</label>
                      <Field
                        title="Rating"
                        type="number"
                        name="addRating"
                        min="0"
                        max="10"
                      />
                      {errors.addRating && touched.addRating && (
                        <ErrorMessage name="addRating">
                          {(errors) => (
                            <div style={{ color: "yellow" }}>{errors}</div>
                          )}
                        </ErrorMessage>
                      )}
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
                      {errors.addGenre && touched.addGenre && (
                        <ErrorMessage name="addGenre">
                          {(errors) => (
                            <div style={{ color: "yellow" }}>{errors}</div>
                          )}
                        </ErrorMessage>
                      )}
                    </div>
                    <div>
                      <label htmlFor="addRuntime">Runtime</label>
                      <Field
                        title="Runtime"
                        id="form-movie-runtime"
                        type="number"
                        placeholder="minutes"
                        name="addRuntime"
                        min="1"
                      />
                      {errors.addRuntime && touched.addRuntime && (
                        <ErrorMessage name="addRuntime">
                          {(errors) => (
                            <div style={{ color: "yellow" }}>{errors}</div>
                          )}
                        </ErrorMessage>
                      )}
                    </div>
                    <div>
                      <label htmlFor="addOverview">overview</label>
                      <Field
                        title="Overview"
                        placeholder="Movie description"
                        name="addOverview"
                        as="textarea"
                      />
                      {errors.addOverview && touched.addOverview && (
                        <ErrorMessage name="addOverview">
                          {(errors) => (
                            <div style={{ color: "yellow" }}>{errors}</div>
                          )}
                        </ErrorMessage>
                      )}
                    </div>
                  </div>
                  <div className="btns-for-add">
                    <button
                      className="btns-1"
                      onClick={() => {
                        resetForm();
                      }}
                    >
                      reset
                    </button>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btns-2"
                    >
                      submit
                    </button>
                  </div>
                </Form>
              )}
            </Formik>

            {/* <div className="form">
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
                <input className="form-rating" type="number" min="0" max="10" />
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
            </div> */}
          </div>
        </div>
      ) : null}
    </>
  );
};

export default AddMovie;
