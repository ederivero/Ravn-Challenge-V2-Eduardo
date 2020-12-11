import { InMemoryCache, Reference } from '@apollo/client';

export const cache: InMemoryCache = new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          results: {
            keyArgs: false,
            merge(existing, incoming) {
              let peoples: Reference[] = [];
              if (existing && existing.peoples) {
                peoples = peoples.concat(existing.peoples);
              }
              if (incoming && incoming.peoples) {
                peoples = peoples.concat(incoming.peoples);
              }
              return {
                ...incoming,
                peoples,
              };
            }
          }
        }
      }
    }
  });
  