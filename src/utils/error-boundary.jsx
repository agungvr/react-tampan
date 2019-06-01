import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import * as Sentry from "@sentry/browser";

const Container = styled.div`
  background-color: crimson;
  color: white;
  padding: 20px;
  border-radius: 5px;
`;

const Title = styled.span`
  font-size: larger;
  font-weight: bold;
`;

const Content = styled.details`
  white-space: pre-wrap;
  margin-top: 10px;
`;

const Image = styled.img`
  width: 300px;
  height: auto;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      errorInfo: null,
      eventId: null
    };
  }

  feedbackClick = () => {
    const { eventId } = this.state;
    return Sentry.showReportDialog({ eventId });
  };

  componentDidCatch(error, errorInfo) {
    // Catch errors in any components below and re-render with error message
    this.setState({
      error,
      errorInfo
    });
    // You can also log error messages to an error reporting service here
    Sentry.withScope(scope => {
      scope.setExtras(errorInfo);
      const eventId = Sentry.captureException(error);
      this.setState({ eventId });
    });
  }

  render() {
    const { error, errorInfo } = this.state;
    const { children } = this.props;
    if (errorInfo) {
      if (process.env.NODE_ENV !== "production") {
        return (
          <Container>
            <Title>Something went wrong.</Title>
            <br />
            <button type="button" onClick={this.feedbackClick}>
              Report feedback
            </button>
            <Content>
              {error && error.toString()}
              <br />
              {errorInfo.componentStack}
            </Content>
          </Container>
        );
      }
      return (
        <Wrapper>
          <h3>Oops, Something went wrong :(</h3>
          <Image src="https://assets-ouch.icons8.com/thumb/830/70a95416-1b59-42c0-9d72-0401aa808078.png" />
          <button type="button" onClick={this.feedbackClick}>
            Report feedback
          </button>
        </Wrapper>
      );
    }
    return children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.node.isRequired
};

const useErrorBoundary = Component => props => {
  return (
    <ErrorBoundary>
      <Component {...props} />
    </ErrorBoundary>
  );
};

export { useErrorBoundary, ErrorBoundary };
