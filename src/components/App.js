import React, { useState, useEffect } from "react";
import Header from "./Header/Header.component";
import Footer from "./footter/footer.component";
import ToggleGenre from "./Togglegenre/Togglegenre";
import MovieContainer from "./MovieContainer/MovieContainer.component";
import ErrorBoundary from "./ErrorBound/ErrorBoundary.component";
import AddMovie from "./PopUps/AddMovie";
import EditMovie from "./PopUps/EditMovie";
import DeleteMovie from "./PopUps/DeleteMovie";
import InfoMovie from "./Header/infoMovie";
import logo1 from "../img/pulpfiction.png";
import logo2 from "../img/Bogem.png";
import logo3 from "../img/killbill.png";
import logo4 from "../img/Avengers.png";
import logo5 from "../img/Inception.png";
import logo6 from "../img/Dogs.png";
import "../index.css";
let movies = [
  {
    title: "Pulp Fiction",
    img: logo1,
    year: 2004,
    genre: "Action & Adventure",
    time: "140",
    id: "asdaf",
  },
  {
    title: "Bohemian Rhapsody",
    img: logo2,
    year: 2003,
    genre: "Drama, Biography, Music",
    time: "130",
    id: "asdaffs",
  },
  {
    title: "Kill Bill: Vol 2",
    img: logo3,
    year: 1994,
    genre: "Oscar winning Movie",
    time: "120",
    id: "asdafwq",
  },
  {
    title: "Avengers: War of Infinity",
    img: logo4,
    year: 2004,
    genre: "Action & Adventure",
    time: "157",
    id: "asdafuit",
  },
  {
    title: "Inception",
    img: logo5,
    year: 2003,
    genre: "Action & Adventure",
    time: "136",
    id: "asdafcasd",
  },
  {
    title: "Reservoir dogs",
    img: logo6,
    year: 1994,
    genre: "Oscar winning Movie",
    time: "139",
    id: "asdafyluyl",
  },
];
const App = (props) => {
  const [isDescriptionOpen, setDescriptionOpen] = useState(false);
  const [movieId, setMovieId] = useState(null);
  const [sortedMovieByYear, setSortedMovieByYear] = useState(true);
  const [sortedMovieByTitle, setSortedMovieByTitle] = useState(true);
  const [movieList, setMovieList] = useState(movies);

  const handleDescription = () => {
    setDescriptionOpen(!isDescriptionOpen);
  };

  const handleSortedByYear = () => {
    setSortedMovieByYear(!sortedMovieByYear);
  };
  const handleSortedByTitle = () => {
    setSortedMovieByTitle(!sortedMovieByTitle);
  };

  const sortedObject = (obj) => {
    const sorted = obj.sort((a, b) => {
      return a.year - b.year;
    });
    return sorted;
  };
  const sortedByTitle = (obj) => {
    const sortedTitle = obj.sort((a, b) => {
      if (a.title < b.title) {
        return -1;
      }
      if (a.title > b.title) {
        return 1;
      }
    });
    return sortedTitle;
  };

  useEffect(() => {
    if (sortedMovieByYear) {
      setMovieList(sortedObject(movies));
    }
  }, [sortedMovieByYear, movies]);

  useEffect(() => {
    if (sortedMovieByTitle) {
      setMovieList(sortedByTitle(movies));
    }
  }, [sortedMovieByTitle, movies]);

  const selectedMovie = movies.filter((movie) => movie.id === movieId);
  return (
    <div className="container">
      {isDescriptionOpen ? (
        selectedMovie.map(({ id, ...otherMovieInfo }) => (
          <InfoMovie key={id} {...otherMovieInfo} handler={handleDescription} />
        ))
      ) : (
        <Header />
      )}

      <ToggleGenre
        handler={handleSortedByYear}
        titleHandler={handleSortedByTitle}
      />
      <ErrorBoundary>
        <MovieContainer
          movies={movieList}
          handler={handleDescription}
          isDescriptionOpen={isDescriptionOpen}
          setMovieId={setMovieId}
          setDescriptionOpen={setDescriptionOpen}
          sortedMovieByYear={sortedMovieByYear}
        />
      </ErrorBoundary>
      <Footer>netflixroulette</Footer>
    </div>
  );
};

export default App;

