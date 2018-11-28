import * as _ from "lodash";
import { RecentHistory } from "./queries";

const RECENT_HISTORY_TYPENAME = "RecentHistory";
const MAX_PACKAGES_IN_HISTORY = 10;

export default {
  defaults: {
    recentHistory: {
      __typename: RECENT_HISTORY_TYPENAME,
      packages: []
    }
  },
  resolvers: {
    // Need an empty Query obj here because of a bug preventing
    // default client state resetting on reset store:
    // https://github.com/apollographql/apollo-link-state/issues/198
    Mutation: {
      updateRecentHistoryPackages: (__: any, values: any, { cache }: any) => {
        const newPackage = values.nodeName;
        const previousState = cache.readQuery({ query: RecentHistory });
        let packages: string[] = previousState.recentHistory.packages.slice();
        if (_.includes(packages, newPackage)) {
          packages = [
            newPackage,
            ...packages.filter(element => element !== newPackage)
          ];
        } else {
          packages = [newPackage, ...packages];
        }
        cache.writeData({
          data: {
            recentHistory: {
              ...previousState.recentHistory,
              packages: _.take(packages, MAX_PACKAGES_IN_HISTORY)
            }
          }
        });
        return null;
      }
    },
    Query: () => ({})
  }
};
