import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import Home from "./componentes/Home/Home";
import NotFound from "./componentes/NotFound/NotFound";
import TeamDetails from "./componentes/TeamDetails/TeamDetails";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/home'>
            <Home />
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
