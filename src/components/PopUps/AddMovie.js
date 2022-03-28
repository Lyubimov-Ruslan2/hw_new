import React from "react";
import "./AddMovie.styles.css";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import { addMovie } from "../../Redux/thunk/AsyncData";
import CustomSelect from "../CustomSelect/CustomSelect";

const addMovieSchema = Yup.object().shape({
  addTitle: Yup.string().required("*Required"),
  addReleaseDate: Yup.string().required("*Required"),
  addUrl: Yup.string().url("*Please, enter correct URL!").required("*Required"),
  addRating: Yup.number()
    .min(0, "Must be minimum 0")
    .max(10, "Must be maximum 10")
    .required("*Required"),
  addGenre: Yup.array().min(1, "At least one option").required("*Required"),
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
            <h1>add movie</h1>
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
              {({ touched, errors, isSubmitting, resetForm }) => (
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
                            <div style={{ color: "yellow", margin: "0" }}>
                              {errors}
                            </div>
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
                            <div style={{ color: "yellow", margin: "0" }}>
                              {errors}
                            </div>
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
                            <div style={{ color: "yellow", margin: "0" }}>
                              {errors}
                            </div>
                          )}
                        </ErrorMessage>
                      )}
                    </div>
                    <div>
                      <label htmlFor="addRating">Rating</label>
                      <Field title="Rating" type="number" name="addRating" />
                      {errors.addRating && touched.addRating && (
                        <ErrorMessage name="addRating">
                          {(errors) => (
                            <div style={{ color: "yellow", margin: "0" }}>
                              {errors}
                            </div>
                          )}
                        </ErrorMessage>
                      )}
                    </div>
                    <div>
                      <CustomSelect />
                      {errors.addGenre && touched.addGenre && (
                        <ErrorMessage name="addGenre">
                          {(errors) => (
                            <div style={{ color: "yellow", margin: "0" }}>
                              {errors}
                            </div>
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
                            <div style={{ color: "yellow", margin: "0" }}>
                              {errors}
                            </div>
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
                            <div style={{ color: "yellow", margin: "0" }}>
                              {errors}
                            </div>
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
          </div>
        </div>
      ) : null}
    </>
  );
};

export default AddMovie;
