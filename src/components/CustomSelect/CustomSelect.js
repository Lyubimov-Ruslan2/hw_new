import React, { useState } from "react";
import { Field, ErrorMessage } from "formik";
// import { MultiSelect } from "react-multi-select-component";
import Multiselect from "multiselect-react-dropdown";
import "./CustomSelect";
const CustomSelect = () => {
  const genreList = [
    { id: 1, title: "Action" },
    { id: 3, title: "Comedy" },
    { id: 4, title: "Horror" },
    { id: 5, title: "Crime" },
  ];
  const [OpenCheckBox, setOpenCheckBox] = React.useState(false);

  const OptionsHandler = () => {
    setOpenCheckBox((prev) => !prev);
  };
  return (
    <div className="select">
      <label htmlFor="modal__checkbox">Genre</label>

      <div className="options">
        <div className="options--title" onClick={OptionsHandler}>
          Select Genre
        </div>
        {OpenCheckBox && (
          <div className="options--section">
            {genreList.map((genre) => (
              <div key={genre.id} className="options--wrapper">
                <Field type="checkbox" name="genre" value={genre.title} />
                <label>{genre.title}</label>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );

  //   return (
  //     <div>
  //       <Multiselect
  //         isObject={false}
  //         onRemove={(event) => {
  //           console.log(event);
  //         }}
  //         onSelect={(event) => {
  //           console.log(event);
  //         }}
  //         options={genreList}
  //         showCheckbox
  //       />
  //     </div>
  //   );
};

export default CustomSelect;
