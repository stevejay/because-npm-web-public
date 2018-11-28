import "normalize.css";
import * as React from "react";
import { ApolloProvider } from "react-apollo";
import { Provider as BusProvider } from "react-bus";
import { Route, Switch } from "react-router";
import { withRouter } from "react-router-dom";
import { Page } from "src/shared/page";
import ScrollResetListener from "src/shared/scroll/scroll-reset-listener";
import "what-input";
import apolloClient from "./apollo-client";
import "./app.css";
import { NotFoundPage } from "./modules/error";
import { Footer } from "./modules/footer";
import { Header } from "./modules/header";
import { HomePage } from "./modules/home";
import { PrivacyPage, TermsPage } from "./modules/legal";
import { PackagePageHandler } from "./modules/package";
import { SearchBarHandler, SearchPageHandler } from "./modules/search";

const App = () => (
  <ApolloProvider client={apolloClient}>
    <BusProvider>
      <Page>
        <ScrollResetListener />
        <Header />
        <SearchBarHandler />
        <Switch>
          <Route exact={true} path="/terms" component={TermsPage} />
          <Route exact={true} path="/privacy" component={PrivacyPage} />
          <Route exact={true} path="/" component={HomePage} />
          <Route exact={true} path="/search" component={SearchPageHandler} />
          <Route path="/package/(.*)" component={PackagePageHandler} />
          <Route component={NotFoundPage} />
        </Switch>
        <Footer />
      </Page>
    </BusProvider>
  </ApolloProvider>
);

export default withRouter(App);
