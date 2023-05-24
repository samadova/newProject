import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import RoomsTablePage from './RoomsTablePage';
import SingleRoomPage from './SingleRoomPage';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={RoomsTablePage} />
        <Route path="/rooms/:roomId" component={SingleRoomPage} />
      </Switch>
    </Router>
  );
};

export default App;

