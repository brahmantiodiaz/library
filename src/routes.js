import React from'react';
import { Route, Switch, Redirect } from'react-router-dom';
import AddBook from './components/AddBook';
import ListBooks from './components/ListBooks';

const Routes = () => (
<Switch>
    <Route path="/home" component={ListBooks}/>
    <Route path="/tambah" component={AddBook}/>
    <Redirect from='/' to='/home' />    
</Switch>
);
 
export default Routes;

