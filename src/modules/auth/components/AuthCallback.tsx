import React, { useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useSetupAuth0Token } from '../auth-hooks';
import { handleAuthentication } from '../auth-actions';
import { useNavigate } from 'react-router-dom';

// TODO add loading component
/**
 * @returns {JSX.Element} - Auth callback component.
 */
export function AuthCallback(): JSX.Element {
  const { user, isAuthenticated } = useAuth0();
  const navigate = useNavigate();

  useSetupAuth0Token();

  useEffect(() => {
    if (isAuthenticated && user && user.email) {
      handleAuthentication(user.email).finally(() => navigate('/'));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated]);

  // NOT ADD LOADING COMPONENT HERE this must be a loading auth component
  return <div>authenticated....</div>;
}
