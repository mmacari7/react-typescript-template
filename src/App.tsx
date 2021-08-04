import React from "react"
import { Redirect, Route, BrowserRouter as Router, Switch } from "react-router-dom"
import "./App.scss"
import Login from "./modules/components/login/Login"
import Overview from "./modules/components/overview/Overview"

const App = (): JSX.Element => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" render={() => <Redirect to="/login" />} />
                <Route path="/login" component={Login} />
                <Route path="/overview" exact={true} component={Overview} />
            </Switch>
        </Router>
    )
}

export default App
