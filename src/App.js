import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';

import { Navbar} from 'react-bootstrap';

import Homepage from './pages/homepage/homepage.component';
import TaskPage from './pages/TaskPage/taskPage.component';

import './App.styles.scss';

function App() {
  return (
    <div className="App">
       <Navbar sticky='top' expand='lg' variant='light' bg='light'>
          <Navbar.Brand><Link to="/">Home</Link></Navbar.Brand>
      </Navbar>
      <Switch>
        <Route path="/tasks/:id" component={TaskPage} />
        <Homepage />
      </Switch>
    </div>
  );
}

export default App;
