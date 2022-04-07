import React from "react";
import { Formik, Field, Form } from "formik";
import { useNavigate } from "react-router-dom";
import "./SearchBar.styles.css";

const SearchBar = (props) => {
  const navigate = useNavigate();
  return (
    <Formik
      initialValues={{
        searchText: "",
      }}
      onSubmit={(value, { resetForm }) => {
        navigate(`/search/${value.searchText}`);
        resetForm();
      }}
    >
      {({ resetForm }) => (
        <Form>
          <div className="search-area">
            <h1>Find your movie</h1>
            <div>
              <Field
                name="searchText"
                type="search"
                placeholder="What do you want to watch?"
                className="inp"
              />
              <button type="submit" className="btn2">
                <span className="search-text">Search</span>
              </button>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default SearchBar;
