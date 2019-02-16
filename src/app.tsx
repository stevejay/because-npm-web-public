import "normalize.css";
import React from "react";
import { ApolloProvider } from "react-apollo";
import { Route, Switch } from "react-router";
import { withRouter } from "react-router-dom";
import { AppBusProvider } from "./shared/app-bus";
import { Page, NotFooter } from "./shared/page";
import { ScrollListener } from "./shared/scroll";
import "what-input";
import apolloClient from "./apollo-client";
import { NotFoundPage } from "./modules/error";
import { Footer } from "./modules/footer";
import { Header } from "./modules/header";
import { HomePage } from "./modules/home";
import { CreditsPage, PrivacyPage, TermsPage } from "./modules/legal";
import { PackagePage } from "./modules/package";
import { SearchBar, SearchPage } from "./modules/search";
import "./styles/app.scss";

const App = () => (
  <ApolloProvider client={apolloClient}>
    <AppBusProvider>
      <Page>
        <NotFooter>
          <ScrollListener />
          <Header />
          <SearchBar />
          <Switch>
            <Route exact={true} path="/terms" component={TermsPage} />
            <Route exact={true} path="/privacy" component={PrivacyPage} />
            <Route exact={true} path="/credits" component={CreditsPage} />
            <Route exact={true} path="/search" component={SearchPage} />
            <Route exact={true} path="/" component={HomePage} />
            <Route path="/package/(.*)" component={PackagePage} />
            <Route component={NotFoundPage} />
          </Switch>
        </NotFooter>
        <Footer />
      </Page>
    </AppBusProvider>
  </ApolloProvider>
);

export default withRouter(App);
