import React from 'react'
import { render } from 'react-dom'
import {
  browserHistory,
  IndexRoute,
  Link,
  Router,
  Route,
} from 'react-router'

const BasicExample = (props) => (
  <div>
    <h1>This is version 3 of React Router</h1>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/topics">Topics</Link></li>
    </ul>
    <hr/>
    {props.children}
  </div>
);

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
);

const About = () => (
  <div>
    <h2>About</h2>
    <p>This is version3 of React Router.</p>
  </div>
);

const Topics = (props) => (
  <div>
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to="/topics/item1">Item 1</Link>
      </li>
      <li>
        <Link to="/topics/item2">Item 2</Link>
      </li>
      <li>
        <Link to="/topics/item3">Item 3</Link>
      </li>
    </ul>
    {props.children}
  </div>
);

const Topic = (props) => (
  <div>
    <h3>{props.params.item}</h3>
  </div>
);

const DefaultText = () => (
  <div>
    <h3>Please chose an Item.</h3>
  </div>
);

export const mountVersion3 = () => (
  <Router history={browserHistory}>
    <Route path="/" component={BasicExample}>
      <IndexRoute component={Home}/>
      <Route path="about" component={About}/>
      <Route path="topics" component={Topics}>
        <IndexRoute component={DefaultText}/>
        <Route path=":item" component={Topic}/>
      </Route>
    </Route>
  </Router>
);