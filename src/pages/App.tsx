import ErrorFallback from "./@helpers/ErrorFallback";
import AppWrapper from "./AppWrapper";
import HomePage from "./Home";
import Header from "components/@ui/Header";
import NotFound from "components/@ui/NotFound";
import Footer from "components/Footer";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { Route, Switch } from "react-router-dom";
import Loading from "theme/Loading";
import { Box } from "theme/base";
import ROUTES from "utils/config/routes";

function App() {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <AppWrapper>
        <Suspense
          fallback={
            <Box p={4}>
              <Loading />
            </Box>
          }
        >
          <Header />
          <Switch>
            <Route path={ROUTES.HOME.path} exact component={HomePage} />
            <Route path="*" component={NotFound} />
          </Switch>
        </Suspense>
        <Footer />
      </AppWrapper>
    </ErrorBoundary>
  );
}

export default App;
