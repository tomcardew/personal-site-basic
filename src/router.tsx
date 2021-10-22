import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from 'react-router-dom'

import LandingView from './views/landing/landing'

const Collections = () => <div>Holis</div>

const RouterComponent = () => {
    return <Router>
        <Switch>
            <Route path="/" exact component={LandingView} />
            <Route path="/collections" exact component={Collections} />
            <Redirect from="*" to="/" />
        </Switch>
    </Router>    
}

export default RouterComponent