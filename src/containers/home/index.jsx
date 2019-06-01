import React, { Suspense } from "react";
import styled from "styled-components";
// import Header from "../../components/header";
import Sidebar from "../../components/sidebar";
import { MovieContainer, MovieLoading } from "./section/movies";

// const MovieList = lazy(() => import("./movie-list"));

const Wrapper = styled.div``;

const ContentContainer = styled.div`
  margin-left: 230px;
`;

function Home() {
  return (
    <Wrapper>
      <Sidebar />
      <ContentContainer>
        {/* <Suspense fallback={<MovieLoading />}>
          <MovieContainer />
        </Suspense> */}
      </ContentContainer>
    </Wrapper>
  );
}

export default Home;
