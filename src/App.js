import React from 'react';
import times from 'ramda/src/times'

import SubjectMatrix from './components/SubjectMatrix';

const App = () =>
  <div className="App">
    <SubjectMatrix subjects={times(() => ({}), 400)} />
  </div>;

export default App;
