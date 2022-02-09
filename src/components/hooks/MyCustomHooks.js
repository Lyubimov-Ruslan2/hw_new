import React from "react";

export const useSortedObject = (obj) => {
  const sorted = obj.sort((a, b) => {
    return a.year - b.year;
  });
  return sorted;
};

export const useSortedByTitle = (obj) => {
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
