import React from "react";
import PropTypes from "prop-types";
import { Row } from "../../../../components/grid";
import MovieItem from "./movie-items";

const MovieList = ({ movies }) => {
  return (
    <Row>
      {movies.results.map((movie, index) =>
        index > 30 ? null : <MovieItem key={movie.id} movie={movie} />
      )}
    </Row>
  );
};

MovieList.propTypes = {
  movies: PropTypes.objectOf(PropTypes.any).isRequired
};

export default MovieList;
