import React, { Component } from 'react';
import logo from './logo.svg';
import Nav from './components/Nav';
import Home from './views/Home';
import ProtectedRoute from './components/ProtectedRoute';
import SignUp from './views/Authentication/SignUp';
import SignIn from './views/Authentication/SignIn';

import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { loadUserInformation } from './services/authentication';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      loaded: false,
      user: null,
    };
    this.updateUserInformation = this.updateUserInformation.bind(this);
  }

  componentDidMount() {
    // loadUserInformation()
    //   .then((user) => {
    //     this.updateUserInformation(user);
    //     this.setState({
    //       loaded: true,
    //     });
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  }

  updateUserInformation(user) {
    // this.setState({
    //   user,
    // });
  }

  render() {
    return (
      <div className="App">
        {this.state.loaded && (
          <BrowserRouter>
            <Nav user={this.state.user} updateUserInformation={this.updateUserInformation} />
            <Switch>
              <Route path="/" exact component={Home} />
              <ProtectedRoute
                path="/signup"
                // authorized={!this.state.user}
                authorized={true}
                redirect={'/'}
                render={(props) => (
                  <SignUp {...props} updateUserInformation={this.updateUserInformation} />
                )}
              />
              <ProtectedRoute
                path="/signin"
                // authorized={!this.state.user}
                authorized={true}
                redirect={'/'}
                render={(props) => (
                  <SignIn {...props} updateUserInformation={this.updateUserInformation} />
                )}
              />
            </Switch>
          </BrowserRouter>
        )}
      </div>
    );
  }
}

export default App;
