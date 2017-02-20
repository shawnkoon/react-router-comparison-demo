import React from 'react';
import {
	BrowserRouter as Router,
	Route,
	Link,
} from 'react-router-dom';

export const mountVersion4 = () => (
	<Router>
		<div>
			<h1>This is version 4 of React Router (Declarative Routing)</h1>
			<ul>
				<li><Link to="/">Home</Link></li>
				<li><Link to="/about">about</Link></li>
				<li><Link to="/topics">Topics</Link></li>
			</ul>
			<hr/>
			<Route exact path="/" component={Home}/>
			<Route path="/about" component={About}/>
			<Route path="/topics" component={Topics}/>
		</div>
	</Router>
);

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
);

const About = () => (
  <div>
    <h2>About</h2>
    <p>This is version 4 of React Router (Declarative Routing).</p>
  </div>
);

// match is a special object that knows about url.
// src : https://reacttraining.com/react-router/#match
const Topics = ({ match }) => (
	<div>
		<h2>Topics</h2>
		<ul>
			<li><Link to={`${match.url}/item1`}>Item 1</Link></li>
			<li><Link to={`${match.url}/item2`}>Item 2</Link></li>
			<li><Link to={`${match.url}/item3`}>Item 3</Link></li>
		</ul>
		<Route exact path={match.url} render={() => (
			<h3>Please chose an Item.</h3>
		)}/>
		<Route path={`${match.url}/:item`} component={Topic}/>
	</div>
);

const Topic = ({ match }) => (
	<div>
		<h3>{match.params.item}</h3>
	</div>
);