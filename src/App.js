import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import NotFound from "./componentes/NotFound/NotFound";
import TeamDetails from "./componentes/TeamDetails/TeamDetails";
import Teams from "./componentes/Teams/Teams";
import TopBanner from "./componentes/TopBanner/TopBanner";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path='/'>
            <TopBanner />
            <Teams />
          </Route>
          <Route exact path='/teams'>
            <TopBanner />
            <Teams />
          </Route>
          <Route path='/team/:idTeam'>
            <TeamDetails />
          </Route>
          <Route path='*'>
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
