import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Routes
import { routes } from './routes';

// Components
import { PageContainer } from './containers';
import {
	CreatePage, ContactList, EditPage, Home,
} from './pages';
import { ProtectedRoute } from './components/protected-route.componen';

function App() {
	return (
		<PageContainer>
			<Router>
				<Switch>
					<ProtectedRoute exact path={routes.create} Component={CreatePage} />
					<ProtectedRoute exact path={routes.edit} Component={EditPage} />
					<ProtectedRoute exact path={routes.contactList} Component={ContactList} />
					<Route path={routes.home} render={() => <Home />} />
				</Switch>
			</Router>
		</PageContainer>
	);
}

export default App;
