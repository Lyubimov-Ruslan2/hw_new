import React, { useContext } from "react";
import "./AddMovie.styles.css";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { editMovie } from "../../Redux/thunk/AsyncData";
import CustomSelect from "../CustomSelect/CustomSelect";
import { editMovieByIdAction } from "../../Redux/actions/action";
import { connect } from "react-redux";
import ListOfMoviesContext from "../../context";

const editMovieSchema = Yup.object().shape({
  editTitle: Yup.string().required("*Required"),
  editReleaseDate: Yup.string().required("*Required"),
  editUrl: Yup.string()
    .url("*Please, enter correct URL!")
    .required("*Required"),
  editRating: Yup.number()
    .min(0, "Must be minimum 0")
    .max(10, "Must be maximum 10")
    .required("*Required"),
  addGenre: Yup.array().min(1, "At least one option").required("*Required"),
  editRuntime: Yup.number().required("*Required"),
  editOverview: Yup.string().required("*Required"),
});

const EditMovie = (props) => {
  const { setDescriptionOpen } = useContext(ListOfMoviesContext);
  const dispatch = useDispatch();
  const movieForm = props.editMovieClicked;

  return (
    <>
      {props.trigger ? (
        <div className="POPUP">
          <div className="POPUP-INFO">
            <button onClick={props.handler} className="cls-btn">
              x
            </button>
            <h1>edit movie</h1>
            {console.log(props.editMovieClicked)}
            <Formik
              initialValues={{
                editTitle: movieForm ? movieForm?.title : "",
                editReleaseDate: movieForm ? movieForm?.release_date : "",
                editUrl: movieForm ? movieForm?.poster_path : "",
                editRating: movieForm ? movieForm?.vote_average : "",
                addGenre: movieForm ? movieForm?.genres : [],
                editRuntime: movieForm ? movieForm?.runtime : "",
                editOverview: movieForm ? movieForm?.overview : "",
              }}
              enableReinitialize={true}
              validationSchema={editMovieSchema}
              onSubmit={(value, { resetForm }) => {
                dispatch(editMovie(value, props.editMovieClicked));
                resetForm();
              }}
            >
              {({ touched, errors, isSubmitting, resetForm }) => (
                <Form>
                  <div className="form">
                    <div>
                      <label htmlFor="editTitle">Title</label>
                      <Field
                        title="Title"
                        name="editTitle"
                        placeholder="Title"
                        type="text"
                      />

                      {errors.editTitle && touched.editTitle && (
                        <ErrorMessage name="editTitle">
                          {(errors) => (
                            <div style={{ color: "yellow", margin: "12px" }}>
                              {errors}
                            </div>
                          )}
                        </ErrorMessage>
                      )}
                    </div>
                    <div>
                      <label htmlFor="editReleaseDate">Release Date</label>
                      <Field
                        title="Release Date"
                        id="edit_release_date"
                        type="date"
                        name="editReleaseDate"
                      />
                      {errors.editReleaseDate && touched.editReleaseDate && (
                        <ErrorMessage name="editReleaseDate">
                          {(errors) => (
                            <div style={{ color: "yellow", margin: "12px" }}>
                              {errors}
                            </div>
                          )}
                        </ErrorMessage>
                      )}
                    </div>
                    <div>
                      <label htmlFor="editUrl">Movie URL</label>
                      <Field
                        title="Movie URL"
                        id="edit_modal_url"
                        placeholder="https://"
                        type="text"
                        name="editUrl"
                      />
                      {errors.editUrl && touched.editUrl && (
                        <ErrorMessage name="editUrl">
                          {(errors) => (
                            <div style={{ color: "yellow", margin: "12px" }}>
                              {errors}
                            </div>
                          )}
                        </ErrorMessage>
                      )}
                    </div>
                    <div>
                      <label htmlFor="editRating">Rating</label>
                      <Field title="Rating" type="number" name="editRating" />
                      {errors.editRating && touched.editRating && (
                        <ErrorMessage name="editRating">
                          {(errors) => (
                            <div style={{ color: "yellow", margin: "12px" }}>
                              {errors}
                            </div>
                          )}
                        </ErrorMessage>
                      )}
                    </div>
                    <div>
                      <CustomSelect />
                      {errors.addGenre && touched.addGenre && (
                        <ErrorMessage name="editGenre">
                          {(errors) => (
                            <div style={{ color: "yellow", margin: "12px" }}>
                              {errors}
                            </div>
                          )}
                        </ErrorMessage>
                      )}
                    </div>
                    <div>
                      <label htmlFor="editRuntime">Runtime</label>
                      <Field
                        title="Runtime"
                        id="form-movie-runtime"
                        type="number"
                        placeholder="minutes"
                        name="editRuntime"
                        min="1"
                      />
                      {errors.editRuntime && touched.editRuntime && (
                        <ErrorMessage name="editRuntime">
                          {(errors) => (
                            <div style={{ color: "yellow", margin: "12px" }}>
                              {errors}
                            </div>
                          )}
                        </ErrorMessage>
                      )}
                    </div>
                    <div>
                      <label htmlFor="editOverview">overview</label>
                      <Field
                        title="Overview"
                        placeholder="Movie description"
                        name="editOverview"
                        as="textarea"
                      />
                      {errors.editOverview && touched.editOverview && (
                        <ErrorMessage name="editOverview">
                          {(errors) => (
                            <div style={{ color: "yellow", margin: "12px" }}>
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
                        dispatch(editMovieByIdAction(null));
                        resetForm();
                      }}
                    >
                      reset
                    </button>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btns-2"
                      onClick={() => {
                        setDescriptionOpen(false);
                      }}
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
const mapStateToProps = (state) => ({
  // movieClicked: state.movieReducer.clickedMovie,
  editMovieClicked: state.movieReducer.editMovieState,
});
export default connect(mapStateToProps, null)(EditMovie);
