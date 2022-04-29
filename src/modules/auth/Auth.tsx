import React, { useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { MainLoader } from '../../shared/components/progress/MainLoader';

// TODO add loading component
/**
 * @returns {JSX.Element} - Auth component.
 */
export function Auth(): JSX.Element {
  const { loginWithRedirect } = useAuth0();

  useEffect(() => {
    loginWithRedirect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <MainLoader />;
}
