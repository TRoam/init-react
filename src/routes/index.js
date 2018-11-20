import React, { Component } from 'react';
import localeText from '@enos/dpl/lib/locale/localeUtils';

class App extends Component {
  render() {
    return <div>{localeText('APP.TITLE')}</div>;
  }
}

export default App;
