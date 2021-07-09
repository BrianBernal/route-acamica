/**
 * Dependencies
 */
import React from "react";
import { Route, Switch } from "react-router-dom";

/**
 * Components
 */
import Home from "./home/Home";
import Courses from "./courses/Courses";
import Events from "./events/Events";
import NotFound from "../components/notFound/NotFound";

/**
 * Others
 */
import { cursos, URLS } from "../utils/constants";

function Pages() {
  return (
    <main className="main">
      <Switch>
        <Route path={URLS.base} exact component={Home} />
        <Route exact path={URLS.courses} component={Courses} />
        <Route exact path={URLS.events} component={Events} />
        {cursos.map(({ id, name, className }) => (
          <Route
            exact
            key={id}
            path={`${URLS.courses}/${className}`}
            component={() => <h1>{name}</h1>}
          />
        ))}
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </main>
  );
}

export default Pages;
