import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import UsersList from './UsersList'
import UserShow from './UserShow'
import { BrowserRouter, Route, Link } from 'react-router-dom'

function App() {
  return (
    <div >
      <BrowserRouter>      
           <Route path="/" component={UsersList} exact={true} />             
           <Route path="/1" component={UserShow} exact={true} />
      </BrowserRouter> 
    </div>
  );
}

export default App;
