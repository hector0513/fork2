import { useAuth0 } from '@auth0/auth0-react';
import { useEffect, useState } from 'react';
import { createAction } from '@cobuildlab/react-simple-state/lib/actions';
import { useLocation, useNavigate } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { OnTokenErrorEvent, OnTokenEvent } from './auth-events';
import { FETCH_SESSION_QUERY } from './auth-queries';
import { SessionQuery } from './auth-types';
import { QueryResponse } from '../../shared/types';

/**
 * @returns {void}
 */
export function useSetupAuth0Token(): boolean {
  const auth = useAuth0();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const tokenAction = createAction(
      OnTokenEvent,
      OnTokenErrorEvent,
      async () => {
        const token = await auth.getIdTokenClaims();
        // eslint-disable-next-line no-underscore-dangle
        return { token: token?.__raw as string };
      },
    );

    if (auth.isAuthenticated) {
      setLoading(true);
      tokenAction().then(() => {
        setLoading(false);
      });
    }
  }, [auth, auth.getIdTokenClaims, auth.isAuthenticated]);

  // TODO: handle the error case when fetching the token
  return loading;
}

/**
 * @param {string} route - Default path to redirect.
 * @returns {void}
 */
export function useDefaultRedirect(route: string): void {
  const auth = useAuth0();
  const navegate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    if (auth.isAuthenticated && location.pathname === '/') {
      navegate(route);
    }
  }, [navegate, auth.isAuthenticated, route, location.pathname]);

  // TODO: hanlde the error case when fetching the token
}

/**
 * Hook for returning the User Session.
 *
 * @returns {QueryResponse<SessionQuery>} The response.
 */
export function useSession(): QueryResponse<SessionQuery> | null {
  const { loading, error, data, refetch } =
    useQuery<SessionQuery>(FETCH_SESSION_QUERY);
  return { loading, error, data, refetch };
}
