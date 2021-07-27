import UserList from './components/UserList';
import {users} from './components/userData';
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
        <Switch>
            <Route exect path='/'>
            <div>
                <UserList list={userlist} deleteCallback={deleteUser}/>
            </div>
            </Route>

            <Route path='/edit/'>
                Edit Form
            </Route>

            <Route path='*'>
                404 not found
            </Route>

        </Switch>
    </Router>
  );
}

export default App;
