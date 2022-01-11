import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';

const App = function() {
  return (
      <div>
          <SeasonDisplay></SeasonDisplay>
      </div>
  );
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);
