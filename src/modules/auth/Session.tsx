import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { MainLoader } from '../../shared/components/progress/MainLoader';
import { useSetupAuth0Token } from './auth-hooks';
import { Redirect } from '../../shared/components/Redirect';

/**
 * @param {object} props - Props.
 * @param {JSX.Element}  props.children - Children.
 * @returns {JSX.Element} - Session component.
 */
const ApolloSession: React.FC = ({ children }) => {
  const loadingToken = useSetupAuth0Token();
  if (loadingToken) return <MainLoader />;
  return <>{children}</>;
};

type SessionProps = {
  children: React.ReactNode;
};

/**
 * @param {object} props - Props.
 * @param {JSX.Element}  props.children - Children.
 * @returns {JSX.Element} - Session component.
 */
export function Session({ children }: SessionProps): JSX.Element {
  const { isAuthenticated, isLoading } = useAuth0();
  // useDefaultRedirect('/dashboard');
  if (!isAuthenticated) return <Redirect to="/auth" />;

  if (isLoading) return <MainLoader />;

  return <ApolloSession>{children}</ApolloSession>;
}
