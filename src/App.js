import React, { useEffect, useContext } from 'react';
import { routes } from './Routes/routes';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { AuthContext, FirebaseContext } from './store/firebaseContext';
import Post from './store/postContext';

/**
 * ?  =====Import Components=====
 */

function App() {
  const { user, setUser } = useContext(AuthContext);
  const { firebase } = useContext(FirebaseContext)

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setUser(user)
    })
  }, [])

  return (
    <>
      <Post>
        <Router>
          {routes.map(route => (
            <Route key={route.path} exact path={route.path}>
              <route.element />
            </Route>
          ))}
        </Router>
      </Post>
    </>
  );
}

export default App;