// import React, { useState, useEffect } from "react";
// import Header from "./Header/Header.component";
// import Footer from "./footter/footer.component";
// import ToggleGenre from "./Togglegenre/Togglegenre";
// import MovieContainer from "./MovieContainer/MovieContainer.component";
// import ErrorBoundary from "./ErrorBound/ErrorBoundary.component";
// import AddMovie from "./PopUps/AddMovie";
// import EditMovie from "./PopUps/EditMovie";
// import DeleteMovie from "./PopUps/DeleteMovie";
// import InfoMovie from "./Header/infoMovie";
// import logo1 from "../img/pulpfiction.png";
// import logo2 from "../img/Bogem.png";
// import logo3 from "../img/killbill.png";
// import logo4 from "../img/Avengers.png";
// import logo5 from "../img/Inception.png";
// import logo6 from "../img/Dogs.png";
// import "../index.css";

// const App = (props) => {
//   const [isDescriptionOpen, setDescriptionOpen] = useState(false);
//   const [movieId, setMovieId] = useState(null);
//   const [sortedMovieByYear, setSortedMovieByYear] = useState(false);
//   const [sortedMovieByTitle, setSortedMovieByTitle] = useState(false);
//   const [moviesList, setMovieList] = useState(movies)

//   const handleDescription = () => {
//     setDescriptionOpen(!isDescriptionOpen);
//   };

//   const handleSortedByYear = () => {
//     setSortedMovieByYear(!sortedMovieByYear);
//   };
//   const handleSortedByTitle = () => {
//     setSortedMovieByTitle(!sortedMovieByTitle);
//   };

//   const sortedObject = (obj) => {
//     const sorted = obj.sort((a, b) => {
//       return a.year - b.year;
//     });
//     return sorted;
//   };
//   const sortedByTitle = (obj) => {
//     const sortedTitle = obj.sort((a, b) => {
//       if (a.title < b.title) {
//         return -1;
//       }
//       if (a.title > b.title) {
//         return 1;
//       }
//     });
//     return sortedTitle;
//   };
//   const [movies, setMovies] = [
//     [
//       {
//         title: "Pulp Fiction",
//         img: logo1,
//         year: 2004,
//         genre: "Action & Adventure",
//         time: "140",
//         id: "asdaf",
//       },
//       {
//         title: "Bohemian Rhapsody",
//         img: logo2,
//         year: 2003,
//         genre: "Drama, Biography, Music",
//         time: "130",
//         id: "asdaffs",
//       },
//       {
//         title: "Kill Bill: Vol 2",
//         img: logo3,
//         year: 1994,
//         genre: "Oscar winning Movie",
//         time: "120",
//         id: "asdafwq",
//       },
//       {
//         title: "Avengers: War of Infinity",
//         img: logo4,
//         year: 2004,
//         genre: "Action & Adventure",
//         time: "157",
//         id: "asdafuit",
//       },
//       {
//         title: "Inception",
//         img: logo5,
//         year: 2003,
//         genre: "Action & Adventure",
//         time: "136",
//         id: "asdafcasd",
//       },
//       {
//         title: "Reservoir dogs",
//         img: logo6,
//         year: 1994,
//         genre: "Oscar winning Movie",
//         time: "139",
//         id: "asdafyluyl",
//       },
//     ],
//   ];

//   useEffect(() => {
//     if (sortedMovieByYear) {
//       sortedObject(movies);
//     }
//   }, [sortedMovieByYear, movies]);

//   // useEffect(() => {
//   //   if (sortedMovieByTitle) {
//   //     sortedByTitle(movies);
//   //   }
//   // }, [sortedMovieByTitle, movies]);

//   console.log(movies);

//   const selectedMovie = movies.filter((movie) => movie.id === movieId);
//   return (
//     <div className="container">
//       {isDescriptionOpen ? (
//         selectedMovie.map(({ id, ...otherMovieInfo }) => (
//           <InfoMovie key={id} {...otherMovieInfo} handler={handleDescription} />
//         ))
//       ) : (
//         <Header />
//       )}

//       <ToggleGenre
//         handler={handleSortedByYear}
//         titleHandler={handleSortedByTitle}
//       />
//       <ErrorBoundary>
//         <MovieContainer
//           movies={movies}
//           handler={handleDescription}
//           isDescriptionOpen={isDescriptionOpen}
//           setMovieId={setMovieId}
//           setDescriptionOpen={setDescriptionOpen}
//           sortedMovieByYear={sortedMovieByYear}
//         />
//       </ErrorBoundary>
//       <Footer>netflixroulette</Footer>
//     </div>
//   );
// };

// export default App;
