import { createClient, ClientContextProvider } from "react-fetching-library";

const HOST = process.env.REACT_APP_API_BASE_URL;
const TOKEN = process.env.REACT_APP_API_KEY;

const requestHostInterceptor = (host, token) => () => async action => {
  return {
    ...action,
    endpoint: `${host}${action.endpoint}&api_key=${token}`
  };
};

const Client = createClient({
  // None of the options is required
  requestInterceptors: [requestHostInterceptor(HOST, TOKEN)]
});

export { ClientContextProvider, Client };
