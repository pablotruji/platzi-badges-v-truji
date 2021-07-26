import React from 'react';
import { BrowserRouter,Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Layout from './Layout';
import Badges from '../pages/Badges';
import BadgeNew from '../pages/BadgeNew'; 
import BadgeEdit from '../pages/BadgeEdit';
import BadgeDetailsContainer from '../pages/BadgeDetailsContainer'
import NotFound from '../pages/NotFound';

function App() {

    return (
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path="platzi-badges-v-truji/" component={Home} />
                    <Route exact path="platzi-badges-v-truji/badges" component={Badges} />
                    <Route exact path="platzi-badges-v-truji/badges/new" component={BadgeNew} />
                    <Route exact path="platzi-badges-v-truji/badges/:badgeId" component={BadgeDetailsContainer} />
                    <Route exact path="platzi-badges-v-truji/badges/:badgeId/edit" component={BadgeEdit} />
                    <Route component={NotFound} />
                </Switch>
            </Layout>
        </BrowserRouter>
    );

}

export default App; 