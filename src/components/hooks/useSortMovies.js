import React, { useState, useEffect } from "react";

const props = {
  Title: "title",
  Release_Date: "year",
};
const compareProps = (property) => {
  return (a, b) =>
    a[property] < b[property] ? -1 : a[property] > b[property] ? 1 : 0;
};
const useSortMovies = (movies, sortBy) => {
  const [sortedMovies, setSortedMovies] = useState(movies);
  useEffect(() => {
    setSortedMovies(movies.sort(compareProps(props[sortBy])));
  }, [sortBy]);
  return sortedMovies;
};
export default useSortMovies;
