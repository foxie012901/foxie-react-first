import React from 'react'
// 导入路由
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect
} from 'react-router-dom'
// 导入组件
import Home from './components/Home'
import Login from './components/Login'

class App extends React.Component {
    render() {
        return (

            <Router>
                <Switch>
                    <Route exact path='/' component={Login} />
                    <Route path='/home' component={Home} />
                    <Route path='/login' component={Login} />
                    <Redirect from='/' to='/' />
                </Switch>
            </Router>
        )
    }
}

export default App;