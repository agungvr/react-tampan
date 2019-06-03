import React from "react";
import ContentLoader from "react-content-loader";
import { Row, Column } from "../../../../components/grid";

const MovieLoading = () => {
  return (
    <Row>
      {[...new Array(20)].map((x, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <Column key={`x-${index}`} xs={12} sm={6} md={8} lg={2}>
          <div style={{ padding: 5 }}>
            <ContentLoader
              height={300}
              width={200}
              speed={3}
              primaryColor="#f3f3f3"
              secondaryColor="#ecebeb"
            >
              <rect x="0" y="-2" rx="5" ry="5" width="400" height="400" />
            </ContentLoader>
          </div>
        </Column>
      ))}
    </Row>
  );
};

export default MovieLoading;
