import React from "react";
import { useSuspenseQuery } from "react-fetching-library";
import { getUsersList } from "../../../../api/actions/users";
import { useErrorBoundary } from "../../../../utils/error-boundary";
import MovieList from "./movie-list";

const MovieContainer = useErrorBoundary(() => {
  const { payload, error } = useSuspenseQuery(getUsersList());
  if (!error && payload) return <MovieList movies={payload} />;
  return null;
});

export default MovieContainer;
