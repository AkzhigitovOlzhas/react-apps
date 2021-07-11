import "./header.css";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Game from "./Apps/TicTacToe/Game";
import Calculator from "./Apps/Calculator/Calculator";
import Clock from "./Apps/Clock";
import PassValidator from "./Apps/PassValidator/PasswordValidator";
function App(props) {
  return (
    <BrowserRouter>
      <div className="header">
        <div className="header__links">
          <Link className="header__link" to="/">
            Tic Tac Toe
          </Link>
          <Link className="header__link" to="/water-calc">
            Boil water calculator
          </Link>
          <Link className="header__link" to="/clock">
            Clock
          </Link>
          <Link className="header__link" to="/password-validator">
            Password validator
          </Link>
        </div>
      </div>
      <div className="center">
        <Switch>
          <Route exact path="/" component={Game} />
          <Route path="/water-calc" component={Calculator} />
          <Route path="/clock" component={Clock} />
          <Route path="/password-validator" component={PassValidator} />
          <Route>
            <h1>Page not found(</h1>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
