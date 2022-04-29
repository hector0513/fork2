import { DocumentNode } from 'graphql';
import { apolloClient } from '.';

/**
 * @param {DocumentNode} document - Graphql document to create suscription.
 * @returns {Function} - Funtion to subscribe.
 */
export function createSubscription<T, U>(document: DocumentNode) {
  return (
    variables: U,
    callback: (data: T | null | undefined) => void,
  ): ZenObservable.Subscription => {
    const subscription = apolloClient.subscribe<T>({
      query: document,
      variables,
    });

    return subscription.subscribe((sub) => callback(sub.data));
  };
}
