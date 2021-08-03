import UserList from './components/UserList';
import {users} from './components/userData';
import Registration from './components/Registration';
import Login from './components/Login';
import NavBar from './components/NavBar';
import {useState} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';


function App() {

  const [userlist, setUserList] = useState(users);

  const deleteUser = (id)=>{
    const list = userlist.filter((user)=>user.id !== id);
    setUserList(list);

  }

  return (
    <Router>
      <div>
      <NavBar />
      </div>
        <Switch>
            <Route exact path='/'>
            <h1>Welcome to the Online Shop Management System!!!</h1>
            </Route>
            <Route path='/registration' ><Registration /></Route>
            <Route path='/login' ><Login /></Route>
            

            <Route path='*'>
                404 not found
            </Route>

        </Switch>
    </Router>
  );
}

export default App;
