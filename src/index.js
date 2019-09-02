import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import DevTools from 'mobx-react-devtools';

import { Provider } from 'mobx-react';
import stores from './stores';

import Form from './components/Form/Form';

import './index.css';

class App extends Component {

  render() {
    return (
      <Provider {...stores}>
        <>
          <DevTools />
          <Form />
        </>
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();