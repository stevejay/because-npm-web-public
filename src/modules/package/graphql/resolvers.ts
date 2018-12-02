import * as _ from "lodash";
import { RecentHistory } from "./queries";

const RECENT_HISTORY_TYPENAME = "RecentHistory";
const MAX_PACKAGES_IN_HISTORY = 10;

interface IRecentHistoryPackagesSlice {
  recentHistory: {
    packages: string[];
    __typename: string;
  };
}

export default {
  defaults: {
    recentHistory: {
      __typename: RECENT_HISTORY_TYPENAME,
      packages: []
    }
  },
  resolvers: {
    Mutation: {
      updateRecentHistoryPackages: (__: any, values: any, { cache }: any) => {
        const newPackage: string = values.nodeId;
        const currentState: IRecentHistoryPackagesSlice = cache.readQuery({
          query: RecentHistory
        });
        cache.writeData({
          data: createUpdatedRecentHistoryPackagesSlice(
            currentState,
            newPackage
          )
        });
        return null;
      }
    },
    // Need an empty Query obj here because of a bug preventing
    // default client state resetting on reset store:
    // https://github.com/apollographql/apollo-link-state/issues/198
    Query: () => ({})
  }
};

export function createUpdatedRecentHistoryPackagesSlice(
  currentState: IRecentHistoryPackagesSlice,
  newPackage: string
): IRecentHistoryPackagesSlice {
  let packages: string[] = currentState.recentHistory.packages.slice();
  if (_.includes(packages, newPackage)) {
    packages = [
      newPackage,
      ...packages.filter(element => element !== newPackage)
    ];
  } else {
    packages = [newPackage, ...packages];
  }
  return {
    recentHistory: {
      ...currentState.recentHistory,
      packages: _.take(packages, MAX_PACKAGES_IN_HISTORY)
    }
  };
}
