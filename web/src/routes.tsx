import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Landing from './pages/Landing';
import InstitutionsMap from './pages/InstitutionsMap';

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path = "/" exact component = {Landing} />
                <Route path="/app" component = {InstitutionsMap} />
                
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;