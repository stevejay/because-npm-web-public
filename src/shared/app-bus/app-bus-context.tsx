import React from "react";
import AppBus from "./app-bus";

const AppBusContext: React.Context<AppBus> = React.createContext(new AppBus());
const appBus = new AppBus();

type Props = {
  children: React.ReactNode;
};

export const AppBusProvider = ({ children }: Props) => (
  <AppBusContext.Provider value={appBus}>{children}</AppBusContext.Provider>
);

export function useAppBus() {
  return React.useContext(AppBusContext);
}

// For legacy support:
export type AppBusProps = {
  appBus: AppBus;
};

// For legacy support:
export function withAppBus<P>(wrappedComponent: any) {
  return (props: P) => {
    const appBus = useAppBus();
    const WrappedComponent = wrappedComponent;
    return <WrappedComponent {...props} appBus={appBus} />;
  };
}
