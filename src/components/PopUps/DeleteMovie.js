import React, { useContext } from "react";
import "./AddMovie.styles.css";

import { useDispatch } from "react-redux";
import { deleteMovie } from "../../Redux/thunk/AsyncData";
import ListOfMoviesContext from "../../context";

const DeleteMovie = (props) => {
  const { setDescriptionOpen } = useContext(ListOfMoviesContext);
  const handleDelete = () => {
    dispatch(deleteMovie(props.id));
    setDescriptionOpen(false);
    alert("The movie was deleted!");
  };
  const dispatch = useDispatch();

  return (
    <>
      {props.trigger ? (
        <div className="POPUP">
          <div className="POPUP-INFO-Delete">
            <button onClick={props.handler} className="cls-btn">
              x
            </button>

            <h1>Delete Movie</h1>
            <p>Are you sure you want to delete this movie?</p>
            <div className="btns-for-add">
              <button onClick={handleDelete} className="btns-2">
                Confirm
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

// class DeleteMovie extends React.PureComponent {
//   constructor(props) {
//     super(props);
//   }

//   componentDidUpdate() {
//     console.log("Delete button was clicked");
//   }
//   render() {
//     return (
//       <>
//         {this.props.trigger ? (
//           <div className="POPUP">
//             <div className="POPUP-INFO-Delete">
//               <button onClick={this.props.handler} className="cls-btn">
//                 x
//               </button>
//               <h1>Delete Movie</h1>
//               <p>Are you sure you want to delete this movie?</p>
//               <div className="btns-for-add">
//                 <button className="btns-2">Confirm</button>
//               </div>
//             </div>
//           </div>
//         ) : null}
//       </>
//     );
//   }
// }

export default DeleteMovie;
