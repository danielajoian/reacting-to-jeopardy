import React from 'react';
import Container from "@material-ui/core/Container";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import HomePage from './components/HomePage';
import Header from "./components/layout/Header";
import About from "./components/About";
import QuizPage from './components/quiz/QuizPage';

function App() {
  return (
      <Router>
        <Container>
          <Header />
		  <Switch>
			<Route exact path="/about" component={ About } />
			<Route exact path="/" component={ HomePage } />
			<Route exact path="/quiz" component={ QuizPage } />
		  </Switch>
        </Container>
      </Router>
  );
}

export default App;
