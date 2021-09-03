import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { PageContainer } from './containers';
import { CreatePage, HomePage, ViewPage } from './pages';

function App() {
	return (
		<PageContainer>
			<Router>
				<Switch>
					<Route exact path="/contacts/create" component={CreatePage} />
					<Route exact path="/contacts/:id" component={ViewPage} />
					<Route path="/" component={HomePage} />
				</Switch>
			</Router>
		</PageContainer>
	);
}

export default App;
