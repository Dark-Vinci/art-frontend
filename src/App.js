import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { useEffect } from 'react';

import './App.css';
import DrawingPage from './containers/drawingPage';
import Print from './containers/print';
import Register from './containers/register';
import Login from './containers/login';
import Home from './containers/home';
import UserPage from './containers/theUser';
import ArtDisplay from './containers/displayArts';
import { autoLogin } from './store/action/auth';

function App({ autoLogin, loggedIn }) {
  useEffect(() => {
    autoLogin();
  }, [autoLogin]);

  console.log(loggedIn);
  return (
    <div className="App">
      <Switch>
        <Route path='/mine' exact>
          <DrawingPage />
        </Route>

        <Route path='/print' exact>
          <Print />
        </Route>

        <Route path='/register' exact>
          <Register />
        </Route>

        <Route path='/login' exact>
          <Login />
        </Route>

        <Route path='/' exact>
          <Home />
        </Route>

        { loggedIn && <Route path='/user' exact>
          <UserPage />
        </Route> }

        { loggedIn && <Route 
          path='/my-art/:id' 
          component={ ArtDisplay }
          exact
        /> }

        {/* <Redirect to='/mine' /> */}
      </Switch>
    </div>
  );
}  

const mapStateToProps = (state) => {
  return {
    loggedIn: state.auth.token !== ''
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    autoLogin: () => dispatch(autoLogin())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
