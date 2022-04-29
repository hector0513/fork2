import {
  ApolloClient,
  InMemoryCache,
  NormalizedCacheObject,
  HttpLink,
  split,
} from '@apollo/client';
import { WebSocketLink } from '@apollo/client/link/ws';
import { getMainDefinition } from '@apollo/client/utilities';
import { setContext } from '@apollo/client/link/context';
import {
  WORKSPACE_ENDPOINT,
  EIGHTBASE_WS_ENDPOINT,
  WORKSPACE_ID,
  ENVIRONMENT_NAME,
} from './constants';
import { OnTokenEvent } from '../modules/auth/auth-events';

/**
 * @param {Function} getToken - Function to get the token.
 * @param {object} headers - Extra header to the client.
 * @returns {object} Apollo client.
 */
export function createApolloClient(
  getToken: () => string,
  headers = {},
): ApolloClient<NormalizedCacheObject> {
  const environmentName =
    ENVIRONMENT_NAME &&
    ENVIRONMENT_NAME.length > 0 &&
    ENVIRONMENT_NAME.toLowerCase() !== 'master'
      ? ENVIRONMENT_NAME
      : undefined;
  const httpLink = new HttpLink({
    uri: WORKSPACE_ENDPOINT,
  });

  const authLink = setContext((_, { headers: _headers }) => {
    const token = getToken();
    return {
      headers: {
        ...headers,
        ..._headers,
        authorization: `Bearer ${token}`,
      },
    };
  });
  const wsLink = new WebSocketLink({
    uri: `${EIGHTBASE_WS_ENDPOINT}`,
    options: {
      reconnect: true,
      lazy: true,
      /**
       * ConnectionParams.
       *
       * @returns Websocket payload.
       */
      connectionParams: () => {
        const token = getToken();
        return {
          token,
          environmentName,
          workspaceId: WORKSPACE_ID,
        };
      },
    },
    webSocketImpl: class WebSocketWithoutProtocol extends WebSocket {
      /**
       * @param url - Url.
       */
      // eslint-disable-next-line @typescript-eslint/no-useless-constructor
      constructor(url: string) {
        super(url); // ignore protocol
      }
    },
  });

  const splitLink = split(
    ({ query }) => {
      const definition = getMainDefinition(query);
      return (
        definition.kind === 'OperationDefinition' &&
        definition.operation === 'subscription'
      );
    },
    wsLink,
    authLink.concat(httpLink),
  );

  const client = new ApolloClient({
    uri: WORKSPACE_ENDPOINT,
    link: authLink.concat(splitLink),
    cache: new InMemoryCache(),
  });

  return client;
}

export const apolloClient: ApolloClient<NormalizedCacheObject> =
  createApolloClient(() => OnTokenEvent.get()?.token as string);
