import React, { Suspense } from "react";
import styled from "styled-components";
import { Container } from "semantic-ui-react";
import Header from "../../components/header";
import Sidebar from "../../components/sidebar";
import { MovieContainer, MovieLoading } from "./section/movies";
import { Row, Column } from "../../components/grid";
import { colors } from "../../data/constants";

const Wrapper = styled.div``;

const Iklan = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  /* background-color: #4e5b60; */

  img {
    cursor: pointer;
    border-radius: 5px;
  }
`;

const BodyContainer = styled.div`
  margin-top: 62px;
`;

const ContentContainer = styled(Row)`
  padding: 20px;
  border-top: 1px solid #ebebeb;
`;

const LeftSide = styled.div`
  padding: 0 20px 0 0;
`;

const Content = styled.div`
  border-left: 1px solid #ebebeb;
  padding: 0 0 0 20px;
`;

const Title = styled.span`
  background-color: ${colors.primary.base};
  padding: 8px 32px;
  font-weight: bold;
  color: #fff;
  border-radius: 50px;
`;

const Footer = styled.div`
  height: 250px;
  background-color: aliceblue;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #505d62;
`;

function Home() {
  return (
    <Wrapper>
      <Header />
      <BodyContainer>
        <Iklan>
          <img
            width="49.5%"
            alt=""
            src="https://bos21.com/wp-content/uploads/ratuwin.gif"
          />
          <img
            width="49.5%"
            alt=""
            src="https://bos21.com/wp-content/uploads/ratuwin.gif"
          />
        </Iklan>

        <ContentContainer>
          <Column lg="3">
            <LeftSide>
              <span>Top 10 Popular This Week</span>
              <div style={{ margin: "20px 0px" }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    marginBottom: 20
                  }}
                >
                  <img
                    alt=""
                    src="https://animeyou.net/media/source/image/a-channel.jpg"
                    style={{
                      height: 50,
                      width: 50,
                      borderRadius: 5,
                      marginRight: 20
                    }}
                  />
                  <span>
                    Naruto asldmnk askdjnkj adkj akjsd kja sdkjas dkjasdkj
                  </span>
                  <span>v</span>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center"
                  }}
                >
                  <img
                    alt=""
                    src="https://animeyou.net/media/source/image/a-channel.jpg"
                    style={{
                      height: 50,
                      width: 50,
                      borderRadius: 5,
                      marginRight: 20
                    }}
                  />
                  <span>
                    Naruto asldmnk askdjnkj adkj akjsd kja sdkjas dkjasdkj
                  </span>
                  <span>^</span>
                </div>
              </div>
            </LeftSide>
          </Column>
          <Column lg="9">
            <Content>
              <Suspense fallback={<MovieLoading />}>
                <Title>On Going</Title>
                <div style={{ marginTop: 12 }}>
                  <MovieContainer />
                </div>
              </Suspense>
            </Content>
          </Column>
        </ContentContainer>
      </BodyContainer>
      <Footer>
        <span>Footer Anime Tampan</span>
      </Footer>
    </Wrapper>
  );
}

export default Home;
