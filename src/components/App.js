import React, { Component } from 'react';
import QuestionsIndexPage from './pages/QuestionsIndexPage'
import QuestionsShowPage from './pages/QuestionsShowPage'
import QuestionsNewPage from './pages/QuestionsNewPage'

import {
  BrowserRouter as Router, //when importing, use `as` to alias an imported name to something else
  Route,
  Link,
  Switch

} from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <Router >
      <div className="App">

        <nav>
        <Link to='/'> Home </Link>
        <Link to='/questions'> Questions </Link>
        <Link to='questions/new'>New Questions </Link>
       </nav>

        <h1> Awesome Answers </h1>
        <Switch>
        <Route exact path='/' component={QuestionsIndexPage} />
        <Route exact path='/questions' component={QuestionsIndexPage} />
        <Route exact path='/questions/new' component={QuestionsNewPage} />
        <Route exact path='/questions/:id' component={QuestionsShowPage}/>

       </Switch>
      </div>
    </Router>
    );
  }
}

export default App;
