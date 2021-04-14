import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Landing from './pages/Landing';
import InstitutionsMap from './pages/InstitutionsMap';
import Institution from './pages/Institution';
import CreateInstitution from './pages/CreateInstitution';

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                {/* Here we put every single page of the application, the React Router Dom always compares the paths, so we need to put an exact ou the '/' because will make comparison of equality */}
                {/* Only one page will be loaded at time when we use Switch */}
                <Route path = "/" exact component = {Landing} />
                <Route path="/app" component = {InstitutionsMap} />

                <Route path="/institutions/create" component={CreateInstitution} />
                <Route path="/institutions/:id" component={Institution} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;