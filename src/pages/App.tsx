import ErrorFallback from "./@helpers/ErrorFallback";
import AppWrapper from "./AppWrapper";
import Header from "components/@ui/Header";
import NotFound from "components/@ui/NotFound";
import Footer from "components/Footer";
import { Suspense, lazy } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { Route, Switch } from "react-router-dom";
import Loading from "theme/Loading";
import { Box } from "theme/base";
import ROUTES from "utils/config/routes";

const HomePage = lazy(() => import("./Home"));

function App() {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <AppWrapper>
        <Header />
        <Suspense
          fallback={
            <Box p={4}>
              <Loading />
            </Box>
          }
        >
          <Switch>
            <Route path={ROUTES.HOME.path} exact component={HomePage}></Route>
            <Route path="*" component={NotFound}></Route>
          </Switch>
        </Suspense>
        <Footer />
      </AppWrapper>
    </ErrorBoundary>
  );
}

export default App;
