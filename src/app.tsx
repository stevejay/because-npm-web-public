import "normalize.css";
import * as React from "react";
import { ApolloProvider } from "react-apollo";
import { Route, Switch } from "react-router";
import { withRouter } from "react-router-dom";
import { Page, PageMain } from "./shared/page";
import ScrollResetListener from "./shared/scroll/scroll-reset-listener";
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
    <Page>
      <PageMain>
        <ScrollResetListener />
        <Header />
        <SearchBar />
        <Switch>
          <Route exact={true} path="/terms" component={TermsPage} />
          <Route exact={true} path="/privacy" component={PrivacyPage} />
          <Route exact={true} path="/search" component={SearchPage} />
          <Route exact={true} path="/credits" component={CreditsPage} />
          <Route exact={true} path="/" component={HomePage} />
          <Route path="/package/(.*)" component={PackagePage} />
          <Route component={NotFoundPage} />
        </Switch>
      </PageMain>
      <Footer />
    </Page>
  </ApolloProvider>
);

export default withRouter(App);
