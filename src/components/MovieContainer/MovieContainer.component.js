import React from "react";
import "./MovieContainer.styles.css";
import Movie from "../movie/movie.component";
import logo1 from "../../img/pulpfiction.png";
import logo2 from "../../img/Bogem.png";
import logo3 from "../../img/killbill.png";
import logo4 from "../../img/Avengers.png";
import logo5 from "../../img/Inception.png";
import logo6 from "../../img/Dogs.png";

let movies = [
  {
    title: "Pulp Fiction",
    img: logo1,
    year: 2004,
    genre: "Action & Adventure",
    id: "asdaf",
  },
  {
    title: "Bohemian Rhapsody",
    img: logo2,
    year: 2003,
    genre: "Drama, Biography, Music",
    id: "asdaffs",
  },
  {
    title: "Kill Bill: Vol 2",
    img: logo3,
    year: 1994,
    genre: "Oscar winning Movie",
    id: "asdafwq",
  },
  {
    title: "Avengers: War of Infinity",
    img: logo4,
    year: 2004,
    genre: "Action & Adventure",
    id: "asdafuit",
  },
  {
    title: "Inception",
    img: logo5,
    year: 2003,
    genre: "Action & Adventure",
    id: "asdafcasd",
  },
  {
    title: "Reservoir dogs",
    img: logo6,
    year: 1994,
    genre: "Oscar winning Movie",
    id: "asdafyluyl",
  },
];
class MovieContainer extends React.Component {
  render() {
    return (
      <>
        <p className="found">{movies.length} movies found</p>
        <div className="movie-list">
          {movies.map(({ title, img, year, genre, id }) => (
            <Movie
              title={title}
              img={img}
              year={year}
              genre={genre}
              key={id}
              id={id}
            />
          ))}
        </div>
      </>
    );
  }
}
export default MovieContainer;
