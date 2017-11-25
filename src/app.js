import React from 'react';
import ReactDOM from 'react-dom';

import injectTapEventPlugin from 'react-tap-event-plugin';
// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

import Titlebar from './components/Titlebar'
import ServerList from './components/ServerList'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import Velocity from './scripts/velocity.min'

class App extends React.Component {
  render () {
    return (
        <MuiThemeProvider>
          <div className="rootFrame noselect">
             <Titlebar />
             <ServerList />
          </div>
        </MuiThemeProvider>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('app'))
