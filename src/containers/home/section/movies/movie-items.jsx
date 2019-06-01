import React, { memo } from "react";
import PropTypes from "prop-types";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Column } from "../../../../components/grid";

const IMAGE_URL = process.env.REACT_APP_IMAGE_BASE_URL;

const MovieItem = memo(({ movie }) => {
  return (
    <Column xs={12} sm={6} md={8} lg={3}>
      <LazyLoadImage
        alt={movie.title}
        height={300}
        effect="blur"
        // src="https://cdn.animenewsnetwork.com/thumbnails/max400x400/cms/news/128780/dx151twvmaasjod.jpg-large.jpeg"
        src={`${IMAGE_URL}${movie.poster_path}`}
        width={200}
      />
    </Column>
  );
});

MovieItem.propTypes = {
  movie: PropTypes.objectOf(PropTypes.any).isRequired
};

export default MovieItem;
