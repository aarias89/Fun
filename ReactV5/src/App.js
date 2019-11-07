import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Pet from './components/Pet';

const App = () => {
  return (
    <div>
      <h1>Adopt Me</h1>
      <Pet name='Artemis' animal='dog' breed='maltese' />;
    </div>
  );
};

ReactDOM.render(React.createElement(App), document.getElementById('root'));
