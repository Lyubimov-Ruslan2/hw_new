import React from "react";
import "./AddMovie.styles.css";
import arrow from "../../img/Arrowforgenre.svg";
import { useDispatch, useSelector } from "react-redux";
import { deleteMovie } from "../../Redux/thunk/AsyncData";

const DeleteMovie = (props) => {
  const handleDelete = () => {
    dispatch(deleteMovie(props.id));
    alert("The movie was deleted!");
  };
  const dispatch = useDispatch();
  const { deleteClickMovie } = useSelector((state) => state);
  return (
    <>
      {props.trigger ? (
        <div className="POPUP">
          <div className="POPUP-INFO-Delete">
            <button onClick={props.handler} className="cls-btn">
              x
            </button>
            {console.log(deleteClickMovie)}
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
