import resolvers from "../resolvers";

test.each([
  [
    "empty recent history",
    {
      recentHistory: {
        packages: []
      }
    },
    "formik",
    {
      recentHistory: {
        packages: ["formik"]
      }
    }
  ],
  [
    "new package already in recent history",
    {
      recentHistory: {
        packages: ["formik"]
      }
    },
    "formik",
    {
      recentHistory: {
        packages: ["formik"]
      }
    }
  ],
  [
    "new package not already in recent history",
    {
      recentHistory: {
        packages: ["react"]
      }
    },
    "formik",
    {
      recentHistory: {
        packages: ["formik", "react"]
      }
    }
  ],
  [
    "new package already in recent history but in old position",
    {
      recentHistory: {
        packages: ["react", "formik"]
      }
    },
    "formik",
    {
      recentHistory: {
        packages: ["formik", "react"]
      }
    }
  ],
  [
    "new package not already in recent history but existing packages is full",
    {
      recentHistory: {
        packages: ["react1", "react2", "react3", "react4", "react5"]
      }
    },
    "formik",
    {
      recentHistory: {
        packages: ["formik", "react1", "react2", "react3", "react4"]
      }
    }
  ]
])(
  "%s",
  (
    _description: string,
    currentState: any,
    newPackage: string,
    expected: any
  ) => {
    const writeData = jest.fn();

    resolvers.resolvers.Mutation.updateRecentHistoryPackages(
      null,
      { nodeId: newPackage },
      { cache: { readQuery: () => currentState, writeData } }
    );

    expect(writeData).toHaveBeenCalledTimes(1);
    expect(writeData).toHaveBeenLastCalledWith({
      data: expected
    });
  }
);

// test("updateRecentHistoryPackages", () => {
//   const currentState = {
//     recentHistory: {
//       packages: []
//     }
//   };
//   const newPackage = "formik";
//   const writeData = jest.fn();

//   resolvers.resolvers.Mutation.updateRecentHistoryPackages(
//     null,
//     { nodeId: newPackage },
//     { cache: { readQuery: () => currentState, writeData } }
//   );

//   expect(writeData).toHaveBeenCalledTimes(1);
//   expect(writeData).toHaveBeenLastCalledWith({
//     data: {
//       recentHistory: {
//         packages: [newPackage]
//       }
//     }
//   });
// });
