import React from "react";
import PropTypes from "prop-types";
import { Row } from "../../../../components/grid";
import MovieItem from "./movie-items";

const MovieList = ({ movies }) => {
  return (
    <div style={{ padding: 20 }}>
      <Row>
        {movies.results.map(movie => (
          <MovieItem key={movie.id} movie={movie} />
        ))}
      </Row>
    </div>
  );
};

MovieList.propTypes = {
  movies: PropTypes.objectOf(PropTypes.any).isRequired
};

export default MovieList;
