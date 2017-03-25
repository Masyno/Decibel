import React from 'react'
import ReactDOM from 'react-dom'
import Titlebar from './components/Titlebar'
import Velocity from './velocity.min'

class App extends React.Component {
  render () {
    return (
        <div>
             <Titlebar />
        </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('app'))
