import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { PageContainer } from './containers';
import { HomePage } from './pages/home.page';

function App() {
	return (
		<PageContainer>
			<Router>
				<Switch>
					<Route exact path="/" component={HomePage} />
				</Switch>
			</Router>
		</PageContainer>
	);
}

export default App;